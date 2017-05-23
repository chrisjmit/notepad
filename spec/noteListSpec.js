function testNoteListHoldsNotes() {
  console.log("Test 1: Note list holds notes");
  var list = new List();
  assert.isArray(list._notes);
}

testNoteListHoldsNotes();

function testNoteListReturnsNotes() {
  console.log("Test 2: Note list returns notes");
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
