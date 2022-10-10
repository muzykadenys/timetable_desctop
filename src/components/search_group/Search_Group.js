import React, { Component, useContext, useState } from 'react'
import Modal_Window from '../modal_window/Modal_Window';
import Brick from '../search/brick/Brick';

import "./search_group.scss";
import {Context} from '../../context'


function Search_Group(props){
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
        getModalWindow,
        
      } = useContext(Context) 

    const [input_val, setInputVal] = useState("")
    const [suggest_groups, setSuggestGroups] = useState([])
    const [isWrong, setIsWrong] = useState(false)

    function handleChange(event) {
        setIsWrong(false)
        let buf_val = event.target.value;
        let c_same_suggest = 0;
        var buf_suggest = []
        
        buf_val = buf_val.replace(" ", '-')
        .replace("--", '-')
        .toUpperCase();
        

        if(buf_val.split("-").length - 1 >= 2)
        {
            buf_val = input_val
        }
        else
        {
               setInputVal(`${buf_val}`)
        }


        setSuggestGroups([])
        for(let i = 0; i < getStudentsGroups().length; i++){
            if(     getStudentsGroups()[i].includes(`${buf_val}`))
            {
                // console.log(`[${i}] ${     students_groups[i]}, `,  !   state.suggest_groups.includes(`${     students_groups[i]}`))
                buf_suggest.push(     getStudentsGroups()[i])
                c_same_suggest++;
            }
        }
        if(c_same_suggest == 0 ||  " -".includes(buf_val)){

        }else{
            setSuggestGroups([...buf_suggest])
        }
    }

    async function handleSubmit() {
        
        if(getStudentsGroups().includes(`${input_val}`)){
            console.log(`SUBMIT>>>${input_val.toUpperCase()}`)
            // if value in brick isnt empty do next
            await      getDataFromFirebase(`${input_val}`);
            // hide modal window
            await       setSearchModal(false);
            await       setModalWindow(false)
            // writing in localStorage
            await      set_localStorage();
            // set var that this is NOT first visit
            await      setIsFirstVisit(false);
        }else{
            console.log(`SUBMIT>>> 🤨 ${input_val.toUpperCase()} `)
            setIsWrong(true)
        }

    }

    function close_modals(prop){
        setSearchModal(prop)
        setModalWindow(prop)
    }

    return (
        <Modal_Window 
            modal_window={getModalWindow()}
            setModalWindow={setModalWindow}>

            <div className='modalWindow_main_wrapper'>
                <div className='modalWindow_main_head'>
                    

                    <form className='modalWindow_main_head_form' onSubmit={(e)=>{
                        e.preventDefault();
                           handleSubmit();
                    }}>
                       <div className='modalWindow_main_head-back_btn' onClick={()=>     setModalWindow(false)}>{`🚪`}</div> 
                        <input className='modalWindow_main_head_form-input' type="text" value={   input_val} onChange={(e)=>{   handleChange(e)}} />
                        <input className='modalWindow_main_head_form-submit' type="submit" value="🔎" />
                        {/* <button onClick={(e)=>{console.log(`>>>${   state.input_val.toUpperCase()}`); e.preventDefault();}}>cock</button> */}
                    </form>
                </div>
                {isWrong ? <div className='modalWindow_main_wrapper-wrong'>🤨</div> : <div></div>}
                <div className='modalWindow_main_scroll'>
                    <div className='modalWindow_main_scroll_variants'>
                        { suggest_groups.map((elem, index) => {
                        return <Brick
                            group={elem}
                            key={`S_G:${index}`}
                            getDataFromFirebase={getDataFromFirebase}
                            current_group={getCurrentGroup()}
                            setCurrentGroup={setCurrentGroup}
                            setSearchModal={close_modals}
                            set_localStorage={set_localStorage}
                            setIsFirstVisit={setIsFirstVisit}
                        />
                        })}
                    </div>
                </div>
            </div>
            

        </Modal_Window>
    )
}

