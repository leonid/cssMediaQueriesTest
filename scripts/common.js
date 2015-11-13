(function(){
  var sortables = ['sortable0','sortable1'];

  for (var i=0; i < sortables.length; i++) {
    var htmlElement = document.getElementById(sortables[i]);
    Sortable.create(htmlElement);
  }

})();