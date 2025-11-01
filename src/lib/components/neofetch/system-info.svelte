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
        <dt>{term}:</dt>
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

  .system-info .item {
    display: block;
    user-select: text;
  }

  .system-info dt {
    margin: 0;
    display: inline-block;
    font-family: var(--font-family);
    font-size: var(--font-size);
    line-height: var(--line-height);
    font-weight: var(--font-weight-bold);
    color: var(--gb-green, var(--green));
    user-select: text;
  }

  .system-info dd {
    margin: 0;
    display: inline-block;
    word-wrap: break-word;
    overflow-wrap: break-word;
    user-select: text;
  }

  .system-info dd :global(a.external-link) {
    color: var(--gb-blue, var(--aqua, var(--cyan)));
    text-decoration: underline;
  }

  .system-info dd :global(a.email-link),
  .system-info dd :global(a.locale-link) {
    color: inherit;
    text-decoration: underline;
  }
</style>
