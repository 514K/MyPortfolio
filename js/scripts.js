"use strict";
window.onload = function() {

}

function getMyAge() {
    let curDate = new Date();
    let myDat = new Date("2000-09-16");
    let myAge = Number(curDate.getFullYear() - myDat.getFullYear()) - Number((curDate.getMonth() - myDat.getMonth() > 0) ? 0 : ((curDate.getMonth() - myDat.getMonth() == 0) ? ((curDate.getDay() - myDat.getDay()) >= 0 ? 0 : 1) : 1));


    console.log();

    if (myAge % 100 == 11 || myAge % 10 == 0 || myAge % 100 == 12 || myAge % 100 == 13 || myAge % 100 == 14 || myAge % 10 > 4) {
        myAge = myAge + " лет ";
    } else if (myAge % 10 > 1 && myAge % 10 < 5) {
        myAge = myAge + " года ";
    } else {
        myAge = myAge + " год ";
    }

    document.getElementById("age").innerText = myAge;

}