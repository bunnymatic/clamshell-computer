<script>
  import Dimensions from './Dimensions.svelte';
  import { appData } from './appContext';

  import {
    smallBottomTray,
    smallTrayShortSides,
    smallTrayLongSide,
    largeBottomTray,
    largeTrayLongSide,
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

<section class="introduction">
  <div>
    <a
      href="https://www.handmadebooksandjournals.com/create-custom-books/boxes-and-slipcases/clamshell-box/clamshell-box-part-1/"
      >Click here for directions to build the box</a
    >
  </div>
  <div class="instructions">
    <p>
      Input the size of the inside of the box - or the size of the thing you
      want the box to contain. You can use centimeters or millimeters or inches.
      Whatever you like. The measurements will be specified with decimal
      precision (not fractions).
    </p>
  </div>
</section>
<section class="main-form">
  <form>
    <div class="form-inputs">
      <div class="form-input__container">
        <div class="form-input">
          <label for="contentHeight">Content Height</label>
          <div class="input">
            <input
              id="contentHeight"
              bind:value={$appData.height}
              type="text"
            />
          </div>
        </div>
      </div>
      <div class="form-input__container">
        <div class="form-input">
          <label for="contentWidth">Content width</label>
          <div class="input">
            <input id="contentWidth" bind:value={$appData.width} type="text" />
          </div>
        </div>
      </div>
      <div class="form-input__container">
        <div class="form-input">
          <label for="contentDepth">Content depth</label>
          <div class="input">
            <input id="contentDepth" bind:value={$appData.depth} type="text" />
          </div>
        </div>
      </div>
    </div>
    <div class="form-inputs">
      <div class="form-input__container">
        <div class="form-input">
          <label for="boardOffset">Board Thickness</label>
          <div class="input">
            <input
              id="boardOffset"
              bind:value={$appData.boardThickness}
              type="text"
            />
          </div>
        </div>
      </div>
      <div class="form-input__container">
        <div class="form-input">
          <label for="gap">Gap</label>
          <div class="input">
            <input id="gap" bind:value={$appData.gap} type="text" />
            <div class="form-input--hint">
              Represents the space between the inner and outer box when the
              whole thing is closed.
            </div>
          </div>
        </div>
      </div>
      <div class="form-input__container">
        <div class="form-input">
          <label for="lid">Lid overlap</label>
          <div class="input">
            <input id="lid" bind:value={$appData.lidOverlap} type="text" />
          </div>
        </div>
      </div>
    </div>
  </form>
</section>

<style>
  .introduction {
    max-width: 600px;
    text-align: left;
  }
  .main-form {
    width: 600px;
  }
  form {
    display: flex;
    flex-direction: row;
    > .form-inputs {
      flex: 1;
    }
  }
  .form-inputs {
    display: flex;
    gap: 10px;
    flex-direction: column;
    + .form-inputs {
      border-left: 1px solid lightgrey;
    }
  }
  .form-input__container {
    display: flex;
    gap: 4px;
    flex-direction: column;
  }
  .form-input {
    display: flex;
    gap: 10px;
    .input {
      flex-basis: 160px;
    }
    label {
      flex: 1;
      justify-content: flex-start;
      align-self: flex-start;
      text-align: right;
      font-style: italic;
      color: grey;
    }
  }
  .form-input--hint {
    font-size: x-small;
    text-align: right;
  }
</style>
