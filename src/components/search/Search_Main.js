import React, { Component, useState } from 'react'

import "./search_main.scss"

import Brick from './brick/Brick'

class Search_Main extends Component {

  // function that close modal search window
  close_modal(){
    this.props.setSearchModal(false)
  }



  render() {
    const search_class = 'search_section';
    return (
      <div className={this.props.search_modal ? `search_section active` : "search_section"} onClick={()=>this.close_modal()}>
        <div className='ss_wrapper' onClick={e => e.stopPropagation()}>

            <div className='ss_header'>
                <div className='back_btn' onClick={()=>this.close_modal()}>{`🚪`}</div>
                <div className='search_btn'>🔎</div>
            </div>

            <div className='choosen_bricks_wrapper'>
              <div className='choosen_bricks'>
                <Brick/>
                <Brick/>
                <Brick/>
                <Brick/>
                <Brick/>
                <Brick/>
                <Brick/>
                <Brick/>
                <Brick/>
                <Brick/>
                <Brick/>
                <Brick/>
              </div>
            </div>


            <div className='separator'></div>


            <div className='variants_wrapper'>
              <div className='variants'>
                {this.props.students_groups.map((elem, index) => {
                  return <Brick
                    group={elem}
                    key={index}
                    students_groups={this.props.students_groups}
                    getDataFromFirebase={this.props.getDataFromFirebase}
                    current_group={this.props.current_group}
                    setCurrentGroup={this.props.setCurrentGroup}
                    setSearchModal={this.props.setSearchModal}
                    set_localStorage={this.props.set_localStorage}
                  />
                })}
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Search_Main
