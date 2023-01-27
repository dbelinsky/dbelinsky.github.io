function getArrayParams(...arr) {
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  let sum = 0; 
  for (let i = 0; i < arr.length; i++) { 
    sum += arr[i]; 
  }
  let avg = sum / arr.length; 
  return { min: min, max: max, avg: +avg.toFixed(2) };
}

function summElementsWorker(...arr) {
  let sum = 0; 
  for (let i = 0; i < arr.length; i++) { 
    sum += arr[i]; 
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  let difMaxMin = max - min;
  if (arr.length === 0) {
    return 0;
  }
  return difMaxMin;
}

function differenceEvenOddWorker(...arr) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      even += arr[i];
    } else {
      odd += arr[i];
    }
  }
  return (even - odd);
}

function averageEvenElementsWorker(...arr) {
  let even = 0;
  let quantity = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      even += arr[i];
      quantity += 1;
    }
  }
  if (arr.length === 0) {
    return 0;
  }
  return (even / quantity);
}

function makeWork (arrOfArr, func) {
  let array = [];
  for (let i = 0; i < arrOfArr.length; i++) {
    array.push(func(...arrOfArr[i]));
  }
  let maxWorkerResult = Math.max.apply(null, array);
  return maxWorkerResult;
}