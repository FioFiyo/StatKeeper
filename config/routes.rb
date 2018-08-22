Rails.application.routes.draw do
  resources :users, except: [:index]
  resources :leagues
end
