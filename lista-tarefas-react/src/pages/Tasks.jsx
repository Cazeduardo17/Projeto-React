import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

function Tasks() {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      titulo: "Estudar React",
      concluido: false,
    },
    {
      id: 2,
      titulo: "Fazer trabalho da faculdade",
      concluida: false,
    },
  ]);

  function adicionarTarefa(titulo) {
    const novaTarefa = {
      id: Date.now(),
      titulo: titulo,
      concluida: false,
    };

    setTarefas((tarefasAtuais) => [...tarefasAtuais, novaTarefa]);
  }

  function concluirTarefa(id) {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa,
      ),
    );
  }

  return (
    <main>
      <h2>Tarefas</h2>
      <p>Área de tarefas.</p>

      <TaskForm onAdicionar={adicionarTarefa} />

      <ul>
        {tarefas.map((tarefa) => (
          <TaskItem
            key={tarefa.id}
            tarefa={tarefa}
            onConcluir={concluirTarefa}
          />
        ))}
      </ul>
    </main>
  );
}

export default Tasks;
