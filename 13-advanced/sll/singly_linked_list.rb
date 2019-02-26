class SinglyLinkedList
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
  end

  # TODO: trickier
  def reverse!
    # destructive reverse
  end

  # TODO: tricky -- how do you accept/invoke a block
  def each
  end

  # Also: .map, .reduce, .select, .reject etc
  # Bonus: .at_index(7) similar bros[7]
end

bros = SinglyLinkedList.new 'Groucho'
bros.append 'Harpo'
bros.append 'Chico'

require 'pry'
binding.pry
