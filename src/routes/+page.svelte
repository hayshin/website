<script lang="ts">
  import Neofetch from '$lib/components/neofetch/neofetch.svelte';
  import SEO from '$lib/components/seo/seo.svelte';
  import StructuredData from '$lib/components/seo/structured-data.svelte';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Dauren Baimurza',
    'alternateName': 'Hayshin',
    'jobTitle': 'Software Engineer',
    'description':
      'Software Engineer from Almaty, Kazakhstan. Specializing in AI/ML, TypeScript, Python, NixOS and Linux.',
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
  title="Hayshin - Software Engineer"
  description="Personal website of Dauren Baimurza (Hayshin) - Software Engineer from Almaty, Kazakhstan. Specializing in AI/ML, TypeScript, Python and Linux."
  keywords="Dauren Baimurza, Hayshin, Hayshinbj, AI Engineer, Software Engineer, Machine Learning, Artificial Intelligence, Developer, Portfolio, TypeScript, Python, Linux, NixOS, Almaty, Kazakhstan"
  ogUrl="https://hayshin.dev"
  canonical="https://hayshin.dev"
/>

<StructuredData data={structuredData} />

<main class="container">
  <Neofetch />
</main>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
