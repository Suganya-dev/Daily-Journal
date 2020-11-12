import { MoodFilter } from "./MoodFilter.js"


const contentTarget = document.querySelector(".filters")
const eventHub = document.querySelector(".container")

export const FilterBar = () =>{
    render()
}
export const render =() =>{
    contentTarget.innerHTML = `${MoodFilter()}`
}

eventHub.addEventListener("change",e =>{
    if(e.target.id === "moodFilter"){
    const moodButton = new CustomEvent("moodfilter",{
        detail:{
            buttonthatwasclicked: e.target.value
        }
    })
    eventHub.dispatchEvent(moodButton)
    }
})