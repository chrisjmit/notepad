(function(exports) {
  function View() {
    this._lists = [];
  }


  View.prototype.getLists = function(){
    return this._lists;
  };

  View.prototype.addList = function() {
    var list = ;
    this._lists.push(list)
  };

  View.prototype.firstItem = function() {
    for(var i = 0; i < this._lists.length; i++) {
      console.log(i);
      this.getLists()[i];
      console.log(note._text);
      return note._text;
    }
    return this._lists
  }

  exports.View = View;
})(this);
