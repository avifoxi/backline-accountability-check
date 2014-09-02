class Venue < ActiveRecord::Base
  has_one :backline
  has_many :specs, through: :backline
  has_many :reports, through: :backline
end
