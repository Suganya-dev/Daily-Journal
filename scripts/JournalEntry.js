 export const JournalEntryComponent = (entriesObj) => {
     
    return `
        <div class="journal" id="${entriesObj.id}>
      <p class="journal__date> Date: ${new Date(entriesObj.date).toLocaleDateString('en-US')}</p>
       <p class="journal__concept>Concept: ${entriesObj.concept}</p>
       <p class="journal__entry> Entry: ${entriesObj.entry} </p>
        <p class="journal__mood> Mood: ${entriesObj.mood} </p>
        </div>
          
    `
}