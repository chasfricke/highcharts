import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './index.css'

//https://codepen.io/chasfricke/pen/BaoWPQJ
//https://www.ncdc.noaa.gov/sotc/tornadoes/202003

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
    ['2020', 180]
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
    labels: {
      formatter: function () {
        if (data[this.value]) {
          return data[this.value][0]
        } else { return '' }
      },
      style: {
        fontSize: '12px'
      }
    }
  },
  yAxis: {
    title: { text: 'Tornado Count' }
  },
  legend: {
    align: 'right',
    verticalAlign: 'top',
    symbolRadius: 0,
  },
  plotOptions: {
    column: {
      grouping: false,
    },
    series: {
      states: {
        inactive: {
          opacity: 1
        }
      }
    }

  },
  tooltip: {
    headerFormat: `<span>Jan-March {point.key}</span><br/>`,
    pointFormat: '{series.name}: {point.y}',
    followPointer: true,
  },

  series: [
    {
      data: data,
      name: 'Final Count',
    },
    {
      data: data[(data.length - 1)],
      name: 'Preliminary',
      pointStart: 19,
    }
  ]
};



const App = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div >
);

render(<App />, document.getElementById('root'));