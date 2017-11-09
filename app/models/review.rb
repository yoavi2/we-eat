class Review < ApplicationRecord
  belongs_to :restaurant, dependent: :destroy
  validates :reviewer_name, :rating, presence: true
  validates :rating, numericality: { greater_than_or_equal_to: 0.00,
                                     less_than_or_equal_to: 3 }
  attribute :reviewer_name, :string, default: 'Anonymous'

end
