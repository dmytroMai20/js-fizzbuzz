// This is our main function
function fizzbuzz() {
    console.log("Hello, World!");

    // Put your code here...
    for(let i=1;i<=100;i++){
        if (i % 15 == 0){
            console.log("FizzBuzz");
        }
        else if (i % 5 == 0){
            console.log("Buzz");
        }
        else if (i % 3 == 0){
            console.log("Fizz");
        }
        else{
            console.log(i);
        }
    }

}

// Now, we run the main function:
fizzbuzz();

