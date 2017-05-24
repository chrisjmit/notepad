function testInstantiatesNoteListView() {
  var viewList = new View();
  assert.isObject(viewList, new View());
}

testInstantiatesNoteListView();

function testViewContainsListNote(){
  var list = new List();
  var view = new View(list);
  list.addNote('message');
  assert.isEq(view.getList(), list);
}

testViewContainsListNote();

function testViewReturnsListContents() {
  var list = new List();
  list.addNote("message");
  var view = new View(list);
  var html = "<ul><li><div>message</div></li></ul>";
  assert.isEq(view.renderHTML(), html);
}

testViewReturnsListContents();
