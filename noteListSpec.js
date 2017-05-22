function testNoteListHoldsNotes() {
  var list = new List();
  assert.isArray(list._notes);
}

testNoteListHoldsNotes();

function testNoteListReturnsNotes() {
  var list = new List();
  assert.isArray(list.getNotes());
}

testNoteListReturnsNotes();

function testListStoresSingleNote(){
  var list = new List();
  list.addNote("say hello");
  assert.isEq(list.getNotes()[0].getText(), "say hello");
  }

testListStoresSingleNote();
