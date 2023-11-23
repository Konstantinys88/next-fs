
import styles from './page.module.scss';
import Link from 'next/link';


const Portfolio = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.selectTitle}>Choose a gallery</h2>
			<div className={styles.items}>
				<Link className={styles.item} href={'/portfolio/illustrations'}>
					<span className={styles.title}>Illustration</span>
				</Link>
				<Link className={styles.item} href={'/portfolio/websites'}>
					<span className={styles.title}>Websites</span>
				</Link>
				<Link className={styles.item} href={'/portfolio/applications'}>
					<span className={styles.title}>Application</span>
				</Link>

			</div>

		</div>
	)
}

export default Portfolio