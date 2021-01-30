$(document).ready(function() {
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var today = moment([]);
$("#currentDay").text(today);

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
var hoursInDay = ["5pm", "4pm", "3pm", "2pm", "1pm", "12pm", "11am", "10am", "9am", "8am"];
var eventInput = [];
var locationInput =[];


for (i=0; i < hoursInDay.length; i++) {
    var table = document.getElementById("pageTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = hoursInDay[i];
    cell2.innerHTML = "";
    cell2.contentEditable = "true";

    
}


// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future


// WHEN I click into a time block
// THEN I can enter an event


// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage



// WHEN I refresh the page
// THEN the saved events persist

});
