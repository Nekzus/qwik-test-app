import { QwikLogo } from "../../icons/qwik";
import { component$ } from "@builder.io/qwik";
import styles from "./navbar.module.css";

export default component$(() => {
  return (
    <navbar class={styles.navbar}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo height={50} />
          </a>
        </div>
        <ul>
          <li>
            <a
              href="https://qwik.builder.io/docs/components/overview/"
              target="_blank"
            >
              Documentación
            </a>
          </li>
        </ul>
      </div>
    </navbar>
  );
});
