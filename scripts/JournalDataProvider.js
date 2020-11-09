const eventHub= document.querySelector(".main")

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}



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

export const saveJournalEntry = (entryobject) =>{
 return fetch("http://localhost:8088/entries",{
    method:"POST",
     headers:{
         "Content-Type" : "application/json"
     },
     body: JSON.stringify(saveJournalEntry)
 })
 // then get all notes from API
    // then dispatch state change event to event hub that notes have been updated

.then(getEntries)
.then(dispatchStateChangeEvent)
}

let moods=[]

export const useMoods=() =>{
    return moods.slice()
}

export const getMoods = () =>{
    return fetch("http://localhost:8088/moods")
    .then(response =>response.json())
    .then(parsedmoods =>{
        moods=parsedmoods
    })
}

