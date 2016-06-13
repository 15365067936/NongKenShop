module.exports = function () {
    return function (scope, element, attrs) {
        console.log(attrs)
        element.bind("keydown keypress", function (event) {
        console.log(event)

            if(event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.iagEnter);
                });

                event.preventDefault();
            }
        });
    };
}