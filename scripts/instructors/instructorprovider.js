const eventHub = document.querySelector(".main")

let instructors = []

export const useInstructors = () =>{
    return instructors.slice()
}

export const getInstructors =()=>{
    // debugger
    return fetch("http://localhost:8088/instructors")
    .then(response => response.json())
    .then(parsedinstructors =>{
        console.log(parsedinstructors)
        instructors = parsedinstructors
    })
}

eventHub.addEventListener("change",i =>{
    if(i.target.id === "instructorforday"){
    const instructorArray = new CustomEvent("instructorSelect",{
        detail:{
            instructorName: i.target.value
        }
    })
    eventHub.dispatchEvent(instructorArray)
    }
})