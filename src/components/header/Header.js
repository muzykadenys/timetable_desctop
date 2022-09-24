import React, { Component } from 'react'

import './header.scss'

class Header extends Component {



  render() {
    return (
      <div className='header_section'>
        <button className='h_button' onClick={()=>{this.props.getData()}}>ПМ-666</button>
      </div>
    )
  }
}

export default Header
