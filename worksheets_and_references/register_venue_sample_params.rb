:params => {
  venue: {name: 'venue name',
    specs: [
      {
        equipment_type: 'equip type',
        functional: 'boolean',
        description: 'long description'
      },
      {
        equipment_type: 'equip type',
        functional: 'boolean',
        description: 'long description'
      }
      #### etc for additional
    ]
  }
}

venue[name]
venue[specs][0][equipment_type]

@venue = Venue.create
@venue.backline = Backline.create
venue[specs].each do |spec|
  Spec.create( # parse spec params)
  @venue.backline.specs << spec
end

#### form for create

