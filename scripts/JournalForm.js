
import {saveJournalEntry} from "./JournalDataProvider.js"
import {getMoods,useMoods} from "./Moodprovider.js"
// import {useInstructors,getInstructors} from "./instructors/instructorprovider.js"

const eventHub = document.querySelector(".main")
const contentTarget = document.querySelector("#journalForm")

// create note form HTML with inputs and render form to DOM
// add a click event for when user clicks the submit button
// submit should grab values from form inputs, build new note object, and POST that note to the API

// get the entriesdata from api

export const entryForm = () =>{
    getMoods()
     .then(() =>{
        // allMoods = useMoods()
        render( useMoods())
    })
    }


// rendering and put it into DOM

const render = (allMoods) =>{
    console.log(allMoods)
   
    contentTarget.innerHTML = `
    <label for="date1"> Date of Entry :</label>
    <input type="date" name="date1" id="journalDate" size="60">

    <label for="date1"> Concepts Covered :</label>
    <input type="text" name="Concepts Covered" id="journalConcepts" size="65" maxlength="70">

    <label for="date1"> Journal Entry: </label> 
    <input type="text" id="journalSummary">
    <textarea rows="3" cols="3"> </textarea>

    <label for="date1"> Mood for the day:</label> 
    <select id= "journalMood" name="Mood for the day" > 
        <option value="0">Select Mood for the day</option>
        ${allMoods.map(mood =>{
            return `<option value=${mood.id}>${mood.label}</option>`
        }).join("")}
       
        </select>
        <button id="journalentry">Record Journal Entry</button>`
    }
      

        // <label for="instructors"> Instructors: </label> 
        // <select id= "instructorId" name="Instructors for the day" > 
        //     <option value="0">Select Instructors for the day</option>
        //     ${allinstructors.map(instructor =>{
        //         return `<option value = ${instructor.id}>${instructor.first_name}</option>`
        //     }).join("")}
        //
        
            
        //  click button for saving 

eventHub.addEventListener("click",clickEvent =>{
    if(clickEvent.target.id === "journalentry"){
       
    //    grab the input values
    const date = document.querySelector("#journalDate").value
    const concept = document.querySelector("#journalConcepts").value
    const entry = document.querySelector("#journalSummary").value
    const mood = document.querySelector("#journalMood").value
    // const instructors = document.querySelector("#instructorId").value
    const timestamp = Date.now()

    // make a note object
    const newNote = {
        date:date,
        concept: concept,
        entry: entry,
        moodId: mood,
        timestamp: timestamp
      
    }
    //  console.log(newNote)
    // POST object to database / API / json file
    saveJournalEntry(newNote)
   
}
})







    