import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentionalsProvider from 'next-auth/providers/credentials';
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

require('dotenv').config();

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),

		CredentionalsProvider({
			id: "credentionals",
			name: "Credentionals",
			async authorize(credentials) {
				await connect();

				try {
					const user = await User.findOne({
						email: credentials.email
					})
					if (user) {
						const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
						if (isPasswordCorrect) {
							return user
						} else {
							throw new Error("Не верные данные.");
						}
					} else {
						throw new Error("Такой пользователь не зарегистрирован.");
					}
				} catch (error) {
					throw new Error(error.message);
				}
			}
		})
	],
})

export { handler as GET, handler as POST }