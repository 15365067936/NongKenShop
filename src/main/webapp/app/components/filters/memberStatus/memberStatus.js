module.exports = function() {
        return function(status) {
        var statusEnum = {
            1 : "已关注",
            2 : "已冻结",
            4 : "未关注"
        };
        
        return statusEnum[status] || status;
    }

};