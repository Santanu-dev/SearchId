import './App.css';
import Search from './component/Search';
import Todo from './component/Todo';
import React, { useState } from 'react';

function App() {

  const [selected, setSelected] = useState('search')
  const handleChange = (e) => {
    setSelected(e.target.value)
  }
  return (
    <>
    <select onChange={handleChange} style={{marginLeft: "45%", marginTop: '10px', marginBottom: '10px'}}>
      <option value="search">Search</option>
      <option value="todo">Todod List</option>
    </select>
    { selected === 'search' ? 
      <Search /> : 
      <Todo /> }
    </>
  );
}

export default App;
