import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"

import { rowsPerPageAction, paginationAction } from "../redux/models/todo.reducer"

const Footer = () => {
    const dispatch = useDispatch()
    const { todo } = useSelector(state => state.todo)
    const searchTodo = useSelector(state => state.todo)
    const lastPage = useSelector(state => state.todo.lastPage)

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)


    const todoLength = todo.length
    const searchLength = searchTodo.length

    const [rowsPerPage, setRowsPerPage] = useState("10")

    const prevPage = useRef()
    const nextPage = useRef()

    useEffect(() => {
        dispatch(rowsPerPageAction(Number(rowsPerPage)))
    }, [dispatch, rowsPerPage])


    useEffect(() => {
        const total = Math.ceil(todoLength / searchLength)
        setTotalPages(total)
    }, [searchLength, todoLength])

    useEffect(() => {
        dispatch(paginationAction({ page, totalPages, rowsPerPage, todoLength }))
    }, [dispatch, page, totalPages, rowsPerPage, todoLength])


    const handleNextPage = () => {
        setPage(next => next + 1)
    }

    const handlePrevPage = () => {
        setPage(prev => prev - 1)
    }

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
                                <option value={todoLength} >All</option>
                            </select>

                            <div className="ml-4 select-none">
                                1-{rowsPerPage === "5" ? 5 : rowsPerPage === "10" ? 10 : todoLength} of {todoLength}
                            </div>

                            <div className="flex justify-around items-center ml-8 transition">

                                <div ref={prevPage} className={page === 1 ? "pointer-events-none" : ""}>
                                    <BsChevronLeft cursor="pointer"
                                        onClick={handlePrevPage}
                                        className={`mr-2 hover:bg-gray-200 rounded-full p-2 text-3xl `}
                                        color="gray" />
                                </div>


                                <div ref={nextPage} className={lastPage ? "pointer-events-none" : ""}>
                                    <BsChevronRight cursor="pointer"
                                        onClick={handleNextPage}
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
