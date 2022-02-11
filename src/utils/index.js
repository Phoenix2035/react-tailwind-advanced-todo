import moment from "moment"

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

