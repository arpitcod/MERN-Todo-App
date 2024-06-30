import mongoose from "mongoose";

const connectDb = async () =>{
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017/todo-2");
        console.log("mongodb connected successfully ",connect.connection.host)
    } catch (error) {
        console.log('error in database',error)
    }
}


export default connectDb;