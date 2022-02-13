import {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import Modal from "./Modal";
import {addTodo} from "../../redux/models/todo.reducer";


const EditModal = ({openModal, setOpenModal, editId, editTodo}) => {
    const dispatch = useDispatch()
    const [buttonStatus, setButtonStatus] = useState(true);
    const [newTodo, setNewTodo] = useState({})


    useEffect(() => {
        const findTodo = editTodo.find(item => item.id === editId)
        setNewTodo(findTodo)
    }, [editId, editTodo])


    const handleChange = useCallback((e) => {
        setNewTodo({...newTodo, editId, [e.target.name]: e.target.value})
    }, [editId, newTodo])

    useEffect(() => {
        (newTodo.name && newTodo.priority && newTodo.status && newTodo.date) ? setButtonStatus(false) : setButtonStatus(true);
    }, [newTodo.name, newTodo.priority, newTodo.status, newTodo.date]);


    const editTodoSubmit = () => {
        dispatch(addTodo(newTodo))
    }

    return (
        <Modal title="Edit Task" confirmBtn="SAVE" openModal={openModal}
               setOpenModal={setOpenModal} submitHandler={editTodoSubmit} btnDisable={buttonStatus}>

            <div className="grid">
                <div className="grid grid-cols-1">
                    <input type="text" placeholder="Task Name"
                           className=" border border-gray-400 rounded-md py-2 px-2 text-md font-semibold"
                           onChange={handleChange} name="name" value={newTodo.name} autoComplete="off"/>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-x-2">
                    <select
                        className="cursor-pointer border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6"
                        onChange={handleChange} name="priority" value={newTodo.priority}>
                        <option value="">Priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>


                    <select
                        className="cursor-pointer border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6"
                        onChange={handleChange} name="status" value={newTodo.status}>
                        <option value="">Status</option>
                        <option value="Todo">Todo</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>

                    <input type="date"
                           className="border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6"
                           onChange={handleChange} name="date" value={newTodo.date}/>
                </div>


            </div>

        </Modal>
    )
};

export default EditModal;
