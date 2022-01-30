import taskModel from '../models/taskModel.js';

export const getTasks = async (req, res) => {
  try {
    const tasksModel = await taskModel.find();
    // console.log(tasksModel);
    res.status(200).json(tasksModel);
  } catch (error) {
    // console.log(error.message);
    res.status(401).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const task = res.body;
  const newTask = new taskModel(task);
  try {
    // console.log(newTask);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    // console.log(error.message);
    res.status(409).json({ message: error.message });
  }
};
