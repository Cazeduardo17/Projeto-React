import { useState } from "react";

function TaskForm() {
  const [titulo, setTitulo] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
      />

      <button type="submit"> Adicionar</button>
    </form>
  );
}
export default TaskForm;
