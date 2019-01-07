require 'pry'

# binding.pry

def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[q] - quit"
  print "Enter your selection: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    # get numbers a, b
    # add(a, b)
    puts "Addition coming soon"
  else
    puts "Invalid selection"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy calculator"
