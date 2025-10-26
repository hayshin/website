<script lang="ts">
  import Neofetch from '$lib/components/neofetch/neofetch.svelte';
  import SEO from '$lib/components/seo/seo.svelte';
  import StructuredData from '$lib/components/seo/structured-data.svelte';

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

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Dauren Baimurza',
    'alternateName': 'Hayshin',
    'jobTitle': 'AI & Software Engineer',
    'description':
      'AI & Software Engineer from Almaty, Kazakhstan. Specializing in AI/ML, TypeScript, Python, NixOS and Linux.',
    'url': 'https://hayshin.dev',
    'email': 'hello@hayshin.dev',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Almaty',
      'addressCountry': 'Kazakhstan',
    },
    'sameAs': [
      'https://github.com/hayshin',
      'https://linkedin.com/in/hayshin',
      'https://t.me/hayshinbj',
    ],
    'knowsAbout': [
      'Artificial Intelligence',
      'Machine Learning',
      'TypeScript',
      'Python',
      'NixOS',
      'Linux',
      'Software Engineering',
      'Web Development',
    ],
  };
</script>

<SEO
  title="Hayshin - AI Engineer & Software Engineer"
  description="Personal website of Dauren Baimurza (Hayshin) - AI Engineer and Software Engineer from Almaty, Kazakhstan. Specializing in AI/ML, TypeScript, Python and Linux."
  keywords="Dauren Baimurza, Hayshin, Hayshinbj, AI Engineer, Software Engineer, Machine Learning, Artificial Intelligence, Developer, Portfolio, TypeScript, Python, Linux, NixOS, Almaty, Kazakhstan"
  ogUrl="https://hayshin.dev"
  canonical="https://hayshin.dev"
/>

<StructuredData data={structuredData} />

{#snippet links()}
  <a href="https://github.com/hayshin">GitHub</a>
  <a href="https://linkedin.com/in/hayshin">LinkedIn</a>
  <a href="https://t.me/hayshinbj">Telegram</a>
{/snippet}

{#snippet email()}
  <a href="mailto:hello@hayshin.dev">hello@hayshin.dev</a>
{/snippet}

<main class="container">
  <Neofetch
    systemName="hayshin@bj"
    systemInfo={{
      'OS': 'Asian 25.11 (Kazakh) x86_64',
      'Host': 'Dauren Baimurza',
      'Kernel': 'Homo Erectus v1.3.37',
      'Uptime': '20 years, 2 months',
      'Shell': 'Yellow with redness',
      'Theme': 'Minimalism & optimism',
      'Role': 'AI & Software Engineer',
      'Languages': 'TypeScript, Python, Java, Rust',
      'Packages': '26 (in-house), 15 (deprecated)',
      'Memory': "2.5 / 13 (friends' birthdays)",
      'CPU': '2-Core@89 IQ',
      'GPU': 'Right Eye -3.5D; Left Eye -2.75D',
      'Disk (/)': '51.44 KiG / 76 KiG (39.8%)',
      'Location': 'Almaty, Kazakhstan (UTC+5)',
      'Local IP': '77.05.239.54/32',
      'Locale': 'ru_RU, en_GB, kk_KZ (UTF-8)',
      'Email': email,
      'Links': links,
    }}
    {logo}
    alt="Logo of left bit shift operator <<"
  />
</main>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
