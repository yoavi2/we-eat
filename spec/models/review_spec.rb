require 'rails_helper'

# Test suite for the Review model
RSpec.describe Review, type: :model do
  # Association test
  # ensure an item record belongs to a single todo record
  it { should belong_to(:restaurant).dependent(:destroy) }
  # Validation test
  # ensure column name is present before saving
  it { should validate_presence_of(:reviewer_name) }
end
