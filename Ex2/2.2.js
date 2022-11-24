let min = Number (prompt ("Your min number"));
let max = Number (prompt ("Your max number"));

if (min > max){
    console.log("you're dumb");
}
else if (min < max){
   let current = Number (prompt ("Your number between " + min + " and " + max));
   if ((min < current) && (current < max)){
    console.log(current);
   }
}