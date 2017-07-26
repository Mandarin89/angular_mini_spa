// start dragg 
app.directive('draggable', function() {
  return function(scope, element) {
    // nativ object
    var el = element[0];
    el.draggable = true;
    
    el.addEventListener(
      'dragstart',
      function(e) {
        e.dataTransfer.effectAllowed = 'move';
        // transfer object params
        e.dataTransfer.setData('id', this.getAttribute("data-id"));
        e.dataTransfer.setData('count', this.getAttribute("data-count"));
        e.dataTransfer.setData('mode', this.getAttribute("data-mode"));
        //
        this.classList.add('drag');
        return false;
      },
      false
      );
    el.addEventListener(
      'dragend',
      function(e) {
        this.classList.remove('drag');
        return false;
      },
      false
      );
  }
}); 

// end drop
app.directive('droppable',function($rootScope) {
  return {
    scope: {
      drop: '&',
      bin: '='
    },
    link: function(scope, element) {
      // native object
      var el = element[0];
      
      el.addEventListener(
        'dragover',
        function(e) {
          e.dataTransfer.dropEffect = 'move';
          if (e.preventDefault) e.preventDefault();
          this.classList.add('over');
          return false;
        },
        false
        );
      
      el.addEventListener(
        'dragenter',
        function(e) {
          this.classList.add('over');
          return false;
        },
        false
        );
      
      el.addEventListener(
        'dragleave',
        function(e) {
          this.classList.remove('over');
          return false;
        },
        false
        );   
      el.addEventListener(
        'drop',
        function(e) {
          // Stops some browsers from redirecting.
          if (e.stopPropagation) e.stopPropagation();

          // get object params
          var mode = e.dataTransfer.getData('mode');
          var id = e.dataTransfer.getData('id');
          var count = e.dataTransfer.getData('count');
          var add = false;

          this.classList.remove('over');
          // mode == 0 - cart to products
          if(mode == 0 && angular.element(this).hasClass("b-items")){
            angular.forEach($rootScope.cartArray, function(value, key){
              if(value["id"] == id && value["q"]>1){
                $rootScope.cartArray[key]["q"] = parseInt($rootScope.cartArray[key]["q"]) - 1;
              }else if(value["id"] == id && value["q"]==1){
                delete $rootScope.cartArray[key];
              }
            });          

          }
          //
          // mode == 1 - products box to cart
          if(mode == 1 && angular.element(this).hasClass("b-cart")){
            angular.forEach($rootScope.cartArray, function(value, key){
              if(value["id"] == id){
                add = true;
                if( (parseInt($rootScope.products[count]["q"])+parseInt(value["q"]))<=$rootScope.products[count]["quantity"] ){
                  $rootScope.cartArray[key]["q"] = parseInt($rootScope.products[count]["q"])+parseInt(value["q"]);
                }else{
                  $rootScope.cartArray[key]["q"] = parseInt($rootScope.products[count]["quantity"]);
                }
              }
            });
            if(add === false){
              $rootScope.cartArray[count] = angular.copy($rootScope.products[count]); 
            }
          }
          // call passed function
          scope.$apply(function(scope) {
            var fn = scope.drop();
            if ('undefined' !== typeof fn) {            
              fn($rootScope.cartArray, id);
            }
          });          
          return false;
        },
        false
        );
    }
  }
}); 




