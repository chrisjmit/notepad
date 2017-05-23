(function(exports) {
  function View() {
    this._lists = [];
  }


  View.prototype.getLists = function(){
    return this._lists;
  };

  View.prototype.addList = function() {
    this._lists.push(list);
  };

  View.prototype.getList = function(index){
    return this._lists[index];
  };

  exports.View = View;
})(this);
