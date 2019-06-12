Rails.application.routes.draw do
  devise_for :users
  root 'welcome#index'
  resources :users,only: [:show]
  resources :rooms, only: [:index,:create] do
    resources :puzzles,only: [:index,:update]
    namespace :api do
      resources :puzzles,only: [:index], defaults: { format: 'json' }
    end
  end
end