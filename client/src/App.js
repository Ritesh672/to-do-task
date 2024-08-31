import React, {useState} from "react";
import Input from "./components/Input";
import Task from "./components/Task";
import Heading from "./components/Heading";


function App() {

  const [task, updateTask] = useState([]);

  function addTask (input){
    updateTask(previousValue =>{
      return [...previousValue, input]
    });

  }
  return (
    <div className="App">
      <Heading />
      <section>
        <div className="body-section">
          <Task task={task} />
          <Input addTask={addTask} />
        </div>
      </section>
      
     
    
    </div>
  );
}

export default App;
