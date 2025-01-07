import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import { useDispatch } from 'react-redux';
import { setFilter } from './redux/taskSlice';

const App = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>To-Do App</h1>
      <AddTask />
      <div>
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('done'))}>Done</button>
        <button onClick={() => dispatch(setFilter('notDone'))}>Not Done</button>
      </div>
      <ListTask />
    </div>
  );
};

export default App;
