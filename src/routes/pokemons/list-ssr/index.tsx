import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return <span>Hola Mundo - SSR</span>;
});

export const head: DocumentHead = {
  title: "List SSR",
};
