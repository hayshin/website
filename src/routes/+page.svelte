<script lang="ts">
  import Terminal from '$lib/components/terminal/terminal.svelte';
  import SEO from '$lib/components/seo/seo.svelte';
  import StructuredData from '$lib/components/seo/structured-data.svelte';
  import * as m from '$lib/paraglide/messages';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': m.structured_data_person_name(),
    'alternateName': m.structured_data_person_alternate_name(),
    'jobTitle': m.structured_data_person_job_title(),
    'description': m.structured_data_person_description(),
    'url': 'https://hayshin.dev',
    'email': m.common_email(),
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': m.structured_data_person_address_locality(),
      'addressCountry': m.structured_data_person_address_country(),
    },
    'sameAs': [
      'https://github.com/hayshin',
      'https://linkedin.com/in/hayshin',
      'https://t.me/hayshinbj',
    ],
    'knowsAbout': [
      m.structured_data_skills_ai(),
      m.structured_data_skills_ml(),
      m.structured_data_skills_typescript(),
      m.structured_data_skills_python(),
      m.structured_data_skills_nixos(),
      m.structured_data_skills_linux(),
      m.structured_data_skills_software_engineering(),
      m.structured_data_skills_web_development(),
    ],
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
    height: 100vh;
  }
</style>
