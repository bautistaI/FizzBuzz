//  If it’s divisible by 3, 
// instead of the number you say “fizz”. 
// If it’s divisible by 5, you say “buzz”. 
// And finally if it’s divisible by both 3 and 5, 
// you say “fizz buzz”

for(i=1; i<100; i++){
	// divisible by both 3 and 5
	if(i % 3 === 0 && i % 5===0){
		document.write('FizzBuzz <br>');
	// divisible by 3 
	}else if(i % 3 ===0){
		document.write('Fizz <br>');
	// divisible by 5 
	}else if(i % 5 ===0){
		document.write('Buzz <br>');
    // neither of the above return just the number 
	}else{
		document.write(i + '<br>');
	}
}