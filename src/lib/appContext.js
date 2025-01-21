import { writable } from 'svelte/store';

const initialValues = {
  height: 160,
  width: 110,
  depth: 51,
  boardThickness: 3,
  gap: 2,
  lidOverlap: 3,
};

const appData = writable(initialValues);

export { appData };
