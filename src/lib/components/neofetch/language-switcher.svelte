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
  <a
    class="locale-link"
    href="#"
    onclick={e => {
      e.preventDefault();
      switchLocale(locale);
    }}
    aria-label="Switch to {locale}"
  >
    {localeLabels[locale] || locale}
  </a>{#if locale !== locales[locales.length - 1]},&nbsp;{/if}
{/each}
