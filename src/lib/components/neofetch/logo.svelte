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
