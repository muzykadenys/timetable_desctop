import React, { Component, useState} from 'react'
import '../index.css'

import {test} from './firebase_fetch.js'

import Search_Main from './search/Search_Main.js';
import Header from './header/Header'
import Main_Block from './main_block/Main_Block';

function Main() {

    var [days_list, setDays_List] = useState([
     
    ])
    var [isDaysListEmpty, setIsDaysListEmpty] = useState(true)

    var [weekdays_list, setWeekdays_List] = useState([
        "password",
        "is",
        "a",
        "oral",
        "cumshot"
    ])


    if(isDaysListEmpty){
      setIsDaysListEmpty(false) // set val that days list is not empty
      console.log("> start fetching ")
      getData()
     
      test()
    }
    //===================================================================================================================

    // getting data from json file
    function getData(){
        fetch("./ПС-13.json")
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log("getData> reading json")
            fillDaysList(data.group)
            fillWeekdaysList(data.days)
        })
        .then(function(){
          // setIsDaysListEmpty(false) 
        })
    }

    // filling days list
    function fillDaysList(p_list){
      setDays_List(p_list)
    }

    // filling weekdays list
    function fillWeekdaysList(p_list){
      setWeekdays_List(p_list)
    }

    return (
      <div className="Main">
        
        <Search_Main/>
        <Header getData={getData}/>
        <Main_Block days_list={days_list} weekdays_list={weekdays_list} isDaysListEmpty={isDaysListEmpty}/>

      </div>
    );
  }


export default Main
