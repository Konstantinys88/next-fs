import Image from 'next/image'
import styles from './page.module.scss'
import Button from '@/components/button/Button'

import AI from 'public/AI.webp'

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src={AI}
					alt='img about'
					fill={true}
					className={styles.img} />
				<div className={styles.imgText}>
					<h2>Lorem ipsum dollor sit</h2>
					<h3 className={styles.desc}>Lorem ipsum dollor sit amet consectetur adipisicing elit</h3>
				</div>

			</div>
			<div className={styles.textContainer}>
				<div className={styles.item}>
					<h2>Who are We?</h2>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
						quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
						suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
						eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
						beatae, a suscipit eos. Animi quibusdam cum omnis officiis
						<br />
						<br />
						voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
						esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
						officiis voluptatum quo ea eveniet?
					</p>
				</div>

				<div className={styles.item}>
					<h1>What We Do?</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
						quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
						suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
						eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
						Creative Illustrations
						<br />
						<br /> - Dynamic Websites
						<br />
						<br /> - Fast and Handy
						<br />
						<br /> - Mobile Apps
					</p>
					<Button url={'/contact'} text={'Contact'} />
				</div>



			</div>
		</div>
	)
}

export default About