export default Search_Group;



// // import { async } from '@firebase/util';
// import React, { Component } from 'react'
// import Modal_Window from '../modal_window/Modal_Window';
// import Brick from '../search/brick/Brick';

// import "./search_group.scss";


// class Search_Group extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             input_val: '',
//             suggest_groups: []
//         };
//     }

//     handleChange(event) {
//         let buf_val = event.target.value;
//         let c_same_suggest = 0;
//         var buf_suggest = []
        
//         buf_val = buf_val.replace(" ", '-')
//         .replace("--", '-')
//         .toUpperCase();
        

//         if(buf_val.split("-").length - 1 >= 2)
//         {
//             buf_val = this.state.input_val
//         }
//         else
//         {
//             this.setState({input_val: `${buf_val}`});
//         }


//         this.setState({
//             suggest_groups: []
//         })
//         for(let i = 0; i < this.props.students_groups.length; i++){
//             if(this.props.students_groups[i].includes(`${buf_val}`))
//             {
//                 // console.log(`[${i}] ${this.props.students_groups[i]}, `,  !this.state.suggest_groups.includes(`${this.props.students_groups[i]}`))
//                 buf_suggest.push(this.props.students_groups[i])
//                 c_same_suggest++;
//             }
//         }
//         if(c_same_suggest == 0 ||  " -".includes(buf_val)){

//         }else{
           
//             this.setState({
//                 suggest_groups: [...buf_suggest]
//             })
//         }

//         // console.log(`>|${buf_val}|`);
//         // console.log("-----------------")
//     }

//     async handleSubmit() {
//     console.log(`SUBMIT>>>${this.state.input_val.toUpperCase()}`)
//     // if value in brick isnt empty do next
//     await this.props.getDataFromFirebase(`${this.state.input_val.toUpperCase()}`);
//     // hide modal window
//     await  this.props.setModalWindow(false)
//     // writing in localStorage
//     await this.props.set_localStorage();
//     // set var that this is NOT first visit
//     await this.props.setIsFirstVisit(false);

//     }

//     render() {
//         return (
//         <Modal_Window 
//             modal_window={this.props.modal_window}
//             setModalWindow={this.props.setModalWindow}>

//             <div className='modalWindow_main_wrapper'>
//                 <div className='modalWindow_main_head'>
//                     <div className='modalWindow_main_head-back_btn' onClick={()=>this.props.setModalWindow(false)}>{`🚪`}</div>

//                     <form className='modalWindow_main_head_form' onSubmit={(e)=>{
//                         e.preventDefault();
//                         this.handleSubmit();
//                     }}>
                        
//                         <input className='modalWindow_main_head_form-input' type="text" value={this.state.input_val} onChange={(e)=>{this.handleChange(e)}} />
//                         <input className='modalWindow_main_head_form-submit' type="submit" value="🔎" />
//                         {/* <button onClick={(e)=>{console.log(`>>>${this.state.input_val.toUpperCase()}`); e.preventDefault();}}>cock</button> */}
//                     </form>
//                 </div>

//                 <div className='modalWindow_main_scroll'>
//                     <div className='modalWindow_main_scroll_variants'>
//                         {this.state.suggest_groups.map((elem, index) => {
//                         return <Brick
//                             group={elem}
//                             key={index}
//                             students_groups={this.props.students_groups}
//                             getDataFromFirebase={this.props.getDataFromFirebase}
//                             current_group={this.props.current_group}
//                             setCurrentGroup={this.props.setCurrentGroup}
//                             setSearchModal={this.props.setSearchModal}
//                             set_localStorage={this.props.set_localStorage}
//                             setIsFirstVisit={this.props.setIsFirstVisit}
//                         />
//                         })}
//                     </div>
//                 </div>
//             </div>
            

//         </Modal_Window>
//         )
//     }
// }

// export default Search_Group;