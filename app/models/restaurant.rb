class Restaurant < ApplicationRecord

  validates :name, :address, presence: true
  validates :rating, numericality: { greater_than_or_equal_to: 0.00,
                                     less_than_or_equal_to: 3 }

end
