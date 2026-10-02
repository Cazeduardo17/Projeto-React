import { useState } from "react";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";

function Tasks() {
  const [tarefas] = useState([
    {
      id: 1,
      titulo: "Estudar React",
    },
    {
      id: 2,
      titulo: "Fazer trabalho da faculdade",
    },
  ]);

  return (
    <main className="page">
      <h2>Tarefas</h2>
      <p>Área de tarefas.</p>

      <TaskForm />
      
      <ul>
        {tarefas.map((tarefa) => (
          <TaskItem key={tarefa.id} tarefa={tarefa} />
        ))}
      </ul>
    </main>
  );
}

export default Tasks;
