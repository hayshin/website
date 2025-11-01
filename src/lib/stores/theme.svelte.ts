import { persisted } from 'svelte-persisted-store';
import { browser } from '$app/environment';
import { get } from 'svelte/store';

// Available Gruvbox theme variants
export const themes = [
  'gruvbox-dark-hard',
  'gruvbox-dark-medium',
  'gruvbox-dark-soft',
  'gruvbox-light-hard',
  'gruvbox-light-medium',
  'gruvbox-light-soft',
] as const;

export type Theme = (typeof themes)[number];

const DEFAULT_THEME: Theme = 'gruvbox-dark-medium';

// Create persisted store with tab syncing
const themePersistedStore = persisted<Theme>('webtui-theme', DEFAULT_THEME, {
  syncTabs: true,
});

// Apply theme to DOM
function applyTheme(theme: Theme) {
  if (!browser) return;

  document.documentElement.setAttribute('data-webtui-theme', theme);

  // Update theme-color meta tag based on theme
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    const isDark = theme.includes('dark');
    themeColorMeta.setAttribute('content', isDark ? '#282828' : '#fbf1c7');
  }
}

// Subscribe to theme changes and apply them
themePersistedStore.subscribe(applyTheme);

// Enhanced theme store with additional methods
class ThemeStore {
  get current(): Theme {
    return get(themePersistedStore);
  }

  set(theme: Theme) {
    themePersistedStore.set(theme);
  }

  update(fn: (theme: Theme) => Theme) {
    themePersistedStore.update(fn);
  }

  subscribe(fn: (theme: Theme) => void) {
    return themePersistedStore.subscribe(fn);
  }

  reset() {
    themePersistedStore.reset();
  }

  toggle() {
    this.update(current => {
      const currentIndex = themes.indexOf(current);
      const nextIndex = (currentIndex + 1) % themes.length;
      return themes[nextIndex];
    });
  }

  isDark(theme?: Theme): boolean {
    const currentTheme = theme ?? this.current;
    return currentTheme.includes('dark');
  }
}

export const themeStore = new ThemeStore();
