const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter max number: ", (answer) => {
  const max_number = parseInt(answer);
  fizzbuzz_2(max_number);
  rl.close();
});

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


/**
 * Prints advanced FizzBuzz between numbers 1 and selected number 
 * @param {number} max_number - Max number used for the advanced FizzBuzz game starting at 1
 */
function fizzbuzz_2(max_number) {
    let rule_filter = []
    // Helper function to determine if an argument is a number
    function isNumber(str) {
        return !isNaN(Number(str));
      }
    // Prasing CLI for arguments
    process.argv.forEach(function (val, index, array) {
        if(index>=2){
            if(!isNumber(val)){
                process.exit(1);
            }
            else{
                rule_filter.push(Number(val));
            }
        }
    });
    if(process.argv.length<=2) console.log("You can specify rules in CLI as arguements. For example node fizzbuzz.js 3 5");

    let rules = new Map();  // rules recorded in hashmap as divisor and rule action pairs

    rules.set(3, (current, number) => current.push("Fizz"));
    rules.set(5, (current, number) => current.push("Buzz"));
    rules.set(7, (current, number) => current.push("Bang"));
    rules.set(11, (current, number) => {current.length=0; current.push("Bong");});
    rules.set(13, (current, number) => {
        let position = current.length; // if position remains -1 then push to the end else insert before first B
        let found = false;
        for (let i = 0; i < current.length; i++) {  // find first word starting with B
            if(current[i][0] === 'B' && found == false){
                found = true;
                position = i;
            }
        }
        current.splice(position,0, "Fezz")
    });
    rules.set(17, (current, number) => {
        current.reverse();
    });

    for(let i = 1;i<=max_number;i++){   // Iterate over number between 1 and specified max number
        let output = [];
        for(const [factor, action] of rules){   // In JS map preserves order of KV pairs so rules assigned first have higher precedence
            if(i%factor == 0){
                if(rule_filter.includes(factor)){
                    action(output, i); // apply rule
                }
            }
        }
        if(output.length == 0) output = [i];
        console.log(output.join(''));
    }
    
    
}
// Now, we run the main function:
//fizzbuzz();


