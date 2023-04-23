import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({modal,toggle,updateTask,task}) => {

    const [taskName,setTaskName] = useState('');
    const [description,setDescription] = useState('');

    const inputChangeHandler = event => {
        const {name,value} = event.target;

        if(name==="taskname"){
            setTaskName(value);
        }
        else{
            setDescription(value);
        }
    }

    const updateInArrayHandler = (e) => {  
        updateTask({name : taskName,description :description});
        toggle();
    }

    useEffect(()=>{
        setTaskName(task[0]);
        setDescription(task[1]);
    },[]);

    return(
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input type="text" className="form-control" value={taskName} onChange={inputChangeHandler} name='taskname'/>
                    </div>
                    <div className="form-group">
                    <label>Description</label>
                        <textarea rows='5' className="form-control" value={description} onChange={inputChangeHandler} name='description'></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={updateInArrayHandler}>
                Update
              </Button>{' '}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
      </Modal>
    );
}

export default EditTask;