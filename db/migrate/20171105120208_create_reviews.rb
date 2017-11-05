class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.belongs_to :restaurant
      t.string :reviewer_name, null: false, limit: 30
      t.integer :rating, precision: 2
      t.text :comment, limit: 300

      t.timestamps
    end

  end
end
