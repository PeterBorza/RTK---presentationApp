import React, { ReactNode, ReactPortal } from "react";
import styles from "./ScrollPage.module.scss";

export interface PagesType<T> {
    id: string;
    label: string | undefined;
    content: T;
}

type Elements = ReactNode | ReactPortal;

export interface ScrollProps<T> {
    pages?: PagesType<T>[];
}

const ScrollPage = <T extends Elements>({ pages }: ScrollProps<T>) => {
    return (
        <section className={styles.section}>
            <aside className={styles["aside-navigation"]}>
                <ul className={styles["link-shell"]}>
                    {pages &&
                        pages.map(link => (
                            <li key={`scroll-label-${link.id}`}>
                                <a href={`#${link.label}`}>{link.label}</a>
                            </li>
                        ))}
                </ul>
            </aside>
            {pages &&
                pages.map(link => (
                    <article
                        key={`scroll-content-${link.id}`}
                        className={styles.article}
                        id={link.label}
                    >
                        {link.content}
                    </article>
                ))}
        </section>
    );
};

export default ScrollPage;
