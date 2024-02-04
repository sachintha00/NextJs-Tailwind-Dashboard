"use client";
import Head from "next/head";
import React, { useEffect, useState } from "react";

function LayoutHeader() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <head>
          <title>Dashboard | Minia - Admin &amp; Dashboard Template</title>

          <meta content="Themesbrand" name="author" />
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="stylesheet" href="/css/swiper-bundle.css" />
          <link rel="stylesheet" href="/css/tailwind2.css" />
        </head>
      )}
    </>
  );
}

export default LayoutHeader;
