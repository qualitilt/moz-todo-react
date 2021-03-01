import React,{useState} from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from './components/FilterButton'


function App(props) {
  const[tasks, setTasks] = useState(props.tasks);

  function addTask(name){
    let newTask = { id: "id", name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  const taskList = tasks.map(val=> (
  <Todo 
    id=  {val.id} 
    name = {val.name} 
    completed = {val.completed}
    key = {val.id}
  /> )
);
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <FilterButton />
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}
export default App;
