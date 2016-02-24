"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('tmdb-search/app', ['exports', 'ember', 'tmdb-search/resolver', 'ember-load-initializers', 'tmdb-search/config/environment'], function (exports, _ember, _tmdbSearchResolver, _emberLoadInitializers, _tmdbSearchConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _tmdbSearchConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _tmdbSearchConfigEnvironment['default'].podModulePrefix,
    Resolver: _tmdbSearchResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _tmdbSearchConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;

  window.App = _ember['default'].Application.extend();
});
define('tmdb-search/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'tmdb-search/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _tmdbSearchConfigEnvironment) {

  var name = _tmdbSearchConfigEnvironment['default'].APP.name;
  var version = _tmdbSearchConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('tmdb-search/components/search-box', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		searchTerm: "", //Value from search inpuxbox
		submit: function submit(e) {
			//Pass the search term to the loadResults method on the search.js route
			this.sendAction('loadResults', this.get('searchTerm'));
			// To avoid page reload on event propagation
			e.preventDefault();
		}
	});
});
define('tmdb-search/components/search-output', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('tmdb-search/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('tmdb-search/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('tmdb-search/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('tmdb-search/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('tmdb-search/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'tmdb-search/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _tmdbSearchConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_tmdbSearchConfigEnvironment['default'].APP.name, _tmdbSearchConfigEnvironment['default'].APP.version)
  };
});
define('tmdb-search/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('tmdb-search/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('tmdb-search/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('tmdb-search/initializers/export-application-global', ['exports', 'ember', 'tmdb-search/config/environment'], function (exports, _ember, _tmdbSearchConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_tmdbSearchConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _tmdbSearchConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_tmdbSearchConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('tmdb-search/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('tmdb-search/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('tmdb-search/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("tmdb-search/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('tmdb-search/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('tmdb-search/router', ['exports', 'ember', 'tmdb-search/config/environment'], function (exports, _ember, _tmdbSearchConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _tmdbSearchConfigEnvironment['default'].locationType
  });

  //URL structure/mapping
  Router.map(function () {
    this.route('home', { path: '/' });
    this.route('about', { path: '/about' });
    this.route('favorites', { path: '/favs' });
    this.route('search', { path: '/search' });
  });

  exports['default'] = Router;
});
define('tmdb-search/routes/search', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		//Query parameters used by this route
		queryParams: {
			q: {
				refreshModel: true
			}
		},
		//Holds the data returned by the movie search API. Needs the query parameter of 'q'
		model: function model(params) {
			var api = 'http://api.themoviedb.org/3/search/movie?api_key=42b3e60b6636f50062f6d3579100d83f&query=';
			return _ember['default'].$.getJSON(api + encodeURIComponent(params.q)).then(function (data) {
				return data;
			});
		},
		actions: {
			//Load Results from the search-box component
			loadResults: function loadResults(searchTerm) {
				this.transitionTo('/search?q=' + searchTerm);
			}
		}
	});
});
define('tmdb-search/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("tmdb-search/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 10
          }
        },
        "moduleName": "tmdb-search/templates/about.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("About TMDb");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [5, 0], [5, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("tmdb-search/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 6
          }
        },
        "moduleName": "tmdb-search/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "ms-container");
        var el2 = dom.createTextNode("\n\n   ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "ms-header");
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "container");
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "/");
        dom.setAttribute(el4, "id", "logo");
        var el5 = dom.createTextNode("TMDB Home");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" \n<nav>\n  {{#link-to \"home\"}}Home{{/link-to}}\n  {{#link-to \"about\"}}About{{/link-to}}\n  {{#link-to \"favorites\"}}Favorites{{/link-to}}\n  {{#link-to \"search\"}}Search{{/link-to}}\n</nav>\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n            ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "ms-search");
        var el3 = dom.createTextNode("\n                 ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[1] = dom.createMorphAt(element0, 5, 5);
        return morphs;
      },
      statements: [["inline", "search-box", [], ["loadResults", "loadResults"], ["loc", [null, [20, 17], [20, 57]]]], ["content", "outlet", ["loc", [null, [25, 0], [25, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("tmdb-search/templates/components/search-box", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "tmdb-search/templates/components/search-box.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("form");
        var el2 = dom.createTextNode(" \n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "searchTerm", ["loc", [null, [2, 18], [2, 28]]]]], [], []], "id", "search", "type", "text", "placeholder", "Search for a movie, tv show, person..."], ["loc", [null, [2, 4], [2, 108]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("tmdb-search/templates/components/search-output", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 17
              },
              "end": {
                "line": 17,
                "column": 17
              }
            },
            "moduleName": "tmdb-search/templates/components/search-output.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("					            	");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'src');
            morphs[1] = dom.createAttrMorph(element0, 'alt');
            return morphs;
          },
          statements: [["attribute", "src", ["concat", ["http://image.tmdb.org/t/p/w154", ["get", "movie.poster_path", ["loc", [null, [16, 60], [16, 77]]]]]]], ["attribute", "alt", ["concat", [["get", "movie.original_title", ["loc", [null, [16, 88], [16, 108]]]]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 20
            },
            "end": {
              "line": 22,
              "column": 5
            }
          },
          "moduleName": "tmdb-search/templates/components/search-output.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("					");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "col-xs-12 col-sm-4 col-md-3 col-lg-3");
          var el2 = dom.createTextNode("\n					    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "ms-content-tile thumbnail");
          var el3 = dom.createTextNode("\n					        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "img");
          var el4 = dom.createTextNode("\n					            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "info");
          var el5 = dom.createTextNode("\n					                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("p");
          var el6 = dom.createElement("strong");
          var el7 = dom.createTextNode("Release Date:");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("br");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					                    ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					                ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					                ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("p");
          var el6 = dom.createElement("strong");
          var el7 = dom.createTextNode("User Rating:");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("br");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					                    ");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					                ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					            ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("					        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n					        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h2");
          var el4 = dom.createElement("a");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n					    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n					");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("  \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1, 1]);
          var element2 = dom.childAt(element1, [1]);
          var element3 = dom.childAt(element2, [1]);
          var element4 = dom.childAt(element1, [3, 0]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(dom.childAt(element3, [1]), 3, 3);
          morphs[1] = dom.createMorphAt(dom.childAt(element3, [3]), 3, 3);
          morphs[2] = dom.createMorphAt(element2, 3, 3);
          morphs[3] = dom.createAttrMorph(element4, 'href');
          morphs[4] = dom.createAttrMorph(element4, 'title');
          morphs[5] = dom.createMorphAt(element4, 0, 0);
          return morphs;
        },
        statements: [["content", "movie.release_date", ["loc", [null, [9, 25], [9, 47]]]], ["content", "movie.vote_average", ["loc", [null, [12, 25], [12, 47]]]], ["block", "if", [["get", "movie.poster_path", ["loc", [null, [15, 23], [15, 40]]]]], [], 0, null, ["loc", [null, [15, 17], [17, 24]]]], ["attribute", "href", ["concat", ["https://www.themoviedb.org/movie/", ["get", "movie.id", ["loc", [null, [19, 61], [19, 69]]]]]]], ["attribute", "title", ["concat", [["get", "movie.original_title", ["loc", [null, [19, 82], [19, 102]]]]]]], ["content", "movie.original_title", ["loc", [null, [19, 106], [19, 130]]]]],
        locals: ["movie"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 26
          }
        },
        "moduleName": "tmdb-search/templates/components/search-output.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  Search Output\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Movies output");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("                    \n                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" No results ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container ng-cloak");
        dom.setAttribute(el1, "ng-if", "noresults");
        var el2 = dom.createTextNode("\n                        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-md-12");
        var el3 = dom.createTextNode("\n                            ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("No Results Found");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                        ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.results", ["loc", [null, [3, 28], [3, 41]]]]], [], 0, null, ["loc", [null, [3, 20], [22, 14]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("tmdb-search/templates/favorites", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 10
          }
        },
        "moduleName": "tmdb-search/templates/favorites.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("Favorite Movies");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [4, 0], [4, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("tmdb-search/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "tmdb-search/templates/home.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Home");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [4, 0], [4, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("tmdb-search/templates/movie-search", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "tmdb-search/templates/movie-search.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("tmdb-search/templates/search", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 23,
                  "column": 24
                },
                "end": {
                  "line": 25,
                  "column": 24
                }
              },
              "moduleName": "tmdb-search/templates/search.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("img");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element0, 'src');
              morphs[1] = dom.createAttrMorph(element0, 'alt');
              return morphs;
            },
            statements: [["attribute", "src", ["concat", ["http://image.tmdb.org/t/p/w154", ["get", "movie.poster_path", ["loc", [null, [24, 66], [24, 83]]]]]]], ["attribute", "alt", ["concat", [["get", "movie.original_title", ["loc", [null, [24, 94], [24, 114]]]]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 12
              },
              "end": {
                "line": 30,
                "column": 12
              }
            },
            "moduleName": "tmdb-search/templates/search.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-xs-12 col-sm-4 col-md-3 col-lg-3");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "ms-content-tile thumbnail");
            var el3 = dom.createTextNode("\n                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "img");
            var el4 = dom.createTextNode("\n                        ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "info");
            var el5 = dom.createTextNode("\n                            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("p");
            var el6 = dom.createElement("strong");
            var el7 = dom.createTextNode("Release Date:");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("br");
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode("\n                                ");
            dom.appendChild(el5, el6);
            var el6 = dom.createComment("");
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode("\n                            ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n                            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("p");
            var el6 = dom.createElement("strong");
            var el7 = dom.createTextNode("User Rating:");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("br");
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode("\n                                ");
            dom.appendChild(el5, el6);
            var el6 = dom.createComment("");
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode("\n                            ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n                        ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n");
            dom.appendChild(el3, el4);
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("                    ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("h2");
            var el4 = dom.createElement("a");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("  \n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1, 1]);
            var element2 = dom.childAt(element1, [1]);
            var element3 = dom.childAt(element2, [1]);
            var element4 = dom.childAt(element1, [3, 0]);
            var morphs = new Array(6);
            morphs[0] = dom.createMorphAt(dom.childAt(element3, [1]), 3, 3);
            morphs[1] = dom.createMorphAt(dom.childAt(element3, [3]), 3, 3);
            morphs[2] = dom.createMorphAt(element2, 3, 3);
            morphs[3] = dom.createAttrMorph(element4, 'href');
            morphs[4] = dom.createAttrMorph(element4, 'title');
            morphs[5] = dom.createMorphAt(element4, 0, 0);
            return morphs;
          },
          statements: [["content", "movie.release_date", ["loc", [null, [17, 32], [17, 54]]]], ["content", "movie.vote_average", ["loc", [null, [20, 32], [20, 54]]]], ["block", "if", [["get", "movie.poster_path", ["loc", [null, [23, 30], [23, 47]]]]], [], 0, null, ["loc", [null, [23, 24], [25, 31]]]], ["attribute", "href", ["concat", ["https://www.themoviedb.org/movie/", ["get", "movie.id", ["loc", [null, [27, 68], [27, 76]]]]]]], ["attribute", "title", ["concat", [["get", "movie.original_title", ["loc", [null, [27, 89], [27, 109]]]]]]], ["content", "movie.original_title", ["loc", [null, [27, 113], [27, 137]]]]],
          locals: ["movie"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 8
            },
            "end": {
              "line": 31,
              "column": 8
            }
          },
          "moduleName": "tmdb-search/templates/search.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment(" Movies output");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.results", ["loc", [null, [11, 20], [11, 33]]]]], [], 0, null, ["loc", [null, [11, 12], [30, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 46,
            "column": 10
          }
        },
        "moduleName": "tmdb-search/templates/search.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Search Results");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" Main Content");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "ms-content");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" No results \n{{#unless model.results}}\n            <div class=\"container\">\n                <div class=\"col-md-12\">\n                    <h2>No Results Found</h2>\n                </div>\n            </div>\n        {{/unless}}        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 3]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "model.results", ["loc", [null, [9, 14], [9, 27]]]]], [], 0, null, ["loc", [null, [9, 8], [31, 15]]]], ["content", "outlet", ["loc", [null, [46, 0], [46, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('tmdb-search/config/environment', ['ember'], function(Ember) {
  var prefix = 'tmdb-search';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("tmdb-search/app")["default"].create({"name":"tmdb-search","version":"0.0.0+098f68eb"});
}

/* jshint ignore:end */
//# sourceMappingURL=tmdb-search.map