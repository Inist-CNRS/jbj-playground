var examples = {};
var urls = [
  "https://rawgit.com/Inist-CNRS/node-jbj/master/test/examples.json",
  "https://rawgit.com/Inist-CNRS/node-jbj-array/master/test/examples.json",
  "https://rawgit.com/Inist-CNRS/node-jbj-parse/master/test/examples.json",
  "https://rawgit.com/Inist-CNRS/node-jbj-template/master/test/examples.json",
  "https://rawgit.com/Inist-CNRS/node-jbj-rdfa/master/test/examples.json",
  "https://rawgit.com/Inist-CNRS/node-jbj-nlp/master/test/examples.json",
  "https://rawgit.com/Inist-CNRS/node-jbj-numerical/master/test/examples.json"
];

// Get examples from github repositories
var urlLoaded = 0;
urls.forEach(function (url) {

  reqwest({url: url,
    crossOrigin: true,
    type: 'json'
  })
  .then(function (ex) {
    addExamples(ex);
    if (++urlLoaded >= urls.length) {
      addEventListenersOnExamples(examples);
    }
  })
  .fail(function (err) {
    console.error(err);
    if(++urlLoaded >= urls.length) {
      addEventListenersOnExamples(examples);
    }
  });

});

/**
 * Initialize Examples list
 * @param  {Object} ex Array of examples
 */
function addExamples(ex) {
  var examplesUl = document.getElementById('examples-list');
  for (var example in ex) {
    // examples.json occasionnally contain error cases
    // don't show them
    if (ex[example].error) {
      continue;
    }
    examples[example] = ex[example];
    var nExample = document.createElement('li');
    nExample.className = "example";
    var tExampleName = document.createTextNode(example);
    nExample.appendChild(tExampleName);
    examplesUl.appendChild(nExample);
  }
}

function addEventListenersOnExamples(examples) {
  var inputArea      = document.getElementById('input');
  var stylesheetArea = document.getElementById('stylesheet');
  var outputArea     = document.getElementById('output');

  var showExample = function showExample(e) {
    var exampleClicked = document.getElementsByClassName("exampleClicked");
    if(exampleClicked.length > 0){
      for(var i = 0 ; i < exampleClicked.length ; i++){
        exampleClicked[i].className = "example";
      }
    }
    e.target.className = e.target.className + " exampleClicked";

    var exampleName = e.target.textContent;
    var input       = examples[exampleName].input;
    var stylesheet  = examples[exampleName].stylesheet;
    inputEditor.set(input);
    stylesheetEditor.set(stylesheet);
  };

  var examplesList = document.getElementsByClassName('example');
  var examplesLen  = examplesList.length;
  for (var e = 0; e < examplesLen; e++) {
    var example     = examplesList[e];
    var exampleName = example.textContent;
    example.addEventListener('click', showExample);
  }
}
