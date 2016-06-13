module.exports = function() {
        return function(status) {
        var statusEnum = {
            1 : "运营人员",
            0 : "管理员"
         
        };
        
        return statusEnum[status] || status;
    }

};