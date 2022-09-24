import React, { Component } from 'react'
import './main_block.scss'

import Day_list from './day_list/Day_List'

class Main_Block extends Component {

  render() {
    return (
      <div className='main_block_section'>
        {/* {console.log(this.props.weekdays_list[0])} */}

        {this.props.days_list.map((elem, index) => {
          return <Day_list
            weekday={this.props.weekdays_list[index]} 
            para_list={this.props.days_list[index]} 
            key={index}
            isDaysListEmpty = {this.props.isDaysListEmpty}
            />        
        })}

      </div>
    )
  }
}

export default Main_Block
