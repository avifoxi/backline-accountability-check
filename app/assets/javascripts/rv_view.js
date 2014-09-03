var VenueView = function(els, model) {
  this.model = model;
  this.els = els;

  this.specButtonClicked = new Event(this);
  this.saveButtonClicked = new Event(this);

  var _this = this;

  this.els.saveSpecButton.click( function(e){
    e.preventDefault();
    _this.specButtonClicked.notify();
  });

  this.els.saveAllButton.click( function(e){
    e.preventDefault();
    _this.saveButtonClicked.notify();
  });

  this.model.specAdded.attach(function(){
    _this.appendNewSpecToDOM();
  });
}

VenueView.prototype = {
  init : function() {
  },
  translateSpecFieldsToAttrObj : function(){
    var type = $('#equipType').val();
    var desc = $('#desc').val();
    var func = $('#functional').val();
    specAttrs = {
      'equipmentType' : type,
      'description' : desc,
      'functional' : func
    }
    return specAttrs;
  },
  appendNewSpecToDOM : function(){
    var _this = this;
    var specList = _this.model.specs;
    var newSpec = specList[specList.length - 1];
    console.log(newSpec);
    var html = _this.buildSpecUL(newSpec);
    $('.specsContainer').append(html);
  },
  buildSpecUL : function(spec){
    var html;
    html = '<ul><li>Equipment Type: ' +
           spec.equipmentType +
           '</li><li>Description: ' +
           spec.description +
           '</li><li>Does it work?: ' +
           spec.functional +
           '</li></ul>'
    return html;
  },
  addVenueName : function(){
    var venueName = $('.venueName').val();
    this.model.setName(venueName);
  }
}








