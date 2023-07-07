// // const Habit = require('../../models/habit');
// import Habit from './habit';

// Habit.find()
//   .then(habits => {
//     console.log('All habits:', habits);
//     // Perform other operations with the queried habits

//     // Code for generating the calendar
//     var startDate = new Date(); // Start from today
//     startDate.setDate(startDate.getDate() - startDate.getDay()); // Adjust to start from Sunday
//     var calendarHead = document.getElementById('calendar-head');
//     var calendarBody = document.getElementById('calendar-body');

//     // Function to generate the calendar head with dates
//     function generateCalendarHead() {
//       var row = document.createElement('tr');

//       // Loop through each day of the week
//       for (var i = 0; i < 7; i++) {
//         var cell = document.createElement('th');
//         var dateCell = new Date(startDate);
//         dateCell.setDate(startDate.getDate() + i);

//         // Format the date as desired (dd-mm-yyyy)
//         var formattedDate =
//           ("0" + dateCell.getDate()).slice(-2) +
//           "-" +
//           ("0" + (dateCell.getMonth() + 1)).slice(-2) +
//           "-" +
//           dateCell.getFullYear();

//         cell.textContent = formattedDate;
//         row.appendChild(cell);
//       }

//       calendarHead.appendChild(row);
//     }

//     // Function to generate the calendar body with dummy text
//     // function generateCalendarBody() {
//     //   // Loop through each week
//     //   for (var i = 0; i < 7; i++) {
//     //     var row = document.createElement('tr');

//     //     // Loop through each day of the week
//     //     for (var j = 0; j < 7; j++) {
//     //       var cell = document.createElement('td');
//     //       cell.textContent = "Dummy Text"; // Replace with your desired content
//     //       row.appendChild(cell);
//     //     }

//     //     calendarBody.appendChild(row);
//     //     startDate.setDate(startDate.getDate() + 7);
//     //   }
//     // }
//     function generateCalendarBody() {
//         // Loop through each week
//         for (var i = 0; i < 7; i++) {
//           var row = document.createElement('tr');
      
//           // Loop through each day of the week
//           for (var j = 0; j < 7; j++) {
//             var cell = document.createElement('td');
      
//             // Get the corresponding habit for the current day (assuming habits is an array of habit objects)
//             var habit = habits.find(habit => {
//               // Adjust the condition based on your date comparison logic
//               var habitDate = new Date(habit.sdate);
//               var currentDate = new Date(startDate);
//               currentDate.setDate(startDate.getDate() + j + i * 7);
//               return habitDate.toDateString() === currentDate.toDateString();
//             });
      
//             if (habit) {
//               cell.textContent = habit.name;
//             } else {
//               cell.textContent = ''; // Set empty if no habit for the day
//             }
      
//             row.appendChild(cell);
//           }
      
//           calendarBody.appendChild(row);
//           startDate.setDate(startDate.getDate() + 7);
//         }
//       }

//     // Function to go to the previous week
//     function goToPreviousWeek() {
//       startDate.setDate(startDate.getDate() - 7);
//       generateCalendarHead();
//       generateCalendarBody();
//     }

//     // Function to go to the next week
//     function goToNextWeek() {
//       startDate.setDate(startDate.getDate() + 7);
//       generateNewPage(startDate);
//     }

//     // Function to generate a new HTML page with the next week's calendar
//     function generateNewPage(startDate) {
//       var formattedStartDate =
//         ("0" + startDate.getDate()).slice(-2) +
//         "-" +
//         ("0" + (startDate.getMonth() + 1)).slice(-2) +
//         "-" +
//         startDate.getFullYear();
//       var nextPageUrl = window.location.href.split("?")[0] + "?start=" + formattedStartDate;
//       window.location.href = nextPageUrl;
//     }

//     // Attach event listeners to the buttons
//     document
//       .getElementById("prev-week-btn")
//       .addEventListener("click", goToPreviousWeek);
//     document
//       .getElementById("next-week-btn")
//       .addEventListener("click", goToNextWeek);

//     // Check if a specific start date is provided in the URL query string
//     var urlParams = new URLSearchParams(window.location.search);
//     var startParam = urlParams.get("start");
//     if (startParam) {
//       var startDateParam = new Date(startParam);
//       if (!isNaN(startDateParam.getTime())) {
//         startDate = startDateParam;
//       }
//     }

//     // Generate the initial calendar view
//     generateCalendarHead();
//     generateCalendarBody();
//   })
//   .catch(error => {
//     console.error('Error querying habits:', error);
//   });
