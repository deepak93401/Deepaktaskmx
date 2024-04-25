import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import Header from './Component1/Home/Header/Header';
import Nextpage from './Component1/Nextpage/Pageheader/Nextpage';
import Nextpagesec from './Component1/Nextpage/Nextpagesection/Nextpagesec';


function App() {
  return (
    <div className="App">
      <Routes>
  
       
       {/* Home page Route */}
        <Route path='/' element={<Header/>}/>

        {/* Nextpage link on click next button  */}


        <Route path='/next' element={<Nextpage/>}/>
        <Route path='/next/:index' element={<Nextpagesec/>}/>

   
   
      </Routes>
    
    </div>
  );
}

export default App;
