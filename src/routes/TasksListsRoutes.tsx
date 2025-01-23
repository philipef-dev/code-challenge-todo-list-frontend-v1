import React from 'react';
import { Route } from 'react-router-dom';
import { TaskList } from '../pages/TaskList';
import useTasks from 'hooks/useTasks';
import { ITasksProps } from 'types/tasks';

export const TaskListsRoutes = () => {
  const { tasks, deleteTask, updateTask } = useTasks();

  const handleEditTask = (taskId: string, newTask: ITasksProps) => {
    updateTask(taskId, newTask);
  };

  return (
    <Route
      path="/"
      component={() => (
        <TaskList tasks={tasks} onDelete={deleteTask} onEdit={handleEditTask} />
      )}
    />
  );
};
