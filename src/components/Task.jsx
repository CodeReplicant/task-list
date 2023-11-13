import { useState } from 'react';

export function Task({ taskind, handleToggle }) {
  const [userInput, setUserInput] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  const handleEditClick = (e, userInput) => {
    e.preventDefault();
    console.log('Edited task:', userInput);
    setUserInput(userInput.task);
  };

  return (
    <div>
    <p> {taskind.id}.{taskind.task}</p>
    <p></p>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Edite tarea"
      />
      <p></p>
      <button onClick={handleClick} id={taskind.id} key={taskind.id + taskind.task} name="todo" value={taskind.id}>
        {taskind.complete ? "★" : "☆"}
      </button>
      <button onClick={handleEditClick}>Guardar</button>
    </div>
  );
}


