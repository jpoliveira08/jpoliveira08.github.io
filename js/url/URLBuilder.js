const urlBuilder = () => {
    const fillURLParameters = (url, parameters) => {
        Object.entries(parameters).forEach(entry => {
            const [parameter, value] = entry
            url.searchParams.append(parameter, value);
        });
    };

    const buildUrl = (urlBase, parameters) => {
        let url = new URL(urlBase);

        fillURLParameters(url, parameters);

        return url.toString();
    };

    return {
        buildUrl
    };
}

export const URLBuilder = urlBuilder();