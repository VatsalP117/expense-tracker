import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import createEmotionCache from "../utility/createEmotionCache";
import { StyledEngineProvider } from "@mui/material/styles";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const cache = createCache({
    key: "css",
    prepend: true,
  });
  return (
    <ClerkProvider {...pageProps}>
      <NextNProgress height={4} />
      <CacheProvider value={cache}>
        <Component {...pageProps} />
      </CacheProvider>
    </ClerkProvider>
  );
};

export default MyApp;
