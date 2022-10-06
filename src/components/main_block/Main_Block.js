import React, { Component } from 'react'
import './main_block.scss'

import Day_list from './day_list/Day_List'

class Main_Block extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       control_weekdays: [
        "понеділок",
        "вівторок",
        "середа",
        "четвер",
        "пятниця"
       ]
    }
  }
  

  render() {
    return (
      <div className='main_block_section'>

        {this.props.weekdays_added_list.map((elem, index) => {

          // console.log(`shit here> ${elem}`)

          if (!elem.includes("cum_"))
          {
            let local_index = this.props.weekdays_list.indexOf(`${elem}`)
            // let local_index = index
            
            return <Day_list className="aga"
            isEmptyDay={false}
            weekday={this.props.weekdays_list[local_index]}
            para_list={this.props.days_list[local_index]}
            key={local_index}
            isDaysListEmpty = {this.props.isDaysListEmpty}
            chys_znam={this.props.chys_znam}
            todays_day={this.props.todays_day}
            />
          }
          else
          {
            // console.log(`empty day is called!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)
            return <Day_list className="aga"
            weekday={elem.replace("cum_", "")}
            isEmptyDay={true}
            key={index}
            chys_znam={this.props.chys_znam}
            todays_day={this.props.todays_day}
            />
          }
        })}

      </div>
    )
  }
}

export default Main_Block


// return (
//   <div className='main_block_section'>
//     {/* {console.log(this.props.weekdays_list[0])} */}

//     {this.props.days_list.map((elem, index) => {
//       //  ? console.log(`shit> ${this.props.weekdays_list[index]}`)
//       return <Day_list
//         weekday={this.props.weekdays_list[index]} 
//         para_list={this.props.days_list[index]} 
//         key={index}
//         isDaysListEmpty = {this.props.isDaysListEmpty}
//         />        
//     })}

//   </div>
// )