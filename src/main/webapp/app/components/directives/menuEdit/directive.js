module.exports = function(userService) {
    return {
        priority: 0,
        scope: {
            nodes: '=',
            selectedNode: '='
        },
        templateUrl: require("file!./template.html"),
        link: function (scope, element, attrs) {
            console.log(scope);
            console.log(scope.selectedNode);

            scope.currentApp = userService.currentApp;
            scope.selectedNode = {isMainmenu: false};
            scope.selectMainNode = function (index) {
                
                scope.selectedNode = scope.nodes.button[index];
                scope.selectedNode.isMainmenu = true;

            }

            scope.selectSubNode = function (index, pindex) {
                scope.selectedNode = scope.nodes.button[pindex].sub_button[index];
                scope.selectedNode.isMainmenu = false;

            }

            scope.movePos = function (direction, index) {

                var index2;
                if ('L' == direction) {
                    index2 = index - 1;
                } else if ('R' == direction) {
                    index2 = index + 1;
                }

                scope.nodes.button = swapItems(scope.nodes.button, index2, index)

            }

            scope.moveSubPos = function (direction, index, pindex) {

                var index2;
                if ('U' == direction) {
                    index2 = index - 1;
                } else if ('D' == direction) {
                    index2 = index + 1;
                }

                scope.nodes.button[pindex].sub_button = swapItems(scope.nodes.button[pindex].sub_button, index2, index)
            }

            function swapItems(arr, index1, index2) {
                arr[index1] = arr.splice(index2, 1, arr[index1])[0];
                return arr;
            }

            scope.deleteMainButton = function(index, event) {
                event.stopPropagation();
                scope.nodes.button.splice(index, 1);
                console.log(scope.nodes);
            }

            scope.deleteSubButton = function(index, pindex, event) {
                event.stopPropagation();
                scope.nodes.button[pindex].sub_button.splice(index, 1);
                console.log(scope.nodes);
            }

            scope.addMainButton = function() {
                var mainButton = {
                    name: '主菜单',
                    type: '',
                    url: '',
                    key: '',
                    sub_button: []
                };
                scope.nodes.button.push(mainButton);
            }

            scope.addSubButton = function(index) {
                var subButton = {
                    name: '子菜单',
                    type: '',
                    url: '',
                    key: ''
                };
                delete scope.nodes.button[index].type;
                scope.nodes.button[index].sub_button = scope.nodes.button[index].sub_button || [];
                scope.nodes.button[index].sub_button.push(subButton);
            }
        }
    }
}