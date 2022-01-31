import React from 'react';
import { useState } from 'react';
import axios from 'axios';

// elements
import { FormContainer, FormBox, InputField, AddButton } from './FormElements';

// api
// import { createTask } from '../../api/index.js';

const Form = () => {

  const [taskData, setTaskData] = useState({
    taskname: '',
  });

  const handleChange = (e) => {
    setTaskData({ taskname: e.target.value });
  }

  const handleSubmit = (e) => {
    const url = 'http://localhost:4000/tasks';
    e.preventDefault();
    
    axios.post(url, taskData)
      .then(res => console.log(res))
      .catch(error => console.log(error.message));

    setTaskData({taskname:''});
  }

  return (
    <FormContainer>
      <FormBox onSubmit={handleSubmit}>
        <InputField type='text' name='taskname' placeholder='Enter task' value={taskData.taskname} onChange={handleChange} />
        <AddButton type='submit' value='Add task' />
      </FormBox>
    </FormContainer>
  );
};

export default Form;
