/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

export const JournalEntryComponent = (entry) =>{
  // console.log(entriesObj)
  return `
  <div id="entry--${entry.id}" class="entryCard">
  <h3>${entry.concept}</h3>
  <p>${entry.date}</p>
  <p>${entry.moodId}</p>
  <p>${entry.entry}</p>
  <p>${entry.instructors}</p>
  <button id="deleteNote--${entry.id}">Delete</button>
</div>
`

}