Rails.application.routes.draw do
  # A wonderful mystery about routes will be revealed tomorrow
  get '/planets' => 'planets#index'
  get '/planets/new' => 'planets#new'
  post '/planets' => 'planets#create'
  get '/planets/:id' => 'planets#show', :as => 'planet'
  get '/planets/:id/edit' => 'planets#edit', :as => 'planet_edit'
  post '/planets/:id' => 'planets#update'
end
