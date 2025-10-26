<script lang="ts">
  interface Props {
    systemName: string;
    systemInfo: Record<string, string>;
    logo?: string;
    alt?: string;
    links?: {
      label: string;
      url: string;
    }[];
  }

  import Logo from '$lib/components/neofetch/logo.svelte';
  import SystemInfo from '$lib/components/neofetch/system-info.svelte';

  let { systemName, systemInfo, logo = '', alt = 'Logo', links = [] }: Props = $props();
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
    {links}
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
      overflow-y: auto;
      overflow-x: auto;
      max-height: 100vh;
    }
  }
</style>
