import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
    name : {
        type :String,
        required : true,
    },
    description : {
        type :String,
        default :'health'
    }
},{timestamps : true})

const TaskModel = mongoose.model("tasks",TaskSchema)
export default TaskModel;