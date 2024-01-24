// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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

  const hourTextEl = [h9El, h10El, h11El, h12El, h1El, h2El, h3El, h4El, h5El];
  const hourIdArr = ['hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-1', 'hour-2', 'hour-3', 'hour-4', 'hour-5',];

  // loads and displays saved values on planner.
  for (i = 0; i < hourIdArr.length; i++) {
    hourTextEl[i].text(localStorage.getItem(hourIdArr[i]));
  }

  // uses the id in the containing time-block as key to save user input
  // and saves value to local storage.
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

  // displays the current date in the header of the page.
  todayEl.text(dayjs().format('dddd, MMMM Do'))

});

