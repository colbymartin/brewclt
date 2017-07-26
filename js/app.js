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