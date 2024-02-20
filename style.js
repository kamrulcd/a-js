// function addStyle(){
//     var styling = document.getElementById("para-id")
//     styling.style.color = "red"
//     styling.style.fontSize = "5rem"
// }

//recommended one to add dynamic style
function addStyle(){
    var styling = document.getElementById("para-id")
    styling.classList.add("para")
}

function removeStyle(){
    var styling = document.getElementById("para-id")
    styling.classList.remove("para")
}