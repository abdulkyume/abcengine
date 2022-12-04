import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  const { graphdata } = props;
  var label_array = [];
  var data_array = [];
  for (var i = 1; i < graphdata.length; i++) {
    label_array.push(graphdata[i][0]);
    data_array.push(graphdata[i][1]);
  }
  if(label_array.length> 0){
    document.getElementById("graphs").classList.remove('hidden');
  }
  const data = {
    labels: label_array,
    datasets: [
      {
        label: "ABC Engine",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: data_array,
      },
    ],
  };
  return (
    <div className="hidden" id="graphs">
      <Line data={data} />
    </div>
  );
};

export default LineChart;
