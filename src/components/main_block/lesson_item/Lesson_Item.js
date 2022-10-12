import React, { Component } from 'react'
import { gsap } from "gsap";

import "./lesson_item.scss"
// import {some} from "../../firebase_fetch.js"

class Lesson_Item extends Component {

    constructor (props){
        super(props)

        this.card_el = React.createRef(null);
        this.state = {
            clsAddition_chys : "----",
            clsAddition_znam : "----",
        }
    }

    add_cls_chys_znam(){

        if(`${this.props.chys_znam}` == "chys"){
            this.setState({
                clsAddition_chys : "chys"
            })
        }
        else if(`${this.props.chys_znam}` == "znam"){
            this.setState({
                clsAddition_znam : "znam"
            })
        }
    }

    go_to_website(link){
        window.open(`${link}`, '_blank');
    }

    // header of sticker
    layout_header(){
        return(
            <div className='lil_top'>
                <p className='lil_time'>{this.props.para.time}</p>
                <p className='lil_type'>{this.props.para.text[0].lesson_is.replace(",", "").toLowerCase()}</p>
                <p className='lil_para'>{this.props.para.para}</p>
            </div>
        )
    }

    // 1 kind of sticker ------------------------------------------------------------------------------------------------------
    layout_1 (){
        return (
            <li className='layout_1 layout_item'>
                
              {this.layout_header()}

              <div className='lil_main'>
                <p className='lil_t_1'>{`${this.props.para.text[0].title.slice(0,28)}...`}</p>
                <p className='lil_t_2'>{`${this.props.para.text[0].teacher.slice(0,28)}...`}</p>

                <div className='lil_bot'>
                    <button className='lil_btn' onClick={()=>this.go_to_website(`${this.props.para.text[0].link}`)}>
                        <div className='lil_btn_text'>посилання</div>
                        <div className='lil_btn_line'></div>
                    </button>
                    
                </div>
              </div>
              
            </li>
          )
    }

    // 2 kind of sticker ------------------------------------------------------------------------------------------------------
    layout_2(){

        // if top sub block exist
        if(this.props.para.text.length === 1 && this.props.para.type.includes("group_chys")){

            return (
                <li className='layout_2 layout_item'>
                    
                  {this.layout_header()}
                  
                  <section className={`lil_main_1 ${this.state.clsAddition_chys}`}>
                    <p className='lil_t_1'>{`${this.props.para.text[0].title.slice(0,28)}...`}</p>
                    <p className='lil_t_2'>{`${this.props.para.text[0].teacher.slice(0,28)}...`}</p>
    
                    <div className='lil_bot'>
                        <button className='lil_btn' onClick={()=>this.go_to_website(`${this.props.para.text[0].link}`)}>
                            <div className='lil_btn_text'>посилання</div>
                            <div className='lil_btn_line'></div>
                        </button>
                        
                    </div>
                  </section>
    
                  <section className={`lil_main_2 lil_main_faded ${this.state.clsAddition_znam}`}>
                    <p className='lil_t_1'></p>
                    <p className='lil_t_2'></p>
    
                    <div className='lil_bot'>
                    </div>
                  </section>
                  
                </li>
            )
        }
         // if bottom sub block exist
        else if(this.props.para.text.length === 1 && this.props.para.type.includes("group_znam")){

            return (
                <li className='layout_2 layout_item'>
                    
                  {this.layout_header()}
                  
                  <section className={`lil_main_1 lil_main_faded ${this.state.clsAddition_chys}`}>
                    <p className='lil_t_1'></p>
                    <p className='lil_t_2'></p>
    
                    <div className='lil_bot'>
                    </div>
                  </section>
    
                  <section className={`lil_main_2 ${this.state.clsAddition_znam}`}>
                    <p className='lil_t_1'>{`${this.props.para.text[0].title.slice(0,28)}...`}</p>
                    <p className='lil_t_2'>{`${this.props.para.text[0].teacher.slice(0,28)}...`}</p>
    
                    <div className='lil_bot'>
                        <button className='lil_btn' onClick={()=>this.go_to_website(`${this.props.para.text[0].link}`)}>
                            <div className='lil_btn_text'>посилання</div>
                            <div className='lil_btn_line'></div>
                        </button>
                    </div>
                  </section>
                  
                </li>
            )
        }
         // if both blocks is exist
        else{
            return (
                <li className='layout_2 layout_item'>
                    
                  {this.layout_header()}
                  
                  <section className={`lil_main_1 ${this.state.clsAddition_chys}`}>
                    <p className='lil_t_1'>{`${this.props.para.text[0].title.slice(0,28)}...`}</p>
                    <p className='lil_t_2'>{`${this.props.para.text[0].teacher.slice(0,28)}...`}</p>
    
                    <div className='lil_bot'>
                        <button className='lil_btn' onClick={()=>this.go_to_website(`${this.props.para.text[0].link}`)}>
                            <div className='lil_btn_text'>посилання</div>
                            <div className='lil_btn_line'></div>
                        </button>
                        
                    </div>
                  </section>
    
                  <section className={`lil_main_2 ${this.state.clsAddition_znam}`}>
                    <p className='lil_t_1'>{`${this.props.para.text[1].title.slice(0,28)}...`}</p>
                    <p className='lil_t_2'>{`${this.props.para.text[1].teacher.slice(0,28)}...`}</p>
    
                    <div className='lil_bot'>
                        <button className='lil_btn' onClick={()=>this.go_to_website(`${this.props.para.text[0].link}`)}>
                            <div className='lil_btn_text'>посилання</div>
                            <div className='lil_btn_line'></div>
                        </button>
                    </div>
                  </section>
                  
                </li>
            )
        }

        
    }

