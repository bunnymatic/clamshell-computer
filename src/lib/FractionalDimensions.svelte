<script>
  import { decimalToFraction } from "./decimalToFraction";
  const { dimensions } = $props()
</script>

<span>
  {decimalToFraction(dimensions.height)} x {decimalToFraction(dimensions.width)}
  {#if (dimensions.depth)}
  {' '} x {decimalToFraction(dimensions.depth)}
  {/if}
</span>