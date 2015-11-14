(function(){

  var classdelay;

  var hideDock= function (){
    classdelay = setTimeout(function() {
      document.getElementById("z-dock").removeAttribute('class');
    }, 1000);
  }

  var showDock = function (){
    clearTimeout(classdelay);
    document.getElementById("z-dock").className = "shown";
  }

  var addClasses = function (e) {
    var target = e.target;
      if(target.getAttribute('src')) {
        var li = target.parentNode.parentNode;
        var prevLi = li.previousElementSibling;
        var nextLi = li.nextElementSibling;
        if(prevLi) {
          prevLi.className = 'z-dock-prev';
        }
        if(nextLi) {
          nextLi.className = 'z-dock-next';
        }
        target.addEventListener('mouseout', function() {
          if(prevLi) {
            prevLi.removeAttribute('class');
          }
          if(nextLi) {
            nextLi.removeAttribute('class');
          }
        }, false);
    }
  }


  document.getElementById("z-dock").addEventListener('mouseover', function(e) {
    showDock()
    addClasses(e);
  });
  document.getElementById("z-dock").addEventListener('mouseout', hideDock);

})();
