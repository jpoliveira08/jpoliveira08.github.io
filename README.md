Para ler o json basta usar 
$.getJSON('./indicadores_qualidade.json', function(responseObject){
    var obj = responseObject
    console.log(obj)
})