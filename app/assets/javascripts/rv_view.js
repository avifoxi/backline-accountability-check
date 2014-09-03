var VenueView = function(els, model) {
  this.model = model;
  this.els = els;

  this.specButtonClicked = new Event(this);

  var _this = this;

  this.els.saveSpecButton.click( function(e){
    e.preventDefault();
    // console.log(e)
    _this.specButtonClicked.notify()
  })

  this.model.specAdded.attach(function(){
    _this.appendNewSpecToDOM();
  });
}

VenueView.prototype = {
  init : function() {
    // this.saveSpecFormListen();
  },
  // specButtonClick : function() {
  //   var _this = this;
  //   _this.saveSpecButton.click(function(e) {
  //     e.preventDefault();

  //     // get the spec text fields out an into an attrObj

  //     _this.translateSpecFieldsToAttrObj();

      // instantiate new SpecModel with attrObj
      // VenueModel.addSpec(new SpecModel)

      // addSpec fires  event notification

      // Controller reads model, and fires notification to update View
        //to append html representation of the new SpecModel to the DOM on addSpec - also clear form fields for spec creation



      // _this.addNewSpecFields(0, spec_fields)
      // console.log(e);
  //   });
  // },
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
    console.log(specList);
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



















  addNewSpecFields : function(specNum, fieldsObj) {

    var _this = this;
    var names = Object.getOwnPropertyNames(fieldsObj);

    var specDiv = document.createElement('div');
    var id = 'spec' + specNum;
    specDiv.id = id;

    for (var i = 0; i < names.length; i++){
      var paramsKey = id + '[' + names[i] + ']'
      var label = _this.formatLabel( paramsKey, names[i] );
      var field = _this.prepField( paramsKey, fieldsObj[names[i]] );
      specDiv.appendChild(label)
      specDiv.appendChild(field)
    }
    $('.specsContainer').append(specDiv);
  },
  formatLabel : function(paramsKey, labelText){
    var label = document.createElement('label');
    label.setAttribute( "for", paramsKey );
    label.innerText = labelText ;
    return label;
    // working
  },
  prepField : function(paramsKey, type) {
    var _this = this;

    switch(type) {
      case 'string' :
        return _this.formatTextIp(paramsKey);


      case 'textarea' :
        return _this.formatTextArea(paramsKey);

      case 'boolean' :
        return _this.formatBoolean(paramsKey);

    }
  },
  //  works
  formatTextIp : function(paramsKey){
    var ip = document.createElement('input');
    ip.type = 'text';
    ip.name = paramsKey;
    return ip;
  },

  formatTextArea : function(paramsKey) {
    var ta = document.createElement('textarea');
    ta.name = paramsKey;
    return ta;
  },

  formatBoolean : function(paramsKey) {
    var tf = ['true', 'false']
    var sel = document.createElement('select');
    sel.name = paramsKey;
    for (var i=0; i<tf.length; i++) {
      var opt = document.createElement('option');
      opt.value = tf[i];
      opt.innerText = tf[i];
      sel.appendChild(opt)
    }
    return sel
  }
}








