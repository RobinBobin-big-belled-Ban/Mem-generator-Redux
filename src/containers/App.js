import React, { Component } from 'react'
import GeneratorContainer from '../containers/generatorContainer'
import HeaderContainer from '../containers/headerContainer'


class App extends Component{
  
  render() {
  	console.log("rendering <App />")
    return (
      <div>
        <HeaderContainer />
        <GeneratorContainer />
      </div>
    );
  }
}


export default App