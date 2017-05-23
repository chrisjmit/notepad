(function(exports) {
  function List(){
    this._notes = [];
  }

  List.prototype.getNotes = function() {
    return this._notes;
  };

  List.prototype.addNote = function(text) {
    var note = new Note(text);
    this._notes.push(note);
  };

  List.prototype.getNote = function(index) {
    return this._notes[index];
  };

  exports.List = List;
})(this);
