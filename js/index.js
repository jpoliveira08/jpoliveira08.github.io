import { AdvancedSearch } from "./dou/AdvancedSearch.js";
import { UsinasTable } from "./datatables/UsinasTable.js";

$('#check_dou').click(() => {
    if (isInvalidInputDate()) {
        alert('Preencha as datas de publicação');
        return;
    }

    const parameters = hydrateInputDateAmericanToBrazilian();

    window.open(
        AdvancedSearch.getPowerPlantReleasePage(parameters),
        '_blank'
    );
});

$('#load_table').click(() => {
    if (isInvalidInputDate()) {
        alert('Preencha as datas de publicação');
        return;
    }

    let $operationTypes = $('input[name="operation_type"]:checked');
    
    if ($operationTypes.length === 0) {
        alert('Selecione ao menos um tipo de operação');
        return;
    }
    
    let operationTypes = [];

    Object.values($operationTypes).forEach(element => {
        if (element.checked) {
            operationTypes.push(element.value);
        }
    });

    const parameters = {
        ...hydrateInputDateBrazilianToAmerican(),
        operationTypes: operationTypes
    }
    
    if ($.fn.DataTable.isDataTable('#table_usinas_operacao')) {
        $('#table_usinas_operacao').DataTable().destroy();
    }
    $('#table_usinas_operacao tbody').empty();

    UsinasTable.build(parameters);
});

function hydrateInputDateBrazilianToAmerican()
{
    let initialDate = $('#initial_date').val()
    let finalDate = $('#final_date').val()

    let firstDataPosition = initialDate.split('-')[0];

    if (firstDataPosition.length === 2) {
        initialDate = initialDate.split('-').reverse().join('-');
        finalDate = finalDate.split('-').reverse().join('-');
    }

    return {
        publishFrom: initialDate,
        publishTo: finalDate
    }
}

function hydrateInputDateAmericanToBrazilian() {
    let initialDate = $('#initial_date').val()
    let finalDate = $('#final_date').val()

    let firstDataPosition = initialDate.split('-')[0];

    if (firstDataPosition.length === 4) {
        initialDate = initialDate.split('-').reverse().join('-');
        finalDate = finalDate.split('-').reverse().join('-');
    }

    return {
        publishFrom: initialDate,
        publishTo: finalDate
    }
}

function isInvalidInputDate() {
    return !$('#initial_date').val() || !$('#final_date').val();
}