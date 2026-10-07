import "./TaskItem.css";

function TaskItem({ tarefa, onConcluir, onExcluir }) {
  return (
    <li className={`task-item ${tarefa.concluida ? "concluida" : ""}`}>
      <span className="task-title">
        {tarefa.titulo}

        {tarefa.concluida && <span className="task-status"> - Concluída</span>}
      </span>

      <div className="task-actions">
        <button onClick={() => onConcluir(tarefa.id)}>
          {tarefa.concluida ? "Desfazer" : "Concluir"}
        </button>

        <button onClick={() => onExcluir(tarefa.id)}>Excluir</button>
      </div>
    </li>
  );
}

export default TaskItem;
