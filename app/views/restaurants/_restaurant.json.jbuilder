json.extract! restaurant, :id, :name, :cuisine, :rating, :is_10_bis, :address, :max_deliver_in_min
# json.array! restaurant.reviews, partial: 'reviews/review', as: :review
json.reviews restaurant.reviews, partial: 'reviews/review', as: :review
# json.url restaurant_url(restaurant, format: :json)
