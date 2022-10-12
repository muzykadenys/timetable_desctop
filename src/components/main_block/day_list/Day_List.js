import React, { Component, useRef } from 'react'
import './day_list.scss'
import { gsap } from "gsap";

import Lesson_Item from '../lesson_item/Lesson_Item'

class Day_list extends Component {
  constructor(props) {
    super(props)

    this.day_el = React.createRef(null);

    this.state = {
       
    }
  }

  
  componentDidMount(){
    // console.log("agaaaa")
    // let t1 = new gsap.timeline();
    // gsap.fromTo(this.day_el.current, 0.3, {y: -40 }, {y:0})
  }

  render() {
    
    return (
      (
        !this.props.isEmptyDay
      )
      ?
      (
        <ul className='day_list'>

          <div 
          // ref={this.day_el} 
          className={this.props.todays_day == this.props.weekday ? 'day_name  active' : 'day_name'}>
            {this.props.weekday}
          </div>

          <div className='day_wrapper'>
            {this.props.para_list.map((elem, index) => {
              return <Lesson_Item 
                isEmptyDay={this.props.isEmptyDay}
                para={this.props.para_list[index]} 
                key={`D_L:${index}`}
                index={index + this.props.ind}
                isDaysListEmpty = {this.props.isDaysListEmpty}
                chys_znam={this.props.chys_znam}
                todays_day={this.props.todays_day}
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
                  index={this.props.ind}
                  isDaysListEmpty = {this.props.isDaysListEmpty}
                  chys_znam={this.props.chys_znam}
                  todays_day={this.props.todays_day}
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