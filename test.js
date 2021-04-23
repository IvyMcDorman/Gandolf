// String properties
var myString = "hello this is an ePic string!";
// Check if a string starts with something
var check = myString.startsWith("Hello");

console.log(check);

// Convert a string to lowercase or uppercase
var check2 = myString.toLowerCase().startsWith("hello");

console.log(check2);

var insults = [
    "you fuckin suck.",
    "yo mamas like a vaccum she sucks blows and gets laid in the closet.",
    "imagine being gay.",
    "killing yourself would be the first right thing you'd do with your life.",
    "fuck you, you greasy idiot.",
    "your mom is a hoe.",
    "if your brain was dynamite, there wouldn't be enough to blow your hat off.",
    "jeez imagine spending all day on discord talking to a bot",
    "your more disappointing than an unsalted pretzel",
    "Rick Astley wants to give you up."
];

var random = Math.floor(Math.random() * insults.length);

console.log(insults[0]);
console.log(insults[1]);
console.log(insults[2]);
console.log(insults.length);
