// document.getElementById("btn1").addEventListener("click", func)

// function func(){
//     alert("ello")
// }

document.getElementById("btn1").addEventListener("click", function(){
    var para = document.getElementById("para-id")
    para.style.backgroundColor = "tomato"
    para.style.color = "white"
    var text = this.innerHTML
    para.innerHTML = text + " dynamically"
})
//using anonymous func

//mouseover and mouseout another
//mouseover adds when mouse is over but it does not go away when mouse is niot there
//so need mouseout to remove the style


//if numerous buttons are there we use loop
// var len = document.querySelectorAll(".btn").length
// for(var i = 0; i < len; i++){
//     document.querySelectorAll(".btn")[i].addEventListener("click", function(){
//         var text = this.innerHTML
//         document.querySelector("h1"),innerHTML = text + " is clicked"
//     })
// }



//audio playing
// var len = document.querySelectorAll(".btn").length
// for(var i = 0; i < len; i++){
//     document.querySelectorAll(".btn")[i].addEventListener("click", function(){
//         var text = this.innerHTML
        
//         switch(text){
//             case "1 click":
//                 var audio = new Audio("1.mp3")
//                 audio.play()
//                 break;
//         }
//     })
// }

//another approach with function
var len = document.querySelectorAll(".btn").length
for(var i = 0; i < len; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        var text = this.innerHTML
        audioPlay(text)
        animation(text)
    })
}
//also animation
//for this new a class is added to taht button newly
function audioPlay(text){
     
    switch(text){
        case "1 click":
            var audio = new Audio("1.mp3")
            audio.play()
            break;
    }
}

function animation(text){
    var btnSelect= document.querySelector("."+text)
    //bcz we need dot before a to access the class of the button 
    btnSelect.classList.add(".animation")
    //it adds the animation made in the css file
    //but it does not go away on its own
    //so we need to use set time out function

    setTimeout(function(){
        btnSelect.classList.remove("animation")
    }, 1000)
}


//keypress listener 
//audio playuer using keypress listener
document.addEventListener("keypress",function(event){
    var text = event.key
    //here event holds the pressed key text
    audioPlay(text)
    //so without clicking we can play audio or animation
    //if we press a the a button works
    //if we press 1 on keyboard then 1 button works
})

//for counting the char user typed 
var count = 0
document.querySelector("textarea").addEventListener("Keypress",function(event){
    count++;
    var text = event.key
    document.querySelector("p").innerHTML = "you pressed "  + count
})