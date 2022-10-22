import React, { Component } from 'react'

import "./modal_window.scss"

class Modal_Window extends Component {

    // function that close modal window
    close_modal(){
        this.props.setModalWindow(false)
        // console.log("")
    }

    render() {
        {return(
            this.props.modal_window ? 
            <div className="modalWindow active" onClick={()=>this.close_modal()}>
                    <div className='modalWindow_main' onClick={e => e.stopPropagation()}>
                        {this.props.children}
                    </div>
                </div>
            :
            null

            )
        }
    }
}


export default Modal_Window;




// import React, { Component } from 'react'

// import "./modal_window.scss"

// class Modal_Window extends Component {

//     // function that close modal window
//     close_modal(){
//         this.props.setModalWindow(false)
//         // console.log("")
//     }

//     render() {
//         return (
//         <div className={this.props.modal_window? `modalWindow active` : "modalWindow"} onClick={()=>this.close_modal()}>
//             <div className='modalWindow_main' onClick={e => e.stopPropagation()}>
//                 {this.props.children}
//             </div>
//         </div>
//         )
//     }
// }


// export default Modal_Window;