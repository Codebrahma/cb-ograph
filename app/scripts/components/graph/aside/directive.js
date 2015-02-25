(function(){
  var app = angular.module("tg.graph.aside");
  app.directive("tgGraphAside", [function(){
    return{
      scope:{ },
      replace: true,
      templateUrl: "scripts/components/graph/aside/template.html",
      controller: "tg.graph.aside.Controller"
    };
  }]);
}());
