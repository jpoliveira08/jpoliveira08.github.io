const gerarGraficoQualidadePotencia = document.getElementById('gerar_grafico_qualidade_potencia');
const empreendimentoGeracaoDistribuida = EmpreendimentoGeracaoDistribuida();

gerarGraficoQualidadePotencia.addEventListener('click', () => {    
    let ano = document.getElementById('ano_qualidade').value;
    let indicador = $('#indicador_qualidade').val();
    let limitarRegistro = document.getElementById('limitar_registros').value;

    let parametros = {
        ano: ano,
        indicador: indicador,
        limite: limitarRegistro
    }

    empreendimentoGeracaoDistribuida.montar(parametros);
});