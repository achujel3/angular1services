(function() {
    var app = angular.module("contactApp");



    app.service("AppDataServiceSvc", function(AppNameSvc) {
        this.name = AppNameSvc;
        this.builtDate = new Date().toDateString();
    });
})();