import React from "react";


function Task (props){

    return <div className="show-task">
        <div className="task-heading-div">
            <h1 className="task-heading">Task</h1>
        </div>
        <hr />
        <ul className="styled-list">
            {props.task.map((item, index)=>{
                 return <li className="li-component" key={index} id={index}>{item}</li>
            })}
        </ul>
    </div> 

}

export default Task;