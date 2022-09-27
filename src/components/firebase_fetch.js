import { getDatabase, ref, child, get } from "firebase/database";



export function getFirebase(p_text, p_set_days_list, p_set_weekdays_list){
    const logs = "firebase_fetch.js   getFirebase";

    get(child(ref(getDatabase()), `${p_text}/`)).then((snapshot) => {
        if (snapshot.exists()) 
        {
            //  console.log(`${logs}> value ${snapshot.val().group[0][0].text[0].title}`)


             p_set_days_list(snapshot.val().group)
             p_set_weekdays_list(snapshot.val().days)
        } 
        else
        {
            console.log(`${logs}> > No data available`);
        }
        }).catch((error) => {
        console.error(`${logs}> error`);
        });
}

export function getStudents(p_student_groups){
    const logs = "firebase_fetch.js   getStudents";

    get(child(ref(getDatabase()), `students_groups/`)).then((snapshot) => {
        if (snapshot.exists()) 
        {
            //  console.log(`${logs}> value ${snapshot.val()}`)
             p_student_groups(snapshot.val())
        } 
        else
        {
            console.log(`${logs}> > No data available`);
        }
        }).catch((error) => {
            console.error(`${logs}> error`);
        });
}


export function test(){
    console.log("firebase_fetch.js> test");
    
    get(child(ref(getDatabase()), `ПС-13/`)).then((snapshot) => {
    if (snapshot.exists()) {
         console.log(`firebase_fetch.js> value ${snapshot.val().days[0]}`)
    } else {
        console.log("firebase_fetch.js> No data available");
    }
    }).catch((error) => {
    console.error("firebase_fetch.js> error");
    });
}



