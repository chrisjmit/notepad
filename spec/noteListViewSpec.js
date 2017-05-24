function testInstantiatesNoteListView() {
  var viewList = new View();
  assert.isObject(viewList, new View());
}

testInstantiatesNoteListView();

function testViewContainsListNote(){
  var list = new List();
  var view = new View(list);
  list.addNote('message');
  assert.isEq(view.getLists(), list);
}

testViewContainsListNote();

function testViewReturnsListContents() {
  var list = new List();
  var view = new View(list);
  list.addNote('message');
  var html = "<ul><li><div>message</div></li></ul>";
  assert.isEq(view.renderHTML() === html);
}

testViewReturnsListContents();
