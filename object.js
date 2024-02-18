//object
var stu ={
    name: "s1",
    age:12,
    cg:3,
    sub: ["b","e"]
};
console.log(stu.name);
//adding constructor
function Stu(name,age,cg,sub){
    //constructor start with upper case
    this.name = name;
    this.age = age;
    this.cg = cg;
    this.sub = sub
    //function to display
    this.show = function(){
        console.log(this.name)
    }
}
//from this template calling this will create newer objects
var stu2 = new Stu("s2",44,4,["b","e"]);
console.log(stu2.cg)

//adding func in constructor so that we do not have to type same for printing
stu2.show()

//math object methods
//Math.sqrt()
//Math.abs()
//Math.sin()
//Math.pow(2,4)
//Math.floor(2.1)--> 2
//Math.ceil(2.1)-->3
//MAth.round(2.1)-->2
//Math.max(2,4,5,6,7,8,80)-->80
//Math.random()--> from 0 to 1
//Math.random()*6--> from 0 to 5
//MAth.floor(Math.random()*6) --> from 0 to 5 only integer
//Math.floor(Math.random()*5) + 1 --> from 1 to 5 only integer
//Math.floor(MAth.random()*11) +10--> from 10 to 20

//guessing game

//date object
var date = new Date()
console.log(date)
var year = date.getFullYear()
var month = date.getMonth()
//month shows 0 to 11
var currentDate =date.getDate()
var currentDay = date.getDay()
//sunday meaning 0 then sat means 1
var currentHours = date.getHours()

