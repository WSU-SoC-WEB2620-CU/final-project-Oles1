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
})
