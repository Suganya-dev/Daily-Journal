import { getEntries,useJournalEntries} from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const eventHub= document.querySelector(".main")
const contentTarget = document.querySelector(".notesContainer")

// // listen for state change event, then refresh entry list
eventHub.addEventListener("journalStateChanged",() => journals())

// get the notes from the api >> use the notes array

export const journals = () =>{
    getEntries().then(() =>{
        const journalEntry = useJournalEntries()
        render(journalEntry)
})
}

// iterate the notes array >> make an html representation each
// render html string of notes to the notesContainer element on the DOM

const render = (journalArray)=>{
    let journalHTMLrepresentation = ""

    for(const obj of journalArray){
        journalHTMLrepresentation += JournalEntryComponent(obj)
        // console.log(journalHTMLrepresentation)
    
    contentTarget.innerHTML = `
        <section class="entryList">
        <h2>Notes container</h2>
        ${journalHTMLrepresentation}
            </section>`
} }


















