app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'The most popular books this month.';
  $scope.products = [
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date(2014, 03, 08),
      cover: 'img/the-book-of-trees.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date(2013, 08, 01),
      cover: 'img/program-or-be-programmed.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Coder',
      price: 9,
      pubdate: new Date(2013, 11, 01),
      cover: 'img/coder.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Crypto',
      price: 1,
      pubdate: new Date(2014, 08, 01),
      cover: 'img/crypto.jpg',
      likes: 0,
      dislikes: 0
    }
    ];
  
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  }
  
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  }
  
}]);