import Counter from './components/Counter';
import { useState } from 'react';
import Todolist from './components/Todolist';
import SearchBar from './components/SearchBar';
import FilterButtons from './components/FilterButtons';

function App() {
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState("all");

  return (
    <div className='wrap'>
      <h1>My Todo list:</h1>

      <div className='panel'>
        <div className='panel-label'>
          ຈຸດກວດ1
        </div>
        <SearchBar searchText={searchText} onChange={setSearchText} />
        <FilterButtons value={filter} onChange={setFilter}/>
              <p>{searchText}</p>
        <p>{filter}</p>
        <div/>
       
        <Todolist searchText={searchText} filter={filter} /> ddd
      </div>
    </div>
  );
}

export default App;