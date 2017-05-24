var newNode = document.createElement('div');
var parentDiv = document.getElementById('app').parentNode;
var sp2 = document.getElementById('app');
parentDiv.insertBefore(newNode, sp2);
console.log(sp2);
