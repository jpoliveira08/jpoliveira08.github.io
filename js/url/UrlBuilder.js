const urlBuilder = () => {
    const urlBase = 'https://www.in.gov.br/consulta/-/buscar/dou?';
    const q = '"Liberar as unidades geradoras"';
    const s = 'do1';
    const exactDate = 'personalizado';
    const sortType = 0;

    const fillDefaultParameters = (url) => {
        url.searchParams.append('q', q);
        url.searchParams.append('s', s);
        url.searchParams.append('exactDate', exactDate);
        url.searchParams.append('sortType', sortType);
    }

    const buildUrl = (parameters) => {

        let url = new URL(urlBase);

        fillDefaultParameters(url);

        url.searchParams.append('publishFrom', parameters.publishFrom);
        url.searchParams.append('publishTo', parameters.publishTo);

        return url.toString();
    }

    return {
        buildUrl
    }
}

export const UrlBuilder = urlBuilder();
