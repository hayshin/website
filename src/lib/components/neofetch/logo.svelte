<script lang="ts">
  interface Props {
    logo: string;
    alt: string;
  }

  const { logo, alt }: Props = $props();
</script>

<figure aria-label={alt}>
  <pre aria-hidden="true">
            {logo}
    </pre>
</figure>

<style>
  figure {
    margin: 0;
    padding: 0;
  }

  /* On smaller screens, center the logo */
  @media (max-width: 768px) {
    figure {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
</style>
