angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, serialGenerator, $location, operadoras){
    $scope.app = "Lista Telefonica";
    $scope.operadoras = operadoras.data;
    $scope.adicionarContato = function(contato) {
        
        contato.serial = serialGenerator.generate();
        contatosAPI.saveContatos(contato)
        .success(
            (data) => {
                delete $scope.contato;
                $scope.contatoForm.$setPristine();
                $location.path("/contatos")
        })
        .error(
            (data) => {
                $scope.error = "Erro ao carregar operadoras";
        })
    };
});