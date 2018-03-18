/*

function convert(value, currencyFrom, currencyTo, date) {
    let convertedValue = value;
    if(RateExistence(currencyFrom) && RateExistence(currencyTo)){
        if(value > 0){
            if(valid date){
                let ifrom, ito;
                for(let i = 1; i < rates.length; i++){
                    if(valueOfRates[i][0] === currencyFrom)
                        ifrom = i;
                }
                for(let i = 1; i < rates.length; i++){
                    if(valueOfRates[0][i] === currencyTo)
                        ito = i;
                }

                convertedValue *= valueOfRates[ifrom][ito];
            }
        }
    }
    return convertedValue;
}

function RateExistence(rate) {
    if(rates.indexOf(rate) != -1)
        return true;
    else return false;
}
*/

$( document ).ready(() => {
    $("#datepicker").datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        changeYear: true,
        maxDate: 0,
        yearRange: "1999:2020",
        onSelect: () => {
            update_function();
        }
    });
});

function update_function() {
    let currentDate = $( "#datepicker" ).datepicker( "getDate" );
    fetch('getCurrancyRate?date=' + currentDate.toISOString()).then((response) => {
        return response.json();
    }).then((rates) => {
        clear_table();
        generate_table(rates);
    });
}

function calculate_table(array){
    const len = array.length + 1;
    let valueOfRates = new Array(len);
    for(let i = 1; i < len; i++){
        valueOfRates[i] = new Array(len);
        let row = findByID(array, i);
        for(let j = 1; j < len; j++){
            if(i === j){
                valueOfRates[i][j] = 1;
            } else if(i < j){
                let col = findByID(array, j);
                valueOfRates[i][j] = col.rate / row.rate;
            } else if(i > j){
                valueOfRates[i][j] = 1 / valueOfRates[j][i];
            }
        }
    }
    valueOfRates[0] = new Array(len);
    valueOfRates[0][0] = "Rates";
    for(let i = 0; i < array.length; i++){
        let a = array[i];
        valueOfRates[0][i + 1] = valueOfRates[i + 1][0] = a.curencyID;
    }
    return valueOfRates;
};

function clear_table() {
    let tbody = document.getElementById("ratesTableBody");
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}

function generate_table(array){
    let rows = array.length + 1; 
    let cols = array.length + 1;
    let table = $("#ratesTableBody");

    let table_data = calculate_table(array);

    for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(table_data[i][j]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        table.append(row);
    }
}

function findByID(array, id){
    for(let i = 0; i < array.length; i++){
        if(id === array[i].curencyID)
            return array[i];
    }
}
