class Restaurant < ApplicationRecord
  include RestaurantFilterable

  has_many :reviews

  # Validations
  validates :name, :address, presence: true

  # Calculated fields
  def rating
    if reviews.present?
      reviews.average(:rating)
      # (reviews.map(&:rating).sum / reviews.size)
    else
      nil
    end
  end

  # Filtered
  def with_rating
    reviews.reject {|r| r.rating.blank?}
  end

  def no_rating
    reviews.reject {|r| r.rating.present?}
  end

  # API filters
  scope :ten_bis, ->(is_10_bis) {
    where(is_10_bis: is_10_bis)
  }

  scope :cuisine, ->(cuisine) {
    where('lower(cuisine) = ?', cuisine.downcase)
  }

  scope :max_deliver_in_min, ->(max_deliver_in_min) {
    where('max_deliver_in_min <= ?', max_deliver_in_min)
  }

  # Not used current, only in restaurant_filterable
  scope :min_rating, ->(min_rating) {
    # all # FIXME: Horrible, should use single select query
    #   .reject {|r| r.rating.blank?}
    #   .select {|r|
    #     r.rating >= min_rating.to_f # FIXME: Should really check if numeric before...
    #   }

    # joins(:reviews).select('restaurants.*').group('restaurants.id').having('AVG(reviews.rating) >= ?', min_rating)
    find_by_sql(['select restaurants.*
    from restaurants
    inner join reviews on reviews.restaurant_id = restaurants.id
    group by restaurants.id
    having AVG(reviews.rating) >= ?', min_rating]
    )
  }

  scope :search, ->(param) {
    where('lower(name) like lower(:param) OR lower(address) like lower(:param) OR lower(cuisine) like lower(:param)',
          param: "%#{param}%")
  }

  scope :shortest, ->(param) {
    if param == 'true'
      order(:max_deliver_in_min)
    end
  }

  # Not used current, only in restaurant_filterable
  scope :best, ->(param) {
    if param == 'true' # FIXME: Horrible, should use single select query
      res_with_rating = all.reject {|r| r.rating.blank?}
                            .sort_by(&:rating).reverse!
      res_with_rating + all.reject {|r| r.rating.present?}
    end
  }

end
