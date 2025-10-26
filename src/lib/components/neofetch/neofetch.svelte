<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    systemName?: string;
    systemInfo?: Record<string, string | Snippet>;
    logo?: string;
    alt?: string;
  }

  import Logo from '$lib/components/neofetch/logo.svelte';
  import SystemInfo from '$lib/components/neofetch/system-info.svelte';

  let {
    systemName = 'hayshin@bj',
    systemInfo = {
      'OS': 'Asian 25.11 (Kazakh) x86_64',
      'Host': 'Dauren Baimurza',
      'Kernel': 'Homo Erectus v1.3.37',
      'Uptime': '20 years, 2 months',
      'Shell': 'Yellow with redness',
      'Theme': 'Minimalism & optimism',
      'Role': 'Software Engineer',
      'Languages': 'TypeScript, Python, Java, Rust',
      'Packages': '26 (in-house), 15 (deprecated)',
      'Memory': "2.5 / 13 (friends' birthdays)",
      'CPU': '2-Core@89 IQ',
      'GPU': 'Right Eye -3.5D; Left Eye -2.75D',
      'Disk (/)': '51.44 KiG / 76 KiG (39.8%)',
      'Location': 'Almaty, Kazakhstan (UTC+5)',
      'Local IP': '77.05.239.54/32',
      'Locale': 'ru_RU, en_GB, kk_KZ (UTF-8)',
      'Email': email,
      'Links': links,
    },
    logo = `
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
`,
    alt = 'Logo of left bit shift operator <<',
  }: Props = $props();
</script>

{#snippet links()}
  <a href="https://github.com/hayshin">GitHub</a>
  <a href="https://linkedin.com/in/hayshin">LinkedIn</a>
  <a href="https://t.me/hayshinbj">Telegram</a>
{/snippet}

{#snippet email()}
  <a href="mailto:hello@hayshin.dev">hello@hayshin.dev</a>
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
