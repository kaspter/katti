/**
 * Very basic autoscroll directive;
 *
 * @author James Huston <james@jameshuston.net>
 * @since 2013-08-05
 */

    'use strict';

     angular.module('sabheAppDirectives', [])

    .directive('scrollGlue', function(){

        return {
            priority: 1,
            require: ['?ngModel'],
            restrict: 'A',
            link: function(scope, $el, attrs, ctrls){

                function fakeNgModel(initValue){
                    return {
                        $setViewValue: function(value){
                            this.$viewValue = value;
                        },
                        $viewValue: initValue
                    };
                }

                var el = $el[0],
                    ngModel = ctrls[0] || fakeNgModel(true);

                function scrollToBottom(){
                    el.scrollTop = el.scrollHeight;
                }

                function shouldActivateAutoScroll(){
                    // + 1 catches off by one errors in chrome
                    return el.scrollTop + el.clientHeight + 1 >= el.scrollHeight;
                }

                scope.$watch(function(){
                    if(ngModel.$viewValue){
                        scrollToBottom();
                    }
                });

                $el.bind('scroll', function(){
                    scope.$apply(ngModel.$setViewValue.bind(ngModel, shouldActivateAutoScroll()));
                });
            }
        };
    })
    .directive('validPasswordC', function () {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function (viewValue, $scope) {
                    if(scope.signupform !== undefined) {
                        var noMatch = viewValue != scope.signupform.password.$viewValue;
                    } else if(scope.profileform !== undefined){
                        var noMatch = viewValue != scope.profileform.password.$viewValue;
                    } else if(scope.resetpasswordform !== undefined){
                        var noMatch = viewValue != scope.resetpasswordform.password.$viewValue;
                    }
                    ctrl.$setValidity('noMatch', !noMatch)
                })
            }
        }
    });
   

    angular.module('ng').directive('ngFocus', function($timeout) {
        return {
            link: function ( scope, element, attrs ) {
                scope.$watch( attrs.ngFocus, function ( val ) {
                    if ( angular.isDefined( val ) && val ) {
                        $timeout( function () { element[0].focus(); } );
                    }
                }, true);

                element.bind('blur', function () {
                    if ( angular.isDefined( attrs.ngFocusLost ) ) {
                        scope.$apply( attrs.ngFocusLost );

                    }
                });
            }
        };
    });

    

