import React, { Component, useState, useEffect} from 'react'
import '../index.css'

import {test, getFirebase, getStudents} from './firebase_fetch.js'

import Search_Main from './search/Search_Main.js';
import Header from './header/Header'
import Main_Block from './main_block/Main_Block';

import {initializeApp} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCkmKnmmc7R4wNHSZT3HI1g1bM0eqHy7OA",
    authDomain: "timetabledesctop.firebaseapp.com",
    databaseURL: "https://timetabledesctop-default-rtdb.firebaseio.com",
    projectId: "timetabledesctop",
    storageBucket: "timetabledesctop.appspot.com",
    messagingSenderId: "819973348577",
    appId: "1:819973348577:web:7ccfc154e279ad0d07eba0",
    measurementId: "G-EK8NHWB35D"
  };



function Main() {
    // list with all days temetable
    var [days_list, setDays_List] = useState([]);
    // variable that shows is days_list is empty
    var [isDaysListEmpty, setIsDaysListEmpty] = useState(true);
    var [appStarter, setAppStarter] = useState(0);
    //list with awailable weekday for group
    var [weekdays_list, setWeekdays_List] = useState([
        "password",
        "is",
        "a",
        "oral",
        "cumshot"
    ]);

    //list that contains students groups
    var [students_groups, setStudentsGroups] = useState(["shit"]);

    //name of current group
    var [current_group, setCurrentGroup] = useState("dick");

    //var that show or hide search window
    var [search_modal, setSearchModal] = useState(false);
    
    
    if(isDaysListEmpty && appStarter === 0){
      setIsDaysListEmpty(false) // set val that days list is not empty

      console.log("> start fetching ")
      // getData()
     
      const app = initializeApp(firebaseConfig);
      getStudents(setStudentsGroups);
      getDataFromFirebase("ДС-13");
    }
    // ===================================================================================================================

    // getting data from firebase and writing in days_list and weekdays_list
    function getDataFromFirebase(p_text){
      getFirebase(p_text, setDays_List, setWeekdays_List);
      setCurrentGroup(p_text)
    }

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
        
        <Search_Main 
        search_modal={search_modal} 
        setSearchModal={setSearchModal}
        students_groups={students_groups} 
        getDataFromFirebase={getDataFromFirebase}
        setCurrentGroup={setCurrentGroup}
        />
        <Header
        current_group={current_group}
        getData={getData}
        setSearchModal={setSearchModal}
        />
        <Main_Block 
          days_list={days_list} 
          weekdays_list={weekdays_list} 
          isDaysListEmpty={isDaysListEmpty}
        />

      </div>
    );
  }


export default Main
