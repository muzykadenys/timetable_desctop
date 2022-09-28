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
    // list with awailable and NOT available weekdays of groups
    var [weekdays_added_list, setWeekdaysAdded_List] = useState([]);

    //list that contains students groups
    var [students_groups, setStudentsGroups] = useState([]);

    //name of current group
    var [current_group, setCurrentGroup] = useState("💩🗑️🗿");

    //var that show or hide search window
    var [search_modal, setSearchModal] = useState(false);
    // var that shows is it first visit
    var [isFirstVisit, setIsFirstVisit] = useState(false);

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
      
      if(current_group != "" && current_group != "💩🗑️🗿")
      {

        const obj = {
          "last": `${current_group}`,
          "all": selected_groups_list
        }

        console.log(`set_localStorage> write in storage`)
        localStorage.setItem('selected_groups', JSON.stringify(obj))

        console.log(`set_localStorage> SUCCESSS!`)
      }
      else
      {
        console.log(`set_localStorage> FAILURE!`)
      }

      
    }

    // getting data from local storage
    function get_localStorage(){
      const obj = localStorage.getItem('selected_groups');

      if(obj) // if localStorage data exist
      { 
        const j_obj = JSON.parse(obj);
      
        setSelectedGroupsList(j_obj.all)
        setCurrentGroup(j_obj.last)
        getDataFromFirebase(j_obj.last)

        console.log(`get_localStorage> SUCCESSS!`)
      }
      else// if localStorage data NOT exist
      {
        console.log(`get_localStorage> FAILURE!`)

        getStudents(setStudentsGroups);

        setIsFirstVisit(true)
        setSearchModal(true)
      }
      
    }

    // getting data from firebase and writing in days_list and weekdays_list and students_groups
    function getDataFromFirebase (p_text){
      if (p_text == current_group)
      {
        console.log(`getDataFromFirebase> REPETITION SAME GROUP!`)
      }
      else if(p_text != "")
      {
        getStudents(setStudentsGroups);
        getFirebase(p_text, setDays_List, setWeekdays_List, setWeekdaysAdded_List);
        setCurrentGroup(p_text)

      if(!selected_groups_list.includes(p_text)){
        console.log(`NOT REPEATS> ${selected_groups_list}`)
        var arr = selected_groups_list;
        arr.push(p_text)
        setSelectedGroupsList(arr)
      }

      // console.log(`selected list> ${p_text}`)
      console.log(`getDataFromFirebase> SUCCESS!`)
      }
      else
      {
        console.log(`getDataFromFirebase> FAILURE!`)
      }
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

        <button onClick={()=>
        {
          localStorage.removeItem('selected_groups');
          console.log("> !!! LOCALSTORAGE DATA IS REMOVED !!!")
        }}>clear localStorage</button>

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
        selected_groups_list={selected_groups_list}
        setCurrentGroup={setCurrentGroup}
        set_localStorage={set_localStorage}
        isFirstVisit={isFirstVisit}
        setIsFirstVisit={setIsFirstVisit}
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
          weekdays_added_list={weekdays_added_list}
          isDaysListEmpty={isDaysListEmpty}
        />

      </div>
    );
  }


export default Main
