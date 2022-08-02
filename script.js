var city = $("#city-name");
var temp = $("#temp");
var humidity = $("#humidity");
var wind = $("#wind-speed");
var uvIndex = $("#UV-index");
var searchCity = $("#city-input");
var searchBtn = $("#search-button");

var apiKey = "&appid=12978f3420559341dd3734cd18bacdec";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
searchCity + APIKey;
