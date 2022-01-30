import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
  name: String,
});

const taskModel = mongoose.model('taskModel', taskSchema);

export default taskModel;
