// require is provided by loader.min.js.
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs' } });
require(["vs/editor/editor.main"], function() {
    editor = monaco.editor.create(document.getElementById('code'), {
        value: `function x() {
  console.log("Hello world!");
}`,
        language: 'javascript',
        theme: 'vs-dark',
        fontSize: "20px",
        horizontal: "visible",
    });
});




// require is provided by loader.min.js.
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs' } });
require(["vs/editor/editor.main"], function() {
    editor1 = monaco.editor.create(document.getElementById('code1'), {
        value: `<head>
      <title>JS Playground</title>
</head>
<div class="container">
    <h1>Hello World!</h1>
</div>`,
        fontSize: "20px",
        language: 'html',
        theme: 'vs-dark',
    });
});





// require is provided by loader.min.js.
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs' } });
require(["vs/editor/editor.main"], function() {
    editor2 = monaco.editor.create(document.getElementById('code2'), {
        value: `*{
      margin: 0;
      font-family: Arial, sans-serif;
}`,
        language: 'css',
        fontSize: "20px",
        theme: 'vs-dark',
    });
});


function hide(which, which1, which2) {
    document.getElementById(which).style.display = 'none';
    document.getElementById(which1).style.display = 'none';
    document.getElementById(which2).style.display = 'none';
}

function show(which) {
    document.getElementById(which).style.display = 'block'
}


function showTab(which) {
    if (which === 'code') {
        hide('code1', 'code2', 'code3')
        show(which)

        document.getElementById('displayLang').innerText = 'Language: JS'

        window.location.hash = 'Javascript';
    } else if (which === 'code1') {
        hide('code', 'code2', 'code3')
        show(which)

        document.getElementById('displayLang').innerText = 'Language: HTML'

        window.location.hash = 'HTML';
    } else if (which === 'code2') {
        hide('code', 'code1', 'code3')
        show(which)

        document.getElementById('displayLang').innerText = 'Language: CSS'

        window.location.hash = 'CSS';
    } else if (which === 'code3') {
        hide('code', 'code1', 'code2')
        show(which)

        document.getElementById('displayLang').innerText = 'Output'

        window.location.hash = 'Output';
    }
}


/*
===========================
Outputs and Local Storage:
============================
*/


function openWindow() {
    var i, l, options = [{
            value: 'first',
            text: 'First'
        }, {
            value: 'second',
            text: 'Second'
        }],
        newWindow = window.open("", null, "height=200,width=400,status=yes,toolbar=no,menubar=no,location=no,resizable=yes");

    newWindow.document.close();
    newWindow.document.open();

    newWindow.document.write(`
        <html>
          <head>
            <style>
              ${editor2.getValue()}
            </style>
          </head>
          <body>
            ${editor1.getValue()}
            <script>
              ${editor.getValue()}
            </script>
          </body>
        </html>
        `);
}

function updateIframe() {
    var myFrame = $("#output").contents().find('body');
    var textareaValue =
        `
<html>
  <head>
    <style>
      ${editor2.getValue()}
    </style>
  </head>
  <body>
    ${editor1.getValue()}
    <script>
      ${editor.getValue()}
    </script>
  </body>
</html>
`
    myFrame.html(textareaValue);
    if (document.getElementById('flexSwitchCheckDefault').checked == true) {
        openWindow();
    };
};

document.onkeyup = function(e) {
    if (e.ctrlKey && e.altKey && e.which == 83) {
        updateIframe()
    }
};