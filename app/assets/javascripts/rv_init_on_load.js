$(document).ready(function () {

  vModel = new VenueModel();
  vView = new VenueView( {
    saveSpecButton : $('.saveSpec')
  }, vModel );

  //  spec_fields = {
  //   'equipment_type' : 'string',
  //   'description' : 'textarea',
  //   'functional' : 'boolean'
  // }



  vController = new VenueController(vModel, vView);

  vController.init();
})
