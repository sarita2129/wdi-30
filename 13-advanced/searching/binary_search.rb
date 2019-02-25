a = Array.new(100) { rand(1..1000) }.sort.uniq

def binary_search(haystack, needle)
  # return the index of needle within the haystack array
  # or nil if needle is not found

  # your code goes here
end

puts binary_search(a, 15)
