<script lang="ts">
  import Neofetch from '$lib/components/neofetch/neofetch.svelte';
  import type { Snippet } from 'svelte';

  interface CommandOutput {
    id: number;
    command: string;
    output: Snippet | string;
  }

  let commandHistory = $state<CommandOutput[]>([]);
  let currentCommand = $state('');
  let commandIdCounter = $state(0);

  function handleCommand(cmd: string) {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (!trimmedCmd) return;

    let output: Snippet | string = '';

    switch (trimmedCmd) {
      case 'about':
        // We'll pass the Neofetch component as output
        break;
      case 'help':
        output =
          'Available commands:\n  about - Show information about me\n  help - Show this help message\n  clear - Clear the terminal';
        break;
      case 'clear':
        commandHistory = [];
        currentCommand = '';
        return;
      default:
        output = `Command not found: ${trimmedCmd}\nType 'help' for available commands.`;
    }

    commandHistory = [...commandHistory, { id: commandIdCounter++, command: cmd, output }];
    currentCommand = '';
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleCommand(currentCommand);
    }
  }
</script>

{#snippet neofetchOutput()}
  <Neofetch />
{/snippet}

<div
  class="terminal"
  box-="round"
>
  <div class="output">
    {#each commandHistory as item (item.id)}
      <div class="command-block">
        <div class="command-input">
          <span class="prompt">&gt;</span>
          <span class="command-text">{item.command}</span>
        </div>
        {#if item.command.trim().toLowerCase() === 'about'}
          {@render neofetchOutput()}
        {:else if item.output}
          <div class="command-output">{item.output}</div>
        {/if}
      </div>
    {/each}
  </div>

  <div class="input-container">
    <span class="prompt">&gt;</span>
    <input
      type="text"
      bind:value={currentCommand}
      onkeydown={handleKeydown}
      placeholder="Type 'help' for available commands"
    />
  </div>
</div>

<style>
  .terminal {
    display: flex;
    flex-direction: column;
    width: 100ch;
    height: 28lh;
    max-width: 100%;
    overflow: hidden;
  }

  .output {
    flex: 1;
    overflow-y: auto;
    padding: 1ch;
    overflow-x: hidden;
  }

  .command-block {
    margin-bottom: 1ch;
  }

  .command-input {
    display: flex;
    gap: 1ch;
    color: var(--gb-fg);
  }

  .prompt {
    color: var(--gb-green);
    font-weight: var(--font-weight-bold);
  }

  .command-text {
    color: var(--gb-fg);
  }

  .command-output {
    margin-top: 0.5ch;
    margin-left: 2ch;
    white-space: pre-wrap;
    color: var(--gb-fg);
  }

  .input-container {
    display: flex;
    align-items: center;
    gap: 1ch;
    padding: 1ch;
  }

  .input-container input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: var(--gb-fg);
    font-family: var(--font-family);
    font-size: var(--font-size);
    line-height: var(--line-height);
  }

  .input-container input::placeholder {
    color: var(--gb-dark-gray);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .terminal {
      width: calc(100vw - 2ch);
      height: 100vh;
    }
  }

  /* For HD screens (1280-1920px) */
  @media (min-width: 769px) and (max-width: 1920px) {
    .terminal {
      width: 100ch;
    }
  }

  /* For FullHD and larger screens */
  @media (min-width: 1921px) {
    .terminal {
      width: 120ch;
    }
  }
</style>
