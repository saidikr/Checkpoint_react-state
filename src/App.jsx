import { useState } from "react";
import React from "react";
import './App.css'

import { Person } from "./component/person";


class App extends React.Component{


  render(){
    
    return(
      <>

    <div className="App text-center">
      <Person/>
    </div>
    
    </>
  )
}
}

export default App
