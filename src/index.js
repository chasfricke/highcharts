import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './index.css'


const data =
  [
    ['2000', 174],
    ['2001', 65],
    ['2002', 51],
    ['2003', 61],
    ['2004', 59],
    ['2005', 104],
    ['2006', 207],
    ['2007', 246],
    ['2008', 360],
    ['2009', 157],
    ['2010', 64],
    ['2011', 154],
    ['2012', 290],
    ['2013', 132],
    ['2014', 66],
    ['2015', 42],
    ['2016', 205],
    ['2017', 398],
    ['2018', 118],
    ['2019', 154],
    ['2020', 180],
  ]

const options = {
  chart: {
    type: 'column'
  },
  title: {
    text: '<h2 className="graph__title">U.S. Tornadoes</h2>',
    align: 'left',
    allowHTML: true,
    margin: 24,
    style: {
      color: '#777777',
      fontWeight: 'bold'
    }
  },
  subtitle: {
    text: 'January-March',
    align: 'left',
    style: {
      color: 'rgb(170, 170, 170)',
      fontWeight: 'bold',
      fontSize: '14px',
    }
  },
  xAxis: {
    title: { text: 'Year' },
    labels: {
      formatter: function () {
        if (data.length > 0) {
          return data[this.pos][0]
        } else { return '' }
      }
    }
  },
  yAxis: {
    title: { text: 'Tornado Count' }
  },
  series: [
    {
      data: data
    }
  ]
};



const App = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div >
);

render(<App />, document.getElementById('root'));