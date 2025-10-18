<script lang="ts">
  interface Props {
    systemName: string;
    systemInfo: Record<string, string>;
  }

  const { systemName, systemInfo }: Props = $props();
</script>

<div class="system-info-container">
  <h1 class="system-name">{systemName}</h1>
  <p>-------------</p>
  <dl class="system-info">
    {#each Object.entries(systemInfo) as [term, description] (term)}
      <div class="item">
        <dt>{term}</dt>
        <dd>: {description}</dd>
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
    display: inline;
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
</style>
