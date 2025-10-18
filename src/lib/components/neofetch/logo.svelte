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
    min-width: 0; /* Allow flex to shrink below content size */
  }

  pre {
    margin: 0;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  /* On smaller screens, center the logo */
  @media (max-width: 768px) {
    figure {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    pre {
      max-width: 100%;
      overflow-x: hidden;
    }
  }
</style>
