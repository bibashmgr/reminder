import mongoose from 'mongoose';

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

export const updateTask = async (req, res) => {
  const { id: _id } = req.params;
  const task = req.body;

  // if (mongoose.Types.ObjectID.isValid(_id)) {
  //   return res.status(404).send('Cannot find the task having that id');
  // }

  const updatedTask = await TaskMessage.findByIdAndUpdate(_id, task, {
    new: true,
  });

  res.json(updatedTask);
};

export const deleteTask = async (req, res) => {
  const { id: _id } = req.params;

  await TaskMessage.findByIdAndRemove(_id);

  res.json('task deleted sucessfully.');
};
