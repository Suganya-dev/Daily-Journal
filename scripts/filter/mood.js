export const moodCard = (moodObj) =>{
    return`
    <li><input type="radio" name="moodFilter" value="${moodObj.id}" />
  <label for="moodFilter--${moodObj.label}">${moodObj.label}</label></li>`
}