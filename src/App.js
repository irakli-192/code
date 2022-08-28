import React,{Fragment, useContext} from 'react';
import './App.css';
import NavContext, { navContext } from './Components/Context/navContext';
import SecondPage from './Components/SecondPage/SecondPage';
import WelcomePage from './Components/WelcomePage/WelcomePage';






function App() {
  const {firstPage,secondPage}=useContext(navContext)
  
  return (
    <Fragment>
      {firstPage&&<WelcomePage/>}
      {secondPage&&<SecondPage/>}
    </Fragment>
  )
}

export default App;
