import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [], // Array to store tasks
  filter: 'all', // 'all', 'done', or 'notDone'
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        description: action.payload,
        isDone: false,
      };
      state.tasks.push(newTask);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        task.description = description;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTask, editTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
