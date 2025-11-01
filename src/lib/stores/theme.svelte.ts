import { persisted } from 'svelte-persisted-store';
import { browser } from '$app/environment';
import { derived } from 'svelte/store';

// Available Gruvbox theme variants
export const DARK_THEME = 'gruvbox-dark-medium' as const;
export const LIGHT_THEME = 'gruvbox-light-medium' as const;

export const themes = [DARK_THEME, LIGHT_THEME] as const;

export type Theme = (typeof themes)[number];

const DEFAULT_THEME: Theme = DARK_THEME;

// Create persisted store with tab syncing - this is the main store
export const theme = persisted<Theme>('webtui-theme', DEFAULT_THEME, {
  syncTabs: true,
});

// Apply theme to DOM whenever it changes
theme.subscribe(value => {
  if (!browser) return;

  document.documentElement.setAttribute('data-webtui-theme', value);

  // Update theme-color meta tag based on theme
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    const isDark = value.includes('dark');
    themeColorMeta.setAttribute('content', isDark ? '#282828' : '#fbf1c7');
  }
});

// Utility function to toggle between dark and light
export function toggleTheme() {
  theme.update(current => (current === DARK_THEME ? LIGHT_THEME : DARK_THEME));
}

// Derived store to check if current theme is dark
export const isDarkTheme = derived(theme, $theme => $theme.includes('dark'));
