import { render } from "./FilterBar.js"
import {moodCard} from "./mood.js"
import {getMoods,useMoods} from"./Moodprovider.js"
const contentTarget = document.querySelector(".container")

export const MoodFilter = () => {
    getMoods().then(()=>{
        const Moodarray =useMoods()
        let moodHTMLrepresentation =" "
        for(const mood of Moodarray){
            moodHTMLrepresentation += moodCard(mood)
        }
        contentTarget.innerHTML += `
        <legend><h3> Filter by mood </h3>
        <ul> ${moodHTMLrepresentation}</ul>
        </legend>`
    })
}











//     return `
//         <fieldset class="fieldset">
//         <legend>Filter Journal Entries by Mood</legend>
//             ${
//             allMoods.map(
//                 (mood) => {
//                 return `<input type="radio" name="moodFilter" value="${ mood.id }"/>
//                 <label for="moodFilter--happy">${ mood.label }</label>
//                  `
//                 }
//                 ).join("")
//             }
//         </fieldset>
//         `
// }