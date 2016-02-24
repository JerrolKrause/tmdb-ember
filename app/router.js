import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

//URL structure/mapping
Router.map(function() {
  this.route('home', { path: '/' });
  this.route('about', { path: '/about' });
  this.route('favorites', { path: '/favs' });
  this.route('search', { path: '/search' });
});


export default Router;
