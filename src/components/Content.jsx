import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import moment from "moment"
import {MdModeEditOutline, MdDelete} from "react-icons/md"

import {priorityColor, statusColor, dateColor} from "../utils";
import AddEditModal from "./Modals/AddEditModal";
import DeleteModal from "./Modals/DeleteModal";
import {deleteTodo} from "../redux/models/todo.reducer";

const Content = () => {
    const [openEditModal, setOpenEditModal] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    let [todoId, setTodoId] = useState("")

    const dispatch = useDispatch()
    const {todo} = useSelector(state => state.todo)
    const searchTodo = useSelector(state => state.todo.search)


    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todo))
    }, [todo])

    const handleDelete = (id) => {
        setOpenDeleteModal(true)
        setTodoId(id)
    }


    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto w-100">
                    <div className="inline-block py-2 min-w-full sm:px-1 lg:px-2">
                        <div className="overflow-hidden shadow-md sm:rounded-lg">
                            <table className="min-w-full">
                                <thead className="bg-gray-300 ">
                                <tr className="text-sm font-medium tracking-wider text-gray-700 text-center select-none">
                                    <th className="w-3/12 py-3 px-6 border-r">
                                        Task
                                    </th>
                                    <th className="py-3 px-6 border-r">
                                        Priority
                                    </th>
                                    <th className="py-3 px-6 border-r">
                                        Status
                                    </th>
                                    <th className="py-3 px-6 border-r">
                                        Deadline
                                    </th>
                                    <th className="py-3 px-6 border-r">
                                        Actions
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    searchTodo && searchTodo.map(item =>
                                        <tr className="bg-white border-b hover:bg-gray-100 select-none" key={item.id}>
                                            <td className="py-3 pl-2 border-r">
                                                {item.name}
                                            </td>

                                            <td className="py-3 pl-2 text-center border-r">
                                               <span className="px-3 py-1 rounded-2xl text-white"
                                                     style={{backgroundColor: `${priorityColor(item.priority)}`}}>
                                                    {item.priority}
                                               </span>
                                            </td>

                                            <td className="py-3 pl-2 text-center border-r">
                                                 <span className="px-3 py-1 rounded-2xl text-white"
                                                       style={{backgroundColor: `${statusColor(item.status)}`}}>
                                                    {item.status}
                                               </span>
                                            </td>

                                            <td className="py-3 pl-2 text-center border-r">
                                                <span className="px-3 py-1 rounded-2xl text-white"
                                                      style={{
                                                          color: `${dateColor(moment(item.date).format("X"))}`,
                                                          border: `1px solid ${dateColor(moment(item.date).format("X"))}`,
                                                      }}>
                                                {moment(item.date).format("YYYY/MM/DD")}
                                                </span>
                                            </td>

                                            <td className="py-3 pl-2 text-center">
                                                <div className="flex justify-center items-center">
                                                    <MdModeEditOutline
                                                        className="mr-2 hover:bg-green-300 rounded-full p-2"
                                                        cursor="pointer" color="gray" fontSize={34}
                                                        onClick={() => setOpenEditModal(true)}/>

                                                    <MdDelete className="hover:bg-red-300 rounded-full p-2"
                                                              cursor="pointer"
                                                              color="gray" fontSize={34}
                                                              onClick={() => handleDelete(item.id)}/>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <AddEditModal openModal={openEditModal} setOpenModal={setOpenEditModal} editModal/>
            <DeleteModal openModal={openDeleteModal} setOpenModal={setOpenDeleteModal} deleteModal
                         deleteHandler={() => dispatch(deleteTodo(todoId))}
            />

        </>
    )
};

export default Content;
