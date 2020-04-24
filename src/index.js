import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


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
    type: 'spline'
  },
  title: {
    text: 'U.S. Tornadoes: January - March'
  },
  xAxis: {
    title: { text: 'year' },
    labels: {
      formatter: function () {
        return data[this.pos][0]
      }
    }
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