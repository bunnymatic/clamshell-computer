const smallBottomTray = ({ height, width }) => ({
  height,
  width,
  count: 1,
  display: 'Small bottom tray',
});

const smallTrayLongSide = ({ height, depth, boardThickness }) => ({
  height: height + 2.0 * boardThickness,
  width: depth,
  count: 1,
  display: 'Small tray long side',
});

const smallTrayShortSides = ({ width, depth }) => ({
  height: width,
  width: depth,
  count: 2,
  display: 'Small tray short side',
});

const largeBottomTray = ({ height, width, gap, boardThickness }) => ({
  height: height + 2.0 * gap + 2.0 * boardThickness,
  width: width + gap + boardThickness,
  count: 1,
  display: 'Large bottom tray',
});

const largeTrayLongSide = ({ height, depth, gap, boardThickness }) => ({
  height: height + 2.0 * gap + 2.0 * boardThickness + 2.0 * boardThickness,
  width: depth + boardThickness,
  count: 1,
  display: 'Large tray long side',
});

const largeTrayShortSides = ({ width, depth, gap, boardThickness }) => ({
  height: width + gap + boardThickness,
  width: depth + boardThickness,
  count: 2,
  display: 'Large tray short side',
});

const lid = ({ height, width, gap, boardThickness, lidOverlap }) => ({
  height: height + 2 * gap + 2.0 * boardThickness + 2 * gap + 2 * lidOverlap,
  width: width + 2 * gap + boardThickness + 2 * lidOverlap,
  count: 2,
  display: 'Lid',
});

const spine = ({ height, depth, gap, boardThickness, lidOverlap }) => ({
  height: height + 2 * gap + 2.0 * boardThickness + 2 * gap + 2 * lidOverlap,
  width: depth + boardThickness,
  count: 1,
  display: 'Spine',
});

export {
  smallBottomTray,
  smallTrayShortSides,
  smallTrayLongSide,
  largeBottomTray,
  largeTrayLongSide,
  largeTrayShortSides,
  lid,
  spine,
};
