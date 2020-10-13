import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"


export const EntryListComponent = () => {
    const entryLog = document.querySelector("#entryLog")

    const entries = useJournalEntries() 
    

        let journalHTMLrepresentation =" "
        for (const entry of entries) {
        journalHTMLrepresentation += JournalEntryComponent (entry)
        }

        entryLog.innerHTML += ` 
        <p class="bodydesign">   
        <label for="date1"> Journal Entry: </label> 
        ${journalHTMLrepresentation}
        <textarea rows="3" cols="3"> </textarea>
     </p>
    `
}
 
