function askTvSerie()
{

    let serie_s=prompt("Enter the name of your favourite serie");
    let prod_s=prompt("Enter the year of the production");
    let cast_s=prompt("Enter the members of the cast");
    let arr=[];
    arr.push(cast_s);

    while(cast_s!=""){
        cast_s=prompt("Enter the members of the cast (Push enter when finish)");
        arr.push(cast_s);
    }
    arr.pop("");
    let myObject={
        name: serie_s,
        prod: prod_s,
        cast: arr 
    }
    return myObject;
}
console.log(askTvSerie())
