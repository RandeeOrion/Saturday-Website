var username = prompt ('Welcome! What is your name?');

console.log(username);

//"concatenate", or add, a string
console.log('Hi!' + username + '!');

document.write('<p> Hi,' + username + '</p>');

var ReadyToOrder = prompt('Ready to make your chicken feed ordering easy?');

if (ReadyToOrder === 'yes') {
document.write('<p> Great! Call us at 206-867-5309. </p>')
} else { 
document.write('<p> Welp, good luck! </p>');
}

// fucntions have three parts:
//inputs - variables or statics (parameters)
// work - what do we do with those variables or statics" 
// output - what happened with the work as a returned value 
// .. and then we have to tell the fuction to run

//pseudocode: Spliting up to smaller problems: breaking down the problem into english, then translate it into JS

// parameters: meat cheese bread
// work: "Here is your beautiful sandwhich. It has " + meat + " and " + cheese + " on " + bread + "."
// return value: "Here is your beautiful sandwhich. IT has turkey and cheese on wheat."



fucntion makeSandwich (meat, cheese, bread) {
    //work goes in here
    var newSandwhich = "Here is your beautiful sandwhich. It has " + meat + " and " + cheese + " on " + bread + ".";
    // tell java script to return
    return newSandwhich;
}
// call or run the function with these specific values aka arguments . Paramaters & Placeholder   Action & Arguments
var stephaniesSadnwhich = makeSandwich("turkey". "peperjack". 'wheat');