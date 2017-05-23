function testInstantiatesNoteListView() {
  var viewList = new View();
  assert.isObject(viewList, new View());
}

testInstantiatesNoteListView();
