import React, { Component } from 'react'
import './day_list.scss'

import Lesson_Item from '../lesson_item/Lesson_Item'

class Day_list extends Component {

  componentDidMount(){

  }

  render() {
    return (
      (
        !this.props.isEmptyDay
      )
      ?
      (
        <ul className='day_list'>

          <div className={this.props.todays_day == this.props.weekday ? 'day_name  active' : 'day_name'}>
            {this.props.weekday}
          </div>

          <div className='day_wrapper'>
            {this.props.para_list.map((elem, index) => {
              return <Lesson_Item
                isEmptyDay={this.props.isEmptyDay}
                para={this.props.para_list[index]} 
                key={index}
                isDaysListEmpty = {this.props.isDaysListEmpty}
                chys_znam={this.props.chys_znam}
              />
              
            })}
            
          </div>

        </ul>
      )
      : // ------------------------------------------------- else
      (
        <ul className='day_list'>

          <div className={this.props.todays_day == this.props.weekday ? 'day_name  active' : 'day_name'}>
            {this.props.weekday}
          </div>

          <div className='day_wrapper'>
            <Lesson_Item 
                  isEmptyDay={this.props.isEmptyDay}
                  para={[]} 
                  // key={index}
                  isDaysListEmpty = {this.props.isDaysListEmpty}
                  chys_znam={this.props.chys_znam}
                />
          </div>

        </ul>
      )


     
    )
  }
}

export default Day_list





// {


//   (
//     !this.props.isEmptyDay
//   )
//   ?
//   (
//   <div className='day_wrapper'>
//   {this.props.para_list.map((elem, index) => {
//     return <Lesson_Item 
//       isEmptyDay={this.props.isEmptyDay}
//       para={this.props.para_list[index]} 
//       key={index}
//       isDaysListEmpty = {this.props.isDaysListEmpty}
//     />
//   })}
//   </div>
// )
// : // ------------------------------------------------- else
// (
// <div className='day_wrapper'>
// <Lesson_Item 
//   isEmptyDay={this.props.isEmptyDay}
//   para={[]} 
//   isDaysListEmpty = {this.props.isDaysListEmpty}
// />
// </div>

// )


// }








// return (
//   <ul className='day_list'>

//     <div className='day_name'>
//       {this.props.weekday}
//     </div>

//     <div className='day_wrapper'>
//       {this.props.para_list.map((elem, index) => {
//         return <Lesson_Item 
//           para={this.props.para_list[index]} 
//           key={index}
//           isDaysListEmpty = {this.props.isDaysListEmpty}
//         />
        
//       })}
      
//     </div>

//   </ul>
// )