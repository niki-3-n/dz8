import React from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 8px 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const DeleteButton = styled.button`
  background-color: #ff4444;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #cc0000;
  }
`;

class TaskList extends React.Component {
  static tasks = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a Todo App' },
    { id: 3, text: 'Master JavaScript' },
    { id: 4, text: 'Study CSS' }
  ];

  handleDelete = (taskId) => {
    const taskIndex = TaskList.tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      TaskList.tasks.splice(taskIndex, 1);
      this.forceUpdate(); // Force re-render after modifying the static array
    }
  };

  render() {
    return (
      <TaskContainer>
        <h2>Task List</h2>
        {TaskList.tasks.map(task => (
          <TaskItem key={task.id}>
            <span>{task.text}</span>
            <DeleteButton onClick={() => this.handleDelete(task.id)}>
              Delete
            </DeleteButton>
          </TaskItem>
        ))}
      </TaskContainer>
    );
  }
}

export default TaskList; 