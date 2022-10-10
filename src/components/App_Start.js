import React, { Component, useState, useEffect, useContext} from 'react'
import {initializeApp} from "firebase/app"
import { Context } from '../context';


function App_Start(props){
    const {
      setIsDaysListEmpty, 
      getIsDaysListEmpty,
      setApp,
      getFirebaseConfig,
      get_localStorage,
      get_Todays_Day,
    } = useContext(Context) 


    useEffect(()=>{
      if(getIsDaysListEmpty()){
        setIsDaysListEmpty(false) // set val that days list is not empty
  
        console.log("> start fetching ")
  
        setApp(initializeApp(getFirebaseConfig()));
        
        get_localStorage()

        get_Todays_Day()

        // console.log(`oh this shit is here> ${getIsDaysListEmpty()}`)
      }
    }, []);

    return (
      <div></div>
      )
}


export default App_Start




// import React, { Component, useState } from 'react'
// import {initializeApp} from "firebase/app"


// class App_Start extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
         
//       }
//     }
    
//     componentDidMount(){

//         if(this.props.isDaysListEmpty){
//             this.props.setIsDaysListEmpty(false) // set val that days list is not empty
      
//             console.log("> start fetching ")
      
//             this.props.setApp(initializeApp(this.props.firebaseConfig));
            
//             this.props. get_localStorage()

//             this.props.get_Todays_Day()
//           }
//     }

//     render() {
//         return (
//         <div></div>
//         )
//     }
// }


// export default App_Start

