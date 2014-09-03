
var FormBuilder = function(els) {
  this.addSpecButton = els.addSpecButton;
}

FormBuilder.prototype = {
  addSpecFormListen : function() {
    var _this = this;
    _this.addSpecButton.click(function(e) {
      e.preventDefault();
      console.log(e);
    })

  }

}





$(document).ready(function () {

  formDude = new FormBuilder( {
    addSpecButton : $('.addSpec')
  } );

  formDude.addSpecFormListen();

})

