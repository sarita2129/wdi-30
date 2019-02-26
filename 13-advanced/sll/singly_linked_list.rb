class SinglyLinkedList

  include Enumerable # Mixin: kind of like multiple inheritance

  class Node
    attr_accessor :value, :next

    def initialize(value)
      @value = value
      @next = nil
    end
  end

  attr_accessor :head
  def initialize(value=nil)
    @head = Node.new(value) unless value.nil?
  end

  def prepend(value) # AKA unshift
    node = Node.new value
    node.next = @head
    @head = node
  end

  def append(value) # AKA push
    last.next = Node.new value
  end

  def last
    node = @head
    while node && node.next
      node = node.next
    end
    node
  end

  def remove # AKA shift
    # TODO: Return nil when there are no nodes left
    node = @head
    @head = @head.next
    node.value
  end

  # TODO
  def insert_after(node, new_value)
  end

  # TODO
  def find(needle)
    # return the node with the value of needle, or nil
  end

  # TODO: tricky
  def reverse
    # return a new singly linked list with the nodes in reverse order
    reversed_list = SinglyLinkedList.new
    node = @head
    while node
      reversed_list.prepend(node.value)
      node = node.next
    end
    reversed_list
  end

  # TODO: trickier
  def reverse!
    @head = self.reverse.head
  end

  # TODO: tricky -- how do you accept/invoke a block
  def each
    node = @head
    while node
      yield(node.value) if block_given? # Javascripters would say we're executing a callback here.
      node = node.next
    end
  end

  # Also: .map, .reduce, .select, .reject etc
  # Bonus: .at_index(7) similar bros[7]
end

bros = SinglyLinkedList.new 'Groucho'
bros.append 'Harpo'
bros.append 'Chico'

# bros.each do |b|
#   puts b
# end

require 'pry'
binding.pry
