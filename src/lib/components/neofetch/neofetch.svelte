<script lang="ts">
  import * as m from '$lib/paraglide/messages';

  import Logo from '$lib/components/neofetch/logo.svelte';
  import SystemInfo from '$lib/components/neofetch/system-info.svelte';
  import Uptime from '$lib/components/neofetch/uptime.svelte';
  import LanguageSwitcher from '$lib/components/neofetch/language-switcher.svelte';
  import ThemeSwitcher from '$lib/components/neofetch/theme-switcher.svelte';

  const systemName = m.common_system_name();
  const logo = `
            █████           █████
          ██████          ██████
        ██████          ██████
      ██████          ██████
    ██████          ██████
  ██████          ██████
██████          ██████
██████          ██████
  ██████          ██████
    ██████          ██████
      ██████          ██████
        ██████          ██████
          ██████          ██████
            █████           █████
`.replace(/^\n+|\n+$/g, ''); // Remove leading and trailing newlines
  const alt = m.neofetch_logo_alt();

  let systemInfo = {
    [m.neofetch_field_os()]: m.neofetch_value_os(),
    [m.neofetch_field_host()]: m.common_person_name(),
    [m.neofetch_field_kernel()]: m.neofetch_value_kernel(),
    [m.neofetch_field_uptime()]: uptimeSnippet,
    [m.neofetch_field_shell()]: m.neofetch_value_shell(),
    [m.neofetch_field_theme()]: themeSnippet,
    [m.neofetch_field_role()]: m.neofetch_value_role(),
    [m.neofetch_field_languages()]: m.neofetch_value_languages(),
    [m.neofetch_field_packages()]: m.neofetch_value_packages(),
    [m.neofetch_field_memory()]: m.neofetch_value_memory(),
    [m.neofetch_field_cpu()]: m.neofetch_value_cpu(),
    [m.neofetch_field_gpu()]: m.neofetch_value_gpu(),
    [m.neofetch_field_disk()]: m.neofetch_value_disk(),
    [m.neofetch_field_location()]: m.neofetch_value_location(),
    [m.neofetch_field_local_ip()]: m.neofetch_value_local_ip(),
    [m.neofetch_field_locale()]: localeSnippet,
    [m.neofetch_field_email()]: email,
    [m.neofetch_field_links()]: links,
  };
</script>

{#snippet links()}
  <a
    class="external-link"
    href="https://github.com/hayshin"
    target="_blank"
    rel="noopener noreferrer">Github</a
  >
  <a
    class="external-link"
    href="https://linkedin.com/in/hayshin"
    target="_blank"
    rel="noopener noreferrer">LinkedIn</a
  >
  <a
    class="external-link"
    href="https://t.me/hayshinbj"
    target="_blank"
    rel="noopener noreferrer">Telegram</a
  >
{/snippet}

{#snippet email()}
  <a
    class="email-link"
    href="mailto:{m.common_email()}">{m.common_email()}</a
  >
{/snippet}

{#snippet uptimeSnippet()}
  <Uptime />
{/snippet}

{#snippet localeSnippet()}
  <LanguageSwitcher />
{/snippet}

{#snippet themeSnippet()}
  <ThemeSwitcher />
{/snippet}

<div class="neofetch-container">
  {#if logo}
    <Logo
      {logo}
      {alt}
    />
  {/if}
  <SystemInfo
    {systemName}
    {systemInfo}
  />
</div>

<style>
  .neofetch-container {
    display: flex;
    align-items: center;
    gap: 3ch;
    padding: 1ch;
  }

  /* On smaller screens, stack vertically */
  @media (max-width: 768px) {
    .neofetch-container {
      flex-direction: column;
      gap: 1ch;
      align-items: flex-start;
    }
  }
</style>
