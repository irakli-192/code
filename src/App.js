import React,{Fragment, useContext} from 'react';
import './App.css';
import FetchContext from './Components/Context/fetchContext';
import NavContext, { navContext } from './Components/Context/navContext';
import ThirdPageContext from './Components/Context/ThirdPageContext';
import SecondPage from './Components/SecondPage/SecondPage';
import ThirdPage from './Components/ThirdPage/ThirdPage';
import WelcomePage from './Components/WelcomePage/WelcomePage';






function App() {
  const {page}=useContext(navContext)
  
  return (
    <FetchContext>
      {page===1&&<WelcomePage/>}
      {page===2&&<SecondPage/>}
      <ThirdPageContext>
        {page===3&&<ThirdPage/>}
      </ThirdPageContext>
      
    </FetchContext>
    
  )
}

export default App;
