import React, { Component, useState, useContext } from 'react'
import "./search_main.scss"
import Brick from './brick/Brick'
import {Context} from '../../context'

function Search_Main (props) {
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
    setIsFirstVisit
  } = useContext(Context) 
  
  function click_search_modal(){

    // showing modal window where user search group
      setModalWindow(true)
  }


  // function that close modal search window
  function close_modal(){
    // if this is first visit, user cant close search window
    if(!getIsFirstVisit()){
        setSearchModal(false)
    }
  }

  const search_class = 'search_section';
    return (
        <div className={  getSearchModal() ? `search_section active` : "search_section"} onClick={()=>  close_modal()}>
          <div className='ss_wrapper' onClick={e => e.stopPropagation()}>

            <div className='ss_header'>
                <div className='back_btn' onClick={()=>  close_modal()}>{`🚪`}</div>
                <div className='search_btn' onClick={()=>  click_search_modal()}>🔎</div>
            </div>
            
            <div className='ss_scroll_wrapper'>
                <div className='choosen_bricks_wrapper'>
                {
                    //  if selected list is NOT empty
                    getSelectedGroupsList().length != 0 
                  ? 
                  <div className='choosen_bricks'>
                    {
                        getSelectedGroupsList().map((elem, index) => {
                        return <Brick
                          group={elem}
                          key={`S_M_1:${index}`}
                          getDataFromFirebase={getDataFromFirebase}
                          current_group={getCurrentGroup()}
                          setCurrentGroup={setCurrentGroup}
                          setSearchModal={setSearchModal}
                          set_localStorage={set_localStorage}
                          setIsFirstVisit={setIsFirstVisit}
                        />
                        
                      })
                    }
                  </div>
                    : // if selected list is empty
                    <p className='selected_empty_text'>привіт! 👋  вибери свій розклад 📅</p>
                      
                }
                </div>


                  {/* <div className='separator'></div> */}


                <div className='variants_wrapper'>
                  <div className='variants'>
                    {    getStudentsGroups().map((elem, index) => {
                      return <Brick
                      group={elem}
                      key={`S_M_2:${index}`}
                      getDataFromFirebase={getDataFromFirebase}
                          current_group={getCurrentGroup()}
                          setCurrentGroup={setCurrentGroup}
                          setSearchModal={setSearchModal}
                          set_localStorage={set_localStorage}
                          setIsFirstVisit={setIsFirstVisit}
                      />
                    })}
                  </div>
                </div>
                
            </div>

          </div>
        </div>
    )
}

export default Search_Main






// import React, { Component, useState } from 'react'

// import "./search_main.scss"


// import Brick from './brick/Brick'

// class Search_Main extends Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//        input_val: ""
//     }
//   }
  
//   click_search_modal(){

//     // showing modal window where user search group
//     this.props.setModalWindow(true)
//   }


//   // function that close modal search window
//   close_modal(){
//     // if this is first visit, user cant close search window
//     if(!this.props.isFirstVisit){
//       this.props.setSearchModal(false)
//     }
//   }

//   render() {
//     const search_class = 'search_section';
//     return (
//         <div className={this.props.search_modal ? `search_section active` : "search_section"} onClick={()=>this.close_modal()}>
//           <div className='ss_wrapper' onClick={e => e.stopPropagation()}>

//             <div className='ss_header'>
//                 <div className='back_btn' onClick={()=>this.close_modal()}>{`🚪`}</div>
//                 <div className='search_btn' onClick={()=>this.click_search_modal()}>🔎</div>
//             </div>
            
//             <div className='ss_scroll_wrapper'>
//                 <div className='choosen_bricks_wrapper'>
//                 {
//                     //  if selected list is NOT empty
//                   this.props.selected_groups_list.length != 0 
//                   ? 
//                   <div className='choosen_bricks'>
//                     {
//                     this.props.selected_groups_list.map((elem, index) => {
//                         return <Brick
//                           group={elem}
//                           key={index}
//                           getDataFromFirebase={this.props.getDataFromFirebase}
//                           current_group={this.props.current_group}
//                           setCurrentGroup={this.props.setCurrentGroup}
//                           setSearchModal={this.props.setSearchModal}
//                           set_localStorage={this.props.set_localStorage}
//                           setIsFirstVisit={this.props.setIsFirstVisit}
//                         />
                        
//                       })
//                     }
//                   </div>
//                     : // if selected list is empty
//                     <p className='selected_empty_text'>привіт! 👋  вибери свій розклад 📅</p>
                      
//                 }
//                 </div>


//                   {/* <div className='separator'></div> */}


//                 <div className='variants_wrapper'>
//                   <div className='variants'>
//                     {this.props.students_groups.map((elem, index) => {
//                       return <Brick
//                         group={elem}
//                         key={index}
//                         students_groups={this.props.students_groups}
//                         getDataFromFirebase={this.props.getDataFromFirebase}
//                         current_group={this.props.current_group}
//                         setCurrentGroup={this.props.setCurrentGroup}
//                         setSearchModal={this.props.setSearchModal}
//                         set_localStorage={this.props.set_localStorage}
//                         setIsFirstVisit={this.props.setIsFirstVisit}
//                       />
//                     })}
//                   </div>
//                 </div>
                
//             </div>

//           </div>
//         </div>
//     )
//   }
// }

// export default Search_Main
