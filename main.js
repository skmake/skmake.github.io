// data source

const url = "https://raw.githubusercontent.com/skmake/skmake.github.io/main/stasjon.csv";

// getData function

async function getData() {

    // Part 1: Get CSV

    // fetch data
    const response = await fetch(url);
    // process data
    const rawData = await response.text();
    // publish data
   

    // developer info
    console.log(rawData);
    console.log("rawData type: " + typeof rawData);



    // Part 2: CSV to JSON
    // credit: Stack Overflow User "Paath" on 2016-05-07

    // initialize variables
    let arrayOne = rawData.split("\r\n");
    let header = arrayOne[0].split(",");
    let noOfRow = arrayOne.length;
    let noOfCol = header.length;
    let jsonData = [];
    let i = 0;
    let j = 0;

    // for loop (rows)
    for (i = 1; i < noOfRow - 1; i++) {
        let obj = {};
        let myNewLine = arrayOne[i].split(",");
        // nested for loop (columns)
        for (j = 0; j < noOfCol; j++) {
            obj[header[j]] = myNewLine[j];
        };
        // generate JSON
        jsonData.push(obj);
    };

    // publish data


    // developer info
    console.log(jsonData);
    console.table(jsonData);
    console.log("jsonData type: " + typeof jsonData);

    // Part 3: JSON to HTML Table
    // credit: Stack Overflow User "ray hatfield" on 2015-05-26

    // initialize variables
    let children = jsonData;
    let table = document.createElement("table");

    // function to generate table header row
    function addHeaders(table, keys) {
        let row = table.insertRow();
        for (i = 0; i < keys.length; i++) {
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode(keys[i]));
        }
    }

    // generate table
    for (i = 0; i < children.length; i++) {
        let child = children[i];
        // generate header row
        if (i === 0) {
            addHeaders(table, Object.keys(child));
        }
        // generate data rows
        let row = table.insertRow();
        Object.keys(child).forEach(function (k) {
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode(child[k]));
        })
    }

    // publish table
    document.getElementById("container").appendChild(table);

    // developer info
    console.log("HTML table type: " + typeof table);



    


}

// call function

getData();
