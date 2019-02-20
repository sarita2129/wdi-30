# def sum_integers(filename)
#   sum = 0
#   file = File.new filename
#   file.each_line { |line| sum += line.to_i }
#   sum
# end

def sum_integers(filename)
  File.readlines(filename).map(&:to_i).inject(&:+) # Symbol to proc
  # File.readlines(filename).map { |n| n.to_i }.inject { |acc, n| acc + n }
end

puts sum_integers('integers.txt')

# require 'pry'
# puts "you still have pry in your code"
# binding.pry
