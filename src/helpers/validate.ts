interface validateTaskProps {
  title: string;
  description: string;
}

export const validateTask = (task: validateTaskProps): boolean => {
  if (!task.title.trim() || !task.description.trim()) {
    alert('Por favor preencha todos os campos para adicionar uma nova tarefa.');
    return false;
  }
  return true;
};
