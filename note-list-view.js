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

   View.prototype.renderHTML = function() {
    for (var i = 0; i < this._lists.length; i++) {
      "<ul><li><div>" + this._lists()[i] + "</div></li</ul>";
    }

  };


  exports.View = View;
})(this);
