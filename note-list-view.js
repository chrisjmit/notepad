(function(exports) {
  function View(list) {
    this.list = list;
  }

  View.prototype.getList = function(){
    return this.list;
  };

  View.prototype.renderHTML = function() {
    for (var i = 0; i < this.list.getNotes().length; i++) {
      var item = "<li><div>" + this.list.getNotes()[i].getText() + "</div></li>";
      return "<ul>" + item + "</ul>";
      }
    };

  exports.View = View;
})(this);
