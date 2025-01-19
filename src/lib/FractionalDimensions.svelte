<script>
  const { height, width, depth } = $props();
</script>

<span>
  {height} x {width}
  {#if depth}
    {' '} x {depth}
  {/if}
</span>
