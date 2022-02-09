import { useState } from "react";
import Modal from "./Modal";

const DeleteModal = ({ openModal, setOpenModal }) => {
    return (
        <Modal title="Are you sure you want to delete this task?" confirmBtn="YES" openModal={openModal} setOpenModal={setOpenModal} >

            

        </Modal>
    )
}

export default DeleteModal