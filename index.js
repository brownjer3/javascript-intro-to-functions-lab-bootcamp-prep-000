var uppercase = "HELLO!"
var lowercase = "hello!"

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
 if (lowercase) {
 return "I can't hear you!"
}
}

function sayHiToGrandma(string) {
 if (uppercase) {
 return "YES INDEED!"
}
}
 
/* } else if (uppercase) { 
  return "YES INDEED!"
} else if ("I love you, Grandma.") {
  return "I love you, too"
}
} */
