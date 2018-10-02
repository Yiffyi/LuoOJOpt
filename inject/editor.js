'use strict';
(function () {
    var editor = undefined;
    var sStor = window.sessionStorage;
    var vcodeInput = $('input[name=vcode][type=text]');

    function doSubmit() {
        sStor.setItem('vcode', vcodeInput.val());

        document.getElementById("hide_source").value = editor.getValue();
        
        document.getElementById("frmSolution").target = "_self";
        document.getElementById("frmSolution").submit();
    }

    document.getElementById("Submit").onclick = doSubmit;

    if (typeof (ace) == "undefined") return;

    ace.require("ace/ext/language_tools");
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/clouds");
    editor.setFontSize(18);
    editor.setOptions({
	    enableBasicAutocompletion: true,
	    enableSnippets: true,
	    enableLiveAutocompletion: true
    });
    editor.session.setMode("ace/mode/c_cpp");
    editor.setValue(document.getElementById("hide_source").value);
    window.editor = editor;
})()