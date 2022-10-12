import React, { Component, StyleSheet } from 'react'

import './brick.scss'
import {some} from "../../firebase_fetch.js"

class Brick extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

  async brick_click(){
    // if value in brick isnt empty do next
    if(this.props.group != ""){
      await this.props.getDataFromFirebase(`${this.props.group}`);
      // hide modal window
      await this.props.setSearchModal(false);
      // writing in localStorage
      await this.props.set_localStorage();
      // set var that this is NOT first visit
      await this.props.setIsFirstVisit(false);

      // setTimeout(async ()=>{ await some()},1000)
    }
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
