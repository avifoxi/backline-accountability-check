
var VenueView = function(els) {
  this.addSpecButton = els.addSpecButton;
}

VenueView.prototype = {
  init : function() {
    this.addSpecFormListen();
  },
  addSpecFormListen : function() {
    var _this = this;
    _this.addSpecButton.click(function(e) {
      e.preventDefault();
      // console.log(e);
    });
  }
}


var VenueModel = function() {
  this.name;
  this.specs;
}

var VenueController = function(model, view) {
  this.model = model;
  this.view = view;

}

VenueController.prototype ={
  init : function() {
    this.view.init()
  }
}


$(document).ready(function () {

  vView = new VenueView( {
    addSpecButton : $('.addSpec')
  } );

  vModel = new VenueModel();

  vController = new VenueController(vModel, vView);

  vController.init();
})

