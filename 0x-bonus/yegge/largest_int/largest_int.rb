a = Array.new(1000) { rand(1..1000) }
# Find the largest int value in an int array.

# Straightfoward with iteration
def largest(integers)
  max = -1.0 / 0.0 # Negative Infinity

  integers.each do |n|
    max = n if n > max
  end

  max
end

puts a.max
puts largest(a)

# Reduce / Inject
# Recursion
