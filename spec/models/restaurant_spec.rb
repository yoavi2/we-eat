require 'rails_helper'

# Test suite for the Review model
RSpec.describe Restaurant, type: :model do
  # Association test
  it { should have_many(:reviews) }
  # Validation test
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:address) }

  # Create a restaurant using factory girl, for later reference
  let!(:restaurant) { FactoryGirl.create(:restaurant) }

  it 'should calculate restaurant rating' do
    restaurant.reviews << FactoryGirl.create(:review, restaurant: restaurant, rating: 3)
    restaurant.reviews << FactoryGirl.create(:review, restaurant: restaurant, rating: 1)
    restaurant.reviews << FactoryGirl.create(:review, restaurant: restaurant, rating: 2)
    restaurant.reviews << FactoryGirl.create(:review, restaurant: restaurant, rating: 3)

    expect(restaurant.rating).to eq(2.25)
  end





end
