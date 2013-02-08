$(document).ready(function() {

  $('.error').hide();

  // Event deletion tests
  var deleteUrl = $('#user-delete').attr("href");

  $('#user-delete').click(function() {
    $.ajax({
      type: "DELETE",
      url: deleteUrl,
      timeout: 5000,
      complete: function() {
        console.log('process complete');
      },
      success: function( data ) {
        console.log('process succesful');
        window.alert(data.message);
        window.location.href = data.location;
      },
      error: function() {
        console.log('process error');
      }
    });
    return false;
  });


  // Event creation POST call test
  $('#new-user-form-submit').click(function() {   
    var title         = $("#event-title").val(),
        orgaName      = $("#event-organiser-name").val(),
        orgaPosition  = $("#event-organiser-position").val(),
        description   = $("#event-details-desc").val(),
        category      = $("#event-details-cat").val(),
        adress        = $("#event-details-adress").val(),
        dayStart      = $("#event-day-start").val(),
        hourStart     = $("#event-hour-start").val(),
        dayEnd        = $("#event-day-end").val(),
        hourEnd       = $("#event-hour-end").val();

    var dataString = JSON.stringify( {"title" : title, "orgaName" : orgaName, "orgaPosition" : orgaPosition, "description":description, "category":category, "adress":adress, "dayStart":dayStart, "hourStart":hourStart, "dayEnd":dayEnd, "hourEnd":hourEnd } );  

    $.ajax({
      type: "POST",
      url: "/api/users/",
      dataType: "json",
      contentType: "application/json",
      data: dataString,
      timeout: 5000,
      complete: function() {
        console.log('process complete');
      },
      success: function( data ) {
        console.log('process succesful');
        window.location.href = data.location;
      },
      error: function() {
        console.log('process error');
      }
    });
    return false;
  });
});