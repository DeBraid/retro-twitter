Template.stream_container.helpers({
	stream: function () {
		var data = Session.get('stream');
		console.log('stream', data);
		return data;
	}
});

// getFollowerStreamResultsFromApi('royal_arse');
// *************************** //