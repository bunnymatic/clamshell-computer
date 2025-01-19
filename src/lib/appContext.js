import { writable } from 'svelte/store';

const initialValues = {
  height: 130,
  width: 105,
  depth: 30,
  boardThickness: 3,
  gap: 3,
  lidOverlap: 3,
};

const appData = writable(initialValues);

export { appData };
