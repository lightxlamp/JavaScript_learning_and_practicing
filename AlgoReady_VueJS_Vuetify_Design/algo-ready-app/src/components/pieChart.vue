<script>
import VueChartJs from "../../node_modules/vue-chartjs";

export default {
  extends: VueChartJs.Pie,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Value 30%",
          "Size 20%",
          "Risk 10%",
          "Quality 50%",
          "Momentum 10%"
        ],
        options: {
          legend: {
            labels: {
              fontColor: "#ffffff"
            },
            fontColor: "#ffffff"
          }
        },
        datasets: [
          {
            data: [30, 50, 10, 20, 10],
            backgroundColor: [
              "#2CA9CD",
              "#00BFC5",
              "#F085A5",
              "#14E1F3",
              "#EF3D48"
            ],
            hoverBackgroundColor: "grey",
            hoverBorderWidth: 1
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          labels: {
            fontColor: "#eaeaea"
          },
          position: 'left'
        }
      }
    );
  }
};
</script>


