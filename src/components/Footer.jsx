import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"

import { rowsPerPageAction } from "../redux/models/todo.reducer"

const Footer = () => {
    const dispatch = useDispatch()
    const { todo } = useSelector(state => state.todo)

    const todoLength = todo.length

    const [rowsPerPage, setRowsPerPage] = useState("10")

    useEffect(() => {
        dispatch(rowsPerPageAction(Number(rowsPerPage)))
    }, [dispatch, rowsPerPage])

    return (
        <>
            {
                todo.length > 0 &&
                <div className="grid-cols-1">
                    <div className="flex justify-between items-center">
                        <div />
                        <div className="mr-4 flex items-center text-sm ">
                            <label htmlFor="rowsPerPage">Rows per page:</label>
                            <select id="rowsPerPage" className="cursor-pointer border-b border-gray-400 ml-2" onChange={e => setRowsPerPage(e.target.value)}>
                                <option value="5">5</option>
                                <option value="10" selected>10</option>
                                <option value={todoLength}>All</option>
                            </select>

                            <div className="ml-4 select-none">
                                1-{rowsPerPage === "5" ? 5 : rowsPerPage === "10" ? 10 : todoLength} of {todoLength}
                            </div>

                            <div className="flex justify-around items-center ml-8 transition">

                                <BsChevronLeft cursor="pointer"
                                    className={`mr-2 hover:bg-gray-200 rounded-full p-2 text-3xl `}
                                    color="gray" />
                                <div>
                                    <BsChevronRight cursor="pointer"
                                        className="ml-2 hover:bg-gray-200 rounded-full p-2 text-3xl"
                                        color="gray" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
};

export default Footer;
