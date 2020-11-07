import {getEntries,useEntries} from "./JournalDataProvider.js"
// import {saveJournalEntry} from "./JournalDataProvider.js"
const eventHub = document.querySelector(".main")
const contentTarget = document.querySelector(".article")

// get the entriesdata from api

export const JournalFormComponent  = () =>{
    getEntries().then(() =>{
    const entriesData = useEntries()
    render(entriesData)
    })
}
// rendering and put it into DOM

const render = () =>{
    contentTarget.innerHTML = `
    <label for="date1"> Date of Entry :</label>
    <input type="date" name="date1" id="date1" size="60">

    <label for="date1"> Concepts Covered :</label>
    <input type="text" name="Concepts Covered" id="conceptsCovered" size="65" maxlength="70">

    <label for="date1"> Journal Entry: </label> 
    <input type="text" id="journalEntrydata">
    <textarea rows="3" cols="3"> </textarea>

    <label for="date1"> Mood for the day:</label> 
    <select id= "Moodfortheday" name="Mood for the day" > 
        <option value="0">Select Mood for the day</option>
        <option value="Happy"> Happy</option>
        <option value="Sad"> Sad</option>
        <option value="Ok"> Ok</option>
        </select>
        <button id="journalentry">Record Journal Entry</button>`
       }
       
 

eventHub.addEventListener("click",clickEvent =>{
    if(clickEvent.target.id === "journalentry"){
    //    grab the input values
    const date = document.querySelector("#date1").value
    const concept = document.querySelector("#conceptsCovered").value
    const entry = document.querySelector("#journalEntrydata").value
    const mood = document.querySelector("#Moodfortheday").value
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
    savenote(newNote)
}
})







    