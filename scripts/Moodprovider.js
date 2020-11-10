let moods=[]

export const useMoods=() =>{
    return moods.slice()
}

export const getMoods = () =>{
    return fetch("http://localhost:8088/moods")
    .then(response =>response.json())
    .then(parsedmoods =>{
        console.log(parsedmoods)
        moods=parsedmoods
    })
}

