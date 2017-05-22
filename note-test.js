(function(exports){
  function testNoteInitializesWithText(){
    var note = new Note("test");

    if (note.text !== "test") {
      throw new Error("Note requires text argument");
    }
  };

  testNoteInitializesWithText();
})(this);
