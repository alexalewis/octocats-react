import React, { Component } from 'react'
import cat from './components/cat'
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
