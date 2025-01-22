import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';
import { BiEditAlt } from 'react-icons/bi';
import { TbClipboardText } from 'react-icons/tb';
import { ITasksProps } from 'types/tasks';
import {
  ContainerTodo,
  Titulo,
  Container,
  Todo,
  EmptyList,
  BtnCreateNewTask,
} from './styles';
import { updateTaskService } from 'services/api';

interface TaskListProps {
  tasks: ITasksProps[];
  onDelete: (taskId: string) => void;
  onEdit: (taskId: string, tasks: ITasksProps) => void;
}

export const TaskList = ({ tasks, onDelete, onEdit }: TaskListProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<ITasksProps | null>(null);

  const handleEditTask = (taskId: string) => {
    const task = tasks.find((t) => t.id === taskId) || null;
    setTaskToEdit(task);
    if (task) {
      setIsEditing(true);
    }
  };

  const handleSaveTask = async (editedTask: ITasksProps) => {
    try {
      await updateTaskService(editedTask.id, editedTask);
      onEdit(editedTask.id, editedTask);
      setTaskToEdit(null);
      setIsEditing(false);
    } catch (error) {
      console.log('Erro ao salvar as aletrações na tarefa', error);
    }
  };

  return (
    <>
      <Titulo>Lista de tarefas</Titulo>
      <Container>
        <ContainerTodo>
          {tasks.map((t) => (
            <Todo key={t.id}>
              <div>
                <h3>Título:</h3>
                <p>{t.title}</p>
              </div>
              <div>
                <h3>Descrição:</h3>
                <p> {t.description}</p>
              </div>
              <button onClick={() => onDelete(t.id)} title="Deletar tarefa">
                <FaRegTrashAlt />
              </button>
              <button onClick={() => handleEditTask(t.id)} title="Editar uma tarefa">
                <BiEditAlt />
              </button>
            </Todo>
          ))}
          {tasks.length <= 0 && (
            <EmptyList>
              <TbClipboardText size={40} />
              <p>Você ainda não possui nenhuma tarefa cadastrada.</p>
              <span>
                Clique na barra azul logo abaixo para criar uma nova tarefa.
              </span>
            </EmptyList>
          )}
          <Link to="/create-task">
            <BtnCreateNewTask>Crie uma nova tarefa</BtnCreateNewTask>
          </Link>
        </ContainerTodo>
      </Container>

      {isEditing && taskToEdit && (
        <div className="modal">
          <h2>Editar tarefa</h2>
          <input
            type="text"
            value={taskToEdit.title}
            onChange={(e) => setTaskToEdit({ ...taskToEdit, title: e.target.value })}
          />
          <input
            type="text"
            value={taskToEdit.description}
            onChange={(e) =>
              setTaskToEdit({
                ...taskToEdit,
                description: e.target.value,
              })
            }
          />
          <button onClick={() => taskToEdit && handleSaveTask(taskToEdit)}>
            Salvar
          </button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </div>
      )}
    </>
  );
};
