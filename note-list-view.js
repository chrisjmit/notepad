(function(exports) {
  function View(list) {
    this._lists = [];

}


  View.prototype.getLists = function(){
    return this._lists;
  };

  exports.View = View;
})(this);
