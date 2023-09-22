"use strict";

let prenom="rv";
let legume="poireau";

let nbr1=5;
let nbr2=8;
let nbr3="5";

//si nbr1 egal nbr3 message d alert egalite
if(nbr1 == nbr3){
    alert("Idem");
}
if(nbr1 === nbr3){
    alert("idem bis");
}else{
    alert("Je suis dans le else ");
}

//si (){} sinon si (){}
if(nbr1>nbr2){
    alert("nbr1 est le plus grand");
}else if(nbr1<nbr2){
 alert("nbr1 est le plus petit");
}else {
    alert("je ne sais pas ");
}

//Switch
switch(7){
    case 1:
        console.log("je suis le chiffre 1");
        break;
    case 2:
        console.log("je suis le chiffre 2");
    case 3:
        console.log("je suis le chiffre 3");
        break;
    case 4:
        console.log("je suis le chiffre 4");
        break;
    case 5:
        console.log("je suis le chiffre 5");
        break;
    default:
        console.log("je suis un autre chiffre");
}

//et &&
if(nbr1==5 && nbr2 ==8){
    alert("je suis trop fort");
}else{
    alert('NOOB');
}

// OU ||
if(nbr1==5 || nbr2 ==5){
    alert("je suis trop fort ou l autre ");
}else{
    alert('NOOB');
}
