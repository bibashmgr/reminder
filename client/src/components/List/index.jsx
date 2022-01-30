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
    }, []);

  return (
      <ListContainer>
          <ListBox>
            {tasks.map((task, index) => {
              return(
                <Item key={index}>
                  <ItemContent>
                    <ContentCheckBox type='checkbox' />
                    <ContentText type='text' value={task.taskname} disabled />
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
