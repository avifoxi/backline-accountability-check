require 'rails_helper'

describe "the venue registration process", :type => :feature do

  scenario "user fills in venue name, backline with specs, and submits" do
    visit '/register'

    expect(page).to have_content('Register Venue')

    within("#info") do
      fill_in 'venue[name]', :with => 'The Knitting Factory'
      fill_in 'specs[0][equipment_type]', :with => 'Guitar Amp'
      fill_in 'specs[0][description]', :with => 'A Marshall Poop'
      click_button 'Add Venue'
    end
    expect(page).to have_content 'The Knitting Factory'
    expect(current_path).to equal('/venues/1')
  end
end
