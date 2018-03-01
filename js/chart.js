$(document).ready(function() {
  initPieChart();
  initBarChart();
});


function initPieChart() {
  //-------------
  //- PIE CHART -
  //-------------
  var pieOptions = {
    responsive: true,
    segmentShowStroke: true,
    segmentStrokeColor: '#fff',
    segmentStrokeWidth: 1,
    animationSteps: 100,
    animationEasing: 'easeOutBounce',
    animateRotate: true,
    animateScale: true,
    maintainAspectRatio: true,
    legend: {
      display: true,
      position: 'right',
      labels: {
        boxWidth: 15,
        defaultFontColor: '#343a40',
        defaultFontSize: 11,
      }
    }
  }

  var ctx = document.getElementById("pieChart");
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [700, 500, 400, 600, 300, 100],
        backgroundColor: [
          '#f56954',
          '#00a65a',
          '#f39c12',
          '#00c0ef',
          '#3c8dbc',
          '#d2d6de'
        ],
      }],
      labels: [
        'Chrome',
        'IE',
        'FireFox',
        'Safari',
        'Opera',
        'Navigator'
      ]
    },
    options: pieOptions
  });
}

function initBarChart () {
  //-------------
  //- BAR CHART -
  //-------------
  var areaChartData = {
    labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label               : 'Electronics',
        backgroundColor     : '#f56954',
        data                : [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label               : 'Fashion',
        backgroundColor     : '#00a65a',
        data                : [28, 48, 40, 19, 86, 27, 90]
      },
      {
        label               : 'Foods',
        backgroundColor     : '#00c0ef',
        data                : [70, 60, 65, 50, 60, 70, 80]
      }
    ]
  }
  var barChartOptions = {
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero        : true,
    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines      : true,
    //String - Colour of the grid lines
    scaleGridLineColor      : 'rgba(0,0,0,.05)',
    //Number - Width of the grid lines
    scaleGridLineWidth      : 1,
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines  : true,
    //Boolean - If there is a stroke on each bar
    barShowStroke           : true,
    //Number - Pixel width of the bar stroke
    barStrokeWidth          : 2,
    //Number - Spacing between each of the X value sets
    barValueSpacing         : 5,
    //Number - Spacing between data sets within X values
    barDatasetSpacing       : 1,
    //String - A legend template
    responsive              : true,
    maintainAspectRatio     : true,
    legend: {
      display: true,
      position: 'right',
      labels: {
        boxWidth: 15,
        defaultFontColor: '#343a40',
        defaultFontSize: 11,
      }
    }
  }

  var ctxBar = document.getElementById("barChart");
  new Chart(ctxBar, {
    type: 'bar',
    data: areaChartData,
    options: barChartOptions
  });
}
