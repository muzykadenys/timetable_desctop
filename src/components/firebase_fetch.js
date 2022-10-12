import { async } from "@firebase/util";
import { getDatabase, ref, child, get, set } from "firebase/database";
// import { gsap } from "gsap";


// export async function some(){
//     const header = await gsap.timeline({defaults: {duration: 0.7}});
//     // gsap.utils.toArray(".bigCardWrapper").forEach(async (el, i) => {

//     //     await gsap.from(el, {opacity: 0, y: -20});
//     // })
//     await header.from('.bigCardWrapper', {opacity: 0, y: -20,stagger: 0.05 })
// }
// some()

// var style = document.createElement('style');
// style.innerHTML = `
// .bigCardWrapper{
//     width: 100%;
//     animation:stagger ease-in 1s forwards 1;
// }
// @keyframes stagger{
//     from{
//         opacity: 0;
//         // border: 8px solid black;
//     }
//     to{
//         // border: attr(ops) solid pink;
//         opacity: attr(ops);
//     }
// }
// `;
// document.head.appendChild(style);


export function getFirebase(p_text, p_set_days_list, p_set_weekdays_list, p_set_weekdays_added_list){
    const logs = "firebase_fetch.js   getFirebase";

    get(child(ref(getDatabase()), `${p_text}/`)).then((snapshot) => {
        if (snapshot.exists()) 
        {
            //  console.log(`${logs}> value ${snapshot.val().group[0][0].text[0].title}`)

            p_set_weekdays_added_list(snapshot.val().days_added)
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
export function writeWeekFirebase(p_chys_znam){

    set(ref(getDatabase(), 'week/'), {
        week: `${p_chys_znam}`
    })
}

export function getWeekFirebase(p_week_chys_znam){

    get(ref(getDatabase(), 'week/')).then((snapshot)=>{
        console.log(`getWeekFirebase>${snapshot.val()['week']}`)
        p_week_chys_znam(snapshot.val()['week'])
    })

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



