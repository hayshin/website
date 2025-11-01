<script lang="ts">
  import * as m from '$lib/paraglide/messages';

  interface Props {
    title?: string;
    description?: string;
    keywords?: string;
    author?: string;
    ogType?: 'website' | 'article' | 'profile';
    ogImage?: string;
    ogUrl?: string;
    twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
    twitterSite?: string;
    twitterCreator?: string;
    canonical?: string;
    noindex?: boolean;
    nofollow?: boolean;
  }

  let {
    title = m.seo_default_title(),
    description = m.seo_default_description(),
    keywords = m.seo_default_keywords(),
    author = m.seo_default_author(),
    ogType = 'website',
    ogImage = 'https://hayshin.dev/og-image.png',
    ogUrl = 'https://hayshin.dev',
    twitterCard = 'summary_large_image',
    twitterSite = m.seo_default_twitter_handle(),
    twitterCreator = m.seo_default_twitter_handle(),
    canonical = undefined,
    noindex = false,
    nofollow = false,
  }: Props = $props();

  const robotsContent =
    [noindex && 'noindex', nofollow && 'nofollow'].filter(Boolean).join(', ') || 'index, follow';
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta
    name="title"
    content={title}
  />
  <meta
    name="description"
    content={description}
  />
  <meta
    name="keywords"
    content={keywords}
  />
  <meta
    name="author"
    content={author}
  />
  <meta
    name="robots"
    content={robotsContent}
  />

  <!-- Canonical URL -->
  {#if canonical}
    <link
      rel="canonical"
      href={canonical}
    />
  {/if}

  <!-- Open Graph / Facebook -->
  <meta
    property="og:type"
    content={ogType}
  />
  <meta
    property="og:url"
    content={ogUrl}
  />
  <meta
    property="og:title"
    content={title}
  />
  <meta
    property="og:description"
    content={description}
  />
  <meta
    property="og:image"
    content={ogImage}
  />
  <meta
    property="og:image:width"
    content="1200"
  />
  <meta
    property="og:image:height"
    content="630"
  />
  <meta
    property="og:image:type"
    content="image/png"
  />
  <meta
    property="og:site_name"
    content={m.common_site_name()}
  />

  <!-- Twitter -->
  <meta
    property="twitter:card"
    content={twitterCard}
  />
  <meta
    property="twitter:url"
    content={ogUrl}
  />
  <meta
    property="twitter:title"
    content={title}
  />
  <meta
    property="twitter:description"
    content={description}
  />
  <meta
    property="twitter:image"
    content={ogImage}
  />
  {#if twitterSite}
    <meta
      property="twitter:site"
      content={twitterSite}
    />
  {/if}
  {#if twitterCreator}
    <meta
      property="twitter:creator"
      content={twitterCreator}
    />
  {/if}
</svelte:head>
