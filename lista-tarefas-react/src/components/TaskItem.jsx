function TaskItem({ tarefa, onConcluir, onExcluir }) {
  return (
    <li>
      <span>
        {tarefa.titulo}

        {tarefa.concluida && <span> - Concluída</span>}
      </span>

      <button onClick={() => onConcluir(tarefa.id)}>
        {tarefa.concluida ? "Desfazer" : "Concluir"}
      </button>

      <button onClick={() => onExcluir(tarefa.id)}> Excluir </button>
    </li>
  );
}

export default TaskItem;
