import { Slot, component$, useStyles$ } from "@builder.io/qwik";

import Footer from "~/components/starter/footer/footer";
import Header from "~/components/starter/header/header";
import { routeLoader$ } from "@builder.io/qwik-city";
import styles from "./styles.css?inline";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Header />
      <main class="flex flex-col items-center justify-center">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
