import { extendTheme } from "@chakra-ui/react";

import { primaryColor, secondaryColor } from "./color";

export const mainTheme = extendTheme({
  colors: {
    primary: primaryColor,
    secondary: secondaryColor,
  },
});
