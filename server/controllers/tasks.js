import TaskMessage from '../models/taskMessage.js';

export const getTasks = async (req, res) => {
  try {
    const taskmessages = await TaskMessage.find();
    res.status(200).json(taskmessages);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const task = req.body;
  const newTask = new TaskMessage(task);
  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
