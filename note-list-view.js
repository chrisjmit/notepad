(function(exports) {
  function View(list) {
    this._lists = list;
  }

  View.prototype.getLists = function(){
    return this._lists;
  };

  View.prototype.getList = function(index){
    return this._lists[index];
  };

  exports.View = View;
})(this);
