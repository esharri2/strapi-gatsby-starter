export const colors = {
  // lightest: "#FCFCFC", // white
  // darkest: "#1A181B", // black
  // medium: "#A4BAB7", // green-gray
  // accent1: "#307351", // dark green
  // accent2: "#FF8811" // orange

  accent1: "#323232",
  darkest: "black",
  lightest: "#f2f2f2",
  medium: "#e4e1dc",
  accent2: "#00487C"
  // accent3: "#BB4430"
  //light green 82D173
};

// export const defaultFontStack = ["Open Sans", "Helvetica", "sans-serif"].join();
export const defaultFontStack = ["Helvetica", "sans-serif"].join();

export const fonts = {
  body: defaultFontStack,
  heading: defaultFontStack,
  normalWeight: 400,
  mediumWeight: 600,
  heavyWeight: 900
};

export const dimensions = {
  headerHeight: "140px",
  footerHeight: "70px",
  footerHeightPlus: `${70 * 1.5}px`
};

export const spacing = {
  "3xs": 2,
  "2xs": 4,
  xs: "8px",
  sm: "12px",
  md: "16px",
  lg: "24px",
  xl: "32px"
};

export const shadows = {
  small: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
};

export const transitions = {
  fast: "0.2s"
};

export const zIndexes = {
  bottom: 1,
  middle: 2,
  top: 3
};

export const breakpoints = {
  large: "1280px",
  medium: "880px",
  small: "680px",
  xsmall: "340px"
};

export const border = {
  radius: "4px",
  size: "1px",
  style: "solid"
};
