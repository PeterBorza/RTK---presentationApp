import React, { ReactNode, ReactPortal } from "react";

import { HashLink } from "react-router-hash-link";
import { LinkUrls } from "app";

import styles from "./ScrollPage.module.scss";
import classNames from "classnames";

export interface PagesType<T> {
    id: string;
    label?: string;
    content: T;
}

type Elements = ReactNode | ReactPortal;

export interface ScrollProps<T> {
    pages: PagesType<T>[] | null;
    isDarkMode?: boolean;
}

const ScrollPage = <T extends Elements>({ pages, isDarkMode = false }: ScrollProps<T>) => {
    const sectionClasses = classNames(styles.section, {
        [styles.section__darkMode]: isDarkMode,
    });
    if (!pages) return null;
    return (
        <>
            <aside className={styles.aside_navigation}>
                <ul className={styles.link_shell}>
                    {pages.map(link => (
                        <li key={`scroll-label-${link.id}`}>
                            <HashLink smooth to={`/${LinkUrls.SCROLL}#${link.label}`}>
                                {link.label}
                            </HashLink>
                        </li>
                    ))}
                </ul>
            </aside>
            <section className={sectionClasses}>
                {pages.map(link => (
                    <article
                        key={`scroll-content-${link.id}`}
                        className={styles.article}
                        id={link.label}
                    >
                        {link.content}
                    </article>
                ))}
            </section>
        </>
    );
};

export default ScrollPage;