    // 3 kind of sticker ------------------------------------------------------------------------------------------------------
    layout_3(){
        // if left sub block exist
        if(this.props.para.text.length === 1 && this.props.para.type.includes("sub_1_full")){
            return (
                <li className='layout_3 layout_item'>
                    
                  {this.layout_header()}
                  
                    <div className='lil_wrapper'>
    
                        <section className='lil_main_1'>
                            <p className='lil_t_1'>{`${this.props.para.text[0].title.slice(0,18)}...`}</p>
                            <p className='lil_t_2'>{`${this.props.para.text[0].teacher.slice(0,16)}...`}</p>
    
                            <div className='lil_bot'>
                                <button className='lil_btn' onClick={()=>this.go_to_website(`${this.props.para.text[0].link}`)}>
                                    <div className='lil_btn_text'>посилання</div>
                                    <div className='lil_btn_line'></div>
                                </button>
                                
                            </div>
                        </section>
    
    
                        <section className='lil_main_2 lil_main_faded'>
                            <p className='lil_t_1'></p>
                            <p className='lil_t_2'></p>
    
                            <div className='lil_bot'>
                               
                            </div>
                        </section>
                        
                    </div>
      
                </li>
            )
        }
        else if(this.props.para.text.length === 1 && this.props.para.type.includes("sub_2_full")){
            return (
                <li className='layout_3 layout_item'>
                    
                  {this.layout_header()}
                  
                    <div className='lil_wrapper'>
    
                        <section className='lil_main_1 lil_main_faded'>
                            <p className='lil_t_1'></p>
                            <p className='lil_t_2'></p>
    
                            <div className='lil_bot'>
                               
                            </div>
                        </section>
    
    
                        <section className='lil_main_2'>
                            <p className='lil_t_1'>{`${this.props.para.text[0].title.slice(0,18)}...`}</p>
                            <p className='lil_t_2'>{`${this.props.para.text[0].teacher.slice(0,16)}...`}</p>
    
                            <div className='lil_bot'>
                                <button className='lil_btn' onClick={()=>this.go_to_website(`${this.props.para.text[0].link}`)}>
                                    <div className='lil_btn_text'>посилання</div>
                                    <div className='lil_btn_line'></div>
                                </button>
                                
                            </div>
                        </section>
                        
                    </div>
      
                </li>
            )
        }
        else if(this.props.para.text.length === 2 && this.props.para.type.includes("sub_2_full")){
            return (
                <li className='layout_3 layout_item'>
                    
                  {this.layout_header()}
                  
                    <div className='lil_wrapper'>
    
                        <section className='lil_main_1'>
                            <p className='lil_t_1'>{`${this.props.para.text[0].title.slice(0,18)}...`}</p>
                            <p className='lil_t_2'>{`${this.props.para.text[0].teacher.slice(0,16)}...`}</p>
    
                            <div className='lil_bot'>
                                <button className='lil_btn' onClick={()=>this.go_to_website(`${this.props.para.text[0].link}`)}>
                                    <div className='lil_btn_text'>посилання</div>
                                    <div className='lil_btn_line'></div>
                                </button>
                                
                            </div>
                        </section>
    
    
                        <section className='lil_main_2'>
                            <p className='lil_t_1'>{`${this.props.para.text[0].title.slice(0,18)}...`}</p>
                            <p className='lil_t_2'>{`${this.props.para.text[0].teacher.slice(0,16)}...`}</p>
    
                            <div className='lil_bot'>
                                <button className='lil_btn' onClick={()=>this.go_to_website(`${this.props.para.text[0].link}`)}>
                                    <div className='lil_btn_text'>посилання</div>
                                    <div className='lil_btn_line'></div>
                                </button>
                                
                            </div>
                        </section>
                        
                    </div>
      
                </li>
            )
        }
        
    }

