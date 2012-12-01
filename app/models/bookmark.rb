class Bookmark < ActiveRecord::Base
  has_many :tags
  attr_accessible :url
end
