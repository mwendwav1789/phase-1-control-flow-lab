// Function to calculate fare based on distance
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

// Function to check if the destination city is NYC using a ternary operator
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

// Function to respond based on the tip using a switch statement
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}

// Sample function usage:
console.log(scuberGreetingForFeet(350)); // This ride is on us!
console.log(scuberGreetingForFeet(1500)); // $20
console.log(scuberGreetingForFeet(2200)); // $30
console.log(scuberGreetingForFeet(2600)); // We cannot accommodate rides over 2500 feet.

console.log(ternaryCheckCity("NYC")); // Ok, sounds good.
console.log(ternaryCheckCity("LA")); // No go.

console.log(switchOnCharmFromTip("generous")); // Thank you so much.
console.log(switchOnCharmFromTip("not as generous")); // Thank you.
console.log(switchOnCharmFromTip("none")); // Bye.
