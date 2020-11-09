const eventHub= document.querySelector(".main")

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

let journal = []

export const useEntries = () =>{
    return journal.slice()
}
export const getEntries =() =>{
    return fetch("http://localhost:8088/entries?_expand=mood")
    .then(response => response.json())
    .then(parsedjournal=> {
       journal = parsedjournal
        })
    }

export const saveJournalEntry = (entryobject) =>{
 return fetch("http://localhost:8088/entries",{
    method:"POST",
     headers:{
         "Content-Type" : "application/json"
     },
     body: JSON.stringify(entryobject)
 })
.then(getEntries)
.then(dispatchStateChangeEvent)
}


// then get all notes from API
    // then dispatch state change event to event hub that notes have been updated

    
export const useJournalEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
  }

// const deleteNote = noteId => {
//     return fetch(`http://localhost:8088/entries/${noteId}`, {
//         method: "DELETE"
//     })
//         .then(getEntries)
// }
