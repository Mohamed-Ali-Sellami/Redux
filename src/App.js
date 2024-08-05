import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Addtasks from './Components/Addtasks';

function App() {
  return (
    <div className="App">  
<Routes>
  <Route path='/' element={<Home />}> </Route>
  <Route path='/new' element={<Addtasks />}> </Route>

</Routes>  

    </div>
  );
}

export default App;
