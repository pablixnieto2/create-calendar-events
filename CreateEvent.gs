function CreateEvent() {
  
  var spreadsheet = SpreadsheetApp.getActiveSheet();
  var calendarId = "smu.edu.sg_j6t7pmeq7214nqb72lf2j3vs7s@group.calendar.google.com";
  var eventCal = CalendarApp.getCalendarById(calendarId);
  var lr = spreadsheet.getLastRow();
  Logger.log(lr);
      
  var count = spreadsheet.getRange("A2:F"+lr+"").getValues(); 
  var count = spreadsheet.getRange("A2:F999").getValues(); 
  
    for (x=0; x<count.length; x++) {
      
      var shift = count[x];
      
      var summary = shift[0];
      var startTime = new Date(shift[1]);
      var endTime = new Date(shift[2]);
      var guests = shift[3];
      var description = shift[4];
      var location = shift[5];   
      var event = {
          'location': location,
          'description': description,
          'guests':guests +',',
          'sendInvites': 'True',
      }
      eventCal.createEvent(summary, startTime, endTime)
  }
}
This creates a tab on the sheets, as an UI to update your spreadsheets.

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Sync to Calendar')
      .addItem('Create Events Now', 'CreateEvent')
      .addToUi();
}
