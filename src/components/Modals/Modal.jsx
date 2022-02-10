import {Fade} from "react-reveal"

const Modal = ({title, confirmBtn, children, openModal, setOpenModal, btnDisable, deleteModal, submitHandler}) => {
    return (
        <>
            {
                openModal &&
                <div
                    className="w-full h-full fixed top-0 right-0 bottom-0 left-0 z-10 "
                    onClick={() => setOpenModal(false)}
                    style={{backgroundColor: "rgba(0,0,0,0.2)"}}
                >
                    <Fade>
                        <div
                            className={`w-5/12 bg-white mx-auto p-5 rounded-lg`}
                            style={{marginTop: "15%", marginBottom: "15%"}}
                            onClick={e => e.stopPropagation()}
                        >
                            <div className={` grid-cols-1 text-2xl mb-5`}>
                                <h1 className={`${deleteModal ? "" : "text-center"} font-bold`}>{title}</h1>
                            </div>

                            <div className="grid-cols-1">
                                {children}
                            </div>

                            <div className="grid-cols-1	flex justify-between items-center mt-10 ">
                                <button onClick={() => setOpenModal(false)}
                                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded">Close
                                </button>

                                <button type="submit" onClick={() => {
                                    setOpenModal(false);
                                    submitHandler()
                                }} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                                        disabled={btnDisable}>{confirmBtn}</button>
                            </div>
                        </div>
                    </Fade>
                </div>
            }

        </>
    )

};

export default Modal;
