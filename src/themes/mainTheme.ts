import { extendTheme } from "@chakra-ui/react";

import { primaryColor } from "./color";

export const mainTheme = extendTheme({
  colors: {
    primary: primaryColor,
  },
});
