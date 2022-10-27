import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Parts from './Pages/Parts';


function App() {
  return (
    <>
      <Button classNumType="button-primary" text="Button Primary" />
      <Button classNumType="button-danger" text="Button Danger" />
      <Button classNumType="button-warning" text="Button Warning" />
      <br/>
      <Links href="abc.com"/>
      <Links href="abc1.com"/>
    </>
  );
}

export default App;
