import { BsChevronLeft, BsChevronRight } from "react-icons/bs"

const Footer = () => {
    return (
        <div className="grid-cols-1" >
            <div className="flex justify-between items-center">
                <div />

                <div className="mr-4 flex items-center text-sm ">
                    <label htmlFor="rowsPerPage">Rows per page:</label>
                    <select id="rowsPerPage" className="cursor-pointer border-b border-gray-400 ml-2">
                        <option value="5">5</option>
                        <option defaultValue="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="all">All</option>
                    </select>

                    <div className="ml-4">
                        1-10 of 10
                    </div>

                    <div className="flex justify-around items-center ml-8 transition">
                        <BsChevronLeft cursor="pointer" className="mr-2 hover:bg-gray-200 rounded-full p-2 text-3xl" color="gray" />
                        <div >
                            <BsChevronRight cursor="pointer" className="ml-2 hover:bg-gray-200 rounded-full p-2 text-3xl" color="gray" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
