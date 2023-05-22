function sortList() {
  var input = document.getElementById("integerList").value;
  var integers = parseInput(input);
  integers.sort(function(a, b) {
    return a - b;
  });
  displayOutput(integers);
}

function calculateMinimum() {
  var input = document.getElementById("integerList").value;
  var integers = parseInput(input);
  var minimum = Math.min(...integers);
  displayOutput(minimum);
}

function calculateMaximum() {
  var input = document.getElementById("integerList").value;
  var integers = parseInput(input);
  var maximum = Math.max(...integers);
  displayOutput(maximum);
}

function calculatePrimeNumbers() {
  var input = document.getElementById("integerList").value;
  var integers = parseInput(input);
  var primeNumbers = findPrimeNumbers(integers);
  displayOutput(primeNumbers);
}

function calculateMean() {
  var input = document.getElementById("integerList").value;
  var integers = parseInput(input);
  var sum = integers.reduce(function(a, b) {
    return a + b;
  }, 0);
  var mean = sum / integers.length;
  displayOutput(mean);
}

function calculateMedian() {
  var input = document.getElementById("integerList").value;
  var integers = parseInput(input);
  integers.sort(function(a, b) {
    return a - b;
  });
  var median;
  if (integers.length % 2 === 0) {
    var middle = integers.length / 2;
    median = (integers[middle - 1] + integers[middle]) / 2;
  } else {
    var middleIndex = Math.floor(integers.length / 2);
    median = integers[middleIndex];
  }
  displayOutput(median);
}

function parseInput(input) {
  var inputArray = input.split(",").map(function(item) {
    return parseInt(item.trim(), 10);
  });
  return inputArray;
}

function findPrimeNumbers(numbers) {
  var primes = [];
  for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    if (isPrime(num)) {
      primes.push(num);
    }
  }
  return primes;
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function displayOutput(output) {
  var outputElement = document.getElementById("output");
  outputElement.innerHTML = "Output: " + output;
}
