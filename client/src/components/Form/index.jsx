import React from 'react';

// elements
import { FormContainer, FormBox, InputField, AddButton } from './FormElements';

const Form = () => {
  return (
    <FormContainer>
      <FormBox>
        <InputField type='text' placeholder='Enter task' />
        <AddButton type='submit' value='Add task' />
      </FormBox>
    </FormContainer>
  );
};

export default Form;
