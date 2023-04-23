import React,{useState} from "react";

import EditTask from "../Modal/EditTask/EditTask";
import './Card.css';

const Card = (props) => {

    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    const updateTask = obj => {
        props.updateListArray(obj,props.index);
    }

    const colors = [
        {
            primary : "#5d93e1",
            secondary : "#ecf3fc"
        },
        {
            primary : "#f9d288",
            secondary : "#fefaf1"
        },
        {
            primary : "#5dc250",
            secondary : "#f2faf1"
        },
        {
            primary : "#f48687",
            secondary : "#fdf1f1"
        },
        {
            primary : "#b964f7",
            secondary : "#f3f0fd"
        }
    ];
    
    
    return(
        <div className="card-wrapper">
            <div className="card-top" style={{"backgroundColor" : colors[(props.index)%5].primary}}></div>
            <div className="task-holder mt-2">
                <span className="card-header" style={{"backgroundColor":colors[(props.index)%5].secondary,"borderRadius":"10px"}}>
                    {props.task}
                </span>
                <p className="description">{props.children}</p>

                <div style={{"position":"absolute","right":"20px","bottom" : "20px"}}>
                    <i className="far fa-edit" style={{"color":colors[(props.index)%5].primary,"marginRight":"12px","cursor":"pointer"}} onClick={toggle}></i>
                    <i className="far fa-trash-alt" style={{"color":colors[(props.index)%5].primary,"cursor":"pointer"}} onClick={props.delete}></i>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} task = {[props.task,props.children]} updateTask={updateTask}/>
        </div>
    );
}

export default Card;