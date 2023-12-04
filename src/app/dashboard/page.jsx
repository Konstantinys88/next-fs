"use client"

import useSWR from 'swr'
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const Daschboard = () => {

	const session = useSession();
	const router = useRouter()

	const fetcher = (...args) => fetch(...args).then(res => res.json());
	const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);

	if (session.status == 'loading') {
		return (
			<p>Loading</p>
		)
	}
	if (session.status == 'unauthenticated') {
		router?.push("/dashboard/login")
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const title = e.target[0].value;
		const desc = e.target[1].value;
		// const img = e.target[2].value ? e.target[2].value: "https://avatars.mds.yandex.net/i?id=2efd434bfbb6d6782f71cb5f48ce124bc4ecfb78-11032727-images-thumbs&n=13";

		const img = "https://avatars.mds.yandex.net/i?id=2efd434bfbb6d6782f71cb5f48ce124bc4ecfb78-11032727-images-thumbs&n=13";
		const content = e.target[3].value;

		try {
			await fetch("/api/posts", {
				method: "POST",
				body: JSON.stringify({
					title,
					desc,
					img,
					content,
					username: session.data.user.name,
				}),
			});
			mutate();
			e.target.reset();
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async (id) => {
		try {
			await fetch(`/api/posts/${id}`, {
				method: "DELETE",
			});
			mutate();
		} catch (error) {
			console.log(error)
		}

	}

	if (session.status == "authenticated") {
		return (
			<div className={styles.container}>
				<div className={styles.posts}>
					{isLoading
						? "Loading"
						: data?.map((post) => (
							<div className={styles.post} key={post._id}>
								<div className={styles.imgContainer}>
									<Image
										src={post.img}
										alt={post.title}
										width={200}
										height={100}
									/>
								</div>
								<h2 className={styles.postTitle}>{post.title}</h2>
								<span className={styles.delete} onClick={() => handleDelete(post._id)}>X</span>
							</div>
						))}
				</div>

				<form className={styles.new} onSubmit={handleSubmit}>
					<h1>Добавить новый пост</h1>
					<input type="text" placeholder="Заголовок" className={styles.input} />
					<input type="text" placeholder="Описаник" className={styles.input} />
					<input type="text" placeholder="Картинка" className={styles.input} />
					<textarea cols="30" rows="10" className={styles.textArea} placeholder='Текст' />
					<button className={styles.button}>Отправить</button>
				</form>
			</div>
		);
	}
}

export default Daschboard



// https://avatars.mds.yandex.net/i?id=73bdc0a06d56a69d22ce32baa6f0a09cdc59106e-4568513-images-thumbs&n=13
// https://avatars.mds.yandex.net/i?id=2efd434bfbb6d6782f71cb5f48ce124bc4ecfb78-11032727-images-thumbs&n=13

// console.log('https://avatars.mds.yandex.net/i?id=73bdc0a06d56a69d22ce32baa6f0a09cdc59106e-4568513-images-thumbs&n=13')