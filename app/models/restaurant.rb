class Restaurant < ApplicationRecord
  has_many :reviews
  validates :name, :address, presence: true
  validates :rating, default: nil

end
