import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { Topbar } from "@/components/Topbar";
import customTheme from "@/components/ui";

export default function Page() {
  return(
    <ChakraProvider theme={customTheme}>
      <Topbar /> {/* Подключение Topbar */}
      <Component {...pageProps} />
    </ChakraProvider>

  )
}