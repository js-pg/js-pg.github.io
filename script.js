// require is provided by loader.min.js.
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs' } });
require(["vs/editor/editor.main"], function() {
  editor = monaco.editor.create(document.getElementById('code'), {
    value: `function x() {
  console.log("Hello world!");
}`,
    language: 'javascript',
    theme: 'vs-dark',
  });
});




// require is provided by loader.min.js.
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs' } });
require(["vs/editor/editor.main"], function() {
  editor1 = monaco.editor.create(document.getElementById('code1'), {
    value: 
`<div class="container">
    <h1>Hello World!</h1>
</div>`,
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
    theme: 'vs-dark',
  });
});

function hide(which, which1, which2){
  document.getElementById(which).style.display = 'none';
  document.getElementById(which1).style.display = 'none';
  document.getElementById(which2).style.display = 'none';
}

function show(which){
  document.getElementById(which).style.display = 'block'
}


function showTab(which){
  if (which === 'code'){
    hide('code1', 'code2', 'code3')
    show(which)

    document.getElementById('displayLang').innerText = 'JS'

    window.location.hash='Javascript';
  }
  else if (which === 'code1'){
    hide('code', 'code2', 'code3')
    show(which)    

    document.getElementById('displayLang').innerText = 'HTML'

    window.location.hash='HTML';
  }
  else if (which === 'code2'){
    hide('code', 'code1', 'code3')
    show(which)

    document.getElementById('displayLang').innerText = 'CSS'

    window.location.hash='CSS';
  }
    else if (which === 'code3'){
      hide('code', 'code1', 'code2')
      show(which)
  
      document.getElementById('displayLang').innerText = 'Output'
  
      window.location.hash='Output';
  }
}

function updateIframe() {
  var myFrame = $("#output").contents().find('body');
  var textareaValue = '<head><style>' + editor2.getValue() + '</style></head><body>' + editor1.getValue() + '</body>';
  myFrame.html(textareaValue);
}