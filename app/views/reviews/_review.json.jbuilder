json.extract! review, :id, :reviewer_name, :rating, :comment
json.url review_url(review, format: :json)
