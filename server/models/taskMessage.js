import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
  taskname: String,
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const TaskMessage = mongoose.model('TaskMessage', taskSchema);

export default TaskMessage;
