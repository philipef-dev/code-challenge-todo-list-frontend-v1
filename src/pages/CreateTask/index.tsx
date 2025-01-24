import React, { ChangeEvent, FormEvent, useState } from 'react';
import { DescriptionTasks, NewTaskForm } from './styles';
import { Titulo } from 'pages/TaskList/styles';
import { Container } from 'app/App.styles';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { addTodo } from 'services/api';
import { validateTask } from 'helpers/validateTask';
import { BtnPage } from 'styles/global';
import { Link, useHistory } from 'react-router-dom';

export const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const taskData = { title, description };

    if (validateTask(taskData)) {
      try {
        await addTodo(taskData);
        alert(
          'Nova tarefa adicionada com sucessoo! Você será redirecionado para a lista de tarefas.'
        );
        history.push('/');

        setTitle('');
        setDescription('');
      } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
        alert('Ocorreu um erro ao adicionar a tarefa. Tente novamente.');
      }
    }
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function onChangeDescription(event: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value);
  }

  return (
    <>
      <Titulo>Crie uma nova tarefa</Titulo>
      <Container>
        <NewTaskForm onSubmit={handleSubmit}>
          <input
            placeholder="Adicione o título da tarefa"
            onChange={onChangeTitle}
            value={title}
          />
          <DescriptionTasks
            placeholder="Adicione uma descrição para a tarefa"
            rows={10}
            cols={70}
            value={description}
            onChange={onChangeDescription}
          />
          <div>
            <BtnPage type="submit" title="Criar uma nova tarefa">
              <AiOutlinePlusCircle size={40} />
            </BtnPage>
            <Link to="/">
              <BtnPage title="Ir para a pagina de lista de tarefas">
                Lista de tarefas
              </BtnPage>
            </Link>
          </div>
        </NewTaskForm>
      </Container>
    </>
  );
};
