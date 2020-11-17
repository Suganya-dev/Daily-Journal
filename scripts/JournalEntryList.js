import { getEntries,useJournalEntries} from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"
import {deleteNote} from "./JournalDataProvider.js"

const eventHub= document.querySelector(".main")
const contentTarget = document.querySelector(".notesContainer")

// // listen for state change event, then refresh entry list
eventHub.addEventListener("journalStateChanged",() => journals())

// get the notes from the api >> use the notes array
let journalEntry = []
export const journals = () =>{
    getEntries().then(() =>{
         journalEntry = useJournalEntries()
        
        render(journalEntry)
})
}

// iterate the notes array >> make an html representation each
// render html string of notes to the notesContainer element on the DOM

const render = (journalArray)=>{
    let journalHTMLrepresentation = ""

    for(const obj of journalArray){
        // const relatedjournal = journalArray.find(journals =>{
        //     journals.id === obj.moodId)
            journalHTMLrepresentation += JournalEntryComponent(obj)
    }
       
        // console.log(journalHTMLrepresentation)
    contentTarget.innerHTML = `
        <section class="entryList">
        <h2>Notes container</h2>
        ${journalHTMLrepresentation}
            </section>`
        }

//  for DELETE button event handling
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id).then(
           () => {
               const updatedentries = journals()
            //    const criminals = useCriminals()
               render(updatedentries)
           })}
})

// one to many relationships eventhandling for moods
 eventHub.addEventListener("moodFilter", event =>{
    // debugger
    //  console.log("moodSelected",moodThatChosen)
    const selectedMood = event.detail.moodName
    // console.log(selectedMood)

   const filteredArray = journalEntry.filter(journalObj =>{
         if(parseInt(journalObj.moodId) === parseInt(selectedMood)){
             return true
         }
     
         
        })
    console.log(filteredArray)
     render(filteredArray)
   
 })

// one to many relationship for instructors
eventHub.addEventListener("instructorSelect",event =>{
    debugger
    const selectedinstruct = event.detail.instructorName
    // console.log(selectedinstruct)

    const filteredins = journalEntry.filter(insObj =>{
        if(insObj.entry === parseInt(selectedinstruct)){ 
            return true
        }
    })
    console.log(filteredins)
    render(filteredins)
})