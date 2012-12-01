class Tag < ActiveRecord::Base
  belongs_to :bookmark
  attr_accessible :bookmark_id, :name
 
end
