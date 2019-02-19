def fibonacci_recursive(n)
  if n == 1 || n == 2
    1
  else
    fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)
  end
end

# Memoisation
def fib_m(n)
  @results = @results || {}

  if @results[n]
    @results[n]
  elsif n == 1 || n == 2
    1
  else
    answer = fib_m(n - 1) + fib_m(n - 2)
    @results[n] = answer
    answer
  end

end

# Iterative recursion
def fib_r(n, a=1, b=1)
  if n == 1 || n == 2 # base case
    b
  else
    fib_r(n-1, b, a+b) # tail recursion
  end
end

fib_r(50)
# puts fibonacci_recursive(10) # => 55
require 'pry'
binding.pry

# Homework: write a fast recursive Fibonacci function.
