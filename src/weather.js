function Weather() {
}
Weather.prototype.typeOf = function () {
  return "weather"
};

Weather.prototype.getWeather = function() {
  let weatherseed = Math.floor((Math.random() * 10) + 1);
  if (weatherseed == 10) {
    return "stormy";
  } else {
    return "sunny";
  }
};
