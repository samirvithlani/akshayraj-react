import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import React from "react";
import { Bar, Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement);


export const ChartDemo = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
      },
    ],
  };
  return (
    <div style={{height:"400px",width:"400px"}}>
      {/* <Pie data={data} /> */}
      <Bar data={data} />
    </div>
  );
};
