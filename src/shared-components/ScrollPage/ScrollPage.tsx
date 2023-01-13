import React from "react";

import { HashLink } from "react-router-hash-link";
import { NavLinkUrls } from "app";

import styles from "./ScrollPage.module.scss";
import classNames from "classnames";

export interface PagesType<T> {
    id: string;
    label?: string;
    content: T;
}

export interface ScrollProps<T> {
    pages: PagesType<T>[] | null;
    baseUrl: NavLinkUrls;
    isDarkMode?: boolean;
}

const ScrollPage = <T,>({ pages, baseUrl, isDarkMode = false }: ScrollProps<T>) => {
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
                            <HashLink smooth to={`/${baseUrl}#${link.id}`}>
                                <div className={styles.link_shell__link}>{link.label}</div>
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
                        id={link.id}
                    >
                        {link.content}
                    </article>
                ))}
            </section>
        </>
    );
};

export default ScrollPage;
