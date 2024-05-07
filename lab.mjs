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