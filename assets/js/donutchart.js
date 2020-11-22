 google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Interest', 'Hours per Day'],
          ['Gaming',     11],
          ['Travel',      2],
          ['Sports',  2],
          ['Animation', 2],
          ['Coding',    7]
        ]);

        var options = {
          title: 'My interests',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
        var chart1 = new google.visualization.PieChart(document.getElementById('donutchart1'));
        chart1.draw(data, options);
      }