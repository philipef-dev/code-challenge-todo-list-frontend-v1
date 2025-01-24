interface validateTaskProps {
  title: string;
  description: string;
}

export const validateTask = (task: validateTaskProps) => {
  if (!task.title.trim() || !task.description.trim()) {
    alert('Por favor, preencha todos os campos');
    return false;
  }
  return true;
};
