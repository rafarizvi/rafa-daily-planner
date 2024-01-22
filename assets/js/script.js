// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const todayEl = $('#currentDay');  //display date
const saveEl = $('.saveBtn'); //save button
const h9El = $('#h-9'); // hour 9
const h10El = $('#h-10'); // hour 10
const h11El = $('#h-11'); // hour 11
const h12El = $('#h-12'); // hour 12
const h1El = $('#h-1'); // hour 1
const h2El = $('#h-2'); // hour 2
const h3El = $('#h-3'); // hour 3
const h4El = $('#h-4'); // hour 4
const h5El = $('#h-5'); // hour 5

const descriptionEl = $('.description'); //class for all hours


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  const hourTextEl = [h9El, h10El, h11El, h12El, h1El, h2El, h3El, h4El, h5El];
  const hourIdArr = ['hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-1', 'hour-2', 'hour-3', 'hour-4', 'hour-5',];

  for (i = 0; i < hourIdArr.length; i++) {
    hourTextEl[i].text(localStorage.getItem(hourIdArr[i]));
  }

  // sends value to local storage.
  saveEl.on('click', function() {
      localStorage.setItem($(this).parent().attr('id'), $(this).parent().children().eq(1).val().trim())
  });

  // gets current hour in 24h time.
  const timeNow = dayjs().format('H');

  // compares current hour to the time-block hour, then adds past. present, future classes.
  for (i = 0; i < hourTextEl.length; i++){
    const timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    
    if (timeNow == timeArr[i]) {
      hourTextEl[i].parent().addClass('present');
    } else if (timeNow < timeArr[i]){
      hourTextEl[i].parent().addClass('future');
    } else {
      hourTextEl[i].parent().addClass('past');
    }
  }




  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // displays the current date in the header of the page.
  todayEl.text(dayjs().format('dddd, MMMM Do'))

});


