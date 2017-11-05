class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false, limit: 60
      t.string :cuisine
      t.decimal :rating, precision: 2
      t.boolean :is_10_bis, default: false
      t.string :address, null: false
      t.integer :max_deliver_in_min

      t.timestamps
    end
  end
end
