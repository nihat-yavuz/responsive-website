$(document).ready(function () {
  $("#newsform").submit(function (e) {
    //Get all fields value using jQury
    var email = $("#email").val();

    //create a datastring
    var dataString = "&email=" + email;
    // AJAX Code To Submit Form.
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "form_submit.php",
      data: dataString,
      success: function () {},
    });
    return false;
  });
});
