<script>
  import Dimensions from './Dimensions.svelte';

  const { height, width, count, display } = $props();

  const normalize = (height, width) => {
    const maxDim = Math.max(height, width);
    if (maxDim <= 0) {
      return 1.0;
    }
    return 1.0 / maxDim;
  };

  const scale = (height, width) => normalize(height, width) * 200.0;

  const scaledDims = $derived({
    height: scale(height, width) * height,
    width: scale(height, width) * width,
  });
</script>

<div class="diagram-box">
  <div class="diagram-box--title">{display}</div>
  <div class="diagram-box--dimensions">
    <Dimensions {height} {width} />
  </div>
  <div class="diagram-box--rectangle">
    <svg width={scaledDims.width} height={scaledDims.height}>
      <rect
        x="0"
        y="0"
        width={scaledDims.width}
        height={scaledDims.height}
        stroke="darkblue"
        stroke-width="1px"
        fill="white"
      />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        >{count} ea</text
      >
    </svg>
  </div>
</div>

<style>
  .diagram-box {
    min-width: 240px;
    padding: 10px 0 15px;
  }
</style>
