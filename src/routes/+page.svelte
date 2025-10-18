<script lang="ts">
  import SystemInfo from '$lib/components/neofetch/system-info.svelte';

  const logo = `
      ░▓██░     ░▒███░
    ░▓███▓░   ░▒████▒░
  ░▓███▓░   ░▒████▒░
░░▓███▓░   ░▒████▒░
░▓███▓░░  ░▒████▒░
░▓███▒░    ░████▒░
░▓███▓░    ░████▒░
░▒███▓░░  ░▒████▒░
░░▓███▓░░  ░▒████▒░
  ░▓███▒░   ░▒████▒░
    ░▒███▓░   ░▒████▒
      ░▓██░     ░▒███░
        ░░        ░░
          `;

  const definitions: Record<string, string> = {
    'OS': 'NixOS 25.11 (Xantusia) x86_64',
    'Host': 'MCLG-XX (M1010)',
    'Kernel': 'Linux 6.12.51',
    'Uptime': '18 hours, 36 mins',
    'Packages': '980 (nix-system), 12',
    'Shell': 'nushell 0.106.1',
    'Display (BOE0A74)': '1920x1200',
    'WM': 'Hyprland 0.51.1 (Wayland)',
    'Theme': 'adw-gtk3 [GTK2/3/4]',
    'Font': 'DejaVu Sans (14pt) [GTK2]',
    'Cursor': 'Bibata-Modern-Ice (24pt)',
    'Terminal': 'kitty 0.43.1',
    'Terminal Font': 'JetBrainsMonoNF',
    'CPU': '13th Gen Intel(R) Core(TM)',
    'GPU': 'Intel Iris Xe Graphics',
    'Memory': '6.77 GiB / 15.34 GiB',
    'Swap': '0 B / 8.80 GiB (0%)',
    'Disk (/)': '476.44 GiB / 630.82 GiB',
    'Local IP (wlp0s20f3)': '192.168.4',
    'Battery (HB5489P9EGW-31A)': '16%',
    'Locale': 'en_GB.UTF-8',
  };
</script>

<SystemInfo
  systemName="hayshin@matte"
  systemInfo={definitions}
/>
