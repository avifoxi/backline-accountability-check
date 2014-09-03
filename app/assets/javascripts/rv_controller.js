var VenueController = function(model, view) {
  this.model = model;
  this.view = view;

}

VenueController.prototype ={
  init : function() {
    this.view.init()
  }
}
