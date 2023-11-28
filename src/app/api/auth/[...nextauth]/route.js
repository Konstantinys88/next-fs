import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
require('dotenv').config()

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRETT,
		}),
	],
})

export { handler as GET, handler as POST }