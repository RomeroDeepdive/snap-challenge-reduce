//In pseudocode, write a function that takes two integers. For each integer in between those two numbers
//  (inclusive), output 'fizz' if the number is even, 'buzz' if the number is divisible by 3, and 'baz' without
//  'fizz' or 'buzz' if the number is divisible by both.

//declare a function for variable
//use i
//intergers 1 through 60
//set even numbers = fizz
//set divisible by 3 = buzz
//number divisible by both = baz

//declare function fizzbuzzRange with two arguments (firstValue, secondValue)
//if firstValue === secondValue throw error
//elseif firstValue > secondValue set firstValue to greaterNumber and secondValue to leastNumber
//else set secondValue to greaterNumber and firstValue to leastNumber
//forset i toleastNumber; leastNumber < greaterNumber ; i++
//if i %2 and i%3 output baz
//elseif i % 2 output fizz
//else if i % 3 output buzz


// for the numbers 1 through 60,
for (i=1; i<=100; i++) {

	// if the number is divisible by 6 and 2, write "Fizz"
	if ( i % 6 ===0 && i % 2 ===0) {
		console.log("Fizz");

	}

// if the number is divisible by 3, write "buzz"
	else if ( i % 3 === 0 ) {
		console.log("buzz");
	}

// if the number is divisible by 5, write "Buzz"
	else if ( i % 5 === 0) {
		console.log("Buzz");

	}

// otherwise, write just the number
	else {
		console.log(i);
	}
}

//write a function that takes an array of numbers, and returns another array that counts the number of
//times each number appears in the array.

arr[] = {1,2,2,2,2,2,8,4,6,8,2,4,5,7,10,20,100,6,4,25};
n = arr.lemgth;
x = 2;
}
}


//In pseudocode, write a function that takes an array of numbers, and returns another array that counts the number of
//times each number appears in the array.

set return variable empty array []
check aray []

//could use filter with this as well.
example: Sarahs demo.
//in psuedocode, write a function that takes in an array of words and returns a new array with all the words beginning
//with b removed.
//declare the function with an input (array)
//declare a variable of newArrary = []
//loop through the input array so i can see all the variables.
//evaluate the letter in position 1/0 and determine if it has the b or B, continue on the loop doing nothing
//else if it doesn't have b or B and push it into my newArray
//return newArray
