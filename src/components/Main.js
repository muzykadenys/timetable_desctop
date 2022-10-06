import React, { Component, useState, useEffect} from 'react'
import '../index.css'

import {test, getFirebase, getStudents, writeWeekFirebase, getWeekFirebase} from './firebase_fetch.js'

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

    // variable for change week chys/znam
    var [chys_znam, setChysZnam] = useState("cum")

    // torays day
    var [todays_day, setTodaysDay] = useState("")
    
    // app in firebase
    var [app, setApp] = useState();

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

    // get todays day
    function get_Todays_Day(){
      const weekday = ["неділя","понеділок","вівторок","середа","четвер","п'ятниця","субота"];

      const d = new Date();
      let day = weekday[d.getDay()];
      // console.log(`todays day> ${day}`)
      setTodaysDay(day);
    }

    // writing in firebase chys/znam and date
    function setWeekChysZnam(obj_week){
      let chys_znam; 

      const d = new Date();
      let day = d.getUTCDate();
      let day_week = d.getDay();
      let month  = d.getMonth();
      let year = d.getFullYear();

      let whole_date = `${day}.${month}.${year}`
      let plain_date_local_storage = `${obj_week}`.replace("chys.", "").replace("znam.", "")

      if (day_week == `0` && (plain_date_local_storage != whole_date)){

        let loc_chys_znam
        let res

        if(obj_week.includes('chys')){
          loc_chys_znam = 'znam'
        }
        else if(obj_week.includes('znam')){
          loc_chys_znam = 'chys'
        }

        res = `${loc_chys_znam}.${whole_date}` // new chys/znam + current date
        localStorage.setItem(`week`, res)

        console.log(`!!!!!!!!!!!! UPDATE WEEK TO ${loc_chys_znam}`)

        console.log(`= setWeekChysZnam> ${res}`)
        setChysZnam(res)
        writeWeekFirebase(res) // write changes in firebase
      }
      else{
        if(obj_week.includes('chys')){
          chys_znam = 'chys'
        }
        else if(obj_week.includes('znam')){
          chys_znam = 'znam'
        }
  
        console.log(`= setWeekChysZnam> ${obj_week}`)
        setChysZnam(chys_znam)
      }
    }

    // getting data from local storage
    function get_localStorage(){
      const obj = localStorage.getItem('selected_groups');
      

      if(obj) // if localStorage data exist
      { 
        const j_obj = JSON.parse(obj);
        const obj_week = localStorage.getItem('week');
      
        setSelectedGroupsList(j_obj.all)
        setCurrentGroup(j_obj.last)
        getDataFromFirebase(j_obj.last)

        if(obj_week){
          setWeekChysZnam(obj_week)
        }else{
          getWeekFirebase( (p_val)=>{
            localStorage.setItem(`week`, `${p_val}`)
            setWeekChysZnam(p_val)
          })
        }

        console.log(`get_localStorage> SUCCESSS!`)
      }
      else// if localStorage data NOT exist
      {
        console.log(`get_localStorage> FAILURE!`)

        getStudents(setStudentsGroups);

        setIsFirstVisit(true)
        setSearchModal(true)

        //get data about chys/znam from firebase, if first visit
        getWeekFirebase( (p_val)=>{
          localStorage.setItem(`week`, `${p_val}`)
          setWeekChysZnam(p_val)
        })
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

        {/* {chys_znam == "znam" ?
        <p>znam blyat </p>:
        <p>chys syka</p>
        } */}

        {/* <button onClick={()=>
        {
          localStorage.removeItem('selected_groups');
          localStorage.removeItem('week');
          console.log("> !!! LOCALSTORAGE DATA IS REMOVED !!!")
        }}>clear localStorage</button> */}

        <App_Start
        app={app}
        setApp={setApp}
        firebaseConfig={firebaseConfig}
        isDaysListEmpty={isDaysListEmpty}
        getDataFromFirebase={getDataFromFirebase}
        setIsDaysListEmpty={setIsDaysListEmpty}
        get_localStorage={get_localStorage}
        setWeekChysZnam={setWeekChysZnam}
        get_Todays_Day={get_Todays_Day}
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
          chys_znam={chys_znam}
          todays_day={todays_day}
        />

      </div>
    );
  }


export default Main
