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