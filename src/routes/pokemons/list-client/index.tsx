import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

// import styles from "../../styles.css?inline";

export default component$(() => {
  // useStylesScoped$(styles);
  return <span>Hola Mundo - Client</span>;
});

export const head: DocumentHead = {
  title: "List Client",
};
