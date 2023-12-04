import Link from 'next/link';
import styles from './page.module.scss';

import Image from 'next/image';

async function getData() {
	const res = await fetch(process.env.NEXTAUTH_URL + "/api/posts", { cache: 'no-store' })

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
				// console.log('Imageeee' + item.img)
				return (
					<Link href={`blog/${item._id}`} className={styles.container} key={item._id}>
						<div>
							<Image
								src={item.img !== ''? item.img: "/AI.webp" }
								alt='image'
								width={400}
								height={250}
								className={styles.image} />
						</div>
						<div>
							<h2 className={styles.title}>{item.title}</h2>
							<p className={styles.desc}>{item.desc}</p>
						</div>
					</Link>
				)
			})}

		</div>
	)
}

export default Blog