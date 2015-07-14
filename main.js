// console.log("test");
//
//
// alert("test");

var fruits = ["apple","orange", "bananna", "pear"]

fruits.splice(0,2);

fruits.slice(2);

var myObject = {name:"Kyle", occupation: "student",
favoriteFoods: ["meat","fish", "candy"]


}

myObject.name

//EXERCISE: Create an object that takes a series of numbers as an array and then
//find (and output) the average and the max. Use a function!

var object = {
  numbers : [1,2,3,4,5]
  }

//calculate average using a function
var averageCalc = function (arr) {
  //add container
  var total = 0;
  //for loop to add all of the numbers
  for (i=0; i <arr.length; i++){
    total = total + arr[i]
  }
  ///returns the value of total/how many in the array
  return (total/(arr.length))
}

//create variable to output average calculation of array
var resultsAvg = (averageCalc(object.numbers))
console.log(resultsAvg)

//max value
var object = {
  numbers : [1,2,3,4,5]
  }

function max (arr) {
  //container
  var largestNum= 0;
  //for loop through array
  for (i=0; i<arr.length; i++){
    //if statement to check if that number is larger than the largestNum variable
    //testing to maybe reassign what is the largest number
    if (arr[i] > largestNum){
      largestNum = arr[i]
    }
  }
  return largestNum
}

var maxCalc = max(object.numbers)
console.log(maxCalc);

var object = {
  numbers : [1,2,3,4,5]
  }

//calculate average using a function
function average(arr) {

  //add container
  var total = 0;
  //for loop to add all of the numbers
  for (i=0; i <arr.length; i++){
    total = total + arr[i]
  }
  ///returns the value of total/how many in the array
  return (total/(arr.length))
}

//create variable to output average calculation of array
var resultsAvg = (averageCalc(object.numbers))
console.log(resultsAvg)




var stuff = { integers : [3,4,5,6,7,9]}

function arrayAverage(arg) {

  var tot = 0;
  for (var i = 0; i < arg.length; i++) {
    tot = tot + arg[i]
  }

  return (tot/(arg.length))
}

var avg = arrayAverage(stuff.integers);
console.log(avg);