    // 4 kind of sticker ------------------------------------------------------------------------------------------------------
    l_4_subs(cls, i, arr){
        var p_faded = ` lil_main_faded`;

        if(arr[i] === 0){
            return(
                <section className={cls + p_faded}>
                    <p className='lil_t_1'></p>
                    <p className='lil_t_2'></p>

                    <div className='lil_bot'>
          
                        
                    </div>
                </section>
  
            );
        }else{
            return(
                <section className={cls}>
                    <p className='lil_t_1'>{`${arr[i].title.slice(0,18)}...`}</p>
                    <p className='lil_t_2'>{`${arr[i].teacher.slice(0,16)}...`}</p>

                    <div className='lil_bot'>
                        <button className='lil_btn' onClick={()=>this.go_to_website(`${arr[i].link}`)}>
                            <div className='lil_btn_text'>посилання</div>
                            <div className='lil_btn_line'></div>
                        </button>
                        
                    </div>
                </section>
            )
        }
    }

    layout_4(){
        const p_sub = {
            sub_1_chys: 0,
            sub_2_chys: 1,
            sub_1_znam: 2,
            sub_2_znam: 3,
        }
        var p_data = [0, 0 ,0 ,0]
        var p_type = this.props.para.type
        let p_type_len = p_type.length
        

        // all sub-cards exist
        if(p_type_len === 4){
            for(let i = 0; i < 4; i++) p_data[i] = this.props.para.text[i]
        }
        else if(p_type_len === 3){
            for(let i = 0; i < 3; i++){
                p_data[p_sub[`${p_type[i]}`]] = this.props.para.text[i]
            }
        }
        else if(p_type_len === 2){
            for(let i = 0; i < 2; i++){
                p_data[p_sub[`${p_type[i]}`]] = this.props.para.text[i]
            }
        }
        else if(p_type_len === 1){
            for(let i = 0; i < 1; i++){
                p_data[p_sub[`${p_type[i]}`]] = this.props.para.text[i]
            }
        }

        if(true){
            return (
                <li className='layout_4 layout_item'>
                    
                  {this.layout_header()}
                  
                    <div className='lil_wrapper_chys lil_w'>
    
                        {this.l_4_subs(`lil_main_1 ${this.state.clsAddition_chys}`, 0, p_data)}
                        
                        {this.l_4_subs(`lil_main_2 ${this.state.clsAddition_chys}`, 1, p_data)}
    
                        {/* <section className='lil_main_2'>
                            {this.l_4_subs(1, p_data)}
                        </section> */}
                        
                    </div>

                    <div className='lil_wrapper_znam lil_w'>
    

                        {this.l_4_subs(`lil_main_3 ${this.state.clsAddition_znam}`, 2, p_data)}

                        {this.l_4_subs(`lil_main_4 ${this.state.clsAddition_znam}`, 3, p_data)}

                        {/* <section className='lil_main_1'>
                            {this.l_4_subs(2, p_data)}
                        </section>
    
    
                        <section className='lil_main_2'>
                            {this.l_4_subs(3, p_data)}
                        </section> */}
                        
                    </div>
      
      
                </li>
            )
        }

        
    }

    // 5 kind of sticker ------------------------------------------------------------------------------------------------------
    l_5_subs(cls, i, arr){
        var p_faded = ` lil_sub_faded`;

        

        if(arr[i] === 0){
            return(
                <section className={cls + p_faded}>
                    <p className='lil_t_1'></p>
                    <p className='lil_t_2'></p>

                    <div className='lil_bot'>
          
                        
                    </div>
                </section>
            );
        }else{
            return(
                <section className={cls}>
                    <p className='lil_t_1'>{`${arr[i].title.slice(0,18)}...`}</p>
                    <p className='lil_t_2'>{`${arr[i].teacher.slice(0,16)}...`}</p>

                    <div className='lil_bot'>
                        <button className='lil_btn' onClick={()=>this.go_to_website(`${arr[i].link}`)}>
                            <div className='lil_btn_text'>посилання</div>
                            <div className='lil_btn_line'></div>
                        </button>
                        
                    </div>
                </section>
            )
        }
    }

