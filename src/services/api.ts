import axios from 'axios';
import { ITasksProps } from '../types/tasks';

const url = 'http://localhost:4000/';

export async function todoListService(): Promise<ITasksProps[]> {
  const response = await axios.get<ITasksProps[]>(`${url}todos`);
  return response.data;
}

export async function addTodo(newTodo: ITasksProps) {
  const response = await axios.post(`${url}todos`, newTodo);
  return response.data;
}

export async function deleteTodo(todoId: string) {
  await axios.delete(`${url}todos/${todoId}`);
}
