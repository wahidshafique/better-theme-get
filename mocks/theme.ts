export const colors = {
  iconGrey: "#98A2B2",
};
export const space = [
  "0rem", // 0px
  "0.5rem", // 8px
  "1rem", // 16px
  "1.5rem", // 24px
  "2rem", // 32px
  "2.5rem", // 40px
  "3rem", // 48px
  "3.5rem", // 56px
  "4rem", // 64px
  "4.5rem", // 72px
  "5rem", // 80px
  "5.5rem", // 88px
  "6rem", // 96px
];

export const sizes = [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80];

export const fontSizes = [
  10,
  12,
  14,
  16,
  18,
  20,
  24,
  28,
  32,
  36,
  40,
  48,
  64,
  80,
];
export const fontWeights = [400, 600, 900];
export const radii: { [k: string]: any } = [0, 2, 4, 6, 10, 20, 56, 999];
radii.circle = "50%";
radii.rounded = radii[6];
radii.semiRounded = radii[3];

export const zIndices: { [k: string]: any } = {
  // examples indices
  sun: 9999,
  satellite: 5000,
  skyscraper: 1000,
  towerBlock: 500,
  house: 200,
  chimney: 110,
  bungalow: 100,
  shed: 50,
  postbox: 10,
  curb: 1,
  pavement: 0,
  pothole: -10,
  ditch: -20,
  sewer: -100,
  mine: -300,
  seabed: -1000,
};

zIndices.modalOverlay = zIndices.skyscraper;
zIndices.modal = zIndices.satellite;

export const breakpoints = ["40em", "52em", "64em"];

const theme: { [key: string]: any } = {
  space,
  sizes,
  fontSizes,
  fontWeights,
  radii,
  zIndices,
  colors,
  breakpoints,
};

export default theme;
