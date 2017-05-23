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
  var view = new View(list);
  assert.isEq(view.getLists(), [[Note]]);
}

testViewContainsListNote();
