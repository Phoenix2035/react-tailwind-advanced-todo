import { useState } from "react";
import Modal from "./Modal";


const AddModal = ({ openModal, setOpenModal }) => {
    const [value, setValue] = useState(true)
    return (
        <Modal title="New Task" confirmBtn="SAVE" openModal={openModal} setOpenModal={setOpenModal} btnDisable={value}>

            <div className="grid">
                <div className="grid grid-cols-1">
                    <input type="text" placeholder="Task Name" className=" border border-gray-400 rounded-md py-2 px-2 text-md font-semibold" />
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-x-2">
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

        </Modal>
    )
};

export default AddModal;
