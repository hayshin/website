import { persisted } from 'svelte-persisted-store';
import { browser } from '$app/environment';
import { derived } from 'svelte/store';

// Theme families and their display names
export const THEME_FAMILIES = {
  gruvbox: 'Gruvbox',
  everforest: 'Everforest',
} as const;

export type ThemeFamily = keyof typeof THEME_FAMILIES;

export type ThemeMode = 'dark' | 'light';

export interface ThemeConfig {
  family: ThemeFamily;
  mode: ThemeMode;
}

const DEFAULT_THEME: ThemeConfig = {
  family: 'gruvbox',
  mode: 'dark',
};

// Build the full theme string (e.g., "gruvbox-dark-medium")
function buildThemeString(config: ThemeConfig): string {
  return `${config.family}-${config.mode}-medium`;
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
    const isDark = value.includes('dark');
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
