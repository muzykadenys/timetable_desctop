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
    if(getSearchModal()){

      return (
        <div className={  true ? `search_section active` : "search_section"} onClick={()=>  close_modal()}>
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

    }else{

      <div></div>

    }
}

export default Search_Main



// import React, { Component, useState, useContext } from 'react'
// import "./search_main.scss"
// import Brick from './brick/Brick'
// import {Context} from '../../context'

// function Search_Main (props) {
//   const {
//     getSearchModal,
//     setSearchModal,
//     setModalWindow,
//     getStudentsGroups,
//     getDataFromFirebase,
//     getCurrentGroup,
//     getSelectedGroupsList,
//     setCurrentGroup,
//     set_localStorage,
//     getIsFirstVisit,
//     setIsFirstVisit
//   } = useContext(Context) 
  
//   function click_search_modal(){

//     // showing modal window where user search group
//       setModalWindow(true)
//   }


//   // function that close modal search window
//   function close_modal(){
//     // if this is first visit, user cant close search window
//     if(!getIsFirstVisit()){
//         setSearchModal(false)
//     }
//   }

//   const search_class = 'search_section';
//     return (
//         <div className={  getSearchModal() ? `search_section active` : "search_section"} onClick={()=>  close_modal()}>
//           <div className='ss_wrapper' onClick={e => e.stopPropagation()}>

//             <div className='ss_header'>
//                 <div className='back_btn' onClick={()=>  close_modal()}>{`🚪`}</div>
//                 <div className='search_btn' onClick={()=>  click_search_modal()}>🔎</div>
//             </div>
            
//             <div className='ss_scroll_wrapper'>
//                 <div className='choosen_bricks_wrapper'>
//                 {
//                     //  if selected list is NOT empty
//                     getSelectedGroupsList().length != 0 
//                   ? 
//                   <div className='choosen_bricks'>
//                     {
//                         getSelectedGroupsList().map((elem, index) => {
//                         return <Brick
//                           group={elem}
//                           key={`S_M_1:${index}`}
//                           getDataFromFirebase={getDataFromFirebase}
//                           current_group={getCurrentGroup()}
//                           setCurrentGroup={setCurrentGroup}
//                           setSearchModal={setSearchModal}
//                           set_localStorage={set_localStorage}
//                           setIsFirstVisit={setIsFirstVisit}
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
//                     {    getStudentsGroups().map((elem, index) => {
//                       return <Brick
//                       group={elem}
//                       key={`S_M_2:${index}`}
//                       getDataFromFirebase={getDataFromFirebase}
//                           current_group={getCurrentGroup()}
//                           setCurrentGroup={setCurrentGroup}
//                           setSearchModal={setSearchModal}
//                           set_localStorage={set_localStorage}
//                           setIsFirstVisit={setIsFirstVisit}
//                       />
//                     })}
//                   </div>
//                 </div>
                
//             </div>

//           </div>
//         </div>
//     )
// }

// export default Search_Main

