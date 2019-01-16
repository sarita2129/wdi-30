Artist.destroy_all # Clean up before we repopulate the database.
Artist.create :name => 'Arthur Boyd', :nationality => 'Australian', :dob => '1920/07/24', :period => 'Mid 20th Century', :image => 'https://media.artgallery.nsw.gov.au/uploads/artists/Arthur_Boyd_pvhaPKw.jpg'
# IRL, you might spend some time putting a handful of sample artists in here.
