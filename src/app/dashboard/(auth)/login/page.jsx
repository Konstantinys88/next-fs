"use client"

import React from 'react'
import styles from './page.module.scss';
import { signIn } from 'next-auth/react';

const Login = () => {
	return (
		<div className={styles.container}>
			<button onClick={async () => await signIn("google")}>Login with Google</button>
		</div>
	)
}

export default Login