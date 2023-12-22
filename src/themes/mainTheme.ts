import { extendTheme } from "@chakra-ui/react";

import { grayColor, primaryColor, secondaryColor } from "./color";

export const mainTheme = extendTheme({
  colors: {
    primary: primaryColor,
    secondary: secondaryColor,
    gray: grayColor,
  },
});
