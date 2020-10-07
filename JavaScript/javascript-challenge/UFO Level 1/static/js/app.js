// from data.js
var tableData = data;

// Code for UFO Table
var tbody = d3.select("tbody");

console.log(tableData);

tableData.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Code for filter
// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'datetime'
var inputField = d3.select("#datetime");

// Event listener to handle change and click
inputField.on("change", handleClick);
button.on("click", handleClick);

// This function is triggered when the button is clicked
function handleClick() {
        d3.event.preventDefault();
        console.log(inputField.property("value"));
        var filteredTable = tableData.filter(ufoData => ufoData.datetime === inputField.property("value"));
        console.log(filteredTable);

        tbody.html("");

        filteredTable.forEach((ufoData) => {
            var row = tbody.append("tr");
            Object.entries(ufoData).forEach(([key, value]) => {
                var cell = row.append('td');
                cell.text(value)
            });
        });
    }