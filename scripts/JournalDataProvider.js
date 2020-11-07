let journal = []

export const useEntries = () =>{
    return journal.slice()
}
export const getEntries =() =>{
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(parsedjournal=> {
       journal = parsedjournal
        })
    }

// export const useJournalEntries = () => {
//     const sortedByDate = journal.sort(
//         (currentEntry, nextEntry) => {
//     console.log(currentEntry,nextEntry) 
//     Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//         })
//     return sortedByDate
// }


export const saveJournalEntry = (entryobject) =>{
 return fetch("http://localhost:8088/entries",{
    method:"POST",
     headers:{
         "Content-Type" : "application/json"
     },
     body: JSON.stringify(saveJournalEntry)
 })

.then(getEntries)
.then(dispatchStateChangeEvent)
}

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

