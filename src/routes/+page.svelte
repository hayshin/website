<script lang="ts">
  import Neofetch from '$lib/components/neofetch/neofetch.svelte';

  const logo = `
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
`;

  const definitions: Record<string, string> = {
    'OS': 'Asian 25.11 (Kazakh) x86_64',
    'Host': 'Dauren Baimurza',
    'Kernel': 'Homo Sapiens v2.28',
    'Uptime': '20 years, 2 months',
    'Shell': 'Yellow',
    'Theme': 'Minimalism & optimism',
    'Role': 'Software Engineer',
    'Languages': 'TypeScript, Python, Java, Rust',
    'Packages': '26 (in-house), 15 (deprecated)',
    'Memory': "0.5 / 13 (friends' birthdays)",
    'CPU': '2-Core@89 IQ',
    'GPU': 'Right Eye -3.5D; Left Eye -2.75D',
    'Disk (/)': '51.44 KiG / 76 KiG (39.8%)',
    'Location': 'Almaty, Kazakhstan (UTC+5)',
    'Locale': 'ru_RU, en_GB, kk_KZ (UTF-8)',
    'Email': 'hello@hayshin.dev',
    'GitHub': 'https://github.com/hayshin',
    'LinkedIn': 'https://linkedin.com/in/hayshin',
    'Telegram': 'https://t.me/hayshinbj',
  };
</script>

<div class="container">
  <Neofetch
    systemName="hayshin@bj"
    systemInfo={definitions}
    {logo}
    alt="Logo of left bit shift operator <<"
  />
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
