<script>
  import { appData } from './appContext';
  import DiagramBox from './DiagramBox.svelte';
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

<div class="boxes">
  <div class="boxes-group">
    <DiagramBox {...smallBottomTray(detailData)} />
    <DiagramBox {...smallTrayLongSide(detailData)} />
    <DiagramBox {...smallTrayShortSides(detailData)} />
  </div>
  <div class="boxes-group">
    <DiagramBox {...largeBottomTray(detailData)} />
    <DiagramBox {...largeTrayLongSide(detailData)} />
    <DiagramBox {...largeTrayShortSides(detailData)} />
  </div>
  <div class="boxes-group">
    <DiagramBox {...lid(detailData)} />
    <DiagramBox {...spine(detailData)} />
  </div>
</div>

<style>
  .boxes {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .boxes-group {
    display: flex;
    gap: 10px;

    > :global(.diagram-box) {
      background-color: lightcyan;
      border: 1px solid cyan;
    }
  }
</style>
