import React, { createContext, useState } from 'react'

const thirdPageContext=createContext();
function ThirdPageContext(props) {
    
    return (
    <thirdPageContext.Provider>
        {props.children}
    </thirdPageContext.Provider>
  )
}

export default ThirdPageContext
