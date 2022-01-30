import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
  taskname: String,
});

const TaskMessage = mongoose.model('TaskMessage', taskSchema);

export default TaskMessage;
