function testNoteInitializesWithText(){
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.text === "My favourite language is JavaScript");
}

testNoteInitializesWithText();

function testNoteTextCanBeRetrieved(){
  var note = new Note("My favourite language is JavaScript");
  assert.isEq(note.getText(), "My favourite language is JavaScript");
}

testNoteTextCanBeRetrieved();
