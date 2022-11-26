// data source

const url = "https://raw.githubusercontent.com/skmake/skmake.github.io/main/data.csv";

// getData function

async function getData() {



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
