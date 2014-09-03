var VenueModel = function() {
  this.name;
  this.specs = [];
}

VenueModel.prototype = {
  setName : function(name){
    this.name = name;
  },
  addSpec : function(spec){
    this.specs.push(spec);
  }
}


var SpecModel = function(attrObj) {
  this.equipmentType = attrObj.equipmentType;
  this.description = attrObj.description;
  this.functional = attrObj.functional;
}
