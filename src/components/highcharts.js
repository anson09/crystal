import Highcharts from "highcharts/highstock";
import HighchartsMore from "highcharts/highcharts-more";
import "/assets/scss/highcharts.scss";

HighchartsMore(Highcharts);

Highcharts.setOptions({
  chart: {
    height: 500,
    styledMode: true
  },

  plotOptions: {
    series: {
      animation: false
    }
  },
  title: {
    text: null
  },
  yAxis: {
    plotLines: [
      {
        className: "plot-line-zero",
        value: 0
      }
    ]
  },
  credits: {
    text: "powered by ricequant",
    href: "https://www.ricequant.com"
  }
});

export { Highcharts };
