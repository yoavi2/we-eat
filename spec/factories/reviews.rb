FactoryGirl.define do
  factory :review do
    reviewer_name          { Faker::Name.name }
    rating                 { Faker::Number.between(from = 1.00, to = 3.00) }
    comment                { Faker::Lorem.sentence }
  end
end
