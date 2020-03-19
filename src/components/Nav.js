import React, { Component } from 'react'
import logo from '../images/logo.png'

class Nav extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul class="left">
            <img class="img-logo" src={logo} alt="logo" />
            <li class="logo">Octodex</li>
            <li class="home">Home</li>
            <li class="faq">FAQ</li>
          </ul>
          <ul class="right">
            <li class="follow">Follow us on Twitter</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Nav
