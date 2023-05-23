function sortList() {
  document.getElementById('output').style.display = "block";
  var input = document.getElementById("integerList").value;
  var integers = parseInput(input);
  integers.sort(function(a, b) {
    return a - b;
  });
  displayOutput(integers);
}

function calculateMinimum() {
  document.getElementById('output').style.display = "block";
  var input = document.getElementById("integerList").value;
  var integers = parseInput(input);
  var minimum = Math.min(...integers);
  displayOutput(minimum);
}

function calculateMaximum() {
  document.getElementById('output').style.display = "block";
  var input = document.getElementById("integerList").value;
  var integers = parseInput(input);
  var maximum = Math.max(...integers);
  displayOutput(maximum);
}

function calculatePrimeNumbers() {
  document.getElementById('output').style.display = "block";
  var input = document.getElementById("integerList").value;
  var integers = parseInput(input);
  var primeNumbers = findPrimeNumbers(integers);
  displayOutput(primeNumbers);
}

function calculateMean() {
  document.getElementById('output').style.display = "block";
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
  document.getElementById('output').style.display = "block";
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
  document.getElementById('output').style.display = "block";
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
function calculateMode() {
  var input = document.getElementById("integerList").value;
  var integers = parseInput(input);
  var counts = {};
  var mode = [];
  var maxCount = 0;
  for (var i = 0; i < integers.length; i++) {
    var num = integers[i];
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      mode = [num];
    } else if (counts[num] === maxCount) {
      mode.push(num);
    }
  }
  displayOutput(mode);
}

function calculateRange() {
  var input = document.getElementById("integerList").value;
  var integers = parseInput(input);
  var range = Math.max(...integers) - Math.min(...integers);
  displayOutput(range);
}

function calculateSum() {
  var input = document.getElementById("integerList").value;
  var integers = parseInput(input);
  var sum = integers.reduce(function(a, b) {
    return a + b;
  }, 0);
  displayOutput(sum);
}

function calculateEven() {
  var input = document.getElementById("integerList").value;
  var integers = parseInput(input);
  var evenNumbers = integers.filter(function(num) {
    return num % 2 === 0;
  });
  displayOutput(evenNumbers);
}

function calculateOdd() {
  var input = document.getElementById("integerList").value;
  var integers = parseInput(input);
  var oddNumbers = integers.filter(function(num) {
    return num % 2 !== 0;
  });
  displayOutput(oddNumbers);
}

function displayOutput(output) {
  var outputElement = document.getElementById("output");
  outputElement.innerHTML = "Output: " + output;
}
