class TagsController < ApplicationController
   def new
      @bookmark = Bookmark.find(params[:id])
	  @tag = @bookmark.tags.build
   end
   def create
      @bookmark = Bookmark.find(params[:id])
      @tag = @bookmark.tags.build(params[:tag])
      if @tag.save
        redirect_to new_tag_path(:id => @bookmark.id)
      end		
   end
   def show
    render :json => Tag.find(params[:id])
   end
   def search
      @tags = Tag.where(:name => params[:query])
      @bookmarks = Array.new 
	  for item in @tags
	      @bookmark = Bookmark.find(item.bookmark_id)
          @bookmarks.push @bookmark		  
	  end
      render :json => @bookmarks  
   end
end
