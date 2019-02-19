def factorial_recursive(n)
  if n > 1
    n * factorial_recursive(n - 1) # move closer to the base case
  else
    1 # Base case
  end
end

require 'pry'
binding.pry
