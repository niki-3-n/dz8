import React from 'react';
import TaskList from './components/TaskList';
import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #e9ecef;
  padding: 20px;
`;

const AppHeader = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;

const AppTitle = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin: 0;
`;

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <AppTitle>Task Manager</AppTitle>
      </AppHeader>
      <TaskList />
    </AppContainer>
  );
}

export default App; 