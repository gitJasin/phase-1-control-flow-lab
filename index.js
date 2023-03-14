function scuberGreetingForFeet(rideDistance){
  if (rideDistance <= 400) {
    return "This one is on me!"
  } else if (rideDistance >= 400 && rideDistance <= 2000) {
    return "That will be twenty bucks."
  } else if (rideDistance >= 2000 && rideDistance <= 2500) {
    return "I will gladly take your thirty bucks."
  } else if (rideDistance >= 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  const result = (city === "NYC") ? "Ok, sounds good." : "No go.";
  return result;
} 

function switchOnCharmFromTip(tip){
  let tipReply; 

  switch (tip) {
    case 'generous':
      return tipReply = 'Thank you so much.';
    case 'not as generous':
      return tipReply = 'Thank you.';
    default:
      return "Bye.";
  }
}