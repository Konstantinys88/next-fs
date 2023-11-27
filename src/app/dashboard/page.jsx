"use client"

import useSWR from 'swr'
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import styles from './page.module.scss';

const Daschboard = () => {

	const session = useSession();
	console.log(session)

	const fetcher = (...args) => fetch(...args).then(res => res.json());
	const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);
	// console.log(data);

	return (
		<div>Daschboard</div>
	)
}

export default Daschboard