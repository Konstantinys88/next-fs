"use client"

import React from 'react'
import Link from 'next/link'

import styles from './page.module.scss'
import ThemeModTogle from '../themeModTogle/ThemeModTogle';

import { signOut, useSession } from 'next-auth/react';

const links = [
    {
        id: 1,
        title: "Главная",
        url: "/",
    },
    {
        id: 2,
        title: "Портфолио",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Блог",
        url: "/blog",
    },
    {
        id: 4,
        title: "О нас",
        url: "/about",
    },
    {
        id: 5,
        title: "Контакты",
        url: "/contact",
    },
    {
        id: 6,
        title: "Инструменты",
        url: "/dashboard",
    },
];

const Navbar = () => {

    const session = useSession();

    return (
        <nav className={styles.container}>
            <Link href={'/'} className={styles.logo}>AI Будущего</Link>
            <div className={styles.links}>
                <ThemeModTogle />
                {links.map((link) => (
                    <Link key={link.id} href={link.url}>{link.title}</Link>
                ))}

                {session.status == 'authenticated' &&
                    <button className={styles.logout} onClick={signOut}>Выйти</button>}

            </div>
        </nav>
    )
}

export default Navbar