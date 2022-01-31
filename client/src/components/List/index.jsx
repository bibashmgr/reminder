import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

// elements
import { ListContainer, ListBox, Item, ItemContent, ContentCheckBox, ContentText , ItemIcons, EditIcon, DeleteIcon } from './ListElements';

const List = () => {
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:4000/tasks';
    axios.get(url)
      .then(res => res.data)
      .then(data => setTasks(data))
      .catch(error => console.log(error.message));

      //TODO: Add clean-up function

    }, []);

    const handleCheck = (e) => {
      
    }

  return (
      <ListContainer>
          <ListBox>
            {tasks.map((task, index) => {
              return(
                <Item key={index}>
                  <ItemContent>
                    <ContentCheckBox type='checkbox' data-taskid={task._id} onClick={handleCheck} />
                    <ContentText type='text' value={task.taskname} id={task._id} disabled />
                  </ItemContent>
                  <ItemIcons>
                    <EditIcon />
                    <DeleteIcon />
                  </ItemIcons>
                </Item>
              )
            })}
          </ListBox>
      </ListContainer>
  );
};

export default List;
