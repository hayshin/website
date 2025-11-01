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
  import { onMount } from 'svelte';

  // Birth time: 2005-07-23 11:00
  const birthTime = new Date('2005-07-23T11:00:00');

  // Static values calculated once
  let years = $state(0);
  let days = $state(0);

  // Dynamic seconds
  let seconds = $state(0);

  // Calculate years and days once on mount
  onMount(() => {
    const now = new Date();
    const diffMs = now.getTime() - birthTime.getTime();

    // Calculate years (approximate)
    const msPerYear = 365.25 * 24 * 60 * 60 * 1000;
    years = Math.floor(diffMs / msPerYear);

    // Calculate remaining time after years
    const remainingAfterYears = diffMs - years * msPerYear;

    // Calculate days from remaining time
    const msPerDay = 24 * 60 * 60 * 1000;
    days = Math.floor(remainingAfterYears / msPerDay);
  });

  // Update only seconds every second
  $effect(() => {
    const updateSeconds = () => {
      const now = new Date();
      const diffMs = now.getTime() - birthTime.getTime();

      // Calculate years and remaining for current second calculation
      const msPerYear = 365.25 * 24 * 60 * 60 * 1000;
      const currentYears = Math.floor(diffMs / msPerYear);
      const remainingAfterYears = diffMs - currentYears * msPerYear;

      // Calculate seconds within the current day
      const msPerDay = 24 * 60 * 60 * 1000;
      seconds = Math.floor((remainingAfterYears % msPerDay) / 1000);
    };

    updateSeconds();
    const interval = setInterval(updateSeconds, 1000);

    return () => clearInterval(interval);
  });

  let {
    systemName = 'hayshin@bj',
    systemInfo = {
      'OS': 'Asian 25.11 (Kazakh) x86_64',
      'Host': 'Dauren Baimurza',
      'Kernel': 'Homo Erectus v1.3.37',
      'Uptime': uptimeSnippet,
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
  logo = logo.replace(/^\n+|\n+$/g, ''); // Remove leading and trailing newlines
</script>

{#snippet links()}
  <a
    href="https://github.com/hayshin"
    target="_blank"
    rel="noopener noreferrer">GitHub</a
  >
  <a
    href="https://linkedin.com/in/hayshin"
    target="_blank"
    rel="noopener noreferrer">LinkedIn</a
  >
  <a
    href="https://t.me/hayshinbj"
    target="_blank"
    rel="noopener noreferrer">Telegram</a
  >
{/snippet}

{#snippet email()}
  <a href="mailto:hello@hayshin.dev">hello@hayshin.dev</a>
{/snippet}

{#snippet uptimeSnippet()}
  {years} years, {days} days, {seconds} secs
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
