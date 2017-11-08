class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.belongs_to :restaurant, index: true, foreign_key: true
      t.string :reviewer_name, null: false, limit: 30
      t.decimal :rating, percision: 2
      t.text :comment, limit: 300

      t.timestamps
    end

  end
end
