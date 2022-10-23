


let year = Number(prompt("Enter year"))
let Leap_year = year %4 == 0

if(Leap_year){
    document.write(`${year} is a leap year`)

}
else{
    document.write(`${year} not a leap year`)
}

