import React,{useEffect, useReducer, useState} from "react";

import Aux from '../../hoc/Aux';
import './TodoList.css';
import CreateTask from "../Modal/CreateTask/CreateTask";
import Card from "../Card/Card";

const TodoList = () =>{

    const [ignored,forceUpdate] = useReducer(x=>x+1,0);

    const [taskList,setTaskList] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(()=>{
        let arr = localStorage.getItem("taskList");
        if(arr){
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    },[]);

    const toggle = () => setModal(!modal);

    const saveTaskHandler = task => {
        let temArray = [...taskList];
        temArray.push(task);
        localStorage.setItem('taskList',JSON.stringify(temArray));
        setTaskList(temArray);
        toggle();
    }

    const deleteHandler = (id) => {
        let temp = [...taskList]
        temp.splice(id,1);
        localStorage.setItem("taskList",JSON.stringify(temp));
        setTaskList(temp);
    }

    const updateListArray = (obj,index) => {
        let tem = taskList
        tem[index] = obj;
        setTaskList(tem);
        localStorage.setItem('taskList',JSON.stringify(tem));
        forceUpdate()
    }

    return(
        <Aux>
            <div className="header text-center">
                <h3>Todo List</h3>
                <button className="btn btn-primary" onClick={toggle}>Create Task</button>
            </div>

            <div className="task-continer">
                {taskList && taskList.map((el,index)=>(
                    <Card task={el.name} key={index} index={index} delete={()=>deleteHandler(index)} updateListArray={updateListArray}>{el.description}</Card>
                ))}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTaskHandler} />
        </Aux>
    );
}

export default TodoList;