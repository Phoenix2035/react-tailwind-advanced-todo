import { BiFilterAlt } from 'react-icons/bi'
import Slide from 'react-reveal/Slide';


const Drawer = ({ openDrawer, setOpenDrawer }) => {

    return (
        <>
            {
                openDrawer &&
                <div
                    className="w-full h-full fixed top-0 right-0 bottom-0 left-0 z-10 "
                    onClick={() => { setOpenDrawer(false) }}
                    style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                >
                    <Slide right >
                        <div className="w-60 h-full absolute right-0 bg-red-400 p-3" onClick={e => e.stopPropagation()}>
                            <div className="flex justify-around items-center">
                                <BiFilterAlt className="bg-indigo-600 rounded-full p-2" fontSize={38} color="#fff" />
                                <div className="select-none">
                                    <h2 className="font-bold">My To-Do Tasks</h2>
                                    <div className="font-thin text-sm">Filters</div>
                                </div>
                            </div>
                            <div className="w-full bg-slate-300 my-4 rounded-xl" style={{ height: "1px" }} />


                            <div className="grid grid-cols-1">

                                <input type="text" placeholder="Task Name" className=" border border-gray-400 rounded-md py-2 px-2 text-md font-semibold" />



                                <select className="cursor-pointer border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6">
                                    <option value="" >Priority</option>
                                    <option value="high">High</option>
                                    <option value="medium">Medium</option>
                                    <option value="low">Low</option>
                                </select>


                                <select className="cursor-pointer border border-gray-400 rounded-md py-2 px-2 text-md font-semibold mt-6">
                                    <option value="" >Status</option>
                                    <option value="high">Todo</option>
                                    <option value="medium">Doing</option>
                                    <option value="low">Done</option>
                                </select>
                                <input type="date" className="border border-gray-400 rounded-md py-2 px-2 text-md font-semibold  mt-6" />
                            </div>
                        </div>
                    </Slide>
                </div>
            }
        </>
    )
}

export default Drawer