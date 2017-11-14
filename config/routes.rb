Rails.application.routes.draw do
  resources :restaurants do
    resources :reviews
  end

  root 'restaurants#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
