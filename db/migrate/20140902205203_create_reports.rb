class CreateReports < ActiveRecord::Migration
  def change
    create_table :reports do |t|
      t.references :user, :backline
      t.boolean :accurate, default: true
      t.text :comment

      t.timestamps
    end
  end
end
