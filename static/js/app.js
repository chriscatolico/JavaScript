// from data.js
var tableData = data;

// YOUR CODE HERE!
var filter_table = d3.select("#filter-btn");

filter_table.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(event => event.datetime === inputValue);
    
    // Get a reference to the table body
    var tbody = d3.select("tbody");

    filteredData.forEach(function(sighting) {
        console.log(sighting);
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

    console.log(filteredData);
});
    


