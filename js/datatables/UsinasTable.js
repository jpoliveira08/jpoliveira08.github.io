import { PowerPlantsType } from "../usinas/PowerPlantsType.js";

const usinasTable = () => {
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

    const testeAndComercialTable = (parameters) => {
        $('#table_usinas_operacao').DataTable({
            serverSide: false,
            bDestroy: true,
            ajax: {
                url: 'https://dadosabertos.aneel.gov.br/api/3/action/datastore_search_sql',
                type: 'POST',
                dataType: "jsonp",
                data: {
                    sql: `SELECT * from \"75419902-c692-498b-a6ef-85f6d4beb5b2\" WHERE (\"DatLiberOpComerRealizado\" BETWEEN \'${parameters.publishFrom}\' AND  \'${parameters.publishTo}\') OR (\"DatLiberOpTesteRealizado\" BETWEEN \'${parameters.publishFrom}\' AND \'${parameters.publishTo}\')`
                },
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

    const testeTable = (parameters) => {
        $('#table_usinas_operacao').DataTable({
            serverSide: false,
            bDestroy: true,
            ajax: {
                url: 'https://dadosabertos.aneel.gov.br/api/3/action/datastore_search_sql',
                type: 'POST',
                dataType: "jsonp",
                data: {
                    sql: `SELECT * from \"75419902-c692-498b-a6ef-85f6d4beb5b2\" WHERE \"DatLiberOpTesteRealizado\" BETWEEN \'${parameters.publishFrom}\' AND  \'${parameters.publishTo}\' `
                },
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
    };

    const comercialTable = (parameters) => {
        $('#table_usinas_operacao').DataTable({
            serverSide: false,
            bDestroy: true,
            ajax: {
                url: 'https://dadosabertos.aneel.gov.br/api/3/action/datastore_search_sql',
                type: 'POST',
                dataType: "jsonp",
                data: {
                    sql: `SELECT * from \"75419902-c692-498b-a6ef-85f6d4beb5b2\" WHERE \"DatLiberOpComerRealizado\" BETWEEN \'${parameters.publishFrom}\' AND  \'${parameters.publishTo}\' `
                },
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

    return {
        build
    }
}

export const UsinasTable = usinasTable(); 