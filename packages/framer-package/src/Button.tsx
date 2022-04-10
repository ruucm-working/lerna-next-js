import * as React from "react";
import styles from "./Button.modules.css";

export function Button({ title = "Title" }) {
  return <div><button className={styles.button}>{title}</button></div>;
}
