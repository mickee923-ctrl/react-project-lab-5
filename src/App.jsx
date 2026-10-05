import Counter from './components/Counter';
import Todolist from './components/Todolist';

function App(){

  return (
      
      <div className='wrap'>
        <h1>My Todo iist:</h1>
        <Counter />
        <Todolist/>
      </div>
  )
}

export default App
