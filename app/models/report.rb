class Report < ActiveRecord::Base
  belongs_to :user
  belongs_to :backline
  has_one :venue, through: :backline
end
