import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import * as OperationManage from "../../../../../../../actions/operation_action";
import Store from '../../../../../../../server/store';
import { connect } from 'react-redux';
var SatisfactionScoreWeek = React.createClass({
		componentDidUpdate:function(){
			var customeSatisfactionScoreData = this.props.customeSatisfactionScoreData;
			 console.log('周满意度');
             console.log(customeSatisfactionScoreData);
if(customeSatisfactionScoreData.length>10||customeSatisfactionScoreData.length==10){
				var categoriesList = [
				                       customeSatisfactionScoreData[0].NAME,
				                       customeSatisfactionScoreData[1].NAME,
				                       customeSatisfactionScoreData[2].NAME, 
				                       customeSatisfactionScoreData[3].NAME, 
				                       customeSatisfactionScoreData[4].NAME,
				                       customeSatisfactionScoreData[5].NAME,
				                       customeSatisfactionScoreData[6].NAME,
				                       customeSatisfactionScoreData[7].NAME,
				                       customeSatisfactionScoreData[8].NAME,
				                       customeSatisfactionScoreData[9].NAME
				                      
				                      ]
					var dataList = [
									parseFloat(customeSatisfactionScoreData[0].COUNT),
									parseFloat(customeSatisfactionScoreData[1].COUNT),
									parseFloat(customeSatisfactionScoreData[2].COUNT), 
									parseFloat(customeSatisfactionScoreData[3].COUNT),
									parseFloat(customeSatisfactionScoreData[4].COUNT), 
									parseFloat(customeSatisfactionScoreData[5].COUNT),
									parseFloat(customeSatisfactionScoreData[6].COUNT),
									parseFloat(customeSatisfactionScoreData[7].COUNT),
									parseFloat(customeSatisfactionScoreData[8].COUNT),
									parseFloat(customeSatisfactionScoreData[9].COUNT)
					                ]
								$(function () {
				Highcharts.setOptions({
			        colors: ['#87a7f1','red']
			    });
    $('#containerScoreWeek').highcharts({
        chart: {
            type: 'bar'
        },
        xAxis: {
			categories: categoriesList,        
        },
        yAxis: {
            min: 0,
            labels: {
                overflow: 'false'
            }
//          categories:['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
        },

        
        
        tooltip: {
            valueSuffix: '分'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '分',
             data: dataList	           
        }]
    });
});
				}
			
						if(customeSatisfactionScoreData.length==9){
				var categoriesList = [
				                       customeSatisfactionScoreData[0].NAME,
				                       customeSatisfactionScoreData[1].NAME,
				                       customeSatisfactionScoreData[2].NAME, 
				                       customeSatisfactionScoreData[3].NAME, 
				                       customeSatisfactionScoreData[4].NAME,
				                       customeSatisfactionScoreData[5].NAME,
				                       customeSatisfactionScoreData[6].NAME,
				                       customeSatisfactionScoreData[7].NAME,
				                       customeSatisfactionScoreData[8].NAME
				                      
				                      ]
					var dataList = [
									parseFloat(customeSatisfactionScoreData[0].COUNT),
									parseFloat(customeSatisfactionScoreData[1].COUNT),
									parseFloat(customeSatisfactionScoreData[2].COUNT), 
									parseFloat(customeSatisfactionScoreData[3].COUNT),
									parseFloat(customeSatisfactionScoreData[4].COUNT), 
									parseFloat(customeSatisfactionScoreData[5].COUNT),
									parseFloat(customeSatisfactionScoreData[6].COUNT),
									parseFloat(customeSatisfactionScoreData[7].COUNT),
									parseFloat(customeSatisfactionScoreData[8].COUNT)
					                ]
								$(function () {
				Highcharts.setOptions({
			        colors: ['#87a7f1','red']
			    });
    $('#containerScoreWeek').highcharts({
        chart: {
            type: 'bar'
        },
        xAxis: {
			categories: categoriesList,        
        },
        yAxis: {
            min: 0,
            labels: {
                overflow: 'false'
            }
//          categories:['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
        },

        
        
        tooltip: {
            valueSuffix: '分'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '分',
             data: dataList	           
        }]
    });
});
				}
								if(customeSatisfactionScoreData.length==8){
				var categoriesList = [
				                       customeSatisfactionScoreData[0].NAME,
				                       customeSatisfactionScoreData[1].NAME,
				                       customeSatisfactionScoreData[2].NAME, 
				                       customeSatisfactionScoreData[3].NAME, 
				                       customeSatisfactionScoreData[4].NAME,
				                       customeSatisfactionScoreData[5].NAME,
				                       customeSatisfactionScoreData[6].NAME,
				                       customeSatisfactionScoreData[7].NAME
				                      
				                      ]
					var dataList = [
									parseFloat(customeSatisfactionScoreData[0].COUNT),
									parseFloat(customeSatisfactionScoreData[1].COUNT),
									parseFloat(customeSatisfactionScoreData[2].COUNT), 
									parseFloat(customeSatisfactionScoreData[3].COUNT),
									parseFloat(customeSatisfactionScoreData[4].COUNT), 
									parseFloat(customeSatisfactionScoreData[5].COUNT),
									parseFloat(customeSatisfactionScoreData[6].COUNT),
									parseFloat(customeSatisfactionScoreData[7].COUNT)
					                ]
								$(function () {
				Highcharts.setOptions({
			        colors: ['#87a7f1','red']
			    });
    $('#containerScoreWeek').highcharts({
        chart: {
            type: 'bar'
        },
        xAxis: {
			categories: categoriesList,        
        },
        yAxis: {
            min: 0,
            labels: {
                overflow: 'false'
            }
//          categories:['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
        },

        
        
        tooltip: {
            valueSuffix: '分'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '分',
             data: dataList	           
        }]
    });
});
				}
			if(customeSatisfactionScoreData.length==7){
				var categoriesList = [
				                       customeSatisfactionScoreData[0].NAME,
				                       customeSatisfactionScoreData[1].NAME,
				                       customeSatisfactionScoreData[2].NAME, 
				                       customeSatisfactionScoreData[3].NAME, 
				                       customeSatisfactionScoreData[4].NAME,
				                       customeSatisfactionScoreData[5].NAME,
				                       customeSatisfactionScoreData[6].NAME
				                      
				                      ]
					var dataList = [
									parseFloat(customeSatisfactionScoreData[0].COUNT),
									parseFloat(customeSatisfactionScoreData[1].COUNT),
									parseFloat(customeSatisfactionScoreData[2].COUNT), 
									parseFloat(customeSatisfactionScoreData[3].COUNT),
									parseFloat(customeSatisfactionScoreData[4].COUNT), 
									parseFloat(customeSatisfactionScoreData[5].COUNT),
									parseFloat(customeSatisfactionScoreData[6].COUNT)
					                ]
								$(function () {
				Highcharts.setOptions({
			        colors: ['#87a7f1','red']
			    });
    $('#containerScoreWeek').highcharts({
        chart: {
            type: 'bar'
        },
        xAxis: {
			categories: categoriesList,        
        },
        yAxis: {
            min: 0,
            labels: {
                overflow: 'false'
            }
//          categories:['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
        },

        
        
        tooltip: {
            valueSuffix: '分'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '分',
             data: dataList	           
        }]
    });
});
				}
						if(customeSatisfactionScoreData.length==6){
				var categoriesList = [
				                       customeSatisfactionScoreData[0].NAME,
				                       customeSatisfactionScoreData[1].NAME,
				                       customeSatisfactionScoreData[2].NAME, 
				                       customeSatisfactionScoreData[3].NAME, 
				                       customeSatisfactionScoreData[4].NAME,
				                       customeSatisfactionScoreData[5].NAME
				                      
				                      ]
					var dataList = [
									parseFloat(customeSatisfactionScoreData[0].COUNT),
									parseFloat(customeSatisfactionScoreData[1].COUNT),
									parseFloat(customeSatisfactionScoreData[2].COUNT), 
									parseFloat(customeSatisfactionScoreData[3].COUNT),
									parseFloat(customeSatisfactionScoreData[4].COUNT), 
									parseFloat(customeSatisfactionScoreData[5].COUNT)
					                ]
								$(function () {
				Highcharts.setOptions({
			        colors: ['#87a7f1','red']
			    });
    $('#containerScoreWeek').highcharts({
        chart: {
            type: 'bar'
        },
        xAxis: {
			categories: categoriesList,        
        },
        yAxis: {
            min: 0,
            labels: {
                overflow: 'false'
            }
//          categories:['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
        },

        
        
        tooltip: {
            valueSuffix: '分'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '分',
             data: dataList	           
        }]
    });
});
				}
					if(customeSatisfactionScoreData.length==5){
				var categoriesList = [
				                       customeSatisfactionScoreData[0].NAME,
				                       customeSatisfactionScoreData[1].NAME,
				                       customeSatisfactionScoreData[2].NAME, 
				                       customeSatisfactionScoreData[3].NAME, 
				                       customeSatisfactionScoreData[4].NAME
				                      
				                      ]
					var dataList = [
									parseFloat(customeSatisfactionScoreData[0].COUNT),
									parseFloat(customeSatisfactionScoreData[1].COUNT),
									parseFloat(customeSatisfactionScoreData[2].COUNT), 
									parseFloat(customeSatisfactionScoreData[3].COUNT),
									parseFloat(customeSatisfactionScoreData[4].COUNT)
					                ]
								$(function () {
				Highcharts.setOptions({
			        colors: ['#87a7f1','red']
			    });
    $('#containerScoreWeek').highcharts({
        chart: {
            type: 'bar'
        },
        xAxis: {
			categories: categoriesList,        
        },
        yAxis: {
            min: 0,
            labels: {
                overflow: 'false'
            }
//          categories:['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
        },

        
        
        tooltip: {
            valueSuffix: '分'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '分',
             data: dataList	           
        }]
    });
});
				}
							if(customeSatisfactionScoreData.length==4){
				var categoriesList = [
				                       customeSatisfactionScoreData[0].NAME,
				                       customeSatisfactionScoreData[1].NAME,
				                       customeSatisfactionScoreData[2].NAME, 
				                       customeSatisfactionScoreData[3].NAME
				                      
				                      ]
					var dataList = [
									parseFloat(customeSatisfactionScoreData[0].COUNT),
									parseFloat(customeSatisfactionScoreData[1].COUNT),
									parseFloat(customeSatisfactionScoreData[2].COUNT), 
									parseFloat(customeSatisfactionScoreData[3].COUNT)
					                ]
								$(function () {
				Highcharts.setOptions({
			        colors: ['#87a7f1','red']
			    });
    $('#containerScoreWeek').highcharts({
        chart: {
            type: 'bar'
        },
        xAxis: {
			categories: categoriesList,        
        },
        yAxis: {
            min: 0,
            labels: {
                overflow: 'false'
            }
//          categories:['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
        },

        
        
        tooltip: {
            valueSuffix: '分'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '分',
             data: dataList	           
        }]
    });
});
				}
			if(customeSatisfactionScoreData.length==3){
				var categoriesList = [
				                       customeSatisfactionScoreData[0].NAME,
				                       customeSatisfactionScoreData[1].NAME,
				                       customeSatisfactionScoreData[2].NAME
				                      
				                      ]
					var dataList = [
									parseFloat(customeSatisfactionScoreData[0].COUNT),
									parseFloat(customeSatisfactionScoreData[1].COUNT),
									parseFloat(customeSatisfactionScoreData[2].COUNT)
					                ]
								$(function () {
				Highcharts.setOptions({
			        colors: ['#87a7f1','red']
			    });
    $('#containerScoreWeek').highcharts({
        chart: {
            type: 'bar'
        },
        xAxis: {
			categories: categoriesList,        
        },
        yAxis: {
            min: 0,
            labels: {
                overflow: 'false'
            }
//          categories:['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
        },

        
        
        tooltip: {
            valueSuffix: '分'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '分',
             data: dataList	           
        }]
    });
});
		}
	},
  render: function() {
    return (
				<div className = 'completionUnitTopToady'>
                        <div  id="containerScoreWeek" style={{"width": "100%", "height": "310px","margin":"0 auto"}}></div>
			     
		        </div>	
  )}
});
   function mapStateToProps(state) {
	  const {customeSatisfactionScoreData} = state.operationReducer;	
		  return {
		  customeSatisfactionScoreData:customeSatisfactionScoreData
		  }
		}
export default connect(mapStateToProps)(SatisfactionScoreWeek)
//export default SatisfactionScoreWeek