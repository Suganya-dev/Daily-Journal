export const moodCard = (moodObj) =>{
    return`
    <li>
    <label class="moodFilter">
    <input type="radio" name="moodFilter" value="${moodObj.id}" />
    <span>${moodObj.label}</span>
   </label>
   </li>`
}