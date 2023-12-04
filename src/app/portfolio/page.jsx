
import styles from './page.module.scss';
import Link from 'next/link';


const Portfolio = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.selectTitle}>Галерея</h2>
			<div className={styles.items}>
				<Link className={styles.item} href={'/portfolio/illustrations'}>
					<span className={styles.title}>Илюстрации</span>
				</Link>
				<Link className={styles.item} href={'/portfolio/websites'}>
					<span className={styles.title}>Вебсайты</span>
				</Link>
				<Link className={styles.item} href={'/portfolio/applications'}>
					<span className={styles.title}>Приложения</span>
				</Link>

			</div>

		</div>
	)
}

export default Portfolio