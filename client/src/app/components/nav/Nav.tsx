import React from "react";
import styles from "./nav.module.css";
import Link from "next/link";
import Container from "../Container.tsx";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
const Nav = () => {
  return (
    <nav>
      <Container>
        <div className={styles.container}>
          <div className={styles.address}>
            <address>9 rue de l&apos;étoile, Le mans</address>
            <p>+33 243 520 793</p>
          </div>
          <div className={styles.navList}>
            <div className={styles.search}>
              <svg
                className={styles.svg}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
              </svg>
              <input
                className={styles.input}
                type="search"
                name="search"
                id="search"
                placeholder="SEARCH"
              />
            </div>
            <ul className={styles.part}>
              <li className={styles.link}>
                <Link href="/nouveauté">nouveautés</Link>
              </li>
              <li className={styles.link}>
                <Link href="/montres">montres</Link>
              </li>
              <li className={styles.link}>
                <Link href="/bracelets">bracelets</Link>
              </li>
              <li className={styles.link}>
                <Link href="/bagues">bagues</Link>
              </li>
            </ul>
            <div className={`${styles.logo} ${styles.link}`}>
              <Link href="/">Caprice</Link>
            </div>
            <ul className={styles.part}>
              <li className={styles.link}>
                <Link href="/colliers">colliers</Link>
              </li>
              <li className={styles.link}>
                <Link href="/boucles-d-oreilles">boucles d&apos;oreilles</Link>
              </li>
              <li className={styles.link}>
                <Link href="/idées-cadeaux">idées cadeaux</Link>
              </li>
              <li className={styles.link}>
                <Link href="/mariage">réparations</Link>
              </li>
            </ul>
            <div className={styles.cart}>
              <div className={styles.icon}>
                <AiOutlineShoppingCart />
              </div>
              <span className={styles.count}>1</span>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
