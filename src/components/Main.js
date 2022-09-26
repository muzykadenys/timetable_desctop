import React, { Component, useState, useEffect} from 'react'
import '../index.css'

import {test, getFirebase, getStudents} from './firebase_fetch.js'

import App_Start from './App_Start';
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
    //list with awailable weekday for group
    var [weekdays_list, setWeekdays_List] = useState([
        "password",
        "is",
        "a",
        "oral",
        "cumshot"
    ]);

    //list that contains students groups
    var [students_groups, setStudentsGroups] = useState(["shit no groups"]);

    //name of current group
    var [current_group, setCurrentGroup] = useState("empty group");

    //var that show or hide search window
    var [search_modal, setSearchModal] = useState(false);

    //.list with groups which user select
    var [selected_groups_list, setSelectedGroupsList] = useState([]);
    
    // app in firebase
    var [app, setApp] = useState();
    
    // if(isDaysListEmpty){
    //   setIsDaysListEmpty(false) // set val that days list is not empty

    //   console.log("> start fetching ")

    //   // const app = initializeApp(firebaseConfig);
    //   setApp(initializeApp(firebaseConfig));
      
    //   // get_localStorage()

    //   getDataFromFirebase("ДС-13")
      
      
    // }

    // ===================================================================================================================

    // write data in local storage
    function set_localStorage(){
      // const obj = {
      //   "last": "ПМ-777",
      //   "all": ["ПМ-666"]
      // }
      
      const obj = {
        "last": `${current_group}`,
        "all": selected_groups_list
      }
      console.log(`set_localStorage> write in storage`)
      localStorage.setItem('selected_groups', JSON.stringify(obj))
    }

    // getting data from local storage
    function get_localStorage(){
      const obj = localStorage.getItem('selected_groups');
      const j_obj = JSON.parse(obj);
      // console.log(`get_localStorage> ${JSON.parse(obj).last}`)
      setCurrentGroup(j_obj.last)
      getDataFromFirebase(j_obj.last)
    }

    // getting data from firebase and writing in days_list and weekdays_list and students_groups
    function getDataFromFirebase (p_text){
      getStudents(setStudentsGroups);
      getFirebase(p_text, setDays_List, setWeekdays_List);
      setCurrentGroup(p_text)

      if(!selected_groups_list.includes(p_text)){
        var arr = selected_groups_list;
        arr.push(p_text)
        setSelectedGroupsList(arr)
      }

      console.log(`selected list> ${selected_groups_list}`)
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
        <App_Start
        app={app}
        setApp={setApp}
        firebaseConfig={firebaseConfig}
        isDaysListEmpty={isDaysListEmpty}
        getDataFromFirebase={getDataFromFirebase}
        setIsDaysListEmpty={setIsDaysListEmpty}
        get_localStorage={get_localStorage}
        />


        <Search_Main 
        search_modal={search_modal} 
        setSearchModal={setSearchModal}
        students_groups={students_groups} 
        getDataFromFirebase={getDataFromFirebase}
        current_group={current_group}
        setCurrentGroup={setCurrentGroup}
        set_localStorage={set_localStorage}
        />
        <Header
        current_group={current_group}
        getData={getData}
        setSearchModal={setSearchModal}
        set_localStorage={set_localStorage}
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
