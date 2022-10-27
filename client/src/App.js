import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Parts from './Pages/Parts';


function App() {
  return ( 
      <BrowserRouter>   
          <Routes> 
            <Route path="/" element={<HomePage/> }/>
            <Route path="/parts" element={<Parts/> }/> 
          </Routes>  
    </BrowserRouter>    
  );
}

export default App;
