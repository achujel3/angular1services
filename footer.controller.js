(function() {

    var app = angular.module("contactApp");
    app.controller("FooterCtrl", FooterCtrl);

    function FooterCtrl(AppDataServiceSvc) {
        this.appTitle = AppDataServiceSvc.name;
        this.builtDate = AppDataServiceSvc.builtDate;
    }

})();