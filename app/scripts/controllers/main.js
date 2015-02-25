'use strict';

/**
 * @ngdoc function
 * @name graphTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the graphTestApp
 */
angular.module('graphTestApp')
.controller('MainCtrl', ["$scope", "$timeout", "tg.graph.aside.$aside", function ($scope, $timeout, Aside) {

  $scope.onGraphLoad = function(graph) {
    $scope.graph = graph;

    $scope.graph.on('node/click', function (v) {
      Aside.refresh(v);
    });

    $scope.graph.on('edge/create', function (v1, v2) {
      $scope.graph.data([{ "out": v1.identifier(), "in": v2.identifier(), type: "refers" }]).redraw();
      $scope.$apply(function(){
        $scope.graph.endEdgeCreation();
      });
    });

    $scope.graph.on('edge/click', function (e) {
      Aside.refresh(e);
    });

    $scope.graph.on('node/dblclick', function (v) {
      console.log("node/dblclick")
    });

    $scope.graph.on('node/load', function (v, callback) {
      console.log("node/load")
    });
  };

  $scope.edgeMenu = [
    {
      name: '\uf044',
      onClick: function (e){

      }
    },{
      name: '\uf06e',
      placeholder: "Inspect",
      onClick: function (e) {
        Aside.open(e);
      }
    },{
      name: '\uf127',
      placeholder: "Remove edge",
      onClick: function (e) {
        $scope.graph.removeEdge(e);
      }
    }
  ];

  $scope.nodeMenu = [
    {
      name: '\uf044',
      onClick: function (v) {
      }
    },{
      name: "\uf014",
      placeholder: "Delete vertex",
      onClick: function (v, label) {
        $scope.graph.removeVertex(v);
      }
    },
    {
      name: "\uf12d",
      placeholder: "Remove from canvas",
      onClick: function (v, label) {
        $scope.graph.removeVertex(v);
      }
    },{
      name: "\uf0c1",
      placeholder: "Connect",
      onClick: function (v) {
        $scope.graph.startEdge();
      }
    },{
      name: "\uf06e",
      placeholder: "Inspect",
      onClick: function (v) {
        // INSPECT VERTEX
        Aside.open(v);
      }
    }
  ];

  $scope.metadata = {};
  $scope.configration = {};
  $scope.behavior = {};

  $timeout(function(){
    //initial data
    $scope.dataStream = [
      {"id":"#9:1","type":"Simple", "name": "Feedback"},
      {"id":"#9:1-1","type":"Simple", "name": "Customer rating"},
      {"id":"#9:1-2","type":"Simple", "name": "Delivery time"},
      {"id":"#9:1-3","type":"Simple", "name": "Shipping option"},
      {"id":"#9:1-4","type":"Simple", "name": "Payment method"},
      {"id":"#9:2","type":"Group", "name": "Order Type"},
      {"id":"#9:3","type":"Derived", "name": "Order Date"},
      {"type": "has_many", "in": "#9:1", "out": "#9:2" },
      {"type": "refers", "in": "#9:3", "out": "#9:1" },
      {"type": "has_many", "in": "#9:3", "out": "#9:4" },
      {"type": "refers", "in": "#9:1", "out": "#9:1-1" },
      {"type": "refers", "in": "#9:1", "out": "#9:1-2" },
      {"type": "refers", "in": "#9:1", "out": "#9:1-3" },
      {"type": "refers", "in": "#9:1", "out": "#9:1-4" },
    ];
  });
}]);
