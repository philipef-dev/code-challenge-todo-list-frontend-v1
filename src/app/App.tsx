import React from 'react';
import { Container, Area } from './App.styles';
import { TaskList } from 'pages/TaskList';
import { GlobalStyle } from 'styles/global';
import useTasks from 'hooks/useTasks';

function App() {
  const { tasks, completeTask, deleteTask } = useTasks();
  return (
    <Container>
      <Area>
        <TaskList tasks={tasks} onDelete={deleteTask} onComplete={completeTask} />
      </Area>
      <GlobalStyle />
    </Container>
  );
}

export default App;
