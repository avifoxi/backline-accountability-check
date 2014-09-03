var VenueController = function(model, view) {
  this.model = model;
  this.view = view;

  var _this = this;
  this.view.specButtonClicked.attach(function(){
    _this.addSpec();
  });
  this.view.saveButtonClicked.attach(function(){
    _this.view.addVenueName();
    _this.postToBackEnd();
  });
}

VenueController.prototype ={
  init : function() {
    this.view.init()
  },
  addSpec : function(){
    var _this = this;
    var attrObj = _this.view.translateSpecFieldsToAttrObj();
    var newSpec = new SpecModel(attrObj);
    _this.model.addSpec(newSpec);
  },
  postToBackEnd : function(){
    var _this = this;
    _this.model.prepJson();
  }
}
