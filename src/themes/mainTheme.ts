import { extendTheme } from "@chakra-ui/react";

import { breakpoints } from "./breakpoints";
import { grayColor, primaryColor, secondaryColor } from "./color";

export const mainTheme = extendTheme({
  colors: {
    primary: primaryColor,
    secondary: secondaryColor,
    gray: grayColor,
  },
  breakpoints,
});
