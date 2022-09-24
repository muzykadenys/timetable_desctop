import React, { Component } from 'react'

import "./lesson_item.scss"

class Lesson_Item extends Component {

    constructor (props){
        super(props)

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

    // 1 kind of sticker
    layout_1 (){
        return (
            <li className='layout_1'>
                
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

    // 2 kind of sticker
    layout_2(){
        // if top sub block exist
        if(this.props.para.text.length === 1 && this.props.para.type.includes("group_chys")){

            return (
                <li className='layout_2'>
                    
                  {this.layout_header()}
                  
                  <section className='lil_main_1'>
                    <p className='lil_t_1'>{`${this.props.para.text[0].title.slice(0,28)}...`}</p>
                    <p className='lil_t_2'>{`${this.props.para.text[0].teacher.slice(0,28)}...`}</p>
    
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
                  
                </li>
            )
        }
         // if bottom sub block exist
        else if(this.props.para.text.length === 1 && this.props.para.type.includes("group_znam")){

            return (
                <li className='layout_2'>
                    
                  {this.layout_header()}
                  
                  <section className='lil_main_1 lil_main_faded'>
                    <p className='lil_t_1'></p>
                    <p className='lil_t_2'></p>
    
                    <div className='lil_bot'>
                    </div>
                  </section>
    
                  <section className='lil_main_2'>
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
                <li className='layout_2'>
                    
                  {this.layout_header()}
                  
                  <section className='lil_main_1'>
                    <p className='lil_t_1'>{`${this.props.para.text[0].title.slice(0,28)}...`}</p>
                    <p className='lil_t_2'>{`${this.props.para.text[0].teacher.slice(0,28)}...`}</p>
    
                    <div className='lil_bot'>
                        <button className='lil_btn' onClick={()=>this.go_to_website(`${this.props.para.text[0].link}`)}>
                            <div className='lil_btn_text'>посилання</div>
                            <div className='lil_btn_line'></div>
                        </button>
                        
                    </div>
                  </section>
    
                  <section className='lil_main_2'>
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

    // 3 kind of sticker
    layout_3(){
        // if left sub block exist
        if(this.props.para.text.length === 1 && this.props.para.type.includes("sub_1_full")){
            return (
                <li className='layout_3'>
                    
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
                <li className='layout_3'>
                    
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
                <li className='layout_3'>
                    
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

    // 4 kind of sticker
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
                <li className='layout_4'>
                    
                  {this.layout_header()}
                  
                    <div className='lil_wrapper_chys lil_w'>
    
                        {this.l_4_subs('lil_main_1', 0, p_data)}
                        
                        {this.l_4_subs('lil_main_2', 1, p_data)}
    
                        {/* <section className='lil_main_2'>
                            {this.l_4_subs(1, p_data)}
                        </section> */}
                        
                    </div>

                    <div className='lil_wrapper_znam lil_w'>
    

                        {this.l_4_subs('lil_main_3', 2, p_data)}

                        {this.l_4_subs('lil_main_4', 3, p_data)}

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

    // appears when list is empty
    r(){
        return (
            <li className='lesson_item'></li>
          )
    }

    // here we choose which sticker type will be shown
    layout_manager(){
        const type_var = this.props.para.type

        if("group_full".includes(type_var[0])){
            return this.layout_1()
        }
        else if("group_chys group_znam".includes(type_var[0])){
            return this.layout_2()
        }
        else if("sub_1_full sub_2_full".includes(type_var[0])){
            return this.layout_3()
        }
        else if("sub_1_znam sub_2_znam sub_1_chys  sub_1_chys".includes(type_var[0])){
            return this.layout_4()
        }
        else{
            return this.r()
        }

        
    }

  render() {
    if(!this.props.isDaysListEmpty){
        return this.layout_manager()
        // return this.layout_1()
    }else{
        return this.r()
    }
  }
}

export default Lesson_Item