    l_5_template(arr, is_chys_znam){

        if (is_chys_znam == "chys") {
            return(
                <React.Fragment>
                    <section className={`lil_main_1 ${this.state.clsAddition_chys}`}>
                    <p className='lil_t_1'>{`${arr[0].title.slice(0,28)}...`}</p>
                    <p className='lil_t_2'>{`${arr[0].teacher.slice(0,28)}...`}</p>
    
                    <div className='lil_bot'>
                        <button className='lil_btn' onClick={()=>this.go_to_website(`${arr[0].link}`)}>
                            <div className='lil_btn_text'>посилання</div>
                            <div className='lil_btn_line'></div>
                        </button>
                        
                    </div>
                  </section>
    
                  <section className='lil_main_2'>

                    {this.l_5_subs( `lil_sub_1 lil_sub ${this.state.clsAddition_znam}`, 1, arr)}

                    {this.l_5_subs(`lil_sub_2 lil_sub ${this.state.clsAddition_znam}` , 2, arr)}
                   
                  </section>
                </React.Fragment>
            )
        }
        else if (is_chys_znam == "znam") {
            return(
                <React.Fragment>
                    <section className='lil_main_2 no-radius'>
                    
                    {this.l_5_subs(`lil_sub_1 lil_sub  ${this.state.clsAddition_chys}`, 0, arr)}

                    {this.l_5_subs(`lil_sub_2 lil_sub  ${this.state.clsAddition_chys}`, 1, arr)}
                   
                  </section>
                    <section className={`lil_main_1 ${this.state.clsAddition_znam}`}>
                    <p className='lil_t_1'>{`${arr[0].title}...`}</p>
                    <p className='lil_t_2'>{`${arr[0].teacher}...`}</p>
    
                    <div className='lil_bot'>
                        <button className='lil_btn' onClick={()=>this.go_to_website(`${arr[0].link}`)}>
                            <div className='lil_btn_text'>посилання</div>
                            <div className='lil_btn_line'></div>
                        </button>
                        
                    </div>
                  </section>
    
                  
                </React.Fragment>
            )
        }
    }

    layout_5(){
        var p_data = [0, 0 ,0]
        var p_type = this.props.para.type
        let p_type_len = p_type.length

        const p_sub_1 = {
            group_chys: 0,
            sub_1_znam: 1,
            sub_2_znam: 2,
        }
        const p_sub_2 = {
            sub_1_chys: 0,
            sub_2_chys: 1,
            group_znam: 2,
        }
        let p_sub = {};
        let is_chys_znam;
        
        if(p_type.includes("group_chys")){
            p_sub = p_sub_1
            is_chys_znam = "chys"
        }
        else{
            p_sub = p_sub_2
            is_chys_znam = "znam"
        }

        // all sub-cards exist
        if(p_type_len === 3){
            for(let i = 0; i < 3; i++){
                p_data[p_sub[`${p_type[i]}`]] = this.props.para.text[i]
            }
        }
        else if(p_type_len === 2){
            for(let i = 0; i < 2; i++){
                p_data[p_sub[`${p_type[i]}`]] = this.props.para.text[i]
            }
        }
        else if(p_type_len === 1){
            for(let i = 0; i < 1; i++){
                p_data[p_sub[`${p_type[i]}`]] = this.props.para.text[i]
            }
        }

        if(true){
            return (
                <li className='layout_5 layout_item'>
                    
                {this.layout_header()}
                
                {this.l_5_template(p_data, is_chys_znam)}
    
                </li>
            )
        }
    }

    // 6 kind of sticker ------------------------------------------------------------------------------------------------------
    l_6_subs(cls, i, arr){
        var p_faded = ` lil_sub_faded`;

        if(arr[i] === 0){
            return(
                <section className={cls + p_faded}>
                    <p className='lil_t_1'></p>
                    <p className='lil_t_2'></p>

                    <div className='lil_bot'>
          
                        
                    </div>
                </section>
            );
        }else{
            return(
                <div className={cls}>
                    <p className='lil_t_1'>{`${arr[i].title.slice(0,13)}...`}</p>
                    <p className='lil_t_2'>{`${arr[i].teacher.slice(0,13)}...`}</p>

                    <div className='lil_bot'>
                        <button className='lil_btn' onClick={()=>this.go_to_website(`${arr[i].link}`)}>
                            <div className='lil_btn_text'>посилання</div>
                            <div className='lil_btn_line'></div>
                        </button>
                        
                    </div>
                </div>
            )
        }
    }

