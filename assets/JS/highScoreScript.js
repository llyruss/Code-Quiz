//on highscoare page
//get score history from local storage
// loop through score history and put each game details on the page
let list = document.getElementById("hsList")
let clearButton= document.getElementById("clear")

let userDataArray= JSON.parse(localStorage.getItem("userData"))

for (let i = 0; i < userDataArray.length; i++) {
    let newListItem = document.createElement("li")
    let currentInitial = userDataArray[i].initials
    let currentScore = userDataArray[i].finalScore
    let currentItemContent= currentInitial +  " - " + currentScore
    newListItem.textContent = currentItemContent
    list.appendChild(newListItem)
}

clearButton.addEventListener("click", function(){
    localStorage.clear()
    location.reload()
})
