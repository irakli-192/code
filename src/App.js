import React,{Fragment, useContext} from 'react';
import './App.css';
import FetchContext from './Components/Context/fetchContext';
import NavContext, { navContext } from './Components/Context/navContext';
import ThirdPageContext from './Components/Context/ThirdPageContext';
import SecondPage from './Components/SecondPage/SecondPage';
import ThirdPage from './Components/ThirdPage/ThirdPage';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import FourthPage from './Components/FourthPage.js/FourthPage';
import AddedLists from './Components/addedLists.js/AddedLists';
import Member from './Components/addedLists.js/Member';





function App() {
  const {page}=useContext(navContext)
  
  return (
    <Fragment>
      {page===1&&<WelcomePage/>}
      {page===2&&<SecondPage/>}
      <ThirdPageContext>
        {page===3&&<ThirdPage/>}
      </ThirdPageContext>
      {page===4&&<FourthPage/>}
      {page===5&&<AddedLists/>}
      {page===6&&<Member/>}
    </Fragment>
    
  )
}

export default App;
