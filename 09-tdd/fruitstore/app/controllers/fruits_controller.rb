class FruitsController < ApplicationController
  def index
    @fruits = Fruit.order('id DESC')

    respond_to do |format|
      format.html {} # This empty block means Rails should follow its default behaviour
      format.json { render :json => @fruits }
    end
  end
end
