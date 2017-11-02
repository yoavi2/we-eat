json.extract! restaurant, :id, :name, :cuisine, :rating, :is_10_bis, :address, :max_deliver_in_min, :created_at, :updated_at
json.url restaurant_url(restaurant, format: :json)
