import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import PageContainer from "../components/PageContainer";

const tarefasIniciais = [
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

function Tasks() {
  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");

    return tarefasSalvas ? JSON.parse(tarefasSalvas) : tarefasIniciais;
  });

  const [filtro, setFiltro] = useState("todas");

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "pendentes") {
      return !tarefa.concluida;
    }

    if (filtro === "concluidas") {
      return tarefa.concluida;
    }

    return true;
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
    <PageContainer>
      <h2>Tarefas</h2>
      <p>Área de tarefas.</p>

      <div>
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("pendentes")}>Pendentes</button>
        <button onClick={() => setFiltro("concluidas")}>Concluídas</button>
      </div>

      <TaskForm onAdicionar={adicionarTarefa} />

      {tarefasFiltradas.length === 0 ? (
        <p>Nenhuma tarefa encontrada.</p>
      ) : (
        <ul>
          {tarefasFiltradas.map((tarefa) => (
            <TaskItem
              key={tarefa.id}
              tarefa={tarefa}
              onConcluir={concluirTarefa}
              onExcluir={excluirTarefa}
            />
          ))}
        </ul>
      )}
    </PageContainer>
  );
}

export default Tasks;
