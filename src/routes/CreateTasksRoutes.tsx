import React from 'react';
import { Route } from 'react-router-dom';
import useTasks from 'hooks/useTasks';
import { CreateTask } from 'pages/CreateTask';

export const CreateTaskRoutes = () => {
  const { addTask } = useTasks();

  return (
    <Route
      path="/create-task"
      component={() => <CreateTask onNewTask={addTask} />}
    />
  );
};
