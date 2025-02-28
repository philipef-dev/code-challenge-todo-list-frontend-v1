import styled from 'styled-components';

export const Container = styled.main`
  background-color: var(--gray-600);
  padding: 0.625rem;
  border-radius: 10px;
  margin-top: 2.5rem;
`;

export const Titulo = styled.h1`
  margin-top: 2rem;
  text-align: center;
  font-size: 1.875rem;
  color: var(--white);
`;

export const ContainerTodo = styled.section`
  padding: 0.625rem;
  border-radius: 5px;
`;

export const Todo = styled.article`
  background-color: var(--gray-500);
  color: var(--text-body);
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 0.625rem;
  cursor: pointer;

  &:hover {
    background-color: var(--gray-400);
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    gap: 0.315rem;
  }

  button {
    background-color: var(--gray-400);
    color: var(--gray-200);
    border: none;
    border-radius: 2px;
    padding: 0.25rem;
    margin-right: 10px;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--gray-500);
  }
`;

export const EmptyList = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  color: var(--gray-300);
  text-align: center;
`;

export const BtnCreateNewTask = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: var(--blue-dark);
  border-radius: 5px;
  border: none;
  color: var(--white);
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: var(--blue-light);
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background-color: var(--gray-600);
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  padding: 1rem;

  ${Titulo} {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  label {
    color: var(--gray-300);
    font-weight: 700;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--gray-500);
    padding-bottom: 0.5rem;
  }

  .btnGroup {
    display: flex;
    justify-content: flex-end;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;

  label {
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    background-color: var(--gray-500);
    color: var(--text-body);
  }

  textarea {
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    background-color: var(--gray-500);
    color: var(--text-body);
  }
`;
