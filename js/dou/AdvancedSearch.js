import { URLBuilder } from '../url/URLBuilder.js';

const advancedSearch = () => {
    const urlBase = 'https://www.in.gov.br/consulta/-/buscar/dou?';

    const getPowerPlantReleasePage = (parameters) => {
        const searchParameters = {
            q : '"Liberar as unidades geradoras"',
            s : 'do1',
            exactDate : 'personalizado',
            sortType : 0,
            ...parameters
        };

        return URLBuilder.buildUrl(urlBase, searchParameters);
    };

    return {
        getPowerPlantReleasePage
    };
};

export const AdvancedSearch = advancedSearch();