import { useState } from 'react';

const Modal = ({ children }) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <button onClick={() => setOpenModal(true)}>open modal</button>
            {
                openModal &&
                <div
                    className="w-full h-full fixed top-0 right-0 bottom-0 left-0  z-10 overflow-auto bg-black opacity-5 "
                    onClick={() => setOpenModal(false)}
                >
                    <div
                        className="w-3/6 bg-white mx-auto p-5"
                        style={{ marginTop: "20%", marginBottom: "15%" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={() => setOpenModal(false)}>Close</button>
                        {children}
                    </div>
                </div>
            }
        </>
    )

};

export default Modal;
