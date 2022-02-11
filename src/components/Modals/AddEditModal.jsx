import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import Modal from "./Modal";
import {addTodo} from "../../redux/models/todo.reducer";


const AddEditModal = ({openModal, setOpenModal, editModal}) => {
    const dispatch = useDispatch()
    const [buttonStatus, setButtonStatus] = useState(true);

    const [todoState, setTodoState] = useState({
        id: '',
        name: '',
        priority: '',
        status: '',
        date: ''
    })

    const handleChange = (e) => {
        setTodoState({...todoState, id: Date.now().toString(), [e.target.name]: e.target.value})
    }

    useEffect(() => {
        (todoState.name && todoState.priority && todoState.status && todoState.date) ? setButtonStatus(false) : setButtonStatus(true);
    }, [todoState.name, todoState.priority, todoState.status, todoState.date]);


    const addTodoSubmit = () => {
        dispatch(addTodo(todoState))
        setTodoState({
            id: '',
            name: '',
            priority: '',
            status: '',
            date: ''
        })
    }

    return (
        <Modal title={editModal ? "Edit Task" : "New Task"} confirmBtn="SAVE" openModal={openModal}
               setOpenModal={setOpenModal} submitHandler={addTodoSubmit} btnDisable={buttonStatus}>

            <div className="grid">
                <div className="grid grid-cols-1">
                    <input type="text" placeholder="Task Name"
                           className=" border border-gray-400 rounded-md py-2 px-2 text-md font-semibold"
                           onChange={handleChange} name="name" value={todoState.name} autoComplete="off"/>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-x-2">
                    <select
                        className="cursor-pointer border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6"
                        onChange={handleChange} name="priority" value={todoState.priority}>
                        <option value="">Priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>


                    <select
                        className="cursor-pointer border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6"
                        onChange={handleChange} name="status" value={todoState.status}>
                        <option value="">Status</option>
                        <option value="Todo">Todo</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>

                    <input type="date"
                           className="border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6"
                           onChange={handleChange} name="date" value={todoState.date}/>
                </div>

            </div>

        </Modal>
    )
};

export default AddEditModal;
