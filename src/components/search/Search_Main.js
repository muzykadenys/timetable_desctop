import React, { Component } from 'react'

import "./search_main.scss"

import Brick from './brick/Brick'

class Search_Main extends Component {
  render() {
    return (
      <div className='search_section'>
        <div className='ss_wrapper'>

            <div className='ss_header'>
                <div className='back_btn'>{`<`}</div>
                <div className='search_btn'>9</div>
            </div>

            <div className='choosen_bricks'>
               <Brick/>
            </div>


            <div className='separator'></div>


            <div className='variants'>
                <Brick/>
            </div>
        </div>
      </div>
    )
  }
}

export default Search_Main
