import type { NextPage } from "next";
import Head from "next/head";

import { PlugCheckout } from "../components/PlugCheckout";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Plug Checkout Demo</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <PlugCheckout />
    </main>
  );
};

export default Home;
