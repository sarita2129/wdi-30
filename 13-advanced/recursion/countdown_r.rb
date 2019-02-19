def countdown_recursive(n=10) # initial value
  if n < 0 # Base case: end condition
    puts "Blast off!"
  else
    puts n
    sleep 1
    countdown_recursive(n - 1) # Move towards the base case
  end
end

require 'pry'
binding.pry
