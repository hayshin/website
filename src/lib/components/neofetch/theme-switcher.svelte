<script lang="ts">
  import { themeStore, themes, type Theme } from '$lib/stores/theme.svelte';

  function handleThemeChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    themeStore.set(select.value as Theme);
  }

  // Format theme name for display (e.g., "gruvbox-dark-medium" -> "Dark Medium")
  function formatThemeName(theme: Theme): string {
    const parts = theme.split('-').slice(1); // Remove "gruvbox" prefix
    return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
  }
</script>

<select
  class="theme-select"
  value={themeStore.current}
  onchange={handleThemeChange}
>
  {#each themes as theme}
    <option value={theme}>
      {formatThemeName(theme)}
    </option>
  {/each}
</select>

<style>
  .theme-select {
    background: transparent;
    color: var(--gb-fg);
    border: 1px solid var(--gb-dark-gray);
    border-radius: 4px;
    padding: 0.25ch 0.5ch;
    font-family: var(--font-family);
    font-size: var(--font-size);
    cursor: pointer;
    outline: none;
    transition: border-color 0.2s ease;
  }

  .theme-select:hover {
    border-color: var(--gb-fg);
  }

  .theme-select:focus {
    border-color: var(--gb-blue);
  }

  .theme-select option {
    background: var(--gb-bg);
    color: var(--gb-fg);
  }
</style>
