import { async } from "@firebase/util";
import { getDatabase, ref, child, get, set } from "firebase/database";

import {log} from '../LOGGER.js'


export function getFirebase(p_text, p_set_days_list, p_set_weekdays_list, p_set_weekdays_added_list){
    const logs = "firebase_fetch.js   getFirebase";

    get(child(ref(getDatabase()), `${p_text}/`)).then((snapshot) => {
        if (snapshot.exists()) 
        {

            p_set_weekdays_added_list(snapshot.val().days_added)
             p_set_days_list(snapshot.val().group)
             p_set_weekdays_list(snapshot.val().days)  
        } 
        else
        {
            log(`${logs}> > No data available`);
        }
        }).catch((error) => {
        console.error(`${logs}> error`);
        });
}

export function getStudents(p_student_groups){
    const logs = "+getStudents";

    get(child(ref(getDatabase()), `students_groups/`)).then((snapshot) => {
        if (snapshot.exists()) 
        {
            let t_arr = snapshot.val()
            let arr_main = t_arr.filter(el => (`${el}`.split("-").length - 1) != 2).sort((a, b) => a.localeCompare(b)) // separate only ordinary groups
            let arr_add = t_arr.filter(el => (`${el}`.split("-").length - 1) >= 2).sort((a, b) => a.localeCompare(b)) // separate additional groups
            // log(`-------> ${[...arr_main, ... arr_add]}`)
            // log(`${logs}> value ${snapshot.val().sort((a, b) => a.localeCompare(b))}`)
            p_student_groups([...arr_main, ...arr_add])
        } 
        else
        {
            log(`${logs}> > No data available`);
        }
        }).catch((error) => {
            console.error(`${logs}> error`);
        });
}
export function writeWeekFirebase(p_chys_znam){

    set(ref(getDatabase(), 'week/'), {
        week: `${p_chys_znam}`
    })
}

export function getWeekFirebase(p_week_chys_znam){

    get(ref(getDatabase(), 'week/')).then((snapshot)=>{
        log(`getWeekFirebase>${snapshot.val()['week']}`)
        p_week_chys_znam(snapshot.val()['week'])
    })
}


export function test(){
    log("firebase_fetch.js> test");
    
    get(child(ref(getDatabase()), `ПС-13/`)).then((snapshot) => {
    if (snapshot.exists()) {
         log(`firebase_fetch.js> value ${snapshot.val().days[0]}`)
    } else {
        log("firebase_fetch.js> No data available");
    }
    }).catch((error) => {
    console.error("firebase_fetch.js> error");
    });
}



