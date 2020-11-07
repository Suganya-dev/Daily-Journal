import { useEntries,getEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const eventHub= document.querySelector(".main")
const contentTarget = document.querySelector(".notesContainer")

export const journals = () =>{
    getEntries().then(() =>{
        const journalEntry = useEntries()
        render(journalEntry)
})
}

eventHub.addEventListener("journalStateChanged",() => journals())

const render = (journalArray) =>{

    let journalHTMLrepresentation =" "
       for (const entry of journalArray) {
      journalHTMLrepresentation += JournalEntryComponent (entry)
         }
         contentTarget.innerHTML =
          `
         ${journalHTMLrepresentation}`
        }