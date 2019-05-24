// from data.js
var tableData = data;


var filter_table = d3.select("#filter-btn");

filter_table.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement1 = d3.select("#datetime");
    var inputElement2 = d3.select("#city");
    
    // Get the value property of the input element
    var inputValue1 = inputElement1.property("value");
    var inputValue2 = inputElement2.property("value");
    
    //console.log(inputValue);
    console.log(tableData);
    
    if (inputValue1 != "" && inputValue2 != "") {
        var filteredData = tableData.filter(event => event.datetime == inputValue1 && event.city == inputValue2.toLowerCase());
    } else if (inputValue1 == "" && inputValue2 != "") {
        var filteredData = tableData.filter(event => event.city == inputValue2.toLowerCase())
    } else {
        var filteredData = tableData.filter(event => event.datetime == inputValue1)
    };
        
    // Get a reference to the table body
    var tbody = d3.select("tbody");

    filteredData.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    console.log(filteredData);
});

