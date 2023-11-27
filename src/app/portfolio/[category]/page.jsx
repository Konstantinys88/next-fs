import Button from '@/components/button/Button';
import styles from './page.module.scss';
import Image from 'next/image';

import { items } from './data';
import { notFound } from 'next/navigation';

const getData = (category) => {
	const data = items[category]

	if (data) {
		return data
	}
	return notFound()
}


const Category = ({ params }) => {
	console.log(params)

	const data = getData(params.category);

	return (

		<div className={styles.container}>
			<h2 className={styles.catTitle}>{params.category}</h2>

			{data.map((item) => (
				<div className={styles.item} key={item.id}>
					<div className={styles.content}>
						<h1 className={styles.title}>{item.title}</h1>
						<p className={styles.desc}>{item.desc}</p>
						<Button text="See More" url="#" />
					</div>
					<div className={styles.imgContainer}>
						<Image
							className={styles.img}
							fill={true}
							src={item.image}
							alt={item.title}
						/>
					</div>
				</div>
			))}

		</div>

	)
}

export default Category