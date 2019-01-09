require 'sinatra'
require 'sinatra/reloader'
# NB: Server restart still necessary if you add a new `require`
require 'pry'

# DSL - Domain Specific Language

get '/hello' do
  "Hello world from Sinatra!!!"
end

get '/lucky_number' do
  "Here is your lucky number #{ rand 1..40 }"
end

get '/uptime' do
  "The server uptime is #{ `uptime` }"
end

# Dynamic paths
get '/fanclub/:name' do
  "#{ params[:name].capitalize } is a proud member of the Marx Brothers fan club."
end

get '/fanclub/:first/:last' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a proud member of the Marx Brothers fan club."
end

get '/fanclub/:first/:last/:favourite' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a proud member of the Marx Brothers fan club. Favourite Marx Brother: #{ params[:favourite].capitalize }"
end

# Crappy Calculator
get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is #{ result }"
end

# Significant problems
# 1. Where is the HTML?
# 2. How do we get information from the user without making them rewrite the URL?
