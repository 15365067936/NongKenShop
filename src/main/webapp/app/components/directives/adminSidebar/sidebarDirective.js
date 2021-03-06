module.exports = function(userService) {
    return {
        priority: 0,
        templateUrl: require("file!./template.html"),
        link: function (scope, element, attrs) {

            $('.nav li').click(function(e) {

                $('.nav li').removeClass('active');

                var $parent = $(this);
                if (!$parent.hasClass('active')) {
                    $parent.addClass('active');
                }
                e.preventDefault();
            });

            scope.role = userService.userInfo.role;

            scope.menus = userService.getSidebarMenus(userService.userInfo.role);

            scope.$watch(function(){return userService.currentApp;}, function(value) {
                scope.menus = userService.getSidebarMenus(userService.userInfo.role, userService.currentApp.channel);
            });

            scope.rowClass = function(menu) {
                return menu.cssClass;
            }
        }
    }
}