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