import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
require('dotenv').config()

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			// clientId: "135522685600-kvced9ru0e7hl32thpl4agfcstlffebb.apps.googleusercontent.com",
			// clientSecret: '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',
		}),
	],
})

export { handler as GET, handler as POST }