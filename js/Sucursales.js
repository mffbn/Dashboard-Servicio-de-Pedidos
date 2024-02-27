google.charts.load("current", {
    packages: ["geochart"],
    mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
  });
  google.charts.setOnLoadCallback(drawRegionsMap);
  
  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ["Pais", "Sucursales"],
      ["Honduras", 50],
      ["United States", 30],
      ["Brazil", 40],
      ["Argentina", 50],
      ["France", 60],
      ["Costa Rica", 70]
    ]);
  
    var options = {
        colorAxis: { colors: ['red'] } 

    };

    var chart = new google.visualization.GeoChart(
      document.getElementById("regions_div")
    );
  
    chart.draw(data, options);
  }
  