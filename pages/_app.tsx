import LayoutHome from "@/components/layouts/layout-home/LayoutHome";
import "@/styles/globals.css";
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
import { Provider } from "react-redux";
import store from "@/store/store";
import LayoutAdmin from "@/components/layouts/layout-admin/LayoutAdmin";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isUserPage = router.pathname.startsWith("/user/");
  const isAdminPage = router.pathname.startsWith("/admin/");
  return (
    <Providers>
      <Provider store={store}>
        <MantineProvider theme={{ fontFamily: "Space Grotesk, sans-serif" }}>
          {isUserPage ? (
            <LayoutUser>
              <Component {...pageProps} />
            </LayoutUser>
          ) : isAdminPage ? (
            <LayoutAdmin>
              <Component {...pageProps} />
            </LayoutAdmin>
          ) : (
            <LayoutHome>
              <Component {...pageProps} />
            </LayoutHome>
          )}
        </MantineProvider>
      </Provider>
    </Providers>
  );
}
