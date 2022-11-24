let i = Number(prompt("Enter a number between 1-7"))

if (i===1){
    console.log("Lundi");
} 
    else if (i===2){
        console.log("Mardi");
    }
    else if (i===3){
        console.log("Mercredi");
    }
    else if (i===4){
        console.log("Jeudi");
    }
    else if (i===5){
        console.log("Vendredi");
    }
    else if (i===6){
        console.log("Samedi");
    }
    else if (i===7){
        console.log("Dimanche");
    } 
    else if ((i<1) || (i<=8)) {
        console.log("you idiot")
    } 
/*Fonctionne également en switch
let i = Number(prompt("Choose a number between 1 and 7"))

switch (i) {
    case 1:
        console.log("Monday");
        break;
        case 2:
            console.log("Tuesday");
            break;
            case 3:
                console.log("Wednseday");
                break;
                case 4:
                    console.log("Thursday");
                    break;
                    case 5:
                        console.log("Friday");
                        break;
                        case 6:
                            console.log("Saturday");
                            break;
                            case 7:
                                console.log("Sunday");
                                break;

}*/