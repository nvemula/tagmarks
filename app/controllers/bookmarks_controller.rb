class BookmarksController < ApplicationController
  def index
     render :json => Bookmark.all
  end
  def new
     @bookmark = Bookmark.new
  end
  def show
    render :json => Bookmark.find(params[:id])
  end
  def create
     @bookmark = Bookmark.new(params[:bookmark])
     if @bookmark.save
	    redirect_to bookmarks_path
	 end
  end
  def welcome
  end
end
