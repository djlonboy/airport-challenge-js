describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it("returns stormy weather approximately one day in every 10", function() {
    let storeweather = [];
    let totalTimes = 10000;
    for(let times = 0; times < totalTimes; times++) {
      storeweather.push(weather.getWeather())
    };
    let sunny = storeweather.filter(x => x === "sunny").length;
    let stormy = storeweather.filter(x => x === "stormy").length;
    let percentage = stormy / sunny
    expect(percentage).toBeCloseTo(0.1, 1)

  });
});
