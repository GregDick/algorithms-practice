var start = _.shuffle(_.range(20));
$(".start").append(start.toString());

var iterations = 0;
var answer = [];

//insertion sort
function insertion (arr, answer) {
  arr.reduce(function(prev, curr, i){
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

  $(".answer").append('insertion: '+answer.toString());
}

//bubble sort
function bubbles (arr){
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] > arr[i+1]){
      var placeholder = arr[i+1];
      arr[i+1] = arr[i];
      arr[i] = placeholder;
      console.log(arr);
      count ++;
    }
    iterations++;
  };
  if(count===0){
    $(".answer").append('bubbles: ' + arr.toString());
    return arr;
  }else{
    return bubbles(arr);
  }
}

//selection sort
function selectionSort (arr){

  for (var i = 0; i < arr.length; i++) {
    var min = arr[i];
    var index = i;
    for (var x = i+1; x < arr.length; x++) {
      if(arr[x] < min){
        min = arr[x];
        index = x;
        iterations++;
      }
      if(x===arr.length-1){
        arr[index] = arr[i];
        arr[i] = min;
      }
    };
    console.log(arr);
  };
  $(".answer").append('selection: ' + arr.toString());
}

// insertion(start, answer);
// bubbles(start);
selectionSort(start);

$(".iterations").append(iterations);

