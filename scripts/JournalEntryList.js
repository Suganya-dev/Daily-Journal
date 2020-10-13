import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"
const entryLog = document.querySelector("#entryLog")

export const EntryListComponent = () => {

    const entries = useJournalEntries() 
    for (const entry of entries) {

        let journalHTMLrepresentation =" "
        journalHTMLrepresentation += JournalEntryComponent (entry)

        entryLog.innerHTML += `
        <p class="bodydesign">   
        <label for="date1"> Journal Entry: </label> 
         ${journalHTMLrepresentation}
        <textarea rows="3" cols="3"> </textarea>
    </p> `
    }
}  
