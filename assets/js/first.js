var messageArray = ["Your IT Consulting And Contracting Solutions","We deliver in less than 30min to you",
"Get your free 2 weeks trainings here"];
var messageIndex = 0;

function deeperFunction() {
// perform loop
for (var i = 0; i < 500; i++) {
// do stuff.
var foo = i * (Math.random());
var bar = foo;
// more exciting code.
}
}

function simpleFunction() {
// jump into a deeper function
deeperFunction();
// now grab the message and change it.

var newMessage = messageArray[messageIndex];
var messageElement = document.getElementById("firstMessage");
messageElement.innerHTML = newMessage;
messageIndex++;
if (messageIndex > messageArray.length - 1) {
messageIndex = 0;
}

}

function changeMessage() {
console.log("msg,,,,,,,,", messageIndex);
simpleFunction();

}

window.onload = function() {
setInterval(changeMessage, 5000);
};