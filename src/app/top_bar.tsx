import styles from "./Top_bar.module.css";
import Link from 'next/link'; // Импортируем Link для роутинга

export function Top_bar() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={`${styles.navItem} ${styles.navLeft}`}>
                    <Link className={styles.navLink} href="/">Главная</Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} href="/about">О нас</Link>
                </li>
                <li className={styles.navItem}>
                    <Link className={styles.navLink} href="/contact">Контакты</Link>
                </li>
                <li className={`${styles.navItem} ${styles.navRight}`}>
                    <Link className={styles.navLink} href="/contact">Аккаунт</Link>
                </li>
            </ul>
        </nav>
    );
}