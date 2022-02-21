import moment from "moment"
import { MdArrowUpward, MdArrowDownward } from "react-icons/md"


export function priorityColor(priority) {
    if (priority === "Low") {
        return "#9E9E9E"
    } else if (priority === "Medium") {
        return "#FFC600"
    } else {
        return "#F44336"
    }
}

export function statusColor(status) {
    if (status === "Todo") {
        return "#2196F3"
    } else if (status === "Doing") {
        return "#FF9800"
    } else {
        return "#4CAF50"
    }
}


export function dateColor(timeStamp) {
    if (moment().format("X") < timeStamp) {
        return "#4CAF50"
    } else {
        return "#F44336"
    }
}

export function getTodoFromLocalStorage() {
    return localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
}


export const orderBy = (orderTodo, value, direction) => {
    const priorities = ['Low', 'Medium', 'High']
    const statuses = ["Todo", "Doing", "Done"]


    switch (direction) {
        case "asc":
            return [...orderTodo].sort((a, b) => {
                return value === "priority" ? priorities.indexOf(a.priority) - priorities.indexOf(b.priority) : statuses.indexOf(a.status) - statuses.indexOf(b.status)
            })
        case "desc":
            return [...orderTodo].sort((a, b) => {
                return value === "priority" ? priorities.indexOf(b.priority) - priorities.indexOf(a.priority) : statuses.indexOf(b.status) - statuses.indexOf(a.status)
            })
        default:
            return orderTodo
    }
}

export const SortArrow = ({ direction }) => {
    if (!direction) return <span className="invisible"><MdArrowDownward /></span>

    if (direction === "asc") {
        return <MdArrowUpward />

    } else {
        return <MdArrowDownward />

    }
}
