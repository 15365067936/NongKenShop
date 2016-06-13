module.exports = function() {
    var utils = {};
    utils.randomString = function (len) {
        len = len || 32;
        var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        var maxPos = chars.length;
        var str = '';
        for (i = 0; i < len; i++) {
            str += chars.charAt(Math.floor(Math.random() * maxPos));
        }

        return str;
    }

    return utils;
};