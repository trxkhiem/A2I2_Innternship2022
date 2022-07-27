function init(){
    getData();

};

window.onload = init;

async function getData() {
    var loader = document.getElementById("loader");
    var button = document.getElementById("refresh");
    var last_update = document.getElementById("last_update");

    // avoid duplicate table when refresh
    document.getElementById("table_example").innerHTML = '';

    // show loader and hide refresh button and last update text
    loader.style.display = "block";
    button.style.display = "none";
    last_update.style.display = "none";

    const response = await fetch('https://coronavirus.m.pipedream.net/')
    const result = await response.json()
    console.log(result)
    // hide loader and display button and last update text
    loader.style.display = "none";
    button.style.display = "block";
    last_update.style.display = "block";

    // get the summary stats only
    const data = result['summaryStats']

    last_update.innerHTML = "Data was updated: " + result['cache']['lastUpdated']

    // create objects
    let China = {
        "name": "China",
        "confirmed": data["china"]["confirmed"],
        "recovered": data["china"]["recovered"],
        "deaths":data["china"]["deaths"]
        }

    let nonChina = {
        "name": "Non China",
        "confirmed": data["nonChina"]["confirmed"],
        "recovered": data["nonChina"]["recovered"],
        "deaths":data["nonChina"]["deaths"]
    }

    let Global = {
        "name": "Global",
        "confirmed": data["global"]["confirmed"],
        "recovered": data["global"]["recovered"],
        "deaths":data["global"]["deaths"]
    }

    let areas = [Global, nonChina, China]

    // create table based on data retrieved from api
    createTable(areas)
    return true;
}



function createTable(areas){
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);

    // Adding the entire table to the body tag
    document.getElementById('table_example').appendChild(table);

    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Area";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Confirmed";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Recovered";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Deaths";


    // append the assigned data to first row
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    thead.appendChild(row_1);


    // Creating and adding data to each row of the table
    let row_2 = document.createElement('tr');
    let row_3 = document.createElement('tr');
    let row_4 = document.createElement('tr');

    // there will be 3 rows since we only need to present the data of China, Non China and Global
    let rows = [row_2, row_3, row_4]


    // run loop to add the values for each row
    for (let i = 0; i < areas.length; i++) {
        //add each value for the row
        let row_data_1 = document.createElement('td');
        row_data_1.innerHTML = areas[i].name;
        let row_data_2 = document.createElement('td');
        row_data_2.innerHTML = areas[i].confirmed;
        let row_data_3 = document.createElement('td');
        row_data_3.innerHTML = areas[i].recovered
        let row_data_4 = document.createElement('td');
        row_data_4.innerHTML = areas[i].deaths

        // add assigned data to each row
        rows[i].appendChild(row_data_1);
        rows[i].appendChild(row_data_2);
        rows[i].appendChild(row_data_3); 
        rows[i].appendChild(row_data_4);
        tbody.appendChild(rows[i]);
    }   

}