import { getMoods} from "../Moodprovider.js"
import { MoodFilter } from "./MoodFilter.js"


const contentTarget = document.querySelector(".filters")
const eventHub = document.querySelector(".main")

export const FilterBar = () => {
    render()
  }
  
  const render = () => {
    getMoods().then(()=> {
    contentTarget.innerHTML = `
    ${MoodFilter()}`
  })
  }

eventHub.addEventListener("change", e => {
    //console.log("change happend")
    if (e.target.name === "moodFilter") {
    //console.log("selected!")
      const moodButtonEvent = new CustomEvent("moodFilter", {
        detail: {
          moodName: e.target.value
        }
      })
      
      //console.log("Dispatch event to event hub")
      eventHub.dispatchEvent(moodButtonEvent)
    }
  })

