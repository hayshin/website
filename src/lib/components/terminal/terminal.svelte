<script lang="ts">
  import Neofetch from '$lib/components/neofetch/neofetch.svelte';
  import type { Snippet } from 'svelte';

  interface CommandOutput {
    id: number;
    command: string;
    output: Snippet | string;
  }

  let commandHistory = $state<CommandOutput[]>([{ id: 0, command: 'about', output: '' }]);
  let currentCommand = $state('');
  let commandIdCounter = $state(1);
  let outputElement: HTMLDivElement;

  // Custom attribute from CSS framework
  const terminalBorder = { 'box-': 'round' };

  $effect(() => {
    // Scroll to bottom whenever command history changes with smooth animation
    if (outputElement && commandHistory.length > 0) {
      requestAnimationFrame(() => {
        outputElement.scroll({
          top: outputElement.scrollHeight,
          behavior: 'smooth',
        });
      });
    }
  });

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
        output = `${trimmedCmd}: command not found\nType 'help' for available commands.`;
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

  function handleFocus(event: FocusEvent) {
    // Scroll input into view when focused (especially important on mobile)
    const target = event.target as HTMLElement;
    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 300); // Delay to account for keyboard animation
  }
</script>

{#snippet neofetchOutput()}
  <Neofetch />
{/snippet}

<div
  class="terminal"
  {...terminalBorder}
>
  <div
    class="output"
    bind:this={outputElement}
  >
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
      onfocus={handleFocus}
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
      height: 100vh; /* Fallback for older browsers */
      height: 100dvh; /* Dynamic viewport height adjusts for keyboard */
    }

    .output {
      /* Ensure scrolling works well on mobile */
      -webkit-overflow-scrolling: touch;
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
