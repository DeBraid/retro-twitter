SearchController = RouteController.extend({
  action: function () {
    var vm = this;
    var params = vm.getParams();
    var q = params.query.q;
    
    // $('#search').on('change', function (event) {
    //   console.log('change event!');
    //     var query = $(event.target).val();
    //     console.log('query', query );
    //     Router.go('search', { q : query });
    // });

    vm.render('search_layout', {   
        data: function renderSearchData () {
            return q;
        } 
    });
  }
});
