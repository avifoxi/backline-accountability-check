class CreateSpecs < ActiveRecord::Migration
  def change
    create_table :specs do |t|
      t.references :backline
      t.string :equipment_type
      t.boolean :functional, default: true
      t.string :description

      t.timestamps
    end
  end
end
