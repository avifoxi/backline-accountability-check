class Backline < ActiveRecord::Base
  belongs_to :venue
  has_many :specs
  has_many :reports
end
