import { useEffect, useState } from 'react';
import { ITasksProps } from 'types/tasks';
import { deleteTodo, todoListService } from 'services/api';

interface useTasksProps {
  tasks: ITasksProps[];
  deleteTask: (taskId: string) => void;
}

const useTasks = (): useTasksProps => {
  const [tasks, setTasks] = useState<ITasksProps[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const tasksData = await todoListService();
        setTasks(tasksData);
      } catch (error) {
        console.error('Erro ao carregar lista de tarefas:', error);
      }
    };

    loadTasks();
  }, []);

  const deleteTask = (taskId: string) => {
    deleteTodo(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return { tasks, deleteTask };
};

export default useTasks;
