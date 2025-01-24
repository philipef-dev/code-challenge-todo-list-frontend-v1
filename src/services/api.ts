import axios from 'axios';
import { ITasksProps, INewTodoProps } from '../types/tasks';

const url = 'http://localhost:3000';

const axiosConfig = { headers: { 'Content-Type': 'application/json' } };

export async function todoListService(): Promise<ITasksProps[]> {
  try {
    const response = await axios.get<ITasksProps[]>(`${url}/todos`);
    return response.data;
  } catch (error) {
    console.error('Erro ao carregar lista de tarefas:', error);
    throw error;
  }
}

export async function addTodo(newTodo: INewTodoProps) {
  try {
    const response = await axios.post(`${url}/todos`, newTodo, axiosConfig);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar nova tarefa:', error);
    throw error;
  }
}

export async function deleteTodo(todoId: string) {
  try {
    await axios.delete(`${url}/todos/${todoId}`);
  } catch (error) {
    console.error('Erro ao excluir tarefa:', error);
    throw error;
  }
}

export async function updateTaskService(todoId: string, newTaks: INewTodoProps) {
  try {
    const response = await axios.put(`${url}/todos/${todoId}`, newTaks, axiosConfig);
    return response.data;
  } catch (error) {
    console.error('Erro ao editar tarefa:', error);
    throw error;
  }
}
