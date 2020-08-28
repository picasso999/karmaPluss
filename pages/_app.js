import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/apton-icons.css";
import "../assets/css/animate.min.css";
import "swiper/swiper-bundle.min.css";
import "../assets/css/fontawesome-all.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "react-modal-video/css/modal-video.min.css";

import { useEffect } from 'react'
import Router from 'next/router'
import * as gtag from '../lib/gtag'



// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
  
  return <Component {...pageProps} />;
}
