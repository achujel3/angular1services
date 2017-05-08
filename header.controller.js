(function() {

    var app = angular.module("contactApp");
    app.controller("HeaderCtrl", HeaderCtrl);


    function HeaderCtrl(AppNameSvc) {
        this.appTitle = AppNameSvc;
    }

})();