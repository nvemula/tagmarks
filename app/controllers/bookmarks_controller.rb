class BookmarksController < ApplicationController
  def index
     @bookmarks = Bookmark.all
  end
  def new
     @bookmark = Bookmark.new
  end
  def create
     @bookmark = Bookmark.new(params[:bookmark])
     if @bookmark.save
	    redirect_to bookmarks_path
	 end
  end
end
