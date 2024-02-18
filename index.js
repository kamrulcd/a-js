//external js
document.write("from external file <br>");

//key words
//data type 4 types
//string , number, boolean, object

console.log(typeof("kamrul"));
console.log(typeof(5))

//variables -> letter, number , underscore, dollar is allowed
var name1 = "kamrul";
console.log(name1);
document.write(name1+" <br>");
//here name is a kw so declaring that shows depracated
//case sensitive
//camelcasing is encouraged

//tofixed 
var num = 20;
document.write(typeof(toString(num)) + "<br>"); // concatenated 

var stringNum = '20999';
document.write(typeof(parseInt(stringNum)) + "<br>");

var num2  = 2.88888;
document.write(num2.toFixed(2) + "<br>"); //it will show upto two decimal points
//shows 2.89 //it returns number

document.write(typeof(num2.toPrecision(1))+"<br>");//this shows only 1 char from start
// also it rounds up the number //it retuns string


//number method
document.write(Number("12")+"<br>"); //turns the string into number
document.write(Number(false)+"<br>")//turns the bollean false into nummber of 0

//string functions
document.write(name1.length);//returns the num of character in a string
//user input with prompt
//prompt("enter name")
document.write(" <br>"+name1.charAt(2))//returns 3rd char
document.write("<br>"+name1.toUpperCase());

document.write("<br>"+name1.concat(" islam"))//concat
//sliced function
document.write("<br>"+name1.slice(0,3+"<br>")); //first parameter is for start and second from how many char should be sliced


//operator
//arithmetic operator 5 types
document.write(2**4);//exponent op
//increment or decrement operator
//assignment operator
//+=, -=, *= these are also assignment op
//x += 4 ---> x=x+4

//prompt returns string so even if he inputs number that is string
//thats why to do arithmetic operation we need to parseInt it
//if variable over write is ok for certain program then we should over write it


//relational operator
//<,>,=>,===,==,!=

//logical operator
//&&, !, 

//== means both are of equal value
//=== means checks both value and data type

//conditional control statement if, else, switch
//loop control statement for while

if(num > 2)
    document.write("<br>ok");
else
    document.write("<br>not ok");

//if means it will always be checked
//but if else or else does not guarantee that and less time needed
var digit = 2;
//switch case break default
switch(digit){
    case 0 : 
        document.write("<br>"+"zero");
        break;//without break next options will also execute
    case 2:
        document.write("<br>"+"two");
        break;
    default:
        document.write("<br>"+"invalid");
}

//case 1:
//case 2:
// case 3:
//this is a multiple case usage 

//for loop
for(var i = 0; i<=10; i+=2){
    document.write("<br>"+ i);
}
//while
var i= 1;
sum = 0;
while( i<=100){
    //document.write("<br>"+ i);
    if(i%3 == 0 && i%5 == 0){
        sum = sum + i;
    }
    i++;
}
document.write("<br>"+ sum);
//do while
do{
    document.write("<br>"+i);
    i+=2;
}while(i<5);
//it prints 101 and stop
//thats why do while loop is special 
//even if 100 is greater than 5 and condition is false still it prints 101 for one time

//ternary operator
var res = num > 0 ? "positive" : "nwegative"
document.write("<br>"+res);

//function user defined
function add(n1, n2){
    var add = n1 + n2;
    return add;
}
res = add(2,3);
document.write("<br>"+ res);

//iifes (immediately invokeable function expressions)
(function disp(){
    document.write("<br>from iife")
})();

//function expression
var disp = function disp2(){
    document.write("<br> from func expression")
}
disp(); //this is not the func name but it holds the func so it works


//array is an object
var names = new Array(10); //10 vars are created. but 10 is not necessary 
names[0] = "km"
names [1] = "sh"
console.log(names)

var nums = [1,2,3,4,5]
console.log(nums)
console.log(nums.length)//gives length

//array library func
nums.push(6);//inserts element at end
console.log(nums)

nums.pop();
console.log(nums)//pops the last element

var nums2 = [7,8,9]

nums2 = nums.concat(nums2)//concats two arrays 
console.log(nums2)

//array methods 
//shift removes element from first
console.log(nums2.shift())//shift returns the elemnt which it removed
console.log(nums2.unshift(111))//why this prints array length?????????
console.log(nums2)//unshift inserts element at first
//splice
nums2.splice(2,3,4444,55555)//4 params//2 is the position where we start operation
//3 is that how many element we delete
// 4444 is the newly inserted one from 3rd place
console.log(nums2)//adding element using splice
//for remove
console.log(nums2.splice(3,2));//here 3 is the starting point
//from 3 we keep 2 elements and rest are deleted

//slice// slice from an array to create a new array
//delete from first
console.log(nums2.slice(2))//it deletes 2 elements after and before the 3rd position
//original array remains as it is 
console.log(nums2.sort())//sorts the array
console.log(nums2.reverse());//reverses an array

// !!!!!!!!!!!!
//this does not work bcz they are numbers.
// these are for string array
//to sort the number
nums2.sort(function(a,b){
    return a-b;
})
console.log(nums2)// it works now


//2d array
var st = [
    ["k",2],
    ["s", 3]
]
console.log(st[1][1])//prints 3
//nested loop needed to traverse

function highest(st){
    highestName = st [0][0];
    highestValue = st[0][1];
    for(var i= 1; i <st.length; i++){
        if(highestValue<st[i][1]){
            highestValue = st[i][1]
            highestName = st[i][0]
        }
    }
    return highestName;
}
var nn = highest(st);
console.log(nn)