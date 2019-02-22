require 'sinatra'
require 'sinatra/reloader'

puts "Please run the following command in another terminal"
puts "sudo nmap -Pn -sS -oA scan -p 80 -iR 0 -vvv --open"

get '/' do
  scanlog = File.open 'scan.gnmap'

  @hosts = [] # IP addresses

  scanlog.each do |line|
    next if line =~ /^#/ # ^ is an anchor for the start of the line.

    m = line.match /Host: ([0-9.]+)/ # Capture the dotted quad IP address
    @hosts << m[1] # m[1] is the first parenthesised/captured group
  end

  @hosts.uniq!

  erb :results
end
