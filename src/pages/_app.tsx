import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import DesktopNavBar from "~/components/navbar/navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="">
      <DesktopNavBar />
      <Component {...pageProps} />;
    </div>
  );
};

export default api.withTRPC(MyApp);
