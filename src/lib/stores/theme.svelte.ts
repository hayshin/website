import { persisted } from 'svelte-persisted-store';
import { browser } from '$app/environment';
import { derived } from 'svelte/store';

// Theme families and their display names
export const THEME_FAMILIES = {
  gruvbox: 'Gruvbox',
  everforest: 'Everforest',
  vitesse: 'Vitesse',
  nord: 'Nord',
  catppuccin: 'Catppuccin',
} as const;

export type ThemeFamily = keyof typeof THEME_FAMILIES;

export type ThemeMode = 'dark' | 'light';

export interface ThemeConfig {
  family: ThemeFamily;
  mode: ThemeMode;
}

// Configuration for which themes support dark/light modes
const THEME_SUPPORTS_MODES: Record<ThemeFamily, boolean> = {
  gruvbox: true,
  everforest: true,
  vitesse: true,
  nord: false, // Nord only has one variant
  catppuccin: true, // Mocha (dark) / Latte (light)
};

const DEFAULT_THEME: ThemeConfig = {
  family: 'gruvbox',
  mode: 'dark',
};

// Build the full theme string
function buildThemeString(config: ThemeConfig): string {
  // Nord doesn't support dark/light variants
  if (config.family === 'nord') {
    return 'nord';
  }

  // Catppuccin uses flavor names: mocha (dark) / latte (light)
  if (config.family === 'catppuccin') {
    const flavor = config.mode === 'dark' ? 'mocha' : 'latte';
    return `catppuccin-${flavor}`;
  }

  // Vitesse uses "soft" variant, others use "medium"
  const variant = config.family === 'vitesse' ? 'soft' : 'medium';
  return `${config.family}-${config.mode}-${variant}`;
}

// Create persisted store with tab syncing
export const themeConfig = persisted<ThemeConfig>('webtui-theme-config', DEFAULT_THEME, {
  syncTabs: true,
});

// Derived store for the full theme string
export const themeString = derived(themeConfig, $config => buildThemeString($config));

// Apply theme to DOM whenever it changes
themeString.subscribe(value => {
  if (!browser) return;

  document.documentElement.setAttribute('data-webtui-theme', value);

  // Update theme-color meta tag based on theme mode
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    const isDark = value.includes('dark') || value === 'nord';
    themeColorMeta.setAttribute('content', isDark ? '#282828' : '#fbf1c7');
  }
});

// Toggle between dark and light mode
export function toggleMode() {
  themeConfig.update(config => ({
    ...config,
    mode: config.mode === 'dark' ? 'light' : 'dark',
  }));
}

// Cycle through theme families
export function cycleFamily() {
  themeConfig.update(config => {
    const families = Object.keys(THEME_FAMILIES) as ThemeFamily[];
    const currentIndex = families.indexOf(config.family);
    const nextIndex = (currentIndex + 1) % families.length;
    return {
      ...config,
      family: families[nextIndex],
    };
  });
}

// Derived stores for convenience
export const isDarkMode = derived(themeConfig, $config => $config.mode === 'dark');
export const isLightMode = derived(themeConfig, $config => $config.mode === 'light');
export const currentFamily = derived(themeConfig, $config => $config.family);
export const currentFamilyName = derived(themeConfig, $config => THEME_FAMILIES[$config.family]);

// Derived store to check if current theme supports mode switching
export const supportsMode = derived(themeConfig, $config => THEME_SUPPORTS_MODES[$config.family]);
