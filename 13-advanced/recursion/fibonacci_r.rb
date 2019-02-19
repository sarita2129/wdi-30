def fibonacci_recursive(n)
  if n == 1 || n == 2
    1
  else
    fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)
  end
end

# puts fibonacci_recursive(10) # => 55
require 'pry'
binding.pry

# Homework: write a fast recursive Fibonacci function.
