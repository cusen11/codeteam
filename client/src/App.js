import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import HomePage from './Pages/HomePage';
import Parts from './Pages/Parts';
import 'antd/dist/antd.min.css';
import LoginForm from './Component/LoginForm'; 

import setAuthToken from './utils/auth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Registration from './Component/Registration';
import Forgotpassword from './Component/Forgotpassword';
import Footer from './Component/Footer';


function App() {
  const token = useSelector(state => state?.login)   
  useEffect(()=>{    
      setAuthToken(token.value) 
  },[token])  
  return (
    <BrowserRouter>
      <Header/>  
      <Routes> 
        <Route path="/" element={!token.value.status ? <LoginForm/> : <HomePage dataToken={token}/> }/>
        <Route path="/parts" element={<Parts/> }/> 
        <Route path="/registration" element={<Registration/>}/> 
        <Route path="/forgotpassword" element={<Forgotpassword/>}/> 
      </Routes> 
      <Footer/> 
  </BrowserRouter>
  );
}

export default App;
