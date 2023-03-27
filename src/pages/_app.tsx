import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

import { GlobalContextProvider } from "context/globalContext";
import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <GlobalContextProvider>
        <Component {...pageProps} />;
      </GlobalContextProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
