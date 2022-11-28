let x1=Number (prompt("Enter x1"));
let y1=Number (prompt("Enter y1"));
let x2=Number (prompt("Enter x2"));
let y2=Number (prompt("Enter y2"));

function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    
    return Math.sqrt(x * x + y * y);
}
console.log(getDistance(x1, y1, x2, y2))