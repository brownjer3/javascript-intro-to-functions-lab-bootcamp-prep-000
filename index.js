var uppercase = "HELLO!"
var lowercase = "hello!"
var mixedcase = "Hello!"

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
  if (uppercase) {
 return "I can't hear you!"
} else if (lowercase) {
  return "I know!"
}
}
