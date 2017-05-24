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

function testViewReturnsListWithOneItem() {
  var list = new List();
  list.addNote("message");
  var view = new View(list);
  assert.isEq(view.renderHTML(), "<ul><li><div>message</div></li></ul>");
}

testViewReturnsListWithOneItem();


function testViewReturnsListWithMultipleItems() {
  var list = new List();
  list.addNote("buy food for Red");
  list.addNote("take out the recycling");
  list.addNote("remember to code");
  var view = new View(list);
  assert.isEq(view.renderHTML(), "<ul><li><div>buy food for Red</div></li><li><div>take out the recycling</div></li><li><div>remember to code</div></li></ul>");
}

testViewReturnsListWithMultipleItems();
