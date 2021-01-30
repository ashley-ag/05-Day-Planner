$(document).ready(function() {
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var today = moment([]).format("dddd, MMMM Do YYYY");
$("#currentDay").text(today);

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I click into a time block
// THEN I can enter an event
var hoursInDay = ["5pm", "4pm", "3pm", "2pm", "1pm", "12pm", "11am", "10am", "9am", "8am"];


for (i=0; i < hoursInDay.length; i++) {
    var table = document.getElementById("pageTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell3Btn = document.createElement("button");
    cell3Btn.innerHTML = "Submit";
    cell3Btn.classList.add("btn-outline-success");
    cell1.innerHTML = hoursInDay[i];
    cell2.innerHTML = [];
    cell2.contentEditable = "true";
    cell3.append(cell3Btn);
    
    $(".btn-outline-success").on("click", function() {
        //console.log("yay");
        var storeCell1 = JSON.parse(cell1.val[i]);
        var storeCell2 = JSON.parse(cell2.val[i]);
        console.log(storeCell1, storeCell2);
    })


// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future


}



// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage


// WHEN I refresh the page
// THEN the saved events persist

});
