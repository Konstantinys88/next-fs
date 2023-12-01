"use client"

import React from 'react'
import styles from './page.module.scss';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
	const session = useSession();
	const router = useRouter();

	if (session.status == 'loading') {
		return (
			<p>Loading</p>
		)
	}
	if (session.status == 'authenticated') {
		router?.push("/dashboard")
	}


	const handleSabmit = (e) => {
		e.preventDefault();

		const email = e.target[0].value;
		const password = e.target[1].value;

		signIn("credentials", { email, password });
	}


	return (
		<div className={styles.container}>

			<form onSubmit={handleSabmit} className={styles.form}>
				<input type="email" placeholder='Email' required className={styles.input} />
				<input type="text" placeholder='Пароль' required className={styles.input} />
				<button className={styles.button}>Войти</button>
			</form>

			<button className={styles.button} onClick={async () => await signIn("google")}>Войти с помощью Google</button>
		</div>
	)
}

export default Login