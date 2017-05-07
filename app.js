var app = angular.module("contactApp", []);
app.controller("ContactCtrl", ContactCtrl);

app.controller("HeaderCtrl", HeaderCtrl);
app.controller("FooterCtrl", FooterCtrl);

app.value("AppNameSvc", "This is an app name");

function prepareAppConfig(AppNameSvc) {
    var value = {};
    value.name = AppNameSvc;
    value.builtDate = new Date().toDateString();
    return value;
};

app.factory("AppDataFactorySvc", prepareAppConfig);

function ContactCtrl() {
    this.contacts = [{
            "gender": "female",
            "name": {
                "title": "miss",
                "first": "emmy",
                "last": "lefebvre"
            },
            "location": { "street": "1201 rue des cuirassiers", "city": "rueil-malmaison", "state": "bouches-du-rhône", "postcode": 20752 },
            "email": "emmy.lefebvre@example.com",
            "login": { "username": "blackleopard438", "password": "avenue", "salt": "nUTSnXwn", "md5": "f2c175b3f15c7465fdfd23535594dd8f", "sha1": "28d311417a2ce3cef0cef3adc22b2b067cb6a2d3", "sha256": "93e3e898ae88f6b83884bb9e656fab4a8f46eebfb43881b3ee45e3ab2ce73706" },
            "dob": "1988-09-17 03:17:56",
            "registered": "2015-01-19 08:49:28",
            "phone": "02-07-37-90-78",
            "cell": "06-16-79-97-87",
            "id": { "name": "INSEE", "value": "288890215060 30" },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/36.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/36.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/36.jpg"
            },
            "nat": "FR"
        },
        {
            "gender": "male",
            "name": { "title": "mr", "first": "bradley", "last": "hanson" },
            "location": { "street": "8274 park avenue", "city": "portsmouth", "state": "cheshire", "postcode": "J6 9WB" },
            "email": "bradley.hanson@example.com",
            "login": { "username": "beautifulrabbit827", "password": "hardy", "salt": "eHMToiug", "md5": "4ab9307a8ce7928e33816ba83aa391cf", "sha1": "77ddd0b9b8c00315cde6a58262544e200190fe85", "sha256": "be1edde7b9d6898ad9d96c5218550f6a42ddee627eaf50a17e957cc81aaabe81" },
            "dob": "1960-08-09 00:38:49",
            "registered": "2010-09-05 13:02:49",
            "phone": "015395 20111",
            "cell": "0798-972-024",
            "id": { "name": "NINO", "value": "BC 84 86 19 P" },
            "picture": { "large": "https://randomuser.me/api/portraits/men/96.jpg", "medium": "https://randomuser.me/api/portraits/med/men/96.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/96.jpg" },
            "nat": "GB"
        },
        {
            "gender": "female",
            "name": { "title": "miss", "first": "ava", "last": "liu" },
            "location": { "street": "1112 dundas rd", "city": "cochrane", "state": "ontario", "postcode": 43469 },
            "email": "ava.liu@example.com",
            "login": { "username": "redrabbit303", "password": "flash1", "salt": "Ib9cvGrM", "md5": "3ba0ecf0cde737fa09ec3450c12b15d3", "sha1": "632fcea1c25409328bce0da88e7e824b9cc7c370", "sha256": "2217e7b005bc6f3a8a696113eb260ea15feb4a7a301e0d17391c9bc388622fa6" },
            "dob": "1953-05-14 13:34:45",
            "registered": "2012-01-17 06:50:26",
            "phone": "376-746-9530",
            "cell": "124-957-8988",
            "id": { "name": "", "value": null },
            "picture": { "large": "https://randomuser.me/api/portraits/women/67.jpg", "medium": "https://randomuser.me/api/portraits/med/women/67.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/67.jpg" },
            "nat": "CA"
        },
        {
            "gender": "male",
            "name": { "title": "mr", "first": "torben", "last": "link" },
            "location": { "street": "8609 wiesenstraße", "city": "aurich", "state": "baden-württemberg", "postcode": 40723 },
            "email": "torben.link@example.com",
            "login": { "username": "lazybird155", "password": "sanity", "salt": "TCqeq1fm", "md5": "8f4268aaf75f226012bda69f99aced22", "sha1": "e4536973545fb9cf0a70561320b5426d9beaebd1", "sha256": "70001d1027bea402085558cb7d9d69fa40f9ecd4d94383475c73cef39b62efc1" },
            "dob": "1995-08-09 01:59:12",
            "registered": "2014-03-10 09:08:11",
            "phone": "0416-9826468",
            "cell": "0173-4789373",
            "id": { "name": "", "value": null },
            "picture": { "large": "https://randomuser.me/api/portraits/men/96.jpg", "medium": "https://randomuser.me/api/portraits/med/men/96.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/96.jpg" },
            "nat": "DE"
        },
        {
            "gender": "female",
            "name": { "title": "miss", "first": "scarlett", "last": "campbell" },
            "location": { "street": "2665 school lane", "city": "arklow", "state": "laois", "postcode": 96563 },
            "email": "scarlett.campbell@example.com",
            "login": { "username": "ticklishbutterfly711", "password": "homemade", "salt": "dowDnCGA", "md5": "80d61303c6e6a77515128b9a593a9c8a", "sha1": "2eb68f74ed65882e56b54d8711add9c1aedf7195", "sha256": "cffa3887fdb3b97639e07410f834d1ecf7e9f09c0627358f85cf4de2ae2933d7" },
            "dob": "1976-12-30 08:14:19",
            "registered": "2009-11-18 15:14:52",
            "phone": "031-772-9352",
            "cell": "081-171-1979",
            "id": { "name": "PPS", "value": "0245941T" },
            "picture": { "large": "https://randomuser.me/api/portraits/women/86.jpg", "medium": "https://randomuser.me/api/portraits/med/women/86.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/86.jpg" },
            "nat": "IE"
        },
        {
            "gender": "female",
            "name": { "title": "mrs", "first": "asta", "last": "møller" },
            "location": { "street": "6404 helgesvej", "city": "hornbæk", "state": "sjælland", "postcode": 23577 },
            "email": "asta.møller@example.com",
            "login": { "username": "greenbear405", "password": "credit", "salt": "9Ff5h04o", "md5": "522e3f02b30c3a4d241b841a32257798", "sha1": "c3120c359943ada7ded87611a9fb51beea223d58", "sha256": "04b485abf9bf6b0f7492bdba2ce0cbd6b7d0910017187baa77c2773112986a8d" },
            "dob": "1981-12-11 17:37:44",
            "registered": "2012-09-20 23:56:57",
            "phone": "01266916",
            "cell": "01964915",
            "id": { "name": "CPR", "value": "869832-3500" },
            "picture": { "large": "https://randomuser.me/api/portraits/women/68.jpg", "medium": "https://randomuser.me/api/portraits/med/women/68.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/68.jpg" },
            "nat": "DK"
        },
        {
            "gender": "male",
            "name": { "title": "mr", "first": "ronald", "last": "watson" },
            "location": { "street": "2390 depaul dr", "city": "surprise", "state": "oklahoma", "postcode": 52527 },
            "email": "ronald.watson@example.com",
            "login": { "username": "heavybutterfly121", "password": "lovebug", "salt": "UHfkLQUk", "md5": "a047d4b3f2bfe482041f847d69d9da95", "sha1": "f8dd5186dac7ce9a62ab5f02102d524c39ea0099", "sha256": "a15f7efe113c868831a2ee4259ae9bae1446f14a74439b0546794f68c204f929" },
            "dob": "1952-02-13 14:08:17",
            "registered": "2011-10-19 23:38:44",
            "phone": "(297)-159-8323",
            "cell": "(330)-488-4515",
            "id": { "name": "SSN", "value": "376-03-0514" },
            "picture": { "large": "https://randomuser.me/api/portraits/men/68.jpg", "medium": "https://randomuser.me/api/portraits/med/men/68.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/68.jpg" },
            "nat": "US"
        },
        {
            "gender": "male",
            "name": { "title": "mr", "first": "wade", "last": "williamson" },
            "location": { "street": "3131 dogwood ave", "city": "billings", "state": "delaware", "postcode": 98984 },
            "email": "wade.williamson@example.com",
            "login": { "username": "heavygorilla545", "password": "kswbdu", "salt": "FgiKKlzO", "md5": "0259009de9ef6874d197a33286c22b05", "sha1": "2a001ddad417311c3d2907bd14c0ab8edd9a5ba0", "sha256": "826906d482ba59d753b5d64dac2642cc39c3e6a63cdf5ccae5cb9e283d450805" },
            "dob": "1946-09-30 15:47:43",
            "registered": "2004-09-26 04:07:25",
            "phone": "(990)-253-5876",
            "cell": "(236)-923-7065",
            "id": { "name": "SSN", "value": "575-44-1417" },
            "picture": { "large": "https://randomuser.me/api/portraits/men/38.jpg", "medium": "https://randomuser.me/api/portraits/med/men/38.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/38.jpg" },
            "nat": "US"
        },
        {
            "gender": "female",
            "name": { "title": "ms", "first": "viivi", "last": "palo" },
            "location": { "street": "7654 tahmelantie", "city": "ruovesi", "state": "northern savonia", "postcode": 22876 },
            "email": "viivi.palo@example.com",
            "login": { "username": "blacklion929", "password": "nimitz", "salt": "PmaeqFcR", "md5": "ea863f8a6fa0c922648f6ee858b948d5", "sha1": "407a159b71a1797f4ed7cfc141524669d747e32f", "sha256": "d64a3dec3235d4fb271f14197cb2152497bed2c5081993dae3c5dfafc1152b5d" },
            "dob": "1991-12-24 03:21:06",
            "registered": "2010-09-05 02:30:01",
            "phone": "09-609-885",
            "cell": "045-724-75-38",
            "id": { "name": "HETU", "value": "1391-142J" },
            "picture": { "large": "https://randomuser.me/api/portraits/women/40.jpg", "medium": "https://randomuser.me/api/portraits/med/women/40.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/40.jpg" },
            "nat": "FI"
        },
        {
            "gender": "female",
            "name": { "title": "miss", "first": "ida", "last": "poulsen" },
            "location": { "street": "9693 engdraget", "city": "jystrup", "state": "danmark", "postcode": 24771 },
            "email": "ida.poulsen@example.com",
            "login": { "username": "greenkoala728", "password": "england", "salt": "G1L6YCT2", "md5": "886d2e965b93714f6684d61bcddc73a5", "sha1": "3884176df5fea04bccacdc8cb6744f8dd1741645", "sha256": "89dcba68c23e843603adaf470269d59c0e3b16992a61d493944b1ebd0ccebd07" },
            "dob": "1956-12-29 22:48:10",
            "registered": "2003-04-11 03:10:26",
            "phone": "77955982",
            "cell": "20629312",
            "id": { "name": "CPR", "value": "725307-1463" },
            "picture": { "large": "https://randomuser.me/api/portraits/women/30.jpg", "medium": "https://randomuser.me/api/portraits/med/women/30.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/30.jpg" },
            "nat": "DK"
        }
    ];
    this.selectContact = function(index) {
        this.selectedContact = this.contacts[index];
    }
}

function HeaderCtrl(AppDataFactorySvc) {
    this.appTitle = AppDataFactorySvc.name;
}

function FooterCtrl(AppDataFactorySvc) {
    this.appTitle = AppDataFactorySvc.name;
    this.builtDate = AppDataFactorySvc.builtDate;
}