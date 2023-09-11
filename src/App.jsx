
import viteLogo from '/rayo.jpg';
import { useState } from 'react';
import {List} from "./components/List"; 
import './App.css';
import data from "./data.json";
import ToDoForm from './components/Addfile';
 
function App() {
const [ DataList, setDataList ] = useState(data);

const handleToggle = (id) => {
  let mapped = DataList.map(task => {
    return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
  });
  setDataList(mapped);
}

const handleFilter = () => {
  let filtered = DataList.filter(task => {
    return !task.complete;
  });
  setDataList(filtered);
}

const addTask = (userInput ) => {
  let copy = [...DataList];
  copy = [...copy, { id: DataList.length + 1, task: userInput, complete: false }];
  setDataList(copy);
}

 
 
 return (
  <div>
        <a href="https://github.com/CodeReplicant" >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
  
      <h1>Lista de tareas</h1>
     <List List={DataList} handleToggle={handleToggle}/>
     <button style={{margin: '20px'}} onClick={handleFilter}>Borrar</button>
    <ToDoForm addTask={addTask}/>
 
    </div>
 );
}
 
export default App;