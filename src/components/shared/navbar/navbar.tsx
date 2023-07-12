import { Link } from "@builder.io/qwik-city";
import { QwikLogo } from "../../icons/qwik";
import { component$ } from "@builder.io/qwik";
import styles from "./navbar.module.css";

export default component$(() => {
  return (
    <navbar class={styles.navbar}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <Link href="/">
            <QwikLogo height={50} />
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/pokemons/list-ssr/">SSR-List</Link>
          </li>
          <li>
            <Link href="/pokemons/list-client/">Client-List</Link>
          </li>
        </ul>
      </div>
    </navbar>
  );
});
