/*****************************************************************************/
/* Search: Event Handlers */
/*****************************************************************************/
Template.search.events({
    'click #search': function (e, t) {
        search(e);
    },
    'keypress #search': function (e, t) {
		var q = $(e.target).val();
	    if ( (e.which === 13) || (q.length > 2) ) {
	        search(e);
	    }
    }
});

Template.search_layout.rendered = function () {
    var data = this.data;
    $('#search').val(data);
    // $('#search').click();
    // Session.set('query', data);
    $('#search').on('change', function (event) {
      console.log('change event!');
        var query = $(event.target).val();
        console.log('query', query );
        Router.go('/search/?q=' +  query );
        getSearchResultsFromApi(query);
    });
}

function search (e) {
	// var q = $(e.target).val();
    Tracker.autorun(function () {
        var q = Session.get('query');
        getSearchResultsFromApi(q);
    });
}

function getSearchResultsFromApi(query) {
    Meteor.call('searchTweets', query, function (error, response) {
        if (error) {
            console.log('Error in searchTweets client side', error);
        };
        var statuses = response.result.statuses;
        Session.set('statuses', statuses);
    });
}