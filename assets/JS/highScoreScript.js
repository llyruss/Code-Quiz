//on highscoare page
//get score history from local storage
// loop through score history and put each game details on the page
let list = document.getElementById("hsList")

let userDataArray= JSON.parse(localStorage.getItem("userData"))

for (let i = 0; i < userDataArray.length; i++) {
    let newListItem = document.createElement("li")
    let currentInital = userDataArray[i].initials
    let currentScore = userDataArray[i].highScore
    let currentItemContent= currentInital +  " -- " + currentScore
    newListItem.textContent = currentItemContent
}

