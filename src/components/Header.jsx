import {useState, useEffect} from "react"
import {useDispatch} from "react-redux"
import {BsListCheck} from "react-icons/bs"
import {BiSearchAlt2, BiFilterAlt} from "react-icons/bi"
import {IoIosAdd} from "react-icons/io"
import {searchTodo} from "../redux/models/todo.reducer";


import AddModal from "./Modals/AddModal"
import Drawer from "./Drawer"


const Header = () => {
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false)

    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        dispatch(searchTodo(searchTerm))
    }, [dispatch, searchTerm])

    return (
        <>
            <div className="grid-cols-1 flex justify-between items-center h-14 bg-indigo-600 text-white">
                <div className="flex items-center">
                    <div className="ml-2 mt-1">
                        <BsListCheck fontSize={24}/>
                    </div>
                    <h1 className="ml-2 select-none text-xl">My To-Do Tasks</h1>
                </div>

                <div className="flex items-center mr-2">
                    <div className="flex items-center mr-4 relative ">
                        <input type="text" placeholder="Search" onChange={e => setSearchTerm(e.target.value)}
                               className="text-lg bg-transparent pl-3 pr-9 py-1 border-slate-400 transition-all border rounded-md outline-none hover:border-white focus:border-white"/>
                        <div className="absolute right-2">
                            <BiSearchAlt2 fontSize={24}/>
                        </div>
                    </div>
                    <div className="hover:bg-indigo-400 rounded-full p-2 transition-all">
                        <BiFilterAlt fontSize={24} cursor="pointer" onClick={() => setOpenDrawer(true)}/>
                    </div>
                    <div className="hover:bg-indigo-400 rounded-full p-2 transition-all">
                        <IoIosAdd fontSize={24} cursor="pointer" onClick={() => setOpenModal(true)}/>
                    </div>
                </div>
            </div>

            <AddModal openModal={openModal} setOpenModal={setOpenModal}/>

            <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>

        </>
    )
};

export default Header;
