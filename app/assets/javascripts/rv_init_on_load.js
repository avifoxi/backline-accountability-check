$(document).ready(function () {

  vModel = new VenueModel();
  vView = new VenueView( {
    saveSpecButton : $('.saveSpec'),
    saveAllButton : $('.saveAll')
  }, vModel );

  vController = new VenueController(vModel, vView);

  vController.init();
})
