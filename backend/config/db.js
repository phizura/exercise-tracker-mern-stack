import mongoose from 'mongoose'

const connectDB = async () => {

    try {
        const uri = process.env.ATLAS_URI;
        await mongoose.connect(uri);

        console.log('MongoDB database connect established successfully');
    } catch (error) {
        console.error(`MongoDB coonection error: ${error}`);
        process.exit(1);
    }

}

export default connectDB;