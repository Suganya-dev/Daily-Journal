import { getEntries,useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const eventHub= document.querySelector(".main")
const contentTarget = document.querySelector(".notesContainer")

// get the notes from the api >> use the notes array

export const journals = () =>{
    getEntries().then(() =>{
        const journalEntry = useJournalEntries()
        const allMoods = useMoods()
        render(journalEntry,allMoods)
})
}

eventHub.addEventListener("journalStateChanged",() => journals())


// iterate the notes array >> make an html representation each
// render html string of notes to the notesContainer element on the DOM

const render = (entriesArray, moodsArray) => 
{
    contentTarget.innerHTML = entriesArray.map(entry => {
        const relatedMood = moodsArray.find(mood => mood.id === entry.moodId)
        //console.log(relatedMood)
        return `
        <section id="entry--${entry.id}" class="journalEntry">
        <div>Date: ${entry.date}</div>
        <div>Concept: ${entry.concept}</div>
        
        <div>Entry: ${entry.entry}</div>
        <div>Mood: ${relatedMood.label}</div>
        <button type="button">edit</button>
        <button id="deleteNote--${entry.id}" type="button">delete</button>
      </section>
        `
    }).join("")
}     