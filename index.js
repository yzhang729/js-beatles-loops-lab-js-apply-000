// add solution here
function theBeatlesPlay(musicians, instruments){
  var solution = [];
  for(var i =0; i<musicians.length; i++){
    var string = musicians[0]+" plays the "+instruments[0];
    solution.push(string);
  }
  return solution;
}