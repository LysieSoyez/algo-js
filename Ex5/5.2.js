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
    arr.pop("")
    let myObject={
        name: serie_s,
        prod: prod_s,
        cast: arr 
    }
    return myObject;
}
let tvSerie=askTvSerie()
function randomizeCast(tvSerie){
    list_cast=tvSerie["cast"]
    l=list_cast.length
    randomlist=[]
    for(i=1;i<=l;i++){
        random=Math.floor(Math.random()*l);
        while (randomlist.includes(list_cast[random])){
            random=Math.floor(Math.random()*l);
        }
        randomlist.push(list_cast[random]);
    }
    return randomlist
}
console.log(randomizeCast(tvSerie))