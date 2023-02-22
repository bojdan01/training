// Define function to read a file and return an array of strings
function readFileToArray(file) {
  var lines = [];
  var fileReader = new FileReader();
  fileReader.onload = function(e) {
    var contents = e.target.result;
    lines = contents.split("\n");
  }
  fileReader.readAsText(file);
  return lines;
}

// Define function to test Czech words
function testCzech(cz, eng) {
  for (var i = 0; i < 5; i++) {
    console.log("Zadejte překlad slovíčka " + cz[i] + ":");
    var preklad = prompt();
    if (preklad === eng[i]) {
      console.log("Dobře");
    } else {
      console.log("Špatně");
      console.log("Dobrá odpověď je " + eng[i] + ".");
      i = 5;
      setTimeout(function() {
        var process = require('child_process');
        process.execFile('bin/app.vbs');
      }, 1000);
    }
  }
}

// Define function to test English words
function testEnglish(cz, eng) {
  for (var i = 0; i < 5; i++) {
    console.log("Zadejte překlad slovíčka " + eng[i] + ":");
    var preklad = prompt();
    if (preklad === cz[i]) {
      console.log("Dobře");
    } else {
      console.log("Špatně");
      console.log("Dobrá odpověď je " + cz[i] + ".");
      i = 5;
      setTimeout(function() {
        var process = require('child_process');
        process.execFile('bin/app.vbs');
      }, 1000);
    }
  }
}

// Define function to show start menu
function startMenu(cz, eng) {
  console.log("Pokud chcete prekladat z CZ do ENG tak napiš 1 a pokud naopak tak 2");
  var i = 0;
  while (isNaN(i) || (i !== 1 && i !== 2)) {
    i = parseInt(prompt());
    if (isNaN(i) || (i !== 1 && i !== 2)) {
      console.log("Napište 1 nebo 2");
    }
  }
  if (i === 1) {
    testCzech(cz, eng);
  }
  if (i === 2) {
    testEnglish(cz, eng);
  }
}

// Define main function
function main() {
  var eng = new Array(5);
  var cz = new Array(5);
  
  // Read English words from file
  var engFile = document.getElementById('eng-file').files[0];
  eng = readFileToArray(engFile);
  
  // Read Czech words from file
  var czFile = document.getElementById('cz-file').files[0];
  cz = readFileToArray(czFile);
  
  startMenu(cz, eng);
  
  setTimeout(function() {
    var process = require('child_process');
    process.execFile('bin/app1.vbs');
  }, 1000);
}

main();
