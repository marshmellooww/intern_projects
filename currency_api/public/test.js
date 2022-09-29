
var root = am5.Root.new("chartdiv");

// var chart = root.container.children.push(
//   am5percent.PieChart.new(
//     root, {}
//   )
// );

var chart = am5percent.PieChart.new(root, {});
root.container.children.push(chart);

// var series = chart.series.push(
//   am5percent.PieSeries.new(root, {})
// );
// series.setAll({
//   valueField: "value",
//   categoryField: "category"
// });

var series = chart.series.push(
  am5percent.PieSeries.new(
    root, {
      valueField: "value",
      categoryField: "category"
    }
  )
);

series.data.setAll([{
  category: "Research",
  value: 1000
}, {
  category: "Marketing",
  value: 1200
}, {
  category: "Sales",
  value: 850
}]);
