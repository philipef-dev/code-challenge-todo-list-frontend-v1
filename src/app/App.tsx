import React from 'react';
import { TaskList } from 'pages/TaskList';
import { CreateTask } from 'pages/CreateTask';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import useTasks from 'hooks/useTasks';
import { Container, Area } from './App.styles';
import { GlobalStyle } from 'styles/global';

function App() {
  const { tasks, addTask, completeTask, deleteTask } = useTasks();
  return (
    <Router>
      <Container>
        <Area>
          <Switch>
            <Route exact path="/">
              <TaskList
                tasks={tasks}
                onDelete={deleteTask}
                onComplete={completeTask}
              />
            </Route>
            <Route path="/create-task">
              <CreateTask onNewTask={addTask} />
            </Route>
          </Switch>
        </Area>
        <GlobalStyle />
      </Container>
    </Router>
  );
}

export default App;
