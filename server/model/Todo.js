import mongoose from 'mongoose'


const todoSchema = new mongoose.Schema({
    data:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const todo = mongoose.model("Todo",todoSchema)

export default todo;