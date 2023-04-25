import { createSlice, configureStore } from "@reduxjs/toolkit";

// const initialState = {
//   count: 0,
//   todos: [],
// };

// export const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       const todo = {
//         id: Math.random() * 100,
//         text: action.payload,
//       };
//       state.todos.push(todo);
//       state.count += 1;
//     },
//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//       state.count -= 1;
//     },
//   },
// });

// export const { addTodo, removeTodo } = todoSlice.actions;




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