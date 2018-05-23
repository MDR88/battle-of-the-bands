// write a
// function that accepts any band name as an argument.

let bandNumber = 0;

const takeNumber = function(bandName) {
    bandNumber = bandNumber + 1;
    return `${bandNumber}. ${bandName}`

}

const scum = takeNumber("Galactic Scum")
console.log() // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under) // This should print "2. Underdogs" in the console