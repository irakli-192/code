import React,{Fragment, useContext} from 'react';
import './App.css';
import NavContext, { navContext } from './Components/Context/navContext';
import SecondPage from './Components/SecondPage/SecondPage';
import ThirdPage from './Components/ThirdPage/ThirdPage';
import WelcomePage from './Components/WelcomePage/WelcomePage';






function App() {
  const {firstPage,secondPage,thirdPage}=useContext(navContext)
  
  return (
    <Fragment>
      {firstPage&&<WelcomePage/>}
      {secondPage&&<SecondPage/>}
      {thirdPage&&<ThirdPage/>}
    </Fragment>
  )
}

export default App;
