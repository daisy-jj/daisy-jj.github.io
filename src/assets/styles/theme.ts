/* Theme 정의 */
export const theme = {
  main: {
    blue: "#008FFB",
    green: "#2FDAC5",
    gradient: "linear-gradient(356.61deg, #2774FF 5.59%, #2FDAC5 94.41%)",
    stateLayers: "#5F82C322",
  },
  ui: {
    bg_01: "#EFF4F6",
    bg_02: "#F8F9FA",
    dark_bg_01: "#101115",
  },
  graph: {
    graph_01: "#AE64F7",
    graph_02: "#6FB9FD",
    graph_03: "#50DEAE",
    graph_04: "#2BADBF",
    graph_05: "#005EA4",
  },
  example: {
    ex_code01: "#47A6AC",
    ex_code02: "#F36BF5",
    line: "#3E3E46",
  },
  error: {
    light: "#E75454",
    main: "#C14545",
    dark: "#873131",
  },
  success: {
    main: "#2E9853",
    dark: "#257A42",
  },
  /**
   * @description line색 #E8E8EB
   * @description dark line색 #2C2C33
   */
  line: "#E9ECEF",
  darkLine: "#2C2C33",
  /**
   * @name grey
   * @grey900 #212529
   * @grey800 #343A40
   * @grey700 #495057
   * @grey600 #6C757D
   * @grey500 #ADB5BD
   * @grey400 #CED4DA
   * @grey300 #DEE2E6
   * @grey200 #E8E8EB
   * @grey100 #F6F6FB
   */
  grey: {
    900: "#212529",
    800: "#343A40",
    700: "#495057",
    600: "#6C757D",
    500: "#ADB5BD",
    400: "#CED4DA",
    300: "#DEE2E6",
    200: "#E8E8EB",
    100: "#F6F6FB",
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  desktop: customMediaQuery(1200),
  laptop: customMediaQuery(1024),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
