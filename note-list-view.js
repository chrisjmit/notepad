(function(exports) {
  function View(list) {
    this.list = list;
  }

  View.prototype.getList = function(){
    return this.list;
  };

  View.prototype.renderHTML = function() {
    var item = "";
    for (var i = 0; i < this.list.getNotes().length; i++) {
      item += "<li><div>" + this.list.getNotes()[i].getText() + "</div></li>";
      }

    console.log("<ul>" + item + "</ul>");
    return "<ul>" + item + "</ul>";
    };

  exports.View = View;
})(this);
