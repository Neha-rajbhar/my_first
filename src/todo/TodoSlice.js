import { createSlice, configureStore } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks[index].completed = !state.tasks[index].completed;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const state = configureStore({
  reducer: {
    [todosSlice.name]: todosSlice.reducer,
  },
});

// export default todoSlice.reducer;