(function(exports) {
  function List(){
    this._notes = [];
  }

  List.prototype.getNotes = function() {
    return this._notes;
  }
  exports.List = List;
})(this);