    l_6_template(arr, is_left_right){

        if (is_left_right == "left") {
            return(
                <div className='lil_wrapper_6'>
                    <section className={`lil_main_6_1 lil_main_6 lil_left ${this.state.clsAddition_chys}`}>
                        <p className='lil_t_1'>{`${arr[0].title.slice(0,13)}...`}</p>
                        <p className='lil_t_2'>{`${arr[0].teacher.slice(0,13)}...`}</p>

                        <div className='lil_bot'>
                            <button className='lil_btn' onClick={()=>this.go_to_website(`${arr[0].link}`)}>
                                <div className='lil_btn_text'>посилання</div>
                                <div className='lil_btn_line'></div>
                            </button>
                            
                        </div>
                    </section>
    
                    <section className='lil_main_6_2 lil_main_6 lil_right'>
                        {this.l_6_subs(`lil_sub_6_1 lil_sub_6  ${this.state.clsAddition_chys}`, 1, arr)}

                        {this.l_6_subs(`lil_sub_6_2 lil_sub_6  ${this.state.clsAddition_znam}`, 2, arr)}
                        
                    </section>
                </div>
            )
        }
        else if (is_left_right == "right") {
            return(
                <div className='lil_wrapper_6'>

                    <section className='lil_main_6_2 lil_main_6 lil_left'>
                        {this.l_6_subs(`lil_sub_6_1 lil_sub_6  ${this.state.clsAddition_chys}`, 0, arr)}

                        {this.l_6_subs(`lil_sub_6_2 lil_sub_6  ${this.state.clsAddition_znam}`, 1, arr)}
                        
                    </section>

                    <section className='lil_main_6_1 lil_main_6 lil_right'>
                        <p className='lil_t_1'>{`${arr[2].title.slice(0,13)}...`}</p>
                        <p className='lil_t_2'>{`${arr[2].teacher.slice(0,13)}...`}</p>

                        <div className='lil_bot'>
                            <button className='lil_btn' onClick={()=>this.go_to_website(`${arr[2].link}`)}>
                                <div className='lil_btn_text'>посилання</div>
                                <div className='lil_btn_line'></div>
                            </button>
                            
                        </div>
                    </section>
    
                    
                </div>
            )
        }
    }

    layout_6(){
        var p_data = [0, 0 ,0]
        var p_type = this.props.para.type
        let p_type_len = p_type.length

        const p_sub_1 = {
            sub_1_full: 0,
            sub_2_chys: 1,
            sub_2_znam: 2,
        }
        const p_sub_2 = {
            sub_1_chys: 0,
            sub_1_znam: 1,
            sub_2_full: 2,
        }
        let p_sub = {};
        let is_left_right;
        
        if(p_type.includes("sub_1_full")){
            p_sub = p_sub_1
            is_left_right = "left"
        }
        else{
            p_sub = p_sub_2
            is_left_right = "right"
        }

        // all sub-cards exist
        if(p_type_len === 3){
            for(let i = 0; i < 3; i++){
                p_data[p_sub[`${p_type[i]}`]] = this.props.para.text[i]
            }
        }
        else if(p_type_len === 2){
            for(let i = 0; i < 2; i++){
                p_data[p_sub[`${p_type[i]}`]] = this.props.para.text[i]
            }
        }
        else if(p_type_len === 1){
            for(let i = 0; i < 1; i++){
                p_data[p_sub[`${p_type[i]}`]] = this.props.para.text[i]
            }
        }

        if(true){
            return (
                <li className='layout_6 layout_item'>
                    
                {this.layout_header()}
                
                {this.l_6_template(p_data, is_left_right)}
    
                </li>
            )
        }

        
    }

