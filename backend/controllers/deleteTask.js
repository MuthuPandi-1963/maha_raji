import TaskModel from "../models/TaskModel.js";

const deleteTask = async (req,res)=>{
    try {
        const {id} = req.params;
        if(!id){
            return res.status(404).json({
                success : false,
                message : "Id not found",
                data : {}
            })
        }
    const Task = await TaskModel.findByIdAndDelete(id);
    
    return res.status(200).json({
      success: true,
      message: "task deleted successfully",
      data: Task,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
      data: {},
    });
  }
}
export default deleteTask;