def print_odd_numbers(upper=99)

  # (2..99).each do |n|
  #   puts n if n.odd?
  # end

  # puts 3.step(99, 2).to_a.join("\n")

  # puts (1..99).to_a.select(&:odd).join("\n")

  3.step(99, 2).each { |n| puts n }

end

print_odd_numbers()

def print_odd_numbers_r(bound=99, n=3)
  if n <= bound
    puts n
    print_odd_numbers_r(bound, n+2)
  end
end

# print_odd_numbers_r()
