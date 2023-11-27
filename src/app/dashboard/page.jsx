"use client"

import useSWR from 'swr'
import { useState, useEffect } from 'react';

const Daschboard = () => {

	const fetcher = (...args) => fetch(...args).then(res => res.json());
	const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);
	// console.log(data);

	return (
		<div>Daschboard</div>
	)
}

export default Daschboard