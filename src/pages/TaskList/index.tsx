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
  ModalContainer,
  Modal,
  InputGroup,
} from './styles';
import { updateTaskService } from 'services/api';
import { BtnPage } from 'styles/global';

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
        <ModalContainer>
          <Modal>
            <header>
              <Titulo>Editar tarefa</Titulo>
              <div>
                <button onClick={() => setIsEditing(false)}>X</button>
              </div>
            </header>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveTask(taskToEdit);
              }}
            >
              <InputGroup>
                <label htmlFor="title">Título: </label>
                <input
                  type="text"
                  value={taskToEdit.title}
                  onChange={(e) =>
                    setTaskToEdit({ ...taskToEdit, title: e.target.value })
                  }
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="description">Descrição: </label>
                <textarea
                  value={taskToEdit.description}
                  onChange={(e) =>
                    setTaskToEdit({
                      ...taskToEdit,
                      description: e.target.value,
                    })
                  }
                />
              </InputGroup>
              <div className="btnGroup">
                <BtnPage type="submit">Salvar</BtnPage>
                <BtnPage onClick={() => setIsEditing(false)}>Cancelar</BtnPage>
              </div>
            </form>
          </Modal>
        </ModalContainer>
      )}
    </>
  );
};
