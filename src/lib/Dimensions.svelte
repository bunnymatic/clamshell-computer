<script>
  const props = $props();
</script>

<span>
  {props.height} x {props.width}
  {#if props.depth}
    {' '} x {props.depth}
  {/if}
</span>
