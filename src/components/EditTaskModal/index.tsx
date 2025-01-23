import React, { useState } from 'react';
import { InputGroup, Modal, ModalContainer, Titulo } from 'pages/TaskList/styles';
import { BtnPage } from 'styles/global';
import { ITasksProps } from 'types/tasks';

interface EditTaskModalProps {
  task: ITasksProps;
  onSave: (editedTask: ITasksProps) => void;
  onCancel: () => void;
}

export const EditTaskModal = ({ task, onSave, onCancel }: EditTaskModalProps) => {
  const [taskToEdit, setTaskToEdit] = useState<ITasksProps>(task);

  const handleSaveTask = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(taskToEdit);
  };

  return (
    <ModalContainer>
      <Modal>
        <header>
          <Titulo>Editar tarefa</Titulo>
          <div>
            <button onClick={onCancel}>X</button>
          </div>
        </header>
        <form onSubmit={handleSaveTask}>
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
            <BtnPage onClick={onCancel}>Cancelar</BtnPage>
          </div>
        </form>
      </Modal>
    </ModalContainer>
  );
};
