import TaskModel from "../models/TaskModel.js";

const getTasks = async (req,res)=>{
    try {
    const allTasks = await TaskModel.find();
    return res.status(200).json({
      success: true,
      message: "task fetched successfully",
      data: allTasks,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: {},
    });
  }
}
export default getTasks;