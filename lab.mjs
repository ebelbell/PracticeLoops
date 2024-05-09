/*PART 1:
Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number. 

let x=1;
while(x <= 100){
    if (x % 3 ==0){
        console.log("Fizz");
    } else if (x % 5){
        console.log("Buzz");
    } else if (x % 3==0 && x % 5==0){
        console.log("Fizz Buzz");
    } else {
        console.log(x);
    }
    x++;
}
*/

/*PART 2:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.

for(let n=0; n < 10; n++){
    console.log(n, " is a prime number");
} 

let n = 20;
while (true) {
	let isPrime = true; //sets the statement to be a prime number until false

    for(let n = 20; n <=n / 2; n++){
        if(n % 2 !==0){ //if the number DOES have a remainder, it is a prime number, and will exit the loop
            isPrime = false;
            break;
        }
    console.log("The next prime number after is ", n);
    }
}
*/



/*PART 3: Using string processing
Loop through the characters of a given CSV string.
Store each “cell” of data in a variable.
When you encounter a comma, move to the next cell.
When you encounter the “\r\n” sequence, move to the next “row.”
Log each row of data.
You do not need to format the data, the following works well.
console.log(cell1, cell2, cell3, cell4);
*/

//use the let keyword instead of const so that the value in the cells can change
const str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
let cell1 = 'ID';
let cell2 = 'Name';
let cell3 = 'Occupation';
let cell4 = 'Age';
//this placeholder will hold value in a string
let placeholder = '';
let counter = 0;

for (let char of str){
    //use the swtich function to make sure the program works
    switch (char){
        //If comma do this
        case ",":
            if (!cell1){
                cell1 = placeholder;
                placeholder = '';

            } else if (!cell2) {
                cell2 = placeholder;
                placeholder = '';
            } else {
                cell3 = placeholder;
                placeholder = '';
            } 
            //console.log('found comma');
            break;
            //If line do this
            case "\n":
                counter++;
                cell4 = placeholder;
                console.log(cell1, cell2, cell3, cell4);
                cell1 = '';
                cell2 = '';
                cell3 = '';
                cell4 = '';
            break;
        //If char do this
        default:
            counter++; //add 1 to each counter
            placeholder += char; //add strings to the placeholder
            //console.log('found char'); //this makes it so that when the code hits a comma at the top of rerunning the code, it puts it in a cell. This is commented out so that the program can print the cell variables
            break;
    }
}
//console.log(cell1, cell2, cell3, cell4);
