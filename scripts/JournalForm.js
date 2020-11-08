import {getEntries,useEntries} from "./JournalDataProvider.js"
import {saveJournalEntry} from "./JournalDataProvider.js"

const eventHub = document.querySelector(".main")
const contentTarget = document.querySelector(".article")

// create note form HTML with inputs and render form to DOM
// add a click event for when user clicks the submit button
// submit should grab values from form inputs, build new note object, and POST that note to the API

// get the entriesdata from api

export const JournalFormComponent  = () =>{
    getEntries().then(() =>{
    const entriesData = useEntries()
    render(entriesData)
    })
}
// rendering and put it into DOM

const render = (entries) =>{
    
    contentTarget.innerHTML = `
    <label for="date1"> Date of Entry :</label>
    <input type="date" name="date1" id="entries--date1" size="60">

    <label for="date1"> Concepts Covered :</label>
    <input type="text" name="Concepts Covered" id="entries--conceptsCovered" size="65" maxlength="70">

    <label for="date1"> Journal Entry: </label> 
    <input type="text" id="entries--journalEntrydata">
    <textarea rows="3" cols="3"> </textarea>

    <label for="date1"> Mood for the day:</label> 
    <select id= "entries--Moodfortheday" name="Mood for the day" > 
        <option value="0">Select Mood for the day</option>
        <option value="Happy"> Happy</option>
        <option value="Sad"> Sad</option>
        <option value="Ok"> Ok</option>
        </select>
        <button id="entries--journalentry">Record Journal Entry</button>`
       }
       
 

eventHub.addEventListener("click",clickEvent =>{
    if(clickEvent.target.id === "entries--journalentry"){
       
    //    grab the input values
    const date = document.querySelector("#entries--date1").value
    const concept = document.querySelector("#entries--conceptsCovered").value
    const entry = document.querySelector("#entries--journalEntrydata").value
    const mood = document.querySelector("#entries--Moodfortheday").value
    const timestamp = Date.now()

    // make a note object
    const newNote = {
        date,
        concept,
        entry,
        mood,
        timestamp
    }
    //  console.log(newNote)
    // POST object to database / API / json file
    saveJournalEntry(newNote)
}
})







    