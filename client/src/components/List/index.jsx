import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

// elements
import { ListContainer, ListBox, Item, ItemContent, ContentCheckBox, ContentText , ItemIcons, DeleteIcon } from './ListElements';

const List = () => {
  
  const url = 'http://localhost:4000/tasks';

  // styles:object:
  const completedStyle = {
    textDecoration: 'line-through',
    opacity: '0.5'
  }
  const incompletedStyle = {
    textDecoration: 'none',
    opacity: '1'
  }
  
  // states:
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(res => res.data)
      .then(data => setTasks(data))
      .catch(error => console.log(error.message));

      //TODO: Add clean-up function

    }, [tasks]);

    // handlers:
    const handleCheck = (e) => {
      let taskid = e.target.dataset.taskid;
      if(e.target.checked === true) {
        axios.patch(`${url}/${taskid}`, { isCompleted: true })
          .then(res => console.log(res))
          .catch(error => console.log(error));
      } else {
        axios.patch(`${url}/${taskid}`, { isCompleted: false })
          .then(res => console.log(res))
          .catch(error => console.log(error));
      }
    }

    const handleDelete = (e) => {
      let taskid  = e.target.dataset.taskid;
      axios.delete(`${url}/${taskid}`)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }

  return (
      <ListContainer>
          <ListBox>
            {tasks.map((task, index) => {
              return(
                <Item key={index}>
                  <ItemContent>
                    <ContentCheckBox type='checkbox' data-taskid={task._id} onChange={handleCheck} checked={task.isCompleted ? true : false} />
                    <ContentText type='text' value={task.taskname} id={task._id} style={task.isCompleted ? completedStyle : incompletedStyle} disabled />
                  </ItemContent>
                  <ItemIcons>
                    <DeleteIcon data-taskid={task._id} onClick={handleDelete} />
                  </ItemIcons>
                </Item>
              )
            })}
          </ListBox>
      </ListContainer>
  );
};

export default List;
