import 'bootstrap/dist/css/bootstrap.min.css';

import { React } from 'react'; 
import { Bar } from 'react-chartjs-2'

const data = {
  labels : ['Red', 'Blue', 'Yellow', 'Green'],
  datasets : [
    {
      label : 'Test page',
      data : [18, 5, 6, 8],
      backgroundColor : [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor : [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1,
    }
  ]
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  }
}

const VerticalBar = () => (
  <div>
    <div className='header'>
    </div>
    <Bar data={data} options={options} />
  </div>
)

export default VerticalBar;
