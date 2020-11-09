
export const JournalEntryComponent = (entriesObj) =>{
  return `
    <section class= "entries">
     <h2> Title: Concepts Covered ${entriesObj.Title}</h2>
     <p>  Concept: ${entriesObj.concept}</p>
     <p> Entry: ${entriesObj.entry}</p>
     <p> Mood: ${entriesObj.mood}</p>
     <p> timestamp: ${new Date(entriesObj.timestamp).toLocaleDateString('en-US')}</p>
    </section> `

}