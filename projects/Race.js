let raceNumber = Math.floor(Math.random()*1000);
let early = true;
let runnersAge = 18;

if(runnersAge > 18 && early === true){
  raceNumber += 1000;
}
if(runnersAge > 18 && early === true){
  console.log(`The race will start at 9:30, participant number ${raceNumber}`);
}else if(runnersAge > 18 && early != true){
  console.log(`Participant number ${raceNumber}, you'll gonna race at 11:00 am`);
}else if (runnersAge < 18){
  console.log(`Youth registrants run at 12:30 pm (regardless of registration), including you, participant number ${raceNumber}`);
}else{
  console.log(`Please participant number ${raceNumber}, check the registration desk`);
}
