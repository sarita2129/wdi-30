class PagesController < ApplicationController
  def home
  end

  def hamldemo
    @number = Random.rand(50)
  end
end
