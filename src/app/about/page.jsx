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
					<h2>Знания AI</h2>
					<h3 className={styles.desc}>Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты.</h3>
				</div>

			</div>
			<div className={styles.textContainer}>
				<div className={styles.item}>
					<h2>Кто мы такие?</h2>
					<p className={styles.desc}>
						Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Имени, единственное! Подпоясал заголовок ipsum коварный текстов? Вдали, семантика ты?
						<br />
						<br />
						Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Предупреждал семь свой большого, вершину грустный океана lorem ручеек даже.
					</p>
				</div>

				<div className={styles.item}>
					<h1>What We Do?</h1>
					<p className={styles.desc}>
						Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Щеке первую диких, буквоград страна курсивных маленькая коварных. Текст текстов щеке оксмокс мир силуэт рукопись свой сбить повстречался все продолжил.
						<br />
						<br /> - Динамические веб-сайты
						<br />
						<br /> - Быстро и качественно
						<br />
						<br /> - Мобильная разработка
					</p>
					<Button url={'/contact'} text={'Контакты'} />
				</div>



			</div>
		</div>
	)
}

export default About