class CreateBacklines < ActiveRecord::Migration
  def change
    create_table :backlines do |t|
      t.references :venue
      t.string :url_path

      t.timestamps
    end
  end
end
