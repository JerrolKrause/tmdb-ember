import Ember from 'ember';

export default Ember.Route.extend({
	//Query parameters used by this route
	queryParams: {
		q : {
	      refreshModel: true
	    }
	},
	//Holds the data returned by the movie search API. Needs the query parameter of 'q'
	model(params) {
        var api = 'http://api.themoviedb.org/3/search/movie?api_key=42b3e60b6636f50062f6d3579100d83f&query='
    	return Ember.$.getJSON(api+encodeURIComponent(params.q)).then(function(data){
    		return data;
    	});
    },
	actions:{
		//Load Results from the search-box component
		loadResults:function(searchTerm){
			this.transitionTo('/search?q='+searchTerm);
			
		}
	}
});