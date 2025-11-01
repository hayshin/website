<script lang="ts">
  import Terminal from '$lib/components/terminal/terminal.svelte';
  import SEO from '$lib/components/seo/seo.svelte';
  import StructuredData from '$lib/components/seo/structured-data.svelte';
  import * as m from '$lib/paraglide/messages';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': m.common_person_name(),
    'alternateName': m.common_person_alternate_name(),
    'jobTitle': m.home_structured_data_person_job_title(),
    'description': m.home_structured_data_person_description(),
    'url': 'https://hayshin.dev',
    'email': m.common_email(),
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': m.home_structured_data_person_address_locality(),
      'addressCountry': m.home_structured_data_person_address_country(),
    },
    'sameAs': [
      'https://github.com/hayshin',
      'https://linkedin.com/in/hayshin',
      'https://t.me/hayshinbj',
    ],
    'knowsAbout': m.home_structured_data_knows_about().split(', '),
  };
</script>

<SEO
  title={m.home_seo_title()}
  description={m.home_seo_description()}
  keywords={m.home_seo_keywords()}
  ogUrl="https://hayshin.dev"
  canonical="https://hayshin.dev"
/>

<StructuredData data={structuredData} />

<main class="container">
  <Terminal />
</main>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding-bottom: env(safe-area-inset-bottom);
  }
</style>
