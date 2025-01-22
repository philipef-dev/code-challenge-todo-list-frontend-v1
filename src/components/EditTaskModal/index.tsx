import { InputGroup, Modal, ModalContainer, Titulo } from 'pages/TaskList/styles';
import React from 'react';
import { BtnPage } from 'styles/global';

export const EditTaskModal = () => {
  return (
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
  );
};
