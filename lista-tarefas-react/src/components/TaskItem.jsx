function TaskItem({ tarefa, onConcluir }) {
  return (
    <li>
      {tarefa.titulo}
      {tarefa.concluida && <span> - Concluída</span>}

      <button onClick={() => onConcluir(tarefa.id)}>
        Concluir
      </button>
    </li>
  );
}

export default TaskItem;
