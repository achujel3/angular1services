(function() {

    var app = angular.module("contactApp");
    app.controller("ContactCtrl", ContactCtrl);

    function ContactCtrl(ContactDataSvc, $http) {
        var self = this;
        self.editMode = false;
        ContactDataSvc.getContacts()
            .then(function(data) {
                self.contacts = data;
            });

        this.selectContact = function(index) {
            this.selectedContact = this.contacts[index];
            self.successMessage = undefined;
            self.errorMessage = undefined;
        }

        this.toggleEditMode = function() {
            this.editMode = !self.editMode;
        }

        this.saveUser = function() {
            this.toggleEditMode();
            var userData = this.selectedContact;

            if (this.addMode) {
                ContactDataSvc.createUser(userData)
                    .then(function() {
                            self.successMessage = "This USER has been updated!";
                        },
                        function() {
                            self.errorMessage = "Error!";
                        });
                self.addMode = false;
            } else {
                ContactDataSvc.saveUser(userData)
                    .then(function() {
                            self.successMessage = "This USER has been updated!";
                        },
                        function() {
                            self.errorMessage = "Error!";
                        });
            }

        }

        this.addContact = function() {
            self.addMode = true;
            this.selectedContact = {
                "id": new Date().toTimeString()
            }
            this.editMode = true;
        }
    }
})();