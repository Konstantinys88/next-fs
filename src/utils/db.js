import mongoose from "mongoose";
require('dotenv').config();


const connect = async () => {

	try {
		// mongoose.set('strictQuery', false);
		await mongoose.connect(process.env.DATABASE_URL);

	} catch (error) {
		throw new Error("Connection failed");
	}
};

export default connect;