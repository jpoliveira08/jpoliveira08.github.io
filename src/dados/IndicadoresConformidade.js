const IndicadoresConformidade = () => {
    const urlPadraoSqlIndicador = 'https://dadosabertos.aneel.gov.br/api/3/action/datastore_search_sql';
    const tabelaIndicador = 'b6755d51-f537-4e0f-8fd8-d2cead66178a';
    const urlBuilder = UrlBuilder();

    function montarQuery(parametros) {
        let indicador = parametros.indicador ? ` AND \"SigIndicador\" = \'${parametros.indicador}\' ` : '';
        let limite = parametros.limite ? ` LIMIT \'${parametros.limite}\' ` : '';
        return `SELECT \"NumPeriodoIndice\",\"VlrIndiceEnviado\" FROM \"${tabelaIndicador}\" WHERE \"AnoIndice\" = \'${parametros.ano}\' AND \"NumPeriodoIndice\" = \'${parametros.mes}\' ${indicador} ${limite}`;
    }

    function getUrlJaneiroIndicador(parametros) {
        parametros.mes = 1;
        const parametrosUrlJaneiroIndicador = {
            sql: montarQuery(parametros)
        }
        return urlBuilder.buildUrl(urlPadraoSqlIndicador, parametrosUrlJaneiroIndicador);
    }

    function getUrlFevereiroIndicador(parametros) {
        parametros.mes = 2;
        const parametrosUrlFevereiroIndicador = {
            sql: montarQuery(parametros)
        }
        return urlBuilder.buildUrl(urlPadraoSqlIndicador, parametrosUrlFevereiroIndicador);
    }

    function getUrlMarcoIndicador(parametros) {
        parametros.mes = 3;
        const parametrosUrlMarcoIndicador = {
            sql: montarQuery(parametros)
        }
        return urlBuilder.buildUrl(urlPadraoSqlIndicador, parametrosUrlMarcoIndicador);
    }

    function getUrlAbrilIndicador(parametros) {
        parametros.mes = 4;
        const parametrosUrlAbrilIndicador = {
            sql: montarQuery(parametros)
        }
        return urlBuilder.buildUrl(urlPadraoSqlIndicador, parametrosUrlAbrilIndicador);
    }

    function getUrlMaioIndicador(parametros) {
        parametros.mes = 5;
        const parametrosUrlMaioIndicador = {
            sql: montarQuery(parametros)
        }
        return urlBuilder.buildUrl(urlPadraoSqlIndicador, parametrosUrlMaioIndicador);
    }

    function getUrlJunhoIndicador(parametros) {
        parametros.mes = 6;
        const parametrosUrlJunhoIndicador = {
            sql: montarQuery(parametros)
        }
        return urlBuilder.buildUrl(urlPadraoSqlIndicador, parametrosUrlJunhoIndicador);
    }

    function getUrlJulhoIndicador(parametros) {
        parametros.mes = 7;
        const parametrosUrlJulhoIndicador = {
            sql: montarQuery(parametros)
        }
        return urlBuilder.buildUrl(urlPadraoSqlIndicador, parametrosUrlJulhoIndicador);
    }

    function getUrlAgostoIndicador(parametros) {
        parametros.mes = 8;
        const parametrosUrlAgostoIndicador = {
            sql: montarQuery(parametros)
        }
        return urlBuilder.buildUrl(urlPadraoSqlIndicador, parametrosUrlAgostoIndicador);
    }

    function getUrlSetembroIndicador(parametros) {
        parametros.mes = 9;
        const parametrosUrlSetembroIndicador = {
            sql: montarQuery(parametros)
        }
        return urlBuilder.buildUrl(urlPadraoSqlIndicador, parametrosUrlSetembroIndicador);
    }

    function getUrlOutubroIndicador(parametros) {
        parametros.mes = 10;
        const parametrosUrlOutubroIndicador = {
            sql: montarQuery(parametros)
        }
        return urlBuilder.buildUrl(urlPadraoSqlIndicador, parametrosUrlOutubroIndicador);
    }

    function getUrlNovembroIndicador(parametros) {
        parametros.mes = 11;
        const parametrosUrlNovembroIndicador = {
            sql: montarQuery(parametros)
        }
        return urlBuilder.buildUrl(urlPadraoSqlIndicador, parametrosUrlNovembroIndicador);
    }

    function getUrlDezembroIndicador(parametros) {
        parametros.mes = 12;
        const parametrosUrlDezembroIndicador = {
            sql: montarQuery(parametros)
        }
        return urlBuilder.buildUrl(urlPadraoSqlIndicador, parametrosUrlDezembroIndicador);
    }

    return {
        getUrlJaneiroIndicador,
        getUrlFevereiroIndicador,
        getUrlMarcoIndicador,
        getUrlAbrilIndicador,
        getUrlMaioIndicador,
        getUrlJunhoIndicador,
        getUrlJulhoIndicador,
        getUrlAgostoIndicador,
        getUrlSetembroIndicador,
        getUrlOutubroIndicador,
        getUrlNovembroIndicador,
        getUrlDezembroIndicador
    }
}