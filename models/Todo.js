import mongoose, { mongo } from "mongoose";

const Schema= mongoose.Schema


const TodoSchema = new Schema({
    text: {
        type: String
    }, 
    complete: {
        type: Boolean, 
        default: false
    }, 
    timestamp: {
        type: String, 
        default: Date.now()
    }
})

const todo = mongoose.model('Todo', TodoSchema)

export default todo;