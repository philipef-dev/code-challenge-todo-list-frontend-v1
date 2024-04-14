import { useEffect, useState } from 'react';
import { ITasksProps } from 'types/tasks';
import { v4 as uuidv4 } from 'uuid';
import { deleteTodo, todoListService } from 'services/api';

interface useTasksProps {
  tasks: ITasksProps[];
  addTask: (title: string, description: string, isCompleted: boolean) => void;
  completeTask: (taskId: string) => void;
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

  const addTask = (title: string, description: string, isCompleted: boolean) => {
    if (title.trim() !== '' && description.trim() !== '') {
      const newTask = {
        id: uuidv4(),
        title: title,
        description: description,
        isCompleted: isCompleted,
      };

      setTasks([...tasks, newTask]);
    }
  };

  const completeTask = (taskId: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (taskId: string) => {
    deleteTodo(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return { tasks, addTask, completeTask, deleteTask };
};

export default useTasks;
