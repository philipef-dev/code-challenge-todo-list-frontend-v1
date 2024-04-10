import React from 'react';
import { Container, Area } from './App.styles';
import { TaskList } from 'pages/TaskList';
import { GlobalStyle } from 'styles/global';

function App() {
  return (
    <Container>
      <Area>
        <TaskList />
        {/* {process.env.REACT_APP_BASE_URL} */}
      </Area>
      <GlobalStyle />
    </Container>
  );
}

export default App;
