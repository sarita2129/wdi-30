require 'pry'

class MarxBrother
  attr_accessor :name, :instrument, :vice # Macro - writes the getter and setter for you.

  def initialize(n='', i='voice', v='')
    @name = n
    @instrument = i
    @vice = v
  end

  def perform
    "My name is #{ @name } and I play the #{ @instrument }"
  end
end

# groucho = MarxBrother.new('Groucho', 'guitar', 'vice') # Creates an instance object

binding.pry
