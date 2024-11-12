import { Theme } from "@mui/material";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
