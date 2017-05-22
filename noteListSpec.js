function testNoteListHoldsNotes() {
  var list = new List();
  assert.isArray(list._notes);
}

testNoteListHoldsNotes();

function testNoteListCReturnsNotes() {
  var list = new List();
  assert.isArray(list.getNotes());
}

testNoteListCReturnsNotes();
