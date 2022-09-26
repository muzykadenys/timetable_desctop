import React, { Component } from 'react'
import {initializeApp} from "firebase/app"

class App_Start extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    componentDidMount(){
        if(this.props.isDaysListEmpty){
            this.props.setIsDaysListEmpty(false) // set val that days list is not empty
      
            console.log("> start fetching ")
      
            this.props.setApp(initializeApp(this.props.firebaseConfig));
            
            this.props. get_localStorage()
      
            // this.props.getDataFromFirebase("ДС-13")
          }
    }

    render() {
        return (
        <div></div>
        )
    }
}


export default App_Start
