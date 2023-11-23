import Link from 'next/link';
import styles from './page.module.scss';

import Image from 'next/image';

const Blog = () => {
	return (
		<div >
			<Link href={'blog/test'} className={styles.container} key={1}>
				<div>
					<Image
						src={'/websites.jpg'}
						alt='image'
						width={400}
						height={250}
						className={styles.image} />
				</div>
				<div>
					<h2 className={styles.title}>Title</h2>
					<p className={styles.desc}>Descr</p>
				</div>
			</Link>

			<Link href={'blog/test2'} className={styles.container} key={2}>
				<div>
					<Image
						src={'/websites.jpg'}
						alt='image'
						width={400}
						height={250}
						className={styles.image} />
				</div>
				<div>
					<h2 className={styles.title}>Title</h2>
					<p className={styles.desc}>Descr</p>
				</div>
			</Link>

		</div>
	)
}

export default Blog