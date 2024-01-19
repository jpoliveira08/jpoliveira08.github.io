import { PowerPlantsType } from "../usinas/PowerPlantsType.js";
import { URLBuilder } from "../url/URLBuilder.js";

const usinasTable = () => {
    const defaultSqlURL = 'https://dadosabertos.aneel.gov.br/api/3/action/datastore_search_sql';
    const defaultTable = '75419902-c692-498b-a6ef-85f6d4beb5b2'

    const build = (parameters) => {
        if (parameters.operationTypes.length === 2) {
            testeAndComercialTable(parameters);
            return;
        }

        if (parameters.operationTypes[0] === 'teste') {
            testeTable(parameters);
            return;
        }

       comercialTable(parameters);
    }

    const buildDatatable = (url) => {
        $('#table_usinas_operacao').DataTable({
            serverSide: false,
            bDestroy: true,
            ajax: {
                url: url,
                type: 'GET',
                dataType: "jsonp",
                dataSrc: response => {
                    return response.result.records;
                }
            },
            columns: [
                { data: 'NomUsina' },
                {
                    data: 'SigTipoGeracao',
                    render: data => {
                        return PowerPlantsType[data];
                    }
                },
                { data: 'DscComercializacaoEnergia' },
                { data: 'MdaPotenciaLiberadaComercial' },
                { data: 'SigUFUsina' },
                { data: 'DatLiberOpTesteRealizado' },
                { data: 'DatLiberOpComerRealizado' }
            ]
        });
    }

    const testeAndComercialTable = (parameters) => {
        const sqlParameters = {
            sql: `SELECT * from \"${defaultTable}\" WHERE (\"DatLiberOpComerRealizado\" BETWEEN \'${parameters.publishFrom}\' AND  \'${parameters.publishTo}\') OR (\"DatLiberOpTesteRealizado\" BETWEEN \'${parameters.publishFrom}\' AND \'${parameters.publishTo}\')`

        };

        const url = URLBuilder.buildUrl(defaultSqlURL, sqlParameters);

        buildDatatable(url);        
    }

    const testeTable = (parameters) => {
        const sqlParameters = {
            sql: `SELECT * from \"75419902-c692-498b-a6ef-85f6d4beb5b2\" WHERE \"DatLiberOpTesteRealizado\" BETWEEN \'${parameters.publishFrom}\' AND  \'${parameters.publishTo}\' `
        };

        const url = URLBuilder.buildUrl(defaultSqlURL, sqlParameters);

        buildDatatable(url);
    };

    const comercialTable = (parameters) => {
        const sqlParameters = {
            sql: `SELECT * from \"75419902-c692-498b-a6ef-85f6d4beb5b2\" WHERE \"DatLiberOpComerRealizado\" BETWEEN \'${parameters.publishFrom}\' AND  \'${parameters.publishTo}\' `
        };

        const url = URLBuilder.buildUrl(defaultSqlURL, sqlParameters);

        buildDatatable(url);        
    }

    return {
        build
    }
}

export const UsinasTable = usinasTable(); 