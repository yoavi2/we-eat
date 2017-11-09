require 'rails_helper'

# Test suite for the Review model
RSpec.describe Restaurant, type: :model do
  # Association test
  it { should have_many(:reviews) }
  # Validation test
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:address) }





end
