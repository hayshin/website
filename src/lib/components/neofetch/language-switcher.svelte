<script lang="ts">
  import { getLocale, setLocale, locales } from '$lib/paraglide/runtime';

  const localeLabels: Record<string, string> = {
    en: 'en_EN',
    ru: 'ru_RU',
    kk: 'kk_KZ',
  };

  function switchLocale(newLocale: string) {
    setLocale(newLocale as (typeof locales)[number]);
  }
</script>

{#each locales as locale (locale)}
  <button
    class="locale-link"
    type="button"
    onclick={() => switchLocale(locale)}
    aria-label="Switch to {locale}"
  >
    {localeLabels[locale] || locale}
  </button>{#if locale !== locales[locales.length - 1]},&nbsp;{/if}
{/each}

<style>
  .locale-link {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    text-decoration: underline;
    font-weight: normal;
    cursor: pointer;
    height: 1lh;
  }

  .locale-link:hover {
    opacity: 0.8;
  }
</style>
