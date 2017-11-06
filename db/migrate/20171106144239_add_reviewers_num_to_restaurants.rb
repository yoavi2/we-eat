class AddReviewersNumToRestaurants < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurants, :reviewers_num, :integer, default: 0
  end
end
