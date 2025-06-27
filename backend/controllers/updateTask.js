import TaskModel from "../models/TaskModel.js";

const updateTask = async (req,res)=>{
    try {
        const {id} = req.params;
        const { name, description } = req.body;
        if (!name) {
      return res.status(404).json({
        success: false,
        message: "name is not found",
        data: {},
      });
    }
        if(!id){
            return res.status(404).json({
                success : false,
                message : "Id not found",
                data : {}
            })
        }
    const Task = await TaskModel.findById(id);
    if(!Task){
            return res.status(404).json({
                success : false,
                message : "Id not found and check again",
                data : {}
            })
        }
        Task.name = name;
        Task.description = description || Task.description;
        await Task.save();
    return res.status(200).json({
      success: true,
      message: "task updated successfully",
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
export default updateTask;
;