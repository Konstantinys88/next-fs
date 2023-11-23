import styles from './page.module.scss';
import Image from 'next/image';

const BlogId = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.info}>
					<h2 className={styles.title}>Title</h2>
					<p className={styles.desc}>Deckr</p>
					<div className={styles.author}>
						<Image
							src={'/websites.jpg'}
							alt="websites.jpg'"
							width={40}
							height={40}
							className={styles.avatar} />
						<span className={styles.username}>Username</span>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image
						src={'/websites.jpg'}
						alt="websites.jpg"
						fill={true}
						className={styles.image} />
				</div>
			</div>
			<div className={styles.content}>
				<p className={styles.text}>Content</p>
			</div>
		</div>
	)
}

export default BlogId