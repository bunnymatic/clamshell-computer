<script>
  let inches = 0;
  let millimeters = 0;

  const MILLIMETERS_PER_INCH = 25.4;
  let inchesToMillimeters = (val) => {
    if (!val) {
      return 0;
    }
    millimeters = parseFloat(val) * MILLIMETERS_PER_INCH;
  };

  let millimetersToInches = (val) => {
    if (!val) {
      return 0;
    }
    inches = parseFloat(val) / MILLIMETERS_PER_INCH;
  };
</script>

<div class="inches-to-millimeters-converter">
  <h4>Inch/mm converter</h4>
  <div>
    <input
      bind:value={inches}
      on:input={(e) => inchesToMillimeters(e.currentTarget.value)}
    />
    <span>in.</span>
    &lt;=&gt;
    <input
      bind:value={millimeters}
      on:input={(e) => millimetersToInches(e.currentTarget.value)}
    />
    <span>mm</span>
  </div>
</div>
