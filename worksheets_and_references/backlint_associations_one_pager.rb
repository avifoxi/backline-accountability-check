require 'active_record'

require 'minitest/autorun'
require 'minitest/spec'

ActiveRecord::Base.establish_connection adapter: "sqlite3", database: ":memory:"


ActiveRecord::Migration.create_table :users do |t|
  t.string :name
end

ActiveRecord::Migration.create_table :venues do |t|
  t.string :name
end

ActiveRecord::Migration.create_table :backlines do |t|
  t.references :venue
  t.string :url_path
end


ActiveRecord::Migration.create_table :reports do |t|
  t.references :user, :backline
  t.boolean :accurate, default: true
  t.text :comment
end


ActiveRecord::Migration.create_table :specs do |t|
  t.references :backline
  t.string :equipment_type
  t.boolean :functional, default: true
  t.string :description
end



ActiveRecord::Migrator.up "db/migrate"

class User < ActiveRecord::Base
  has_many :reports
end

class Venue < ActiveRecord::Base
  has_one :backline
  has_many :specs, through: :backline
  has_many :reports, through: :backline
end

class Backline < ActiveRecord::Base
  belongs_to :venue
  has_many :specs
  has_many :reports
end

class Spec < ActiveRecord::Base
  belongs_to :backline
  has_one :venue, through: :backline
end

class Report < ActiveRecord::Base
  belongs_to :user
  belongs_to :backline
  has_one :venue, through: :backline
end



##### seed cases
User.create(name: 'Avi')
User.create(name: 'David')

Venue.create(name: 'Knitting Factory')
Venue.create(name: 'Madison Square Garden mothafucka')

Venue.first.backline = Backline.create(url_path: "http://bk.knittingfactory.com/information/tech-specshd-filming/")

Venue.last.backline = Backline.create

SPEC_TYPES = %w(guitar_amp bass_amp cheese_dispenser kick_drum drug_dispenser)

Venue.all.each do |venue|
  SPEC_TYPES.each do |type|
    venue.backline.specs << Spec.create(equipment_type: type)
  end
end

User.first.reports.create(backline: Backline.first, accurate: false, comment: 'They totally lied to me')

p Report.first.venue.name

p Venue.first.reports.first.accurate















