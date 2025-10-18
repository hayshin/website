<script lang="ts">
  interface Props {
    systemName: string;
    systemInfo: Record<string, string>;
    logo?: string;
    alt?: string;
    // horizontalPadding?: number; // additional padding between logo and system info
  }

  import Logo from '$lib/components/neofetch/logo.svelte';
  import SystemInfo from '$lib/components/neofetch/system-info.svelte';

  let { systemName, systemInfo, logo = '', alt = 'Logo' }: Props = $props();
</script>

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
  }

  /* On smaller screens, stack vertically */
  @media (max-width: 768px) {
    .neofetch-container {
      flex-direction: column;
      gap: 1ch;
    }
  }
</style>
