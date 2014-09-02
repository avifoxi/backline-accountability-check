require 'rails_helper'

describe "the venue registration process", :type => :feature do
  before :each do
    User.make(:email => 'test@testerson.com', :password => 'password', :name => 'Grarfield')
  end

  scenario "valid user fills in venue name, backline with specs" do
    visit '/register'
    within("#register") do
      fill_in 'Venue Name', :with => 'The Knitting Factory'
      fill_in 'Equipment Type', :with => 'Guitar Amp'
      fill_in 'Equipment Description', :with => 'A Marshall Poop'
      select 'true', :from => "Does it work?"
      click_button 'Add Venue'
    end
    expect(page).to have_content 'The Knitting Factory'
    expect(current_path).to equal('/venues/1')
  end
end
