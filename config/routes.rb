Rails.application.routes.draw do
  root to: 'pages#index'
  get "/auth/:provider/callback" => "authentications#create"

  resources :items
  post '/items/populate' => 'items#populate'
  get '/logout' => 'authentications#logout'
end
