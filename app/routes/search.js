import Ember from 'ember';

export default Ember.Route.extend({

    //Query parameters used by this route
    queryParams: {
        q: {
            refreshModel: true
        }
    },

    //Holds the data returned by the movie search API. Needs the query parameter of 'q'
    model(params) {
        var model = {

            //Search term in the query parameters
            searchTerm: params.q,
            //Determine if we have valid results
            hasResults: Ember.computed(function() {
                if (this.movies && this.movies.total_results === 0) {
                    return true;
                } else {
                    return false;
                }
            }),

            //Determine if we have valid results
            validResults: Ember.computed(function() {
                if (this.movies && this.movies.total_results > 0) {
                    return true;
                } else {
                    return false;
                }
            }),

            //Holds the movies JSON sent by the API
            movies: (function() {
                //Make sure the search query parameter has been set
                if (params.q) {
                    //If set, fetch movie results
                    return Ember.$.getJSON('http://api.themoviedb.org/3/search/movie?api_key=42b3e60b6636f50062f6d3579100d83f&query=' + encodeURIComponent(params.q)).then(function(data) {
                        return data;
                    });
                }
            })()
        };
        return Ember.RSVP.hash(model);
    },
    
    actions: {
        //When the search form action bubbles up, change the state to include the search term in the URL
        loadResults: function(searchTerm) {
            this.transitionTo('/search?q=' + searchTerm);
        }
    }
});