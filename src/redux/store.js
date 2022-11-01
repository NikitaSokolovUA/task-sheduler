// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
// import { filtersReducer, taskReducer } from "./reducer";
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";

// const enchancer = devToolsEnhancer()

// export const store = createStore(rootReducer, enchancer)

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer
  }
})