import { useEntries,getEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const eventHub= document.querySelector(".main")
const contentTarget = document.querySelector(".notesContainer")

// get the notes from the api >> use the notes array

export const journals = () =>{
    getEntries().then(() =>{
        const journalEntry = useEntries()
        render(journalEntry)
})
}

eventHub.addEventListener("journalStateChanged",() => journals())


// iterate the notes array >> make an html representation each
// render html string of notes to the notesContainer element on the DOM

const render = (journalArray) =>{

    let journalHTMLrepresentation =" "
       for (const entry of journalArray) {
      journalHTMLrepresentation += JournalEntryComponent(entry)
         }
         contentTarget.innerHTML =
          `
         ${journalHTMLrepresentation}`
        }

      
