//The IIFE [Immediate invoked function expression] runs only once and thus beneficial to create closures
var Editor = (function(){
    var EditorState = {};

    function Editor(text = ''){
        EditorState.text = text;
    }

    Editor.prototype.setText = function(text){
        EditorState.text = text;
    }
    Editor.prototype.getText = function(){
        return EditorState.text;
    }

    return Editor;
}());

const ed = new Editor('Girish');
console.log(ed.getText());
