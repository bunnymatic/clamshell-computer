<script>
  import FractionalDimensions from './FractionalDimensions.svelte'
  import Dimensions from './Dimensions.svelte'

  let original = { width: 4, height: 6, depth: 1.5}

  let inputWidth = $state(original.width);
  let inputHeight = $state(original.height);
  let inputDepth = $state(original.depth);
  let inputBoardThickness = $state(3.0/32.0);
  let inputGap = $state(1.0/8.0);
  let inputLidOverlap = $state(3.0/16.0);

  const asNumber = (val) => parseFloat(val)
  const sanitize = (maybeNumeric) => maybeNumeric ? Number(asNumber(maybeNumeric).toFixed(5)) : 0;


  const width = $derived(sanitize(inputWidth))
  const height = $derived(sanitize(inputHeight))
  const depth = $derived(sanitize(inputDepth))

  const containsDimensions = $derived({width, height, depth})
  const boardThickness = $derived(sanitize(sanitize(inputBoardThickness)))
  const doubleBoardThickness = $derived(2.0 * boardThickness)
  const gap = $derived(sanitize(inputGap))
  const lidOverlap = $derived(sanitize(inputLidOverlap))

  const smallBottomTray = $derived({ height, width })
  const smallTrayLongSide = $derived({ height: height + boardThickness, width: depth})
  const smallTrayShortSides = $derived({ height, width: depth})

  const largeBottomTray = $derived({
    height: height + 2 * gap + doubleBoardThickness,
    width: width + 2 * gap + boardThickness
  })
  const largeTrayLongSide = $derived({
    height: height + 2 * gap + doubleBoardThickness + doubleBoardThickness,
    width: depth + boardThickness
  })
  const largeTrayShortSides = $derived(
    {height: height + 2 * gap + doubleBoardThickness,
      width: depth + boardThickness
    })

  const lid = $derived({
    height: height + 2 * gap + doubleBoardThickness + 2* gap + 2* lidOverlap ,
    width: width + 2 * gap + boardThickness + 2 * lidOverlap,
  })
  const spine = $derived({
    height: height + 2 * gap + doubleBoardThickness + 2* gap + 2* lidOverlap,
    width: depth + boardThickness
  })
</script>

{#snippet requirementsEntry(desc, dimensions)}
    <tr>
      <td>{desc}</td>
      <td><Dimensions dimensions={dimensions} /></td>
      <td><FractionalDimensions dimensions={dimensions} /></td>
    </tr>
{/snippet}


<h1>Clamshell</h1>
<div class='box-size'>
  <div>
    <a href="https://www.handmadebooksandjournals.com/create-custom-books/boxes-and-slipcases/clamshell-box/clamshell-box-part-1/">Directions</a>
  </div>
  <div>
    Box can contain an object: <strong>H X W X D: <FractionalDimensions dimensions={ containsDimensions } /></strong>
  </div>
</div>
<form>
  <div class='form-inputs'>
    <div class='form-input__container'>
      <div class='form-input'>
      <label for="contentHeight">Content Height</label>
      <input id="contentHeight" bind:value={inputHeight} type="text"/>
      </div>
      <div class='form-input--hint'></div>
    </div>
    <div class='form-input__container'>
      <div class='form-input'>
      <label for="contentWidth">Content width</label>
      <input id="contentWidth" bind:value={inputWidth} type="text"/>
      </div>
      <div class='form-input--hint'></div>
    </div>
    <div class='form-input__container'>
      <div class='form-input'>
      <label for="contentDepth">Content depth</label>
      <input id="contentDepth" bind:value={inputDepth} type="text"/>
      </div>
      <div class='form-input--hint'></div>
    </div>
    <div class='form-input__container'>
      <div class='form-input'>
        <label for="boardOffset">Board Offset</label>
        <input id="boardOffset" bind:value={inputBoardThickness} type="text"/>
      </div>
      <div class='form-input--hint'>Probably doesn't need to be changed</div>
    </div>
    <div class='form-input__container'>
      <div class='form-input'>
        <label for="gap">Gap between boxes</label>
        <input id="gap" bind:value={inputGap} type="text"/>
      </div>
      <div class='form-input--hint'>Probably doesn't need to be changed</div>
    </div>
    <div class='form-input__container'>
      <div class='form-input'>
        <label for="lid">Lid overlap</label>
        <input id="lid" bind:value={inputLidOverlap} type="text"/>
      </div>
      <div class='form-input--hint'>Probably doesn't need to be changed</div>
    </div>
  </div>
</form>

<table class="requirements__container">

    {@render requirementsEntry('1 small bottom tray', smallBottomTray)}
    {@render requirementsEntry('1 small tray long side', smallTrayLongSide)}
    {@render requirementsEntry('2 small tray short sides', smallTrayShortSides)}

    {@render requirementsEntry('1 large bottom tray', largeBottomTray)}
    {@render requirementsEntry('1 large tray long side', largeTrayLongSide) }
    {@render requirementsEntry('2 large tray short sides', largeTrayShortSides) }

    {@render requirementsEntry('1 lid', lid)}
    {@render requirementsEntry('spine', spine)}

</table>


<style>
  table {
    font-size: large;
  }
  td {
    border: 1px solid lightblue;
    padding: 8px;
  }
  td:first-child {
    text-align: right;
  }
  td:last-child {
    text-align: left;
  }
  .form-inputs {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  .form-input__container {
    display: flex;
    gap: 4px;
    flex-direction: column;
  }
  .form-input {
    display: flex;
    gap: 10px;
    label, input {
      flex: 1;
    }
    label {
      align-self: flex-end;
      text-align: right;
    }
  }
  .form-input--hint {
    font-size: x-small;
    text-align: right;
  }
</style>
