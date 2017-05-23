function testInstantiatesNoteListView() {
  var viewList = new View();
  assert.isObject(viewList, new View());
}

testInstantiatesNoteListView();

function testViewCanStoreList() {
  var view = new View();
  assert.isArray(view._lists);
}

testViewCanStoreList();

function testViewContainsListNote(){
  var list = new List();
  var view = new View();
  list.addNote('message');
  var item = list.getNote(0);
  view.addList(item);
  assert.isEq(view.getList(0), [List]);
}

testViewContainsListNote();
