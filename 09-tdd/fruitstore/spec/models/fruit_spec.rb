require 'rails_helper'

RSpec.describe Fruit, type: :model do
  describe "an apple" do
    before do
      @apple = Fruit.new
    end

    it "should not be squishy" do
      expect(@apple.squishy?).to be false
    end
  end

  describe "a pear" do
    before do
      @pear = Fruit.new
    end

    it "should be kind of squishy" do
      expect(@pear.squishy?).to be true
    end
  end
end
