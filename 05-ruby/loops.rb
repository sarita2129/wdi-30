# while conditional
#   body
# end

# while true
#   print "OMG"
# end

# while runs while something is true
i = 0 # init
while i < 5 # conditional
  puts "i: #{ i }"
  i += 1 # update
end

# until runs while something is false
j = 0
until j == 5
  puts "j: #{ j }"
  j += 1
end

# Iterators ####################################################################
5.times do
  puts "omg"
end

5.times { puts "OmG" }

5.times do |i|
  puts "i: #{ i }"
end
