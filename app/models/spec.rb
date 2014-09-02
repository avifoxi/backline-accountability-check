class Spec < ActiveRecord::Base
  belongs_to :backline
  has_one :venue, through: :backline
end
