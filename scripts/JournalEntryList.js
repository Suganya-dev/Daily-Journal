import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"


export const EntryListComponent = () => {
    const entryLog = document.querySelector(".article")

    const entries = useJournalEntries() 
    

        let journalHTMLrepresentation =" "
        for (const entry of entries) {
        journalHTMLrepresentation += JournalEntryComponent (entry)
        }

        entryLog.innerHTML += ` 
        <p class="bodydesign">   
        <label for="date1"> Journal Entry: </label> 
        <textarea rows="3" cols="3" ${journalHTMLrepresentation}> </textarea>
     </p>
    `
}
 
