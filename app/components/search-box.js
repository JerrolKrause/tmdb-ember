import Ember from 'ember';

export default Ember.Component.extend({
	//Value from search input box
	searchTerm : "", 
        //On search form submit
	submit: function(e) {
		//Pass the search term to the loadResults method on the search.js route
		this.sendAction('loadResults', this.get('searchTerm'));
		// To avoid page reload on event propagation
	    e.preventDefault(); 
	  }
});
