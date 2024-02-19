//by id
document.getElementById("heading1").innerHTML = "hello from js";
//this can be set on a var as well
document.getElementById("para").innerHTML = "from js by dom"

//by tag
var tagName = document.getElementsByTagName("h1");
tagName[0].innerHTML = "by tagname"
//this returns html collection so we need to specify the index

//by class
document.getElementsByClassName("para")[0].innerHTML ="by classname"
//this also returns html collection so indexing

//query selector
//all the 3 can be done by query selector
document.querySelector("#para").innerHTML = ""
//bcz of id hash is put
//for class . is put
document.querySelector(".para").innerHTML = ""
//for tag nothing
document.querySelector("p").innerHTML = ""

document.querySelector("ul p").innerHTML = "parent child selecting"
document.querySelector(".div p").innerHTML = "parent child selecting but with class";

//query selector all
//it also retuns collection but nodelist 
//to work we need to index it

//onclick event
var message = document.querySelector("#para-id")
function message1(){
    message.innerHTML = "1 clicked"
    message.style.color = "red"
    //lot of more styles to explore
    //link.href also another attribute
}   
function message2(){
    message.innerHTML = "2 clicked"
    message.style.color = "blue"
}   
//onclcik can be used on any element
//showing image when button cklicked
var image = document.querySelector("#img")
function image1(){
    image.src = "images/img1.png"
}   
function image2(){
    image.src = "images/img2.png"
} 

//dom has properties and methods
//getelementbyid() is a method
//innerhtml is a property


//creating element in the ul
var h2 = document.createElement("h2")
var text = document.createTextNode("new heading created from js")
h2.appendChild(text)
var list = document.getElementById("list-id")
list.appendChild(h2)
//it adds in the later or at end

//removing element
var heading2 = document.getElementsByTagName("h2")[0]
list.removeChild(heading2)

//to add at start
var h3 = document.createElement("h3")
var text3 = document.createTextNode("new heading created from js at start")
h3.appendChild(text3)
var para = document.getElementById("list-para")
list.insertBefore(h3,para) 
//what to insert, where to insert

//classlist shows the class in that tag
//classList.remove(className)

//dom tree ??
//dom creates html as a tree
//manipulating we learnt as inserting and removing 

//now we do traversing like selecting an element from other element
// traversing has down, up and sidewards
// dwonward ---> child with query selector
//upward --> parent 
//sideward --> sibling

//downward
var div = document.querySelector("#div")
var three = div.querySelector("#three")
three.innerHTML = "fff"
//it will find child from parent, not alwys use dom
var parent = three.parentElement
parent.innerHTML = "kkkkkk"
var sibling = document.previousElementSibling
//dont work but why
//traversing is recomended


