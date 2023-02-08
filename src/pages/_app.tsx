import { ChakraProvider } from "@chakra-ui/react";
import type { AppType } from "next/dist/shared/lib/utils";

const App: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
