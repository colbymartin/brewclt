(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('BrewCLT', ['ui.router']);

const controllers = [
    require('./controllers/main'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
};

const breweryService = require('./services/breweries');
app.factory(breweryService.name, breweryService.func);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state({
        name: 'home',
        url: '/home',
        component: 'homePage',
    });

    $stateProvider.state({
        name: 'breweries',
        url: '/breweries',
        component: 'breweriesPage',
    });

    $stateProvider.state({
        name: 'map',
        url: '/map',
        component: 'mapPage',
    });

});

app.component('homePage', {
    templateUrl: 'templates/home.html',
    controller: 'MainController',
});

app.component('news', {
    templateUrl: 'templates/news.html',
    controller: 'MainController',
});

app.component('articles', {
    templateUrl: 'templates/articles.html',
    controller: 'MainController',
});

app.component('monthly', {
    templateUrl: 'templates/monthly.html',
    controller: 'MainController',
});

app.component('breweriesPage', {
    templateUrl: 'templates/breweries.html',
    controller: 'MainController',
});

app.component('mapPage', {
    templateUrl: 'templates/map.html',
    controller: 'MainController',
});

app.component('header', {
    templateUrl: 'templates/header.html',
    controller: 'MainController',
});

app.component('footer', {
    templateUrl: 'templates/footer.html',
    controller: 'MainController',
});

app.component('about', {
    templateUrl: 'templates/about.html',
    controller: 'MainController',
});

app.component('social', {
    templateUrl: 'templates/social.html',
    controller: 'MainController',
});

app.component('social', {
    templateUrl: 'templates/social.html',
    controller: 'MainController',
});
},{"./controllers/main":2,"./services/breweries":3}],2:[function(require,module,exports){
module.exports = {
    name: 'MainController',
    func: function ($scope, $stateParams, BreweryService) {

    },
};
},{}],3:[function(require,module,exports){
module.exports = {
    name: 'BreweryService',
    func: function ($http) {

        return {


        }
    }
}
},{}]},{},[1]);
