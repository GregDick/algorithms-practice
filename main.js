var start = _.shuffle(_.range(30));
$(".start").append(start.toString());

var iterations = 0;
var answer = [];

//insertion sort
function insertionSort (arr, answer) {
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
function bubbleSort (arr){
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

//quick sort
function quickSort (arr, lo, hi) {
  if (lo < hi){
    var p = partition(arr, lo, hi);
    quickSort(arr, lo, p-1);
    quickSort(arr, p+1, hi);
  }
}

//partition operation
function partition(arr, lo, hi){
  //chose the last element as the pivot
  var pivotIndex = hi;
  var pivot = arr[pivotIndex];
  //moving inwards from the beginning
  //check for lower values and put them after the pivot
  for(var i = lo; i < pivotIndex; i++){
    if(arr[i] > pivot && pivotIndex - i > 1){
      var displaced = arr[pivotIndex-1];
      arr[pivotIndex] = arr[i];
      arr[pivotIndex-1] = pivot;
      arr[i] = displaced;
      pivotIndex--;
      i = lo - 1;
      iterations++;
    //if only two values remain,
    //swap them and return the new value of pivot's index
    }else if(arr[i] > pivot){
      arr[pivotIndex] = arr[i];
      arr[i] = pivot;
      pivotIndex--;
      iterations++;
    }
  }
  return pivotIndex;
}

quickSort(start, 0, start.length-1);
$(".answer").append('quickSort: ' + start.toString());
// insertionSort(start, answer);
// bubbleSort(start);
// selectionSort(start);

$(".iterations").append(iterations);










