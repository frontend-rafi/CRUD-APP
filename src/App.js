import {React} from 'react';
import Create from './Components/Create';
import Read from './Components/Read';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Update from './Components/Update';

function App() {




  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
<Route exact path='/' element={<Create/>} />
<Route  path='/read' element={<Read/>} />
<Route  path='/edit/:id' element={<Update/>} />
     </Routes>
  
     </BrowserRouter>
    </div>
  );
}

export default App;
