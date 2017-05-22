function testNoteListContainsNote() {
  var list = new List();
  assert.isEq(list._notes, [])
}

testNoteListContainsNote();
