angular.module('starter.controllers', [])

.controller('pagina1Ctrl', function($scope,$state) 
{
	$scope.nombre="ivan";
	
	$scope.salvar  = function() 
	{
		alert("Datos Salvados");
		$state.go('pagina2.hijo2');
	};
})

.controller('hijo1Ctrl', function($scope) 
{

}) 

.controller('hijo2Ctrl', function($scope) 
{

})