    // appears when list is empty
    r(){
        return (
            
            <li className='lesson_item_empty layout_item'>
                <div className='lil_top'>
                    <p className='lil_time'></p>
                    <p className='lil_type'>пусто</p>
                    <p className='lil_para'></p>
                </div>
            </li>
          )
    }
    r_error(){
        return (
            
            <li className='lesson_item_empty layout_item'>
                <div className='lil_top'>
                    <p className='lil_time'></p>
                    <p className='lil_type'>пусто</p>
                    <p className='lil_para'></p>
                </div>
                <div className='lil_bot'>
                    щось пішло не так при загрузці пари<br></br>:(
                </div>
            </li>
          )
    }
    r_blyat(){
        return (
            
            <li className='lesson_item_empty layout_item'>
                <div className='lil_top'>
                    <p className='lil_time'></p>
                    <p className='lil_type'>пусто</p>
                    <p className='lil_para'></p>
                </div>
                <div className='lil_bot'>
                    dick
                </div>
            </li>
          )
    }

                                                                                                                                                

    is_layout_5(p_type_var){
        let part_1 = false;
        let part_2 = false;
        // console.log(`!!!!!!!!!!!!!!!!!!!!>\n${p_type_var[0]}`)
        if( (p_type_var.includes("group_chys") || p_type_var.includes("group_znam")) )
        {
            part_1 = true
        }
        if
        (
            (p_type_var.includes("sub_1_chys") || p_type_var.includes("sub_2_chys")) || 
            (p_type_var.includes("sub_1_znam") || p_type_var.includes("sub_2_znam"))
        )
        {
            part_2 = true
        }

        if ( part_1 && part_2)
        {
            return true
        }
        else
        {
            return false
        }
    }
    is_layout_6(p_type_var){
        let part_1 = false;
        let part_2 = false;
        // console.log(`!!!!!!!!!!!!!!!!!!!!>\n${p_type_var[0]}`)
        if( (p_type_var.includes("sub_1_full") || p_type_var.includes("sub_2_full")) )
        {
            part_1 = true
        }
        if
        (
            (p_type_var.includes("sub_1_chys") || p_type_var.includes("sub_2_chys")) || 
            (p_type_var.includes("sub_1_znam") || p_type_var.includes("sub_2_znam"))
        )
        {
            part_2 = true
        }

        if ( part_1 && part_2)
        {
            return true
        }
        else
        {
            return false
        }
    }

    // function that catch errors and return emergency card 
    launch_render(card_to_return){
        try{
            return card_to_return
        }catch{
            return this.r_error()
        }
    }

    // here we choose which sticker type will be shown
    layout_manager(){
        

        const type_var = this.props.para.type
        if(this.props.isEmptyDay){
            return this.r()
        }
        else if(this.is_layout_6(type_var)){
            // console.log(`> layout 6 --------------------------------`)
            // return <p>layout_6</p>
            // return this.layout_6()
            // try{
            //     return this.layout_6()
            // }catch{
            //     return this.r_error()
            // }
            return this.launch_render(this.layout_6())
        }
        else if(this.is_layout_5(type_var)){
            // console.log(`> layout 5 --------------------------------`)
            // return <p>layout_5</p>
            // return this.layout_5()
            return this.launch_render(this.layout_5())
        }
        else if("group_full".includes(type_var[0])){
            // return this.layout_1()
            return this.launch_render(this.layout_1())
        }
        else if("group_chys group_znam".includes(type_var[0])){
            // return this.layout_2()
            return this.launch_render(this.layout_2())
        }
        else if("sub_1_full sub_2_full".includes(type_var[0])){
            // return this.layout_3()
            return this.launch_render(this.layout_3())
        }
        else if("sub_1_znam sub_2_znam sub_1_chys sub_2_chys".includes(type_var[0])){
            // return this.layout_4()
            return this.launch_render(this.layout_4())
        }
        else{
            return this.r()
            // return this.r_blyat()
        }

        
    }

    manualScroll(){

        // const weekday = ["неділя","понеділок","вівторок","середа","четвер","п'ятниця","субота"];

        // const scroll_week = 
        // {
        //     "понеділок": 100,
        //     "вівторок": 400,
        //     "середа": 600,
        //     "четвер": 1000,
        //     "п'ятниця": 1300,
        //     "субота": 1600
        // }
        const p_width = window.innerWidth;
        const scroll_week = 
        {
            "понеділок": 0,
            "вівторок": p_width ,
            "середа": p_width * 2,
            "четвер": p_width * 3,
            "п'ятниця": p_width * 4,
            "субота": p_width * 5
        }

        // console.log(`manual scroll> --- ${this.props.todays_day}`)
        document.getElementById('main_block_section').scroll({
          behavior: 'smooth',
        //   left: p_width * 1
          left: scroll_week[`${this.props.todays_day}`],
          
        });
    }


    componentDidMount(){
        this.add_cls_chys_znam()
        
        this.manualScroll()
        
    }


  render() {
    if(!this.props.isDaysListEmpty){

        return this.layout_manager()
    }else{

        return this.r()
    }
  }
}

export default Lesson_Item