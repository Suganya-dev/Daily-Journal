
import {moodCard} from "./mood.js"
import {getMoods,useMoods} from"../Moodprovider.js"

const  moodscontainer =document.querySelector(".filters")

export const MoodFilter = () => {
    getMoods().then(()=>{
        const Moodarray =useMoods()
        let moodHTMLrepresentation =" "
        for(const mood of Moodarray){
            moodHTMLrepresentation += moodCard(mood)
        }
        moodscontainer.innerHTML  = `
        <div class="filterBox">
       <ul class="moodF">${moodHTMLrepresentation}<ul></div>`
    })
}












