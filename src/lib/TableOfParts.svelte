<script>
  import { appData } from './appContext';
  import Dimensions from './Dimensions.svelte';
  import {
    smallBottomTray,
    smallTrayLongSide,
    smallTrayShortSides,
    largeTrayLongSide,
    largeBottomTray,
    largeTrayShortSides,
    lid,
    spine,
  } from './dimensionsComputer';

  const asNumber = (val) => parseFloat(val);
  const sanitize = (maybeNumeric) =>
    maybeNumeric ? Number(asNumber(maybeNumeric).toFixed(5)) : 0;

  const detailData = $derived({
    height: sanitize($appData.height),
    width: sanitize($appData.width),
    depth: sanitize($appData.depth),
    boardThickness: sanitize($appData.boardThickness),
    gap: sanitize($appData.gap),
    lidOverlap: sanitize($appData.lidOverlap),
  });
</script>

{#snippet requirementsEntry({ height, width, count, display })}
  <tr>
    <td>
      {display}
      {#if count > 1}
        ({count}ea)
      {/if}
    </td>
    <td><Dimensions {height} {width} /></td>
  </tr>
{/snippet}

<section>
  <table class="requirements__container">
    {@render requirementsEntry(smallBottomTray(detailData))}
    {@render requirementsEntry(smallTrayLongSide(detailData))}
    {@render requirementsEntry(smallTrayShortSides(detailData))}

    {@render requirementsEntry(largeBottomTray(detailData))}
    {@render requirementsEntry(largeTrayLongSide(detailData))}
    {@render requirementsEntry(largeTrayShortSides(detailData))}

    {@render requirementsEntry(lid(detailData))}
    {@render requirementsEntry(spine(detailData))}
  </table>
</section>

<style>
  table {
    border-spacing: 0;
    font-size: large;
  }
  td {
    padding: 8px;
  }
  td:first-child {
    text-align: right;
  }
  td:last-child {
    font-variant-numeric: normal;
  }
  tr:nth-child(2n + 1) {
    background-color: lightcyan;
  }
</style>
