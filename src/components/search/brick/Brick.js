import React, { Component, StyleSheet } from 'react'

import './brick.scss'

class Brick extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

  async brick_click(){
    await this.props.getDataFromFirebase(`${this.props.group}`);
    // hide modal window
    await this.props.setSearchModal(false);
    await this.props.set_localStorage();
    
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
