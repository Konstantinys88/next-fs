"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
	const [error, setError] = useState(null);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const name = e.target[0].value;
		const email = e.target[1].value;
		const password = e.target[2].value;

		try {
			const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					email,
					password,
				}),
			});
			res.status === 201 &&
				router.push("/dashboard/login?success=Account has been created");
		} catch (err) {
			setError(err);
			console.log(err);
		}
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Создать учетную <br />запись</h2>
			<form onSubmit={handleSubmit} className={styles.form}>
				<input
					type="text"
					placeholder="Ваше имя"
					required
					className={styles.input}
				/>
				<input
					type="text"
					placeholder="Ваш E-mail"
					required
					className={styles.input}
				/>
				<input
					type="password"
					placeholder="Придумайте пароль"
					required
					className={styles.input}
				/>
				<button className={styles.button}>Зарегистрироваться</button>
				{error && "Something went wrong!"}
			</form>
			<span className={styles.or}><h3>- или -</h3></span>
			<Link className={styles.link} href="/dashboard/login">
				<h3>Войдите с существующей <br /> учетной записью</h3>
			</Link>
		</div>
	);
};

export default Register;