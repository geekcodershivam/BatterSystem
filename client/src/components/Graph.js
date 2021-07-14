import React from 'react';
import { Line, Bar, Radar, Pie } from 'react-chartjs-2';

function Graph(props) {
  const graphType = function () {
    let type = props.type;
    if (type === 'Bar') return <Bar data={props.series} options={options} />;
    else if (type === 'Radar')
      return <Radar data={props.series} options={options} />;
    else if (type === 'Line')
      return <Line data={props.data} options={options} />;
    else if (type === 'Pie')
      return <Pie data={props.series} options={options} />;
  };

  const options = {
    scales: {
      x: {
        title: {
          font: {
            size: 12,
            weight: 'bold',
          },
        },

        ticks: {
          font: {
            size: 12,
            weight: 'bold',
          },
        },
      },

      y: {
        title: {
          font: {
            size: 12,
            weight: 'bold',
          },
        },

        ticks: {
          beginAtZero: false,
          font: {
            size: 12,
            weight: 'bold',
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      }
    },
  };

  return graphType();
}
export default Graph;