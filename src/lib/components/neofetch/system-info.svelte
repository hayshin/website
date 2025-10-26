<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    systemName: string;
    systemInfo: Record<string, string | Snippet>;
  }

  const { systemName, systemInfo }: Props = $props();
</script>

<div class="system-info-container">
  <h1 class="system-name">{systemName}</h1>
  <p>-------------</p>
  <dl class="system-info">
    {#each Object.entries(systemInfo) as [term, description] (term)}
      <div class="item">
        <dt>{term}:&nbsp;</dt>
        <dd>
          {#if typeof description === 'function'}
            {@render description()}
          {:else}
            {description}
          {/if}
        </dd>
      </div>
    {/each}
  </dl>
</div>

<style>
  .system-name {
    color: var(--gb-blue);
  }

  .system-info dt {
    margin: 0;
    display: inline-block;
    font-family: var(--font-family);
    font-size: var(--font-size);
    line-height: var(--line-height);
    font-weight: var(--font-weight-bold);
    color: var(--gb-green);
  }

  .system-info .item {
    display: flex;
  }

  .system-info dt {
    font-weight: bold;
  }

  .system-info dd {
    margin: 0;
  }

  .system-info dd :global(a) {
    color: var(--gb-blue);
  }

  @media (max-width: 768px) {
    .system-info .item {
      flex-wrap: wrap;
    }
  }
</style>
