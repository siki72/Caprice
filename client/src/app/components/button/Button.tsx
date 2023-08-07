import Link from "next/link";
import React from "react";
import styles from "./button.module.css";
interface ButtonProps {
  url: string;
  name: string;
}
const Button: React.FC<ButtonProps> = ({ url, name }) => {
  return (
    <Link className={styles.btn} href={url}>
      {name}
    </Link>
  );
};

export default Button;
