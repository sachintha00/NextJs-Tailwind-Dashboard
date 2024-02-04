import Head from "next/head";
import React from "react";

function LayoutHeader() {
  return (
    <Head>
      <title>Dashboard | Minia - Admin & Dashboard Template</title>
      <meta content="Themesbrand" name="author" />
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link rel="stylesheet" href="/css/swiper-bundle.css" />
      <link rel="stylesheet" href="/css/tailwind2.css" />
    </Head>
  );
}

export default LayoutHeader;
