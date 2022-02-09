import { useState } from "react"
import { MdModeEditOutline, MdDelete } from "react-icons/md"

import AddEditModal from "./Modals/AddEditModal";
import DeleteModal from "./Modals/DeleteModal";

const Content = () => {
    const [openEditModal, setOpenEditModal] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto w-100">
                    <div className="inline-block py-2 min-w-full sm:px-1 lg:px-2">
                        <div className="overflow-hidden shadow-md sm:rounded-lg">
                            <table className="min-w-full">
                                <thead className="bg-gray-300 ">
                                    <tr className="text-sm font-medium tracking-wider text-gray-700 text-center select-none">
                                        <th className="py-3 px-6 border-r">
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
                                    <tr className="bg-white border-b hover:bg-gray-100 select-none">
                                        <td className="py-3 pl-2 border-r">
                                            Go To Gym
                                        </td>

                                        <td className="py-3 pl-2 text-center border-r">
                                            Low
                                        </td>

                                        <td className="py-3 pl-2 text-center border-r">
                                            Doing
                                        </td>

                                        <td className="py-3 pl-2 text-center border-r">
                                            05/05/2021
                                        </td>

                                        <td className="py-3 pl-2 text-center">
                                            <div className="flex justify-center items-center" >

                                                <MdModeEditOutline className="mr-2 hover:bg-green-300 rounded-full p-2" cursor="pointer" color="gray" fontSize={34} onClick={() => setOpenEditModal(true)} />

                                                <MdDelete className="hover:bg-red-300 rounded-full p-2" cursor="pointer" color="gray" fontSize={34} onClick={() => setOpenDeleteModal(true)} />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <AddEditModal openModal={openEditModal} setOpenModal={setOpenEditModal} editModal/>
            <DeleteModal openModal={openDeleteModal} setOpenModal={setOpenDeleteModal} deleteModal />

        </>
    )
};

export default Content;
