document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    initialDate: "2023-09-07",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay"
    },
    events: [
      {
        title: "Roadside Cleanup",
        url:
          "https://docs.google.com/spreadsheets/d/1bELvP7F-tsRtU8fq1tm7noTfZvQnBLmsAt2R5HX0V_Y/edit",
        start: "2023-10-15"
      },
      {
        title: "Trick or Treat",
        url:
          "https://docs.google.com/spreadsheets/u/1/d/1li7kFdADyduXDwh6rrb2YpB2R_3R5WfkkzGbgrLvlLw/edit?usp=sharing",
        start: "2023-10-18"
      },
      {
        title: "Dunkfest",
        url:
          "https://www.signupgenius.com/go/10C0D4AA4A623ABF9CF8-45029592-dunk#/",
        start: "2023-10-20"
      },
      {
        title: "Family Art Night",
        url: "https://www.signupgenius.com/go/5080444AFAD2AA5FE3-family2#/",
        start: "2023-11-10"
      },
      {
        title: "Breakfast with Santa",
        url: "https://www.signupgenius.com/go/5080444AFAD2AA5FE3-breakfast1#/",
        start: "2023-12-02"
      },
      {
        title: "Holiday Lights",
        url: "https://www.signupgenius.com/go/5080444AFAD2AA5FE3-holiday2#/",
        start: "2023-12-07T12:00:00"
      },
      {
        title: "Cookies with Santa",
        url:
          "https://docs.google.com/spreadsheets/u/1/d/1ji5LBLyR7JuIgzn0RxS2WwhyYvigXT2X9UOoGuAEpmM/edit?usp=sharing",
        start: "2023-12-08T14:30:00"
      },
      {
        title: "Toys for Tots",
        url:
          "https://docs.google.com/spreadsheets/d/1BBxVmpmrSa7slJdRSsdHGmiBfIiSFvNFHFLG2BNt-io/edit#gid=0",
        start: "2023-12-09"
      }
    ]
  });

  calendar.render();
});