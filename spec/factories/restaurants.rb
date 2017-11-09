FactoryGirl.define do
  factory :restaurant do
    name                  { Faker::Name.name }
    cuisine               { Faker::Food.ingredient }
    is_10_bis             { Faker::Boolean.boolean }
    address               { Faker::Address.street_name }
    max_deliver_in_min    { Faker::Number.between(from = 10, to = 60) }
  end
end
