import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    items: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    removeTask: (state, action) => {
      state.items = state.items.filter((task) => task.id !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.items.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, removeTask, toggleTaskCompletion } = taskSlice.actions;
export default taskSlice.reducer;
