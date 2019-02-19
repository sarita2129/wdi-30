def countdown_iterative(n=10) # initial value
  while n >= 0 # end condition
    puts n
    n -= 1 # mutation: move towards the end condition
    sleep 1
  end

  puts "Blast off!!"
end

require 'pry'
binding.pry
