import React, { Component, StyleSheet } from 'react'

import './brick.scss'

class Brick extends Component {

  brick_click(){
    this.props.getDataFromFirebase(this.props.group);
    // hide modal window
    this.props.setSearchModal(false);
  }

  render() {
    return (
      <div className='brick_section'>
            <div className='bs_wrapper' onClick={()=>this.brick_click()}>
                <p className='title'>
                    {this.props.group}
                </p>
            </div>
      </div>
    )
  }
}

export default Brick
