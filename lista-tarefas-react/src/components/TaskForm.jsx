import { useState } from "react";

function TaskForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

    if (titulo.trim() === "") {
      return;
    }


    onAdicionar(titulo);

    setTitulo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskForm;
