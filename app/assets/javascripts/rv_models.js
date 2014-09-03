var VenueModel = function() {
  this.name;
  this.specs = [];
  this.specAdded = new Event(this);

}

VenueModel.prototype = {
  setName : function(name){
    this.name = name;
  },
  addSpec : function(spec){
    this.specs.push(spec);
    this.specAdded.notify();
  },
  prepJson : function() {
    var _this = this;
    var venueParams =  { 'name': _this.name }
    venueParams.specs =  _this.specs ;
    var venueJson = JSON.stringify(venueParams);
    console.log(venueJson);
  }
}


var SpecModel = function(attrObj) {
  this.equipmentType = attrObj.equipmentType;
  this.description = attrObj.description;
  this.functional = attrObj.functional;
}
