import React,{Fragment, useContext} from 'react';
import './App.css';
import NavContext, { navContext } from './Components/Context/navContext';
import ValidContext from './Components/Context/validContext';
import SecondPage from './Components/SecondPage/SecondPage';
import WelcomePage from './Components/WelcomePage/WelcomePage';






function App() {
  const {firstPage,secondPage}=useContext(navContext)
  
  return (
    <ValidContext>
      {firstPage&&<WelcomePage/>}
      {secondPage&&<SecondPage/>}
    </ValidContext>
  )
}

export default App;
