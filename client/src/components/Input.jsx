import React, {useState} from "react";


function Input (props){
    const [inputText , updateInputText] = useState("");
    function handleEvent(event){
        updateInputText(event.target.value);  
    }

    function handleTask(){
        if(inputText.trim()){
            props.addTask(inputText);
        }
        updateInputText("");
    }


    return <div className="input-section">
        <input name="task" onChange={handleEvent} type="text" value={inputText} placeholder="Add task" />
        <hr />
        <button onClick={handleTask} >Add item</button>
    </div>
}


export default Input;