import Router from "next/router";

import ProgressBar from "@badrap/bar-of-progress";
import {ResizeObserver} from "@juggle/resize-observer";

import { ConnectedRouter } from "connected-next-router";

import { wrapper } from '../store'

import { Navbar } from '../components/Navbar'

import '../styles/globals.css'

if (typeof window !== "undefined" && !("ResizeObserver" in window)) {
  window.ResizeObserver = ResizeObserver;
}

const progress = new ProgressBar({
  size: 2,
  color: "#fd7014",
  className: "bar-of-progress",
  delay: 100,
});

if (typeof window !== "undefined") {
  progress.start();
  progress.finish();
}

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", () => {
  progress.finish();
  window.scrollTo(0, 0);
});

Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <ConnectedRouter>
      <Navbar />
      <Component {...pageProps} />
    </ConnectedRouter>
  )
}

export default wrapper.withRedux(MyApp)
