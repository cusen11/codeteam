import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import HomePage from './Pages/HomePage';
import Parts from './Pages/Parts';
import 'antd/dist/antd.min.css';


function App() {
  return (
    <BrowserRouter>
      <Header/>  
      <Routes> 
        <Route path="/" element={<HomePage/> }/>
        <Route path="/parts" element={<Parts/> }/> 
      </Routes>  
  </BrowserRouter>    
  );
}

export default App;
