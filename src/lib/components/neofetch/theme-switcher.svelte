<script lang="ts">
  import {
    themeConfig,
    currentFamilyName,
    isLightMode,
    toggleMode,
    cycleFamily,
  } from '$lib/stores/theme.svelte';

  function handleToggle() {
    toggleMode();
  }

  function handleFamilyClick(e: MouseEvent | KeyboardEvent) {
    e.preventDefault();
    cycleFamily();
  }
</script>

<label class="theme-switch">
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->

  <span id="moon"></span>
  <input
    type="checkbox"
    {...{ 'is-': 'switch' }}
    checked={$isLightMode}
    onchange={handleToggle}
  />
  <span id="sun">&nbsp;</span>

  <span
    class="theme-label"
    role="button"
    tabindex="0"
    onclick={handleFamilyClick}
    onkeydown={e => e.key === 'Enter' && handleFamilyClick(e)}
  >
    {$currentFamilyName}
  </span>
</label>

<style>
  .theme-switch {
    gap: 0ch;
    outline: none;
    text-decoration: none;
    font-weight: normal;
  }

  .theme-label {
    text-decoration: underline;
    min-width: 10ch;
  }

  input[type='checkbox'][is-='switch'] {
    font-size: calc(var(--font-size) - 4px);
    align-self: center;
    outline: none;
  }

  input[type='checkbox'][is-='switch']:focus {
    outline: none;
  }

  #sun::before {
    content: '\f05a8';
  }

  #moon::after {
    content: '\e3a5';
  }
</style>
