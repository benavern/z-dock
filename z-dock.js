(function(){

  this.ZDock = function() {
    this.classdelay;
    if(arguments[0]){
      this._dockWrapper = arguments[0];
      this._dock = this._dockWrapper.children[0];
      this.start.call(this);
    }
    else{
      throw "You must pass a DOM Object !";
    }
  }

  this.ZDock.prototype.__showDock = function() {
    var _this = this;
    clearTimeout(_this._classdelay);
    _this._dock.className = "shown";
  };

  this.ZDock.prototype.__hideDock = function() {
    var _this = this;
    _this._classdelay = setTimeout(function() {
      _this._dock.removeAttribute('class');
    }, 1000);
  };

  this.ZDock.prototype.__addClasses = function(e) {
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
      });
    }
  };

  this.ZDock.prototype.start = function() {
    var _this = this;
    _this._dock.addEventListener('mouseover', function(e) {
      _this.__showDock.call(_this);
      _this.__addClasses.call(_this, e);
    });
    _this._dock.addEventListener('mouseout', function() {
      _this.__hideDock.call(_this);
    });
  }

})();
