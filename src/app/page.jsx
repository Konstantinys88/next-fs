import styles from './page.module.scss';
import Hero from "public/hero.png"

import Image from 'next/image';
import Button from '@/components/button/Button';


export default function Home() {
	return (
		<main className={styles.container}>
			<div className={styles.item}>
				<h1 className={styles.title}>Будущее искусственного интеллекта в ближайшие несколько лет</h1>
				<p className={styles.desc}>
					Воплощаем вашу идею в реальность. Мы объединяем команды из мировой индустрии высоких технологий.
				</p>
				<Button url={'/portfolio'} text='Наши работы' />
			</div>
			<div className={styles.item}>
				<Image src={Hero} alt='Hero' className={styles.img} />
			</div>
		</main>
	)
}
