<script lang="ts">
  import { browser } from '$app/environment';
  import favicon from '$lib/assets/favicon.svg';
  import { themeStore } from '$lib/stores/theme.svelte';
  import '../app.css';

  let { children } = $props();

  $effect(() => {
    if (!browser) return;

    const root = getComputedStyle(document.documentElement);
    const getCSSVar = (name: string, fallback = '') =>
      root.getPropertyValue(name).trim() || fallback;

    const base = `background: ${getComputedStyle(document.body).backgroundColor || getCSSVar('--gb-bg', '#282828')}; color: ${getCSSVar('--gb-fg', '#ebdbb2')}; font: 14px/${getCSSVar('--line-height', '1.5')} ${getCSSVar('--font-family', 'monospace')}; padding: 8px; display: block`;

    console.log(
      `%cHi!\n%cYou can check source code at:\n%chttps://github.com/hayshin/website`,
      `${base}; font-weight: bold`,
      base,
      `${base}; color: ${getCSSVar('--gb-blue', '#83a598')}; text-decoration: underline`,
    );
  });
</script>

<svelte:head>
  <link
    rel="icon"
    href={favicon}
  />
</svelte:head>

{@render children?.()}
