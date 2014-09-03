
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


var VenueModel = function(spec_fields) {
  this.spec_fields = spec_fields;
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

   spec_fields = {
    'equipment_type' : 'string',
    'description' : 'textarea',
    'functional' : 'boolean'
  }

  vModel = new VenueModel(spec_fields);

  vController = new VenueController(vModel, vView);

  vController.init();
})

