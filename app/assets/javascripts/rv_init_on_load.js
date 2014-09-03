$(document).ready(function () {

  vView = new VenueView( {
    saveSpecButton : $('.saveSpec')
  } );

  //  spec_fields = {
  //   'equipment_type' : 'string',
  //   'description' : 'textarea',
  //   'functional' : 'boolean'
  // }

  vModel = new VenueModel();

  vController = new VenueController(vModel, vView);

  vController.init();
})
