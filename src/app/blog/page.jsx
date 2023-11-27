import Link from 'next/link';
import styles from './page.module.scss';

import Image from 'next/image';

async function getData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json();
}

const Blog = async () => {
	const data = await getData();
	return (
		<div >

			{data.map((item) => {
				return (
					<Link href={`blog/${item.id}`} className={styles.container} key={item.id}>
						<div>
							<Image
								src={'/websites.jpg'}
								alt='image'
								width={400}
								height={250}
								className={styles.image} />
						</div>
						<div>
							<h2 className={styles.title}>{item.title}</h2>
							<p className={styles.desc}>{item.body.charAt(0).toUpperCase() + item.body.slice(1)}</p>
						</div>
					</Link>
				)
			})}

		</div>
	)
}

export default Blog