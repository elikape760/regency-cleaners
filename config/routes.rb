Rails.application.routes.draw do
  
  resources :contacts, only: [:create, :index]
  resources :testimonials
  resources :carts, only: [:index]
  resources :items, only: [:index, :show]
  resources :users

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to:"users#show"
  
end
