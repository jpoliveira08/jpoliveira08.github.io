import { UrlBuilder } from "./url/UrlBuilder.js";

$('#validate_dou').click(() => {
    let publishFrom = $('#initial_date').val();
    let publishTo = $('#final_date').val();

    const parameters = {
        publishFrom: publishFrom.split('-').reverse().join('-'),
        publishTo: publishTo.split('-').reverse().join('-')
    };

    const advancedSearchDouUrl = UrlBuilder.buildUrl(parameters);

    window.open(advancedSearchDouUrl, '_blank');
});