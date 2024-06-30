import mongoose from "mongoose";



const todoSchema = mongoose.Schema({

    todo:{
        type:String,
        required:[true,"todo is required"]
    }
},{TimeRanges:true})


const todoModel = mongoose.model("Todos",todoSchema);

export default todoModel;