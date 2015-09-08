var start = _.shuffle(_.range(30));
$(".start").append(start.toString());

var iterations = 0;

//insertion sort
var answer = [];

start.reduce(function(prev, curr, i){
  prev.push(curr);
  for(var x = prev.length-1; x > 0 ; x--){

    $("answer").append(prev.toString());
    iterations ++;
    if(prev[x-1] > prev[x]){
      var placeholder = prev[x];
      prev[x]         = prev[x-1];
      prev[x-1]       = placeholder;
    } else if(prev[x-1] < prev[x]){
      break;
    }

  }
  return prev;
}, answer);

$(".answer").append(answer.toString());
$(".iterations").append(iterations);


// function checkPair (prev, x) {
//   $("answer").append(prev.toString());
//   iterations ++;
//   if(prev[x-1] > prev[x]){
//     prev.splice(x-1, 2, prev[x], prev[x-1]);
//   } else if(prev[x-1] < prev[x]){
//     break;
//   }
// }
