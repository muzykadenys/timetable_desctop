import React, { Component, useContext } from 'react'
import './header.scss'
import {Context} from '../../context'

function Header(props){
  const {
    setSearchModal,
    getCurrentGroup,

  } = useContext(Context) 

  function btn_click(){

    setSearchModal(true)

  }

  return (
    <div className='header_section'>
      <button className='h_button' onClick={()=>{ btn_click()}}>{`${getCurrentGroup()}`}</button>
    </div>
  )
}

export default Header



// import React, { Component } from 'react'

// import './header.scss'

// class Header extends Component {

//   btn_click(){
//     //  props.getData()
//      props.setSearchModal(true)

//     //  props.set_localStorage()
//   }

//   render() {
//     return (
//       <div className='header_section'>
//         <button className='h_button' onClick={()=>{ btn_click()}}>{`${ props.current_group}`}</button>
//       </div>
//     )
//   }
// }

// export default Header
