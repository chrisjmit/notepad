function testNoteInitializesWithText(){
  console.log("Test 5: Note initialises with text");
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note._text === "My favourite language is JavaScript");
}

testNoteInitializesWithText();

  function testNoteTextCanBeRetrieved(){
  console.log("Test 6: Note text can be retrieved");
  var note = new Note("My favourite language is JavaScript");
  assert.isEq(note.getText(), "My favourite language is JavaScript");
}

testNoteTextCanBeRetrieved();
