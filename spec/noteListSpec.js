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
  console.log("Test 3: List stores a single note");
  var list = new List();
  list.addNote("say hello");
  assert.isEq(list.getNote(0).getText(), "say hello");
  }

testListStoresSingleNote();

function testToFindListItem(){
  console.log("Test 4: List item can be retrieved");
  var list = new List();
  list.addNote("one");
  list.addNote("two");
  assert.isEq(list.getNote(1).getText(), "two");
  }

testToFindListItem();
