class Restaurant < ApplicationRecord
  include Filterable

  has_many :reviews

  # Validations
  validates :name, :address, presence: true
  validates :rating, default: nil

  # Filters
  scope :is_10_bis, ->(is_10_bis) {
    where is_10_bis: is_10_bis
  }

  scope :max_deliver_in_min, ->(max_deliver_in_min) {
    where('max_deliver_in_min <= ?', max_deliver_in_min)
  }

  scope :min_rating, ->(min_rating) {
    where('rating >= ?', min_rating)
  }

  scope :search, ->(param) {
    where('lower(name) like :param OR lower(address) like :param OR lower(cuisine) like :param',
          param: "%#{param}%")
  }

end
