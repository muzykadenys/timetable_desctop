import React, { Component } from 'react'
import './day_list.scss'

import Lesson_Item from '../lesson_item/Lesson_Item'

class Day_list extends Component {


  render() {
    return (
      <ul className='day_list'>

        <div className='day_name'>
          {this.props.weekday}
        </div>

        <div className='day_wrapper'>
          {this.props.para_list.map((elem, index) => {
            return <Lesson_Item 
              para={this.props.para_list[index]} 
              key={index}
              isDaysListEmpty = {this.props.isDaysListEmpty}
            />
            
          })}
          
        </div>

      </ul>
    )
  }
}

export default Day_list