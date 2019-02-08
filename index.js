// add solution here
function theBeatlesPlay(musicians, instruments){
  var solution = [];
  for(var i =0; i<musicians.length; i++){
    var string = musicians[i]+" plays the "+instruments[i];
    solution.push(string);
  }
  return solution;
}

function johnLennonFacts(facts){
  for(var i = 0; i<facts.length; i++){
    facts[i] = facts[i]+"!!!";
  }
  return facts;
}
