let arr = [1,2,3,4,5,"pomme"];
clonearr= Array.from(arr);
console.log(clonearr);

let arr2 = [];
for (let elem of arr ){
    arr2.push(elem);
}
console.log(arr2)