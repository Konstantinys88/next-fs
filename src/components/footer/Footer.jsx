import React from 'react'
import styles from './page.module.scss';

import Image from 'next/image';


const Footer = () => {
    return (
        <footer className={styles.container}>
            <div>2023 This is the future. All rights reserved.</div>
            <div className={styles.social}>
                <Image src={'/vk.png'} width={25} height={25} className={styles.icons} alt='vk.com'/>
                <Image src={'/inst.png'} width={25} height={25} className={styles.icons} alt='inst.com'/>
                <Image src={'/twitter.png'} width={25} height={25} className={styles.icons} alt='twitter.com'/>
                <Image src={'/yt.png'} width={25} height={25} className={styles.icons} alt='yt.com'/>
            </div>
        </footer>
    )
}

export default Footer