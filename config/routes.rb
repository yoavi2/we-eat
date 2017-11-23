Rails.application.routes.draw do

  get '/restaurants/new', to: 'restaurants#index'
  get 'new', to: 'restaurants#index'

  resources :restaurants, except: :new do
    resources :reviews
  end

  root 'restaurants#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
