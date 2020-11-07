 export const JournalEntryComponent = (entriesObj) => {
    return `
        <div class="journal" id="${entriesObj.id}>
      <p class="journal__date> date: ${new Date(entriesObj.date).toLocaleDateString('en-US')}</p>
       <p class="journal__concept>concept: ${entriesObj.concept}</p>
       <p class="journal__entry> entry: ${entriesObj.entry} </p>
        <p class="journal__mood> mood: ${entriesObj.mood} </p>
        </div>
          
    `
}