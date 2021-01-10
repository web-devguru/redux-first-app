import React from 'react';
import { ListGroup } from "react-bootstrap";
import Task from './Task';

const TaskList = ({ tasks }) => {

  if (tasks.length)
    return (
      <ListGroup>
        {
          tasks.map(task =>
            <Task key={task.id} task={task} />
          )
        }
      </ListGroup>
    )
  else return null;
}

export default TaskList;