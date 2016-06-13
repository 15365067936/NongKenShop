module.exports = function($http) {
    var allowedMethods = ["get", "post", "del", "put"];
    var restService = {};

    restService.http = function(url, params, method, callback) {
        if (!url) {
            throw new Exception('The URL must be provided.');
        }

        $http[method](url, params).success(function(data) {
            callback(data);
        }).error(function() {
            console.log("ajax error!")
        });
    };

    return restService;

};