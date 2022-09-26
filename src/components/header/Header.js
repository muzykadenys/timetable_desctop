import React, { Component } from 'react'

import './header.scss'

class Header extends Component {

  btn_click(){
    // this.props.getData()
    this.props.setSearchModal(true)

    // this.props.set_localStorage()
  }

  render() {
    return (
      <div className='header_section'>
        <button className='h_button' onClick={()=>{this.btn_click()}}>{this.props.current_group}</button>
      </div>
    )
  }
}

export default Header
