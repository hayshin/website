<script lang="ts">
  import { theme, DARK_THEME, LIGHT_THEME, toggleTheme } from '$lib/stores/theme.svelte';

  // Computed: is the current theme light?
  $: isLight = $theme === LIGHT_THEME;

  function handleToggle() {
    toggleTheme();
  }
</script>

<label class="theme-switch">
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <span class="theme-label">
    {isLight ? 'Light' : 'Dark'}
  </span>
  <input
    type="checkbox"
    {...{ 'is-': 'switch' }}
    checked={isLight}
    onchange={handleToggle}
  />
</label>

<style>
  input[type='checkbox'][is-='switch'] {
    /* ... */
    font-size: calc(var(--font-size) - 4px);
    align-self: center;
  }
</style>
