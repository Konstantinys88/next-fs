import Image from 'next/image';
import styles from './page.module.scss';
import Button from '@/components/button/Button';

const Contacts = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Let`s Keep in Touch</h2>
			<div className={styles.content}>
				<div className={styles.imgContainer}>
					<Image
						src={'/contact.png'}
						alt='contact'
						fill={true}
						className={styles.image} />
				</div>
				<form className={styles.form}>
					<input type="text" placeholder='Name' className={styles.input} />
					<input type="text" placeholder='E-mail' className={styles.input} />
					<textarea
						className={styles.input}
						placeholder='Message'
						name=""
						id=""
						cols="30"
						rows="10"></textarea>
						<Button url={'#'} text={'Send'} />
				</form>
				
			</div>
		</div>
	)
}

export default Contacts