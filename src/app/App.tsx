import React from 'react';
import { Container, Area } from './App.styles';
import { TaskList } from 'pages/TaskList';
import { GlobalStyle } from 'styles/global';
import useTasks from 'hooks/useTasks';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CreateTask } from 'pages/TaskList/CreateTask';

function App() {
  const { tasks, completeTask, deleteTask } = useTasks();
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
              <CreateTask />
            </Route>
          </Switch>
        </Area>
        <GlobalStyle />
      </Container>
    </Router>
  );
}

export default App;
