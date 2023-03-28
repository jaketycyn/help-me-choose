import { type NextPage } from "next";
import Head from "next/head";

import Landingpage from "./landingpage";

const Home: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Help Me Choose Leaguestart</title>
        <meta
          name="description"
          content="A simple app to help you find your leaguestart"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black">
        <Landingpage />
      </main>
    </>
  );
};

export default Home;
