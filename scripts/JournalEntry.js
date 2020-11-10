
export const JournalEntryComponent = (entriesObj) =>{
  console.log(entriesObj)
  return `
    <section class= "entries">
     <h2> Title: Concepts Covered ${entriesObj.Title}</h2>
     <p>  Concept: ${entriesObj.concept}</p>
     <p> Entry: ${entriesObj.entry}</p>
     <p> Mood: ${entriesObj.mood}</p>
     <p> timestamp: ${new Date(entriesObj.timestamp).toLocaleDateString('en-US')}</p>
     <button id="deleteNote--${entriesObj.id}">Delete</button>
    </section> `

}