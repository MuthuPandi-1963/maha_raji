import TaskModel from "../models/TaskModel.js";

const createTask = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res.status(404).json({
        success: false,
        message: "name is not found",
        data: {},
      });
    }
    const newTask = await TaskModel.create({
      name: name,
      description: description,
    });
    console.log(req.body);
    return res.status(201).json({
      success: true,
      message: "task added successfully",
      data: newTask,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: {},
    });
  }
};
export default createTask;
