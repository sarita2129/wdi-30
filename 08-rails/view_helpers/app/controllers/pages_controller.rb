class PagesController < ApplicationController
  def home
    # Take advantage of implicit rendering -- a view with the same name
  end

  def numbers
    @amount = 9234.248
    @large_number = 234834873483
    @phone = 2125551212
  end

  def text
    @numbers = (1..20).to_a
    @friend_count = 1
    @enemy_count = 2
    @story = "A very very very very very very very long time ago in a galaxy far far far far far away" * 80
  end

  def assets
  end

  def url
  end
end
