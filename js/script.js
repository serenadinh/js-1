/*comparative operator
<, >, <=, >=, ==, ===, !==, !===, 
*/
// if statement 
if (1) {
	console.log("good day!")
}
// if else statement 
// if (false) {
// 	console.log("this won't work")
// }else {
// 	console.log("this will work then")
// }

// if ("today is Saturday") {
// 	console.log ("weekend!")
// } else if ("Sunday") {
// 	console.log ("still weekend")
// } else {
// 	console.log ("go to work!")
// }
// //for loop
// for (var i = 1; i <= 100; i = i+1) {
// 	console.log (i)
// }
// //1-100: print even numbers
// for (var i = 0; i <= 100; i = i+1) {
// 	if (i % 2 === 0){
// 		console.log(i+" is an even number")
// 	}
// 	else if (i % 2 !==0){
// 		console.log(i+ " is an odd number")
// 	}
// }

var friends = ["serena", "nick", "sarah", "jiaren", "max", "moomoo"]
for (let i = 0; i < friends.length; i++) {
	console.log(friends[i])
}

//function declaration 
function cars () {
	var cars = ["toyota", "subaru", "nissan", "honda", "tesla", "porsche"]
	for (let i = 0; i < cars.length; i++) {
		console.log(cars[i])
	}
}
cars()
var jsBtn = document.getElementById('js-btn')
jsBtn.addEventListener("click", cars)

//function expression
var foo = function(firstNum, secondNum){
	return firstNum + secondNum
}
foo(6,7)
var sum = foo(6,7)




