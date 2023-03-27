import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="bg-[#0f0f0f]">
      <ClerkProvider {...pageProps}>
        <Component {...pageProps} />;
      </ClerkProvider>
    </div>
  );
};

export default api.withTRPC(MyApp);
