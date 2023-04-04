import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.stock.react';
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;
 
class NumericAxisStockChart extends Component {
	constructor(props) {
	  super(props);
	  this.generateDataPoints = this.generateDataPoints.bind(this);
	}
	generateDataPoints(noOfDps) {
	  var xVal = 1, yVal = 100;
	  var dps = [];
	  for(var i = 0; i < noOfDps; i++) {
		yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
		dps.push({x: xVal,y: yVal});  
		xVal++;
	  }
	  return dps;
	}
	
	render() {
	  const options = {
		title:{
		  text:"React StockChart with Numeric Axis"
		},
		animationEnabled: true,
		exportEnabled: true,
		charts: [{
		  axisX: {
			crosshair: {
			  enabled: true,
			  snapToDataPoint: true
			}
		  },
		  axisY: {
			crosshair: {
			  enabled: true,
			  //snapToDataPoint: true
			}
		  },
		  data: [{
			type: "spline",
			dataPoints: this.generateDataPoints(10000)
		  }]
		}],    
		rangeSelector: {
		  inputFields: {
			startValue: 4000,
			endValue: 6000,
			valueFormatString: "###0"
		  },
		  
		  buttons: [{
			label: "1000",
			range: 1000,
			rangeType: "number"
		  },{
			label: "2000",
			range: 2000,
			rangeType: "number"
		  },{
			label: "5000",
			range: 5000,
			rangeType: "number"
		  },{
			label: "All",        
			rangeType: "all"
		  }]
		}
	  };
	  const containerProps = {
		width: "100%",
		height: "450px",
		margin: "auto"
	  };
	  return (
		<div>
			<h1>React StockChart with Numberic Axis</h1>
		   <CanvasJSStockChart containerProps={containerProps} options = {options}
				/* onRef = {ref => this.chart = ref} */
			/>
		</div>
	  );
	}
  }

export default NumericAxisStockChart;