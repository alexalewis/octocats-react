import React, { Component } from 'react'
import Cat from './components/Cat'
import AllOctocats from './components/AllOcotocats'
import Nav from './components/Nav'

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <AllOctocats />
      </>
    )
  }
}

export default App
