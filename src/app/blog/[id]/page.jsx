import styles from './page.module.scss';
import Image from 'next/image';

async function getData(id) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json();
}


const BlogId = async ({ params }) => {
	const data = await getData(params.id);
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.info}>
					<h2 className={styles.title}>{data.title}</h2>
					<p className={styles.desc}>{data.body.charAt(0).toUpperCase() + data.body.slice(1)}</p>
					<div className={styles.author}>
						{/* <Image
							src={'/websites.jpg'}
							alt="websites.jpg'"
							width={40}
							height={40}
							className={styles.avatar} /> */}
						{/* <span className={styles.username}>Username</span> */}
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
				<p className={styles.text}>{data.body.charAt(0).toUpperCase() + data.body.slice(1)}</p>
			</div>
		</div>
	)
}

export default BlogId