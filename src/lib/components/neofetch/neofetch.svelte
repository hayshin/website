<script lang="ts">
  interface Props {
    systemName: string;
    systemInfo: Record<string, string>;
    logo?: string;
    alt?: string;
    horizontalPadding?: number; // additional padding between logo and system info
  }

  import Logo from '$lib/components/neofetch/logo.svelte';
  import SystemInfo from '$lib/components/neofetch/system-info.svelte';
  import {
    calculateSystemInfoHeight,
    calculateLogoHeight,
    calculateLogoVerticalPadding,
    calculateSystemInfoWidth,
    calculateLogoWidth,
    calculateLogoHorizontalPadding,
    expandLogoHorizontally,
    expandLogoVertically,
  } from '$lib/components/neofetch/utils';

  let { systemName, systemInfo, logo = '', alt = 'Logo', horizontalPadding = 5 }: Props = $props();

  const systemInfoHeight = calculateSystemInfoHeight(systemInfo);
  const logoHeight = calculateLogoHeight(logo);
  const logoVerticalPadding = calculateLogoVerticalPadding(logoHeight, systemInfoHeight);
  const systemInfoWidth = calculateSystemInfoWidth(systemInfo);
  const logoWidth = calculateLogoWidth(logo);
  const logoHorizontalPadding =
    calculateLogoHorizontalPadding(logoWidth, systemInfoWidth) + horizontalPadding;

  logo = expandLogoHorizontally(logo, logoHorizontalPadding);
  logo = expandLogoVertically(logo, logoVerticalPadding);
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
    flex-wrap: wrap;
    align-items: flex-start;
  }

  /* On smaller screens, stack vertically */
  @media (max-width: 768px) {
    .neofetch-container {
      flex-direction: column;
    }
  }

  /* When content doesn't fit horizontally, wrap to new line */
  @media (max-width: 1200px) {
    .neofetch-container {
      flex-wrap: wrap;
    }
  }
</style>
