import {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import Slide from 'react-reveal/Slide'
import {BiFilterAlt} from 'react-icons/bi'

import {filterPriorityAction, filterStatusAction} from "../redux/models/todo.reducer"


const Drawer = ({openDrawer, setOpenDrawer}) => {
    const dispatch = useDispatch()
    const [filterPriority, setFilterPriority] = useState("")
    const [filterStatus, setFilterStatus] = useState("")


    useEffect(() => {
        dispatch(filterPriorityAction(filterPriority))
    }, [filterPriority])

    useEffect(() => {
        dispatch(filterStatusAction(filterStatus))
    }, [filterStatus])


    return (
        <>
            {
                openDrawer &&
                <div
                    className="w-full h-full fixed top-0 right-0 bottom-0 left-0 z-10 "
                    onClick={() => {
                        setOpenDrawer(false)
                    }}
                    style={{backgroundColor: "rgba(0,0,0,0.2)"}}
                >
                    <Slide right>
                        <div className="w-60 h-full absolute right-0 bg-gray-100 p-3"
                             onClick={e => e.stopPropagation()}>
                            <div className="flex justify-around items-center">
                                <BiFilterAlt className="bg-indigo-600 rounded-full p-2" fontSize={38} color="#fff"/>
                                <div className="select-none">
                                    <h2 className="font-bold">My To-Do Tasks</h2>
                                    <div className="font-thin text-sm">Filters</div>
                                </div>
                            </div>
                            <div className="w-full bg-slate-300 my-4 rounded-xl" style={{height: "1px"}}/>


                            <div className="grid grid-cols-1">
                                <select
                                    className="cursor-pointer border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6"
                                    onChange={e => setFilterPriority(e.target.value)}>
                                    <option value="All">All</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>


                                <select
                                    className="cursor-pointer border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6"
                                    onChange={e => setFilterStatus(e.target.value)}>
                                    <option value="All">All</option>
                                    <option value="Todo">Todo</option>
                                    <option value="Doing">Doing</option>
                                    <option value="Done">Done</option>
                                </select>
                                <input type="date"
                                       className="border border-gray-400 rounded-md py-2 px-2 text-md font-semibold  mt-6"/>
                            </div>
                        </div>
                    </Slide>
                </div>
            }
        </>
    )
}

export default Drawer
