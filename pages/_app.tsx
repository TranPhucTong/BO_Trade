import LayoutHome from "@/components/layouts/layout-home/LayoutHome";
import "@/styles/globals.css";
import "@/styles/ButtonHome.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import Providers from "./providers";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import LayoutUser from "@/components/layouts/layout-user/LayoutUser";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isUserPage = router.pathname.startsWith("/user/");
  return (
    <Providers>
      <MantineProvider theme={{ fontFamily: "Space Grotesk, sans-serif" }}>
        {isUserPage ? (
          <LayoutUser>
            <Component {...pageProps} />
          </LayoutUser>
        ) : (
          <LayoutHome>
            <Component {...pageProps} />
          </LayoutHome>
        )}
      </MantineProvider>
    </Providers>
  );
}
