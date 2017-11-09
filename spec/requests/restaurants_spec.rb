require 'rails_helper'

RSpec.describe 'Restaurants API', type: :request do
  # initialize test data
  let!(:restaurants) {create_list(:restaurant, 10)}
  let(:restaurant_id) { restaurants.first.id }

  # Test suite for GET /restaurants.json
  describe 'GET /restaurants' do
    # make HTTP get request before each example
    before {get '/restaurants.json'}

    it 'returns restaurants' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for GET /restaurants/:id
  describe 'GET /restaurants/:id.json' do
    before { get "/restaurants/#{restaurant_id}.json" }

    context 'when the record exists' do
      it 'returns the restaurant' do
        puts json
        expect(json).not_to be_empty
        expect(json['id']).to eq(restaurant_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:restaurant_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find restaurants/)
      end
    end
  end

  # Test suite for POST /restaurants
  describe 'POST /restaurants' do
    # valid payload
    let(:valid_attributes) { { name: 'Restaurant1', address: 'There' } }

    context 'when the request is valid' do
      before { post '/restaurants', params: valid_attributes }

      it 'creates a restaurant' do
        expect(json['name']).to eq('Restaurant1')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/restaurants', params: { title: 'Restaurant2' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
            .to match(/Validation failed: Address can't be blank/)
      end
    end
  end

  # Test suite for PUT /restaurants/:id
  describe 'PUT /restaurants/:id' do
    let(:valid_attributes) { { name: 'New Name' } }

    context 'when the record exists' do
      before { put "/restaurants/#{restaurant_id}", params: valid_attributes }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  # Test suite for DELETE /restaurants/:id
  describe 'DELETE /restaurants/:id' do
    before { delete "/restaurants/#{restaurant_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end

end
