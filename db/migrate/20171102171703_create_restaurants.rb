class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.integer :cuisine
      t.decimal :rating
      t.boolean :is_10_bis
      t.string :address
      t.integer :max_deliver_in_min

      t.timestamps
    end
  end
end
