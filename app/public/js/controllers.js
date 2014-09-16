'usestrict';

/*Controllers*/

var sabheAppControllers = angular.module('sabheAppControllers',[]);

sabheAppControllers.controller('HomeController',['$scope','$rootScope','$http','$location',function($scope,$rootScope,$http,$location){

	$scope.name="ravi";
	$scope.getlink=false;
	$scope.sendLink = function(link){
		$scope.getlink=true;
		console.log("%%%%%%%%%%%%%%%%%%  "+link);
	}

$scope.gridsterOpts = {
    margins: [20, 20],
    draggable: {
      enabled: true
    },
    resizable: {
      enabled: true
    }
  };


  // these are non-standard, so they require mapping options
  $scope.customItems = [
    { size: { x: 2, y: 3 }, position: [0, 0] }        
  ];



  // map the gridsterItem to the custom item structure
  $scope.customItemMap = {
    sizeX: 'item.size.x',
    sizeY: 'item.size.y',
    row: 'item.position[0]',
    col: 'item.position[1]'
  };





/*$scope.customItems = [
      { size: { x: 2, y: 1 }, position: [0, 0] }
      /*{ size: { x: 2, y: 2 }, position: [0, 2] },
      { size: { x: 1, y: 1 }, position: [0, 4] },
      { size: { x: 1, y: 1 }, position: [0, 5] },
      { size: { x: 2, y: 1 }, position: [1, 0] },
      { size: { x: 1, y: 1 }, position: [1, 4] },
      { size: { x: 1, y: 2 }, position: [1, 5] },
      { size: { x: 1, y: 1 }, position: [2, 0] },
      { size: { x: 2, y: 1 }, position: [2, 1] },
      { size: { x: 1, y: 1 }, position: [2, 3] },
      { size: { x: 1, y: 1 }, position: [2, 4] }
    ];

    $scope.customItemMap = {
        sizeX: 'item.size.x',
        sizeY: 'item.size.y',
        row: 'item.position[0]',
        color: 'green',
        col: 'item.position[1]'
    }

    $scope.gridsterOpts = {
      minRows: 2, // the minimum height of the grid, in rows
      maxRows: 100,
      columns: 6, // the width of the grid, in columns
      colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
      rowHeight: 'match', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
      margins: [10, 10], // the pixel distance between each widget
      defaultSizeX: 2, // the default width of a gridster item, if not specifed
      defaultSizeY: 1, // the default height of a gridster item, if not specified
      mobileBreakPoint: 600, // if the screen is not wider that this, remove the grid layout and stack the items
      resizable: {
         enabled: true,
         start: function(event, uiWidget, $element) {}, // optional callback fired when resize is started,
         resize: function(event, uiWidget, $element) {}, // optional callback fired when item is resized,
         stop: function(event, uiWidget, $element) {} // optional callback fired when item is finished resizing
      },
      draggable: {
         enabled: true, // whether dragging items is supported
         handle: '.my-class', // optional selector for resize handle
         start: function(event, uiWidget, $element) {}, // optional callback fired when drag is started,
         drag: function(event, uiWidget, $element) {}, // optional callback fired when item is moved,
         stop: function(event, uiWidget, $element) {} // optional callback fired when item is finished dragging
      }
    };*/
	
	
}]);

