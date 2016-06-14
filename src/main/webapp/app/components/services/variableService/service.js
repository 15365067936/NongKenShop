module.exports = function($rootScope, $window) {
    var variableService = {};

    // var channelList = ['QYweixin', 'Alipay', 'FWweixin', 'QQ'];
    var channelList = [
        {title: '微信企业号', id: 'QYweixin'},
        {title: '支付宝', id: 'Alipay'},
        {title: '微信公众号', id: 'weixin'},
        {title: 'QQ', id: 'QQ'}
    ];

    var goodsCategory = [
        {title: '蔬菜', id: 'vegetables'},
        {title: '大米', id: 'rice'},
        {title: '水果', id: 'fruit'}
    ]

    var userTypeList = [
        {title: '运营人员', id: '0'},
        {title: '管理员', id: '1'}
    ]

    variableService.getChannelList = function() {
        return channelList || [];
    };

    variableService.getUserTypeList = function() {
        return userTypeList || [];
    };

    variableService.getGoodsCategory = function() {
        return goodsCategory || [];
    };

    return variableService;
};