 $(function() {
                var Bookmark = Backbone.Model.extend();

                var BookmarkList = Backbone.Collection.extend({
                    model: Bookmark,
                    url: '/bookmarks/'
                });   

                var BookmarkView = Backbone.View.extend({
                    el: "#bookmarks",
                    template: _.template($('#bookmarkTemplate').html()),
                    render: function(eventName) {
                        _.each(this.model.models, function(bookmark){
                            var bookmarkTemplate = this.template(bookmark.toJSON());
                            $(this.el).append(bookmarkTemplate);
                        }, this);

                        return this;
                    }
                });

				var AppView = Backbone.View.extend({
   el: "body",
   initialize: function() {
                      var bookmarks = new BookmarkList();    
                var bookmarksView = new BookmarkView({model: bookmarks});
bookmarks.bind('reset', function () {
                    bookmarksView.render();
                });
      

bookmarks.fetch();
   }
 });
                
                var App = new AppView();
                var SearchView = Backbone.View.extend({
                    el: "#bookmarkresults",
                    template: _.template($('#bookmarkTemplate').html()),
                    render: function(eventName) {
                        _.each(this.model.models, function(bookmark){
                            var bookmarkTemplate = this.template(bookmark.toJSON());
                            $(this.el).html("Results" + bookmarkTemplate);
                        }, this);

                        return this;
                    }
                });
				
				var SearchList = Backbone.Collection.extend({
                    model: Bookmark,
                    url: '/search/'
                }); 
				
				var MyFormView = Backbone.View.extend({
  events: {
    "submit form": "formHandler"
  },
  formHandler: function(evt) {
    evt.preventDefault();
    var searchVal = $('#search').val();
	var sresults = new SearchList();
	sresults.url = '/search/'+searchVal
    sresults.fetch();
var resultsView = new SearchView({model: sresults});
sresults.bind('reset', function () {
                    resultsView.render();
                });
                
	

   
  }
});
  
  
  
  
  var myForm = new MyFormView({el: "#my-app"});

            });
