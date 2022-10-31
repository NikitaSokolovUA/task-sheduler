import { statusFilters } from "./constatns";
import { combineReducers } from "redux";

// const initialState = {
//   tasks: [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//   ],
//   filters: {
//     status: statusFilters.all,
//   },
// };

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];


export const taskReducer = (state = tasksInitialState, action) => {
    switch(action.type){
        case 'tasks/addTask':
            return [...state, action.payload]
        case 'tasks/deletedTask':
            return state.filter(task => task.id !==action.payload)
        case 'tasks/toggleCompleted':
            return state.map(task => {
                if (task.id !== action.payload) {
                    return task
                }
                return {...task, completed: !task.completed}
            })
        default:
            return state
    }
}

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
    switch (action.type) {
        case 'tasks/setStatusFilter':
            return {
                ...state,
                status: action.payload
            }
            default:
            return state
    }
}

export const rootReducer = combineReducers({
    tasks: taskReducer,
    filters: filtersReducer
})