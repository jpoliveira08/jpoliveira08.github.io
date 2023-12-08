const EmpreendimentoGeracaoDistribuida = () => {
    const urlPadraoSql = 'https://dadosabertos.aneel.gov.br/api/3/action/datastore_search_sql';
    const tabela = 'b1bd71e7-d0ad-4214-9053-cbd58e9564a7';
    const urlBuilder = UrlBuilder();
    const indicadoresConformidade = IndicadoresConformidade();

    function montar(parametros) {
        let chartStatus = Chart.getChart("QualidadeEnergiaPotencia"); // <canvas> id
        if (chartStatus != undefined) {
          chartStatus.destroy();
        }

        const requestJaneiro = $.ajax({
            url: getUrlJaneiro(parametros),
            dataType: 'jsonp',
            cache: true
        });
        const requestFevereiro = $.ajax({
            url: getUrlFevereiro(parametros),
            dataType: 'jsonp',
            cache: true
        });
        const requestMarco = $.ajax({
            url: getUrlMarco(parametros),
            dataType: 'jsonp',
            cache: true
        });
        const requestAbril = $.ajax({
            url: getUrlAbril(parametros),
            dataType: 'jsonp',
            cache: true
        });
        const requestMaio = $.ajax({
            url: getUrlMaio(parametros),
            dataType: 'jsonp',
            cache: true
        });
        const requestJunho = $.ajax({
            url: getUrlJunho(parametros),
            dataType: 'jsonp',
            cache: true
        });
        const requestJulho = $.ajax({
            url: getUrlJulho(parametros),
            dataType: 'jsonp',
            cache: true
        });
        const requestAgosto = $.ajax({
            url: getUrlAgosto(parametros),
            dataType: 'jsonp',
            cache: true
        });
        const requestSetembro = $.ajax({
            url: getUrlSetembro(parametros),
            dataType: 'jsonp',
            cache: true
        });
        const requestOutubro = $.ajax({
            url: getUrlOutubro(parametros),
            dataType: 'jsonp',
            cache: true
        });
        const requestNovembro = $.ajax({
            url: getUrlNovembro(parametros),
            dataType: 'jsonp',
            cache: true
        });
        const requestDezembro = $.ajax({
            url: getUrlDezembro(parametros),
            dataType: 'jsonp',
            cache: true
        });

        const requestJaneiroIndicador = $.ajax({
            url: indicadoresConformidade.getUrlJaneiroIndicador(parametros),
            dataType: 'jsonp',
            cache: true
        });

        const requestFevereiroIndicador = $.ajax({
            url: indicadoresConformidade.getUrlFevereiroIndicador(parametros),
            dataType: 'jsonp',
            cache: true
        });

        const requestMarcoIndicador = $.ajax({
            url: indicadoresConformidade.getUrlMarcoIndicador(parametros),
            dataType: 'jsonp',
            cache: true
        });


        const requestAbrilIndicador = $.ajax({
            url: indicadoresConformidade.getUrlAbrilIndicador(parametros),
            dataType: 'jsonp',
            cache: true
        });

        const requestMaioIndicador = $.ajax({
            url: indicadoresConformidade.getUrlMaioIndicador(parametros),
            dataType: 'jsonp',
            cache: true
        });

        const requestJunhoIndicador = $.ajax({
            url: indicadoresConformidade.getUrlJunhoIndicador(parametros),
            dataType: 'jsonp',
            cache: true
        });

        const requestJulhoIndicador = $.ajax({
            url: indicadoresConformidade.getUrlJulhoIndicador(parametros),
            dataType: 'jsonp',
            cache: true
        });

        const requestAgostoIndicador = $.ajax({
            url: indicadoresConformidade.getUrlAgostoIndicador(parametros),
            dataType: 'jsonp',
            cache: true
        });

        const requestSetembroIndicador = $.ajax({
            url: indicadoresConformidade.getUrlSetembroIndicador(parametros),
            dataType: 'jsonp',
            cache: true
        });

        const requestOutubroIndicador = $.ajax({
            url: indicadoresConformidade.getUrlOutubroIndicador(parametros),
            dataType: 'jsonp',
            cache: true
        });

        const requestNovembroIndicador = $.ajax({
            url: indicadoresConformidade.getUrlNovembroIndicador(parametros),
            dataType: 'jsonp',
            cache: true
        });

        const requestDezembroIndicador = $.ajax({
            url: indicadoresConformidade.getUrlDezembroIndicador(parametros),
            dataType: 'jsonp',
            cache: true
        }); 

        Promise.all([
            requestJaneiro,
            requestFevereiro,
            requestMarco,
            requestAbril,
            requestMaio,
            requestJunho,
            requestJulho,
            requestAgosto,
            requestSetembro,
            requestOutubro,
            requestNovembro,
            requestDezembro,
            requestJaneiroIndicador,
            requestFevereiroIndicador,
            requestMarcoIndicador,
            requestAbrilIndicador,
            requestMaioIndicador,
            requestJunhoIndicador,
            requestJulhoIndicador,
            requestAgostoIndicador,
            requestSetembroIndicador,
            requestOutubroIndicador,
            requestNovembroIndicador,
            requestDezembroIndicador
        ]).then(([
            dadosJaneiro,
            dadosFevereiro,
            dadosMarco,
            dadosAbril,
            dadosMaio,
            dadosJunho,
            dadosJulho,
            dadosAgosto,
            dadosSetembro,
            dadosOutubro,
            dadosNovembro,
            dadosDezembro,
            dadosJaneiroIndicador,
            dadosFevereiroIndicador,
            dadosMarcoIndicador,
            dadosAbrilIndicador,
            dadosMaioIndicador,
            dadosJunhoIndicador,
            dadosJulhoIndicador,
            dadosAgostoIndicador,
            dadosSetembroIndicador,
            dadosOutubroIndicador,
            dadosNovembroIndicador,
            dadosDezembroIndicador
        ]) => {
            let potenciaJaneiro = calcularPotenciaMensal(dadosJaneiro);
            let potenciaFevereiro = calcularPotenciaMensal(dadosFevereiro);
            let potenciaMarco = calcularPotenciaMensal(dadosMarco);
            let potenciaAbril = calcularPotenciaMensal(dadosAbril);
            let potenciaMaio = calcularPotenciaMensal(dadosMaio);
            let potenciaJunho = calcularPotenciaMensal(dadosJunho);
            let potenciaJulho = calcularPotenciaMensal(dadosJulho);
            let potenciaAgosto = calcularPotenciaMensal(dadosAgosto);
            let potenciaSetembro = calcularPotenciaMensal(dadosSetembro);
            let potenciaOutubro = calcularPotenciaMensal(dadosOutubro);
            let potenciaNovembro = calcularPotenciaMensal(dadosNovembro);
            let potenciaDezembro = calcularPotenciaMensal(dadosDezembro);

            let pontos = criarDataPoints([
                dadosJaneiroIndicador,
                dadosFevereiroIndicador,
                dadosMarcoIndicador,
                dadosAbrilIndicador,
                dadosMaioIndicador,
                dadosJunhoIndicador,
                dadosJulhoIndicador,
                dadosAgostoIndicador,
                dadosSetembroIndicador,
                dadosOutubroIndicador,
                dadosNovembroIndicador,
                dadosDezembroIndicador
            ]);

            let labels = [
                potenciaJaneiro,
                potenciaJaneiro + potenciaFevereiro,
                potenciaJaneiro + potenciaFevereiro + potenciaMarco,
                potenciaJaneiro + potenciaFevereiro + potenciaMarco + potenciaAbril,
                potenciaJaneiro + potenciaFevereiro + potenciaMarco + potenciaAbril + potenciaMaio,
                potenciaJaneiro + potenciaFevereiro + potenciaMarco + potenciaAbril + potenciaMaio + potenciaJunho,
                potenciaJaneiro + potenciaFevereiro + potenciaMarco + potenciaAbril + potenciaMaio + potenciaJunho + potenciaJulho,
                potenciaJaneiro + potenciaFevereiro + potenciaMarco + potenciaAbril + potenciaMaio + potenciaJunho + potenciaJulho + potenciaAgosto,
                potenciaJaneiro + potenciaFevereiro + potenciaMarco + potenciaAbril + potenciaMaio + potenciaJunho + potenciaJulho + potenciaAgosto + potenciaSetembro,
                potenciaJaneiro + potenciaFevereiro + potenciaMarco + potenciaAbril + potenciaMaio + potenciaJunho + potenciaJulho + potenciaAgosto + potenciaSetembro + potenciaOutubro,
                potenciaJaneiro + potenciaFevereiro + potenciaMarco + potenciaAbril + potenciaMaio + potenciaJunho + potenciaJulho + potenciaAgosto + potenciaSetembro + potenciaOutubro + potenciaNovembro,
                potenciaJaneiro + potenciaFevereiro + potenciaMarco + potenciaAbril + potenciaMaio + potenciaJunho + potenciaJulho + potenciaAgosto + potenciaSetembro + potenciaOutubro + potenciaNovembro + potenciaDezembro
            ]

            let axisLabel = labels.map(potenciaAcumulada => potenciaAcumulada.toFixed(2));

            const QualidadeEnergiaPotenciaChart = new Chart('QualidadeEnergiaPotencia', {
                type: 'scatter',
                data: {
                    datasets: [
                        {
                            label: 'Indicadores de qualidade',
                            data: pontos,
                        }
                    ]
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Potência instalada (kW)'
                            },
                            beginAtZero: false,
                            ticks: {
                                beginAtZero: false,
                                callback: (value, index, ticks) => axisLabel[index]
                            }
                        }
                        
                    }
                }    
            });
        })
        .catch(error => {
            console.log(error)
        });
    }

    function criarDataPoints(dados) {
        let dataPoints = [];
        for(i = 0; i < dados.length; i++) {
            let registros = dados[i].result.records;
            for (j=0; j < registros.length; j++) {
                let mes = registros[j].NumPeriodoIndice;
                let valorIndice = registros[j].VlrIndiceEnviado;
                let valorIndiceConvertido = parseFloat(valorIndice.replace(',', '.'));
                if (valorIndiceConvertido > 0) {
                    dataPoints.push(
                        {
                            x: parseInt(parseInt(mes)),
                            y: valorIndiceConvertido
                        }
                    );
                }
            }
        }

        return dataPoints;
    }

    function getUrlJaneiro(parametros) {
        let limite = parametros.limite ? ` LIMIT \'${parametros.limite}\' ` : '';

        const parametrosUrlJaneiro = {
            sql: `SELECT \"MdaPotenciaInstaladaKW\" FROM \"${tabela}\" WHERE (\"DthAtualizaCadastralEmpreend\" BETWEEN \'${parametros.ano}-01-01\' AND  \'${parametros.ano}-01-31\') ${limite}`
        };
    
        return urlBuilder.buildUrl(urlPadraoSql, parametrosUrlJaneiro);
    }

    function getUrlFevereiro(parametros) {
        let limite = parametros.limite ? ` LIMIT \'${parametros.limite}\' ` : '';

        const parametrosUrlFevereiro = {
            sql: `SELECT \"MdaPotenciaInstaladaKW\" FROM \"${tabela}\" WHERE (\"DthAtualizaCadastralEmpreend\" BETWEEN \'${parametros.ano}-02-01\' AND  \'${parametros.ano}-02-28\') ${limite}`
        };
    
        return urlBuilder.buildUrl(urlPadraoSql, parametrosUrlFevereiro);
    }

    function getUrlMarco(parametros) {
        let limite = parametros.limite ? ` LIMIT \'${parametros.limite}\' ` : '';

        const parametrosUrlMarco = {
            sql: `SELECT \"MdaPotenciaInstaladaKW\" FROM \"${tabela}\" WHERE (\"DthAtualizaCadastralEmpreend\" BETWEEN \'${parametros.ano}-03-01\' AND  \'${parametros.ano}-03-31\') ${limite}`
        };
    
        return urlBuilder.buildUrl(urlPadraoSql, parametrosUrlMarco);
    }

    function getUrlAbril(parametros) {
        let limite = parametros.limite ? ` LIMIT \'${parametros.limite}\' ` : '';

        const parametrosUrlAbril = {
            sql: `SELECT \"MdaPotenciaInstaladaKW\" FROM \"${tabela}\" WHERE (\"DthAtualizaCadastralEmpreend\" BETWEEN \'${parametros.ano}-04-01\' AND  \'${parametros.ano}-04-30\') ${limite}`
        };
    
        return urlBuilder.buildUrl(urlPadraoSql, parametrosUrlAbril);
    }

    function getUrlMaio(parametros) {
        let limite = parametros.limite ? ` LIMIT \'${parametros.limite}\' ` : '';

        const parametrosUrlMaio = {
            sql: `SELECT \"MdaPotenciaInstaladaKW\" FROM \"${tabela}\" WHERE (\"DthAtualizaCadastralEmpreend\" BETWEEN \'${parametros.ano}-05-01\' AND  \'${parametros.ano}-05-31\') ${limite}`
        };
    
        return urlBuilder.buildUrl(urlPadraoSql, parametrosUrlMaio);
    }

    function getUrlJunho(parametros) {
        let limite = parametros.limite ? ` LIMIT \'${parametros.limite}\' ` : '';

        const parametrosUrlJunho = {
            sql: `SELECT \"MdaPotenciaInstaladaKW\" FROM \"${tabela}\" WHERE (\"DthAtualizaCadastralEmpreend\" BETWEEN \'${parametros.ano}-06-01\' AND  \'${parametros.ano}-06-30\') ${limite}`
        };
    
        return urlBuilder.buildUrl(urlPadraoSql, parametrosUrlJunho);
    }

    function getUrlJulho(parametros) {
        let limite = parametros.limite ? ` LIMIT \'${parametros.limite}\' ` : '';

        const parametrosUrlJulho = {
            sql: `SELECT \"MdaPotenciaInstaladaKW\" FROM \"${tabela}\" WHERE (\"DthAtualizaCadastralEmpreend\" BETWEEN \'${parametros.ano}-07-01\' AND  \'${parametros.ano}-07-31\') ${limite}`
        };
    
        return urlBuilder.buildUrl(urlPadraoSql, parametrosUrlJulho);
    }

    function getUrlAgosto(parametros) {
        let limite = parametros.limite ? ` LIMIT \'${parametros.limite}\' ` : '';

        const parametrosUrlAgosto = {
            sql: `SELECT \"MdaPotenciaInstaladaKW\" FROM \"${tabela}\" WHERE (\"DthAtualizaCadastralEmpreend\" BETWEEN \'${parametros.ano}-08-01\' AND  \'${parametros.ano}-08-31\') ${limite}`
        };
    
        return urlBuilder.buildUrl(urlPadraoSql, parametrosUrlAgosto);
    }

    function getUrlSetembro(parametros) {
        let limite = parametros.limite ? ` LIMIT \'${parametros.limite}\' ` : '';

        const parametrosUrlSetembro = {
            sql: `SELECT \"MdaPotenciaInstaladaKW\" FROM \"${tabela}\" WHERE (\"DthAtualizaCadastralEmpreend\" BETWEEN \'${parametros.ano}-09-01\' AND  \'${parametros.ano}-09-30\') ${limite}`
        };
    
        return urlBuilder.buildUrl(urlPadraoSql, parametrosUrlSetembro);
    }

    function getUrlOutubro(parametros) {
        let limite = parametros.limite ? ` LIMIT \'${parametros.limite}\' ` : '';

        const parametrosUrlOutubro = {
            sql: `SELECT \"MdaPotenciaInstaladaKW\" FROM \"${tabela}\" WHERE (\"DthAtualizaCadastralEmpreend\" BETWEEN \'${parametros.ano}-10-01\' AND  \'${parametros.ano}-10-31\') ${limite}`
        };
    
        return urlBuilder.buildUrl(urlPadraoSql, parametrosUrlOutubro);
    }

    function getUrlNovembro(parametros) {
        let limite = parametros.limite ? ` LIMIT \'${parametros.limite}\' ` : '';

        const parametrosUrlNovembro = {
            sql: `SELECT \"MdaPotenciaInstaladaKW\" FROM \"${tabela}\" WHERE (\"DthAtualizaCadastralEmpreend\" BETWEEN \'${parametros.ano}-11-01\' AND  \'${parametros.ano}-11-30\') ${limite}`
        };
    
        return urlBuilder.buildUrl(urlPadraoSql, parametrosUrlNovembro);
    }

    function getUrlDezembro(parametros) {
        let limite = parametros.limite ? ` LIMIT \'${parametros.limite}\' ` : '';

        const parametrosUrlDezembro = {
            sql: `SELECT \"MdaPotenciaInstaladaKW\" FROM \"${tabela}\" WHERE (\"DthAtualizaCadastralEmpreend\" BETWEEN \'${parametros.ano}-12-01\' AND  \'${parametros.ano}-12-31\') ${limite}`
        };
    
        return urlBuilder.buildUrl(urlPadraoSql, parametrosUrlDezembro);
    }

    function calcularPotenciaMensal(response) {
       let dados = response.result.records;

       return dados.reduce((acumulador, valorAtual) => {
            let valorConvertido = parseFloat(valorAtual.MdaPotenciaInstaladaKW.replace(',', '.'));

            return acumulador + valorConvertido;
       }, 0);
    }

    return {
        montar
    }
}