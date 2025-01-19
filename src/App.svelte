<script>
  import Computer from './lib/Computer.svelte';
  import Diagram from './lib/Diagram.svelte';
  import TableOfParts from './lib/TableOfParts.svelte';
  import { appData } from './lib/appContext';

  let initialDimensions = {};
  appData.subscribe((d) => (initialDimensions = d));
</script>

<main>
  <h1>Clamshell</h1>
  <section>
    <Computer />
  </section>
  <section>
    <h2>Pieces</h2>
    <Diagram />
  </section>
  <section>
    <h2>Table of parts</h2>
    <TableOfParts />
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    section + section {
      margin-top: 40px;
    }
  }
</style>
