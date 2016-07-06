module.exports = function() {
        return function(status) {
        var statusEnum = {
            true : "失效",
            false : "生效"
         
        };
        
        return statusEnum[status] || status;
    }

};