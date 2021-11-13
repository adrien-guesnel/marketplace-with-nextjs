import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Marketplace</title>
        <meta name="description" content="Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
};

export default Home;
