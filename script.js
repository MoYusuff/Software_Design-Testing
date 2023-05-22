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
  
  function calculateAverage() {
    var input = document.getElementById("integerList").value;
    var integers = parseInput(input);
    var sum = integers.reduce(function(a, b) {
      return a + b;
    }, 0);
    var average = sum / integers.length;
    displayOutput(average);
  }
  
  function parseInput(input) {
    var inputArray = input.split(",").map(function(item) {
      return parseInt(item.trim(), 10);
    });
    return inputArray;
  }
  
  function displayOutput(output) {
    var outputElement = document.getElementById("output");
    outputElement.innerHTML = "Output: " + output;
  }
  