import Script from "next/script";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../public/assets/fonts/line-icons.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/slicknav.css";
import "../../public/assets/css/ion.rangeSlider.css";
import "../../public/assets/css/ion.rangeSlider.skinFlat.css";
import "../../public/assets/css/nivo-lightbox.css";
import "../../public/assets/css/animate.css";
import "../../public/assets/css/owl.carousel.css";
import "../../public/assets/css/main.css";
import "../../public/assets/css/responsive.css";

import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />

        {/* Toastify Container */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />

        {/* Scripts */}
        <Script src="/assets/js/jquery-min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/popper.min.js" strategy="beforeInteractive" />

        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/jquery.mixitup.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.counterup.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/ion.rangeSlider.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.parallax.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/owl.carousel.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.slicknav.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/nivo-lightbox.js" strategy="afterInteractive" />

        {/* Main JS LAST */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
