import { useEffect, useState } from "react";

import TaskForm from "../components/TaskForm";

import TaskItem from "../components/TaskItem";

function Tasks() {
  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");

    if (tarefasSalvas) {
      return JSON.parse(tarefasSalvas);
    }

    return [
      {
        id: 1,
        titulo: "Estudar React",
        concluida: false,
      },
      {
        id: 2,
        titulo: "Fazer trabalho da faculdade",
        concluida: false,
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

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

  function excluirTarefa(id) {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.filter((tarefa) => tarefa.id !== id),
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
            onExcluir={excluirTarefa}
          />
        ))}
      </ul>
    </main>
  );
}

export default Tasks;
