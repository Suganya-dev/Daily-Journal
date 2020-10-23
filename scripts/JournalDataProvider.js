const journal = []
export const getEntries =() =>{
    return fetch("http://localhost:8088/entries")
    .then((response => response.json)
    .then(parsedentries => {
        journal = parsedentries
    }))
}

   
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) => {
    console.log(currentEntry,nextEntry) 
    Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
        })
    return sortedByDate
}

// .then(parsedNotes => {
//     notes = parsedNotes
// })