require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX - Show all butterflies
get '/butterflies' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  @butterflies = db.execute "SELECT * FROM butterflies"
  db.close
  erb :butterflies_index
end

# NEW - Form for adding a new butterfly
get '/butterflies/new' do
  erb :butterflies_new
end

# CREATE - Add a new butterfly to the collection of butterflies
post '/butterflies' do
  db = SQLite3::Database.new 'database.sqlite3'
  query = "INSERT INTO butterflies (name, family, image) VALUES ('#{params["name"]}', '#{params["family"]}', '#{params["image"]}')"
  db.execute query
  db.close
  redirect to('/butterflies') # Redirect will make a GET request
end

# SHOW - Show a single butterfly, based on its ID
get '/butterflies/:id' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  @butterfly = db.execute "SELECT * FROM butterflies WHERE id=#{params[:id]}"
  @butterfly = @butterfly.first # Pluck the single butterfly from the results array.
  db.close
  erb :butterflies_show
end
