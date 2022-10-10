import React, { Component, useContext, useState } from 'react'
import './main_block.scss'

import Day_list from './day_list/Day_List'
import {Context} from '../../context'

function Main_Block(props){
  const {
    getSearchModal,
    setSearchModal,
    setModalWindow,
    getStudentsGroups,
    getDataFromFirebase,
    getCurrentGroup,
    getSelectedGroupsList,
    setCurrentGroup,
    set_localStorage,
    getIsFirstVisit,
    setIsFirstVisit,
    getWeekdaysAdded_List,
    getWeekdays_List,
    getDays_List,
    getIsDaysListEmpty,
    getChysZnam,
    getTodaysDay
  } = useContext(Context)

  const control_weekdays = [
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "пятниця"
   ]

  return (
    <div className='main_wrapper' >

      <div className='main_block_section' id='main_block_section'>
        {    getWeekdaysAdded_List().map((elem, index) => {

        if (!elem.includes("cum_"))
        {
          let local_index =     getWeekdays_List().indexOf(`${elem}`)
          // let local_index = index
          
          return <Day_list className="aga"
          isEmptyDay={false}
          weekday={    getWeekdays_List()[local_index]}
          para_list={    getDays_List()[local_index]}
          key={`M_B_1:${local_index}`}
          isDaysListEmpty = {    getIsDaysListEmpty()}
          chys_znam={    getChysZnam()}
          todays_day={    getTodaysDay()}
          />
        }
        else
        {
          // console.log(`empty day is called!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)
          return <Day_list className="aga"
          weekday={elem.replace("cum_", "")}
          isEmptyDay={true}
          key={`M_B_2:${index}`}
          chys_znam={    getChysZnam()}
          todays_day={    getTodaysDay()}
          />
        }
        })}
      </div>

    </div>
  )
}

export default Main_Block


// import React, { Component } from 'react'
// import './main_block.scss'

// import Day_list from './day_list/Day_List'

// class Main_Block extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        control_weekdays: [
//         "понеділок",
//         "вівторок",
//         "середа",
//         "четвер",
//         "пятниця"
//        ]
//     }
//   }


//   scrollTohowItWorks = () =>  {
//     console.log(`manual scroll> -----------`)

//     document.getElementById('main_block_section').scroll({
//       behavior: 'smooth',
//       left: 400,
      
//     });
//   }
  
//   componentDidMount(){
//     // this.scrollTohowItWorks();
//   }

//   render() {
//     return (
//       <div className='main_wrapper' >

//         <div className='main_block_section' id='main_block_section'>
//           {this.props.weekdays_added_list.map((elem, index) => {

//           if (!elem.includes("cum_"))
//           {
//             let local_index = this.props.weekdays_list.indexOf(`${elem}`)
//             // let local_index = index
            
//             return <Day_list className="aga"
//             isEmptyDay={false}
//             weekday={this.props.weekdays_list[local_index]}
//             para_list={this.props.days_list[local_index]}
//             key={local_index}
//             isDaysListEmpty = {this.props.isDaysListEmpty}
//             chys_znam={this.props.chys_znam}
//             todays_day={this.props.todays_day}
//             />
//           }
//           else
//           {
//             // console.log(`empty day is called!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)
//             return <Day_list className="aga"
//             weekday={elem.replace("cum_", "")}
//             isEmptyDay={true}
//             key={index}
//             chys_znam={this.props.chys_znam}
//             todays_day={this.props.todays_day}
//             />
//           }
//           })}
//         </div>

//       </div>
//     )
//   }
// }

// export default Main_Block


// // return (
// //   <div className='main_block_section'>
// //     {/* {console.log(this.props.weekdays_list[0])} */}

// //     {this.props.days_list.map((elem, index) => {
// //       //  ? console.log(`shit> ${this.props.weekdays_list[index]}`)
// //       return <Day_list
// //         weekday={this.props.weekdays_list[index]} 
// //         para_list={this.props.days_list[index]} 
// //         key={index}
// //         isDaysListEmpty = {this.props.isDaysListEmpty}
// //         />        
// //     })}

// //   </div>
// // )