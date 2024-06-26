// Required by Webpack - do not touch
require.context("../fonts/", true, /\.(eot|ttf|woff|woff2)$/i)
require.context("../images/", true, /\.(png|jpg|jpeg|gif|svg)$/i)
require("../stylesheets/main.scss")

//TODO - Your ES6 JavaScript code (if any) goes here

import * as fontawesome from "@fortawesome/fontawesome-free/js/all"
import "bootstrap"
$(function () {
  // $("#datepicker").datepicker()
  $("#datepicker").datepicker({ minDate: +1, maxDate: "+1M +20D" })
  $("#timepicker").timepicker({
    timeFormat: "h:mm p",
    interval: 30,
    minTime: "08:30",
    maxTime: "5:00pm",
    defaultTime: "09",
    startTime: "08:00",
    dynamic: false,
    dropdown: true,
    scrollbar: true,
  })
})(
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  function () {
    "use strict"

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation")

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add("was-validated")
        },
        false
      )
    })
  }
)()
