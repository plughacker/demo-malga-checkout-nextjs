import type { NextPage } from "next";
import Head from "next/head";

import { MalgaCheckout } from "../components/MalgaCheckout";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Malga Checkout Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MalgaCheckout />
    </main>
  );
};

export default Home;
