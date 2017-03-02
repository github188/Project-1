import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
//import Chart from 'chart.js'
import * as dictActions from '../../../../../../../actions/dataDict_action';
import * as OperationManage from "../../../../../../../actions/operation_action";
import Store from '../../../../../../../server/store';
var SatisfactionScoreQuarter = React.createClass({
	
	
	componentDidUpdate:function(){
			 var SLAReachRateData = this.props.SLAReachRateData;		  
			 console.log('SLA季度满意度');
			 console.log(SLAReachRateData);
	
             
             if(SLAReachRateData.length==3){
            	 $('#SLAReachRateQuarterName3').css({'display':'none'})
            	 $('#SLAReachRateQuarterName4').css({'display':'none'})
            	 $('#SLAReachRateQuarterName5').css({'display':'none'})
          		 $('#SLAReachRateQuarterName6').css({'display':'none'})
          		 $('#SLAReachRateQuarterName7').css({'display':'none'})
          		 $('#SLAReachRateQuarterName8').css({'display':'none'})
          		 $('#SLAReachRateQuarterName9').css({'display':'none'})
          		 $('#SLAReachRateQuarter3').css({'display':'none'})
          		 $('#SLAReachRateQuarter4').css({'display':'none'})
          		 $('#SLAReachRateQuarter5').css({'display':'none'})
          		 $('#SLAReachRateQuarter6').css({'display':'none'})
          		 $('#SLAReachRateQuarter7').css({'display':'none'})
          		 $('#SLAReachRateQuarter8').css({'display':'none'})
          		 $('#SLAReachRateQuarter9').css({'display':'none'})
          		 $('#SLAReachRateQuarterName0').html(SLAReachRateData[0].NAME)
                 $('#SLAReachRateQuarterName1').html(SLAReachRateData[1].NAME)
                 $('#SLAReachRateQuarterName2').html(SLAReachRateData[2].NAME)
           		$(function () {
        			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
        			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
        				Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			    Highcharts.chart('SLAReachRateQuarter0', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 40
        			        },
        			        tooltip: {
        			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        			        },
        			        plotOptions: {
        			            pie: {
        			                dataLabels: {
        			                    enabled: true,
        			                    distance: 0,
        			                    style: {
        			                        fontWeight: 'bold',
        			                        borderColor: "red"
        			                    }
        			                },
        			                startAngle: -90,
        			                endAngle: 90,
        			                size: 120,
        			                center: ['50%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA季度达成率',
        			            innerSize: '50%',
        			            data: [
        			                 {
        			                    name: SLAReachRateData[0].NAME,
        			                    y: parseFloat(SLAReachRateData[0].SOCRE),
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			                    {
        			                    name: '未完成',
        			                    y: SLAReachRateData0reslut,
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			            ]
        			        }],
        			    });
        	 });
        	 	$(function () {
        	 			   var SLAReachRateData1 = SLAReachRateData[1].SOCRE
        			   var SLAReachRateData1reslut = 100-SLAReachRateData1;
        	 		Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			      Highcharts.chart('SLAReachRateQuarter1', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 40,
        			            style:{ "color": "#87a7f1", "fontSize": "12px" }
        			            
        			        },
        			        tooltip: {
        			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        			        },
        			        plotOptions: {
        			            pie: {
        			                dataLabels: {
        			                    enabled: true,
        			                    distance: 0,
        			                    style: {
        			                        fontWeight: 'bold',
        			                        borderColor: "red"
        			                    }
        			                },
        			                startAngle: -90,
        			                endAngle: 90,
        			                size: 120,
        			                center: ['50%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA季度达成率',
        			            innerSize: '50%',
        			            data: [
        			                 {
        			                    name: SLAReachRateData[1].NAME,
        			                    y: parseFloat(SLAReachRateData[1].SOCRE),
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			                    {
        			                    name: '未完成',
        			                    y: SLAReachRateData1reslut,
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			            ]
        			        }],
        			    });
        	 });
        	 	$(function () {
        	 			   var SLAReachRateData2 = SLAReachRateData[2].SOCRE
        			   var SLAReachRateData2reslut = 100-SLAReachRateData2;
        	 		Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			    Highcharts.chart('SLAReachRateQuarter2', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 40,
        			            style:{ "color": "#87a7f1", "fontSize": "12px" }
        			            
        			        },
        			        tooltip: {
        			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        			        },
        			        plotOptions: {
        			            pie: {
        			                dataLabels: {
        			                    enabled: true,
        			                    distance: 0,
        			                    style: {
        			                        fontWeight: 'bold',
        			                        borderColor: "red"
        			                    }
        			                },
        			                startAngle: -90,
        			                endAngle: 90,
        			                size: 120,
        			                center: ['50%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA季度达成率',
        			            innerSize: '50%',
        			            data: [
        			                 {
        			                    name: SLAReachRateData[2].NAME,
        			                    y: parseFloat(SLAReachRateData[2].SOCRE),
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			                    {
        			                    name: '未完成',
        			                    y: SLAReachRateData2reslut,
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			            ]
        			        }],
        			    });
        	 });
			  	} if(SLAReachRateData.length==4){
			  		$('#SLAReachRateQuarterName4').css({'display':'none'})
	            	 $('#SLAReachRateQuarterName5').css({'display':'none'})
	          		 $('#SLAReachRateQuarterName6').css({'display':'none'})
	          		 $('#SLAReachRateQuarterName7').css({'display':'none'})
	          		 $('#SLAReachRateQuarterName8').css({'display':'none'})
	          		 $('#SLAReachRateQuarterName9').css({'display':'none'})
	          		 $('#SLAReachRateQuarter4').css({'display':'none'})
          		 $('#SLAReachRateQuarter5').css({'display':'none'})
          		 $('#SLAReachRateQuarter6').css({'display':'none'})
          		 $('#SLAReachRateQuarter7').css({'display':'none'})
          		 $('#SLAReachRateQuarter8').css({'display':'none'})
          		 $('#SLAReachRateQuarter9').css({'display':'none'})
	          		$('#SLAReachRateQuarterName0').html(SLAReachRateData[0].NAME)
                 $('#SLAReachRateQuarterName1').html(SLAReachRateData[1].NAME)
                 $('#SLAReachRateQuarterName2').html(SLAReachRateData[2].NAME)
                 $('#SLAReachRateQuarterName3').html(SLAReachRateData[3].NAME)
          		$(function () {
       			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
       			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
       				Highcharts.setOptions({
       			        colors: ['#66c877','#87a7f1']
       			    });
       			    Highcharts.chart('SLAReachRateQuarter0', {
       			        chart: {
       			            plotBackgroundColor: null,
       			            plotBorderWidth: 0,
       			            plotShadow: false,
       			          
       			        },
       			        title: {
       			            text: '达成率',
       			            align: 'center',
       			            verticalAlign: 'middle',
       			            y: 40
       			        },
       			        tooltip: {
       			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       			        },
       			        plotOptions: {
       			            pie: {
       			                dataLabels: {
       			                    enabled: true,
       			                    distance: 0,
       			                    style: {
       			                        fontWeight: 'bold',
       			                        borderColor: "red"
       			                    }
       			                },
       			                startAngle: -90,
       			                endAngle: 90,
       			                size: 120,
       			                center: ['50%', '75%']
       			            }
       			        },
       			        series: [{
       			            type: 'pie',
       			            name: 'SLA季度达成率',
       			            innerSize: '50%',
       			            data: [
       			                 {
       			                    name: SLAReachRateData[0].NAME,
       			                    y: parseFloat(SLAReachRateData[0].SOCRE),
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			                    {
       			                    name: '未完成',
       			                    y: SLAReachRateData0reslut,
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			            ]
       			        }],
       			    });
       	 });
       	 	$(function () {
       	 			   var SLAReachRateData1 = SLAReachRateData[1].SOCRE
       			   var SLAReachRateData1reslut = 100-SLAReachRateData1;
       	 		Highcharts.setOptions({
       			        colors: ['#66c877','#87a7f1']
       			    });
       			      Highcharts.chart('SLAReachRateQuarter1', {
       			        chart: {
       			            plotBackgroundColor: null,
       			            plotBorderWidth: 0,
       			            plotShadow: false,
       			          
       			        },
       			        title: {
       			            text: '达成率',
       			            align: 'center',
       			            verticalAlign: 'middle',
       			            y: 40,
       			            style:{ "color": "#87a7f1", "fontSize": "12px" }
       			            
       			        },
       			        tooltip: {
       			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       			        },
       			        plotOptions: {
       			            pie: {
       			                dataLabels: {
       			                    enabled: true,
       			                    distance: 0,
       			                    style: {
       			                        fontWeight: 'bold',
       			                        borderColor: "red"
       			                    }
       			                },
       			                startAngle: -90,
       			                endAngle: 90,
       			                size: 120,
       			                center: ['50%', '75%']
       			            }
       			        },
       			        series: [{
       			            type: 'pie',
       			            name: 'SLA季度达成率',
       			            innerSize: '50%',
       			            data: [
       			                 {
       			                    name: SLAReachRateData[1].NAME,
       			                    y: parseFloat(SLAReachRateData[1].SOCRE),
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			                    {
       			                    name: '未完成',
       			                    y: SLAReachRateData1reslut,
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			            ]
       			        }],
       			    });
       	 });
       	 	$(function () {
       	 			   var SLAReachRateData2 = SLAReachRateData[2].SOCRE
       			   var SLAReachRateData2reslut = 100-SLAReachRateData2;
       	 		Highcharts.setOptions({
       			        colors: ['#66c877','#87a7f1']
       			    });
       			    Highcharts.chart('SLAReachRateQuarter2', {
       			        chart: {
       			            plotBackgroundColor: null,
       			            plotBorderWidth: 0,
       			            plotShadow: false,
       			          
       			        },
       			        title: {
       			            text: '达成率',
       			            align: 'center',
       			            verticalAlign: 'middle',
       			            y: 40,
       			            style:{ "color": "#87a7f1", "fontSize": "12px" }
       			            
       			        },
       			        tooltip: {
       			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       			        },
       			        plotOptions: {
       			            pie: {
       			                dataLabels: {
       			                    enabled: true,
       			                    distance: 0,
       			                    style: {
       			                        fontWeight: 'bold',
       			                        borderColor: "red"
       			                    }
       			                },
       			                startAngle: -90,
       			                endAngle: 90,
       			                size: 120,
       			                center: ['50%', '75%']
       			            }
       			        },
       			        series: [{
       			            type: 'pie',
       			            name: 'SLA季度达成率',
       			            innerSize: '50%',
       			            data: [
       			                 {
       			                    name: SLAReachRateData[2].NAME,
       			                    y: parseFloat(SLAReachRateData[2].SOCRE),
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			                    {
       			                    name: '未完成',
       			                    y: SLAReachRateData2reslut,
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			            ]
       			        }],
       			    });
       	 });
       	 	$(function () {
       	 			   var SLAReachRateData3 = SLAReachRateData[3].SOCRE
       			   var SLAReachRateData3reslut = 100-SLAReachRateData3;
       	 		Highcharts.setOptions({
       			        colors: ['#66c877','#87a7f1']
       			    });
       			    Highcharts.chart('SLAReachRateQuarter3', {
       			        chart: {
       			            plotBackgroundColor: null,
       			            plotBorderWidth: 0,
       			            plotShadow: false,
       			          
       			        },
       			        title: {
       			            text: '达成率',
       			            align: 'center',
       			            verticalAlign: 'middle',
       			            y: 40,
       			            style:{ "color": "#87a7f1", "fontSize": "12px" }
       			            
       			        },
       			        tooltip: {
       			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       			        },
       			        plotOptions: {
       			            pie: {
       			                dataLabels: {
       			                    enabled: true,
       			                    distance: 0,
       			                    style: {
       			                        fontWeight: 'bold',
       			                        borderColor: "red"
       			                    }
       			                },
       			                startAngle: -90,
       			                endAngle: 90,
       			                size: 120,
       			                center: ['50%', '75%']
       			            }
       			        },
       			        series: [{
       			            type: 'pie',
       			            name: 'SLA季度达成率',
       			            innerSize: '50%',
       			            data: [
       			               {
       			                    name: SLAReachRateData[3].NAME,
       			                    y: parseFloat(SLAReachRateData[3].SOCRE),
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			                    {
       			                    name: '未完成',
       			                    y: SLAReachRateData3reslut,
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			            ]
       			        }],
       			    });
       	 });
	           
				  	}
             if(SLAReachRateData.length==5){
            	 $('#SLAReachRateQuarterName5').css({'display':'none'})
          		 $('#SLAReachRateQuarterName6').css({'display':'none'})
          		 $('#SLAReachRateQuarterName7').css({'display':'none'})
          		 $('#SLAReachRateQuarterName8').css({'display':'none'})
          		 $('#SLAReachRateQuarterName9').css({'display':'none'})
          		 $('#SLAReachRateQuarter5').css({'display':'none'})
          		 $('#SLAReachRateQuarter6').css({'display':'none'})
          		 $('#SLAReachRateQuarter7').css({'display':'none'})
          		 $('#SLAReachRateQuarter8').css({'display':'none'})
          		 $('#SLAReachRateQuarter9').css({'display':'none'})
          		 $('#SLAReachRateQuarterName0').html(SLAReachRateData[0].NAME)
                 $('#SLAReachRateQuarterName1').html(SLAReachRateData[1].NAME)
                 $('#SLAReachRateQuarterName2').html(SLAReachRateData[2].NAME)
                 $('#SLAReachRateQuarterName3').html(SLAReachRateData[3].NAME)
                 $('#SLAReachRateQuarterName4').html(SLAReachRateData[4].NAME)
          		$(function () {
      			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
      			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
      				Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateQuarter0', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 40
      			        },
      			        tooltip: {
      			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      			        },
      			        plotOptions: {
      			            pie: {
      			                dataLabels: {
      			                    enabled: true,
      			                    distance: 0,
      			                    style: {
      			                        fontWeight: 'bold',
      			                        borderColor: "red"
      			                    }
      			                },
      			                startAngle: -90,
      			                endAngle: 90,
      			                size: 120,
      			                center: ['50%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA季度达成率',
      			            innerSize: '50%',
      			            data: [
      			                 {
      			                    name: SLAReachRateData[0].NAME,
      			                    y: parseFloat(SLAReachRateData[0].SOCRE),
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			                    {
      			                    name: '未完成',
      			                    y: SLAReachRateData0reslut,
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			            ]
      			        }],
      			    });
      	 });
      	 	$(function () {
      	 			   var SLAReachRateData1 = SLAReachRateData[1].SOCRE
      			   var SLAReachRateData1reslut = 100-SLAReachRateData1;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			      Highcharts.chart('SLAReachRateQuarter1', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 40,
      			            style:{ "color": "#87a7f1", "fontSize": "12px" }
      			            
      			        },
      			        tooltip: {
      			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      			        },
      			        plotOptions: {
      			            pie: {
      			                dataLabels: {
      			                    enabled: true,
      			                    distance: 0,
      			                    style: {
      			                        fontWeight: 'bold',
      			                        borderColor: "red"
      			                    }
      			                },
      			                startAngle: -90,
      			                endAngle: 90,
      			                size: 120,
      			                center: ['50%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA季度达成率',
      			            innerSize: '50%',
      			            data: [
      			                 {
      			                    name: SLAReachRateData[1].NAME,
      			                    y: parseFloat(SLAReachRateData[1].SOCRE),
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			                    {
      			                    name: '未完成',
      			                    y: SLAReachRateData1reslut,
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			            ]
      			        }],
      			    });
      	 });
      	 	$(function () {
      	 			   var SLAReachRateData2 = SLAReachRateData[2].SOCRE
      			   var SLAReachRateData2reslut = 100-SLAReachRateData2;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateQuarter2', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 40,
      			            style:{ "color": "#87a7f1", "fontSize": "12px" }
      			            
      			        },
      			        tooltip: {
      			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      			        },
      			        plotOptions: {
      			            pie: {
      			                dataLabels: {
      			                    enabled: true,
      			                    distance: 0,
      			                    style: {
      			                        fontWeight: 'bold',
      			                        borderColor: "red"
      			                    }
      			                },
      			                startAngle: -90,
      			                endAngle: 90,
      			                size: 120,
      			                center: ['50%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA季度达成率',
      			            innerSize: '50%',
      			            data: [
      			                 {
      			                    name: SLAReachRateData[2].NAME,
      			                    y: parseFloat(SLAReachRateData[2].SOCRE),
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			                    {
      			                    name: '未完成',
      			                    y: SLAReachRateData2reslut,
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			            ]
      			        }],
      			    });
      	 });
      	 	$(function () {
      	 			   var SLAReachRateData3 = SLAReachRateData[3].SOCRE
      			   var SLAReachRateData3reslut = 100-SLAReachRateData3;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateQuarter3', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 40,
      			            style:{ "color": "#87a7f1", "fontSize": "12px" }
      			            
      			        },
      			        tooltip: {
      			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      			        },
      			        plotOptions: {
      			            pie: {
      			                dataLabels: {
      			                    enabled: true,
      			                    distance: 0,
      			                    style: {
      			                        fontWeight: 'bold',
      			                        borderColor: "red"
      			                    }
      			                },
      			                startAngle: -90,
      			                endAngle: 90,
      			                size: 120,
      			                center: ['50%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA季度达成率',
      			            innerSize: '50%',
      			            data: [
      			               {
      			                    name: SLAReachRateData[3].NAME,
      			                    y: parseFloat(SLAReachRateData[3].SOCRE),
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			                    {
      			                    name: '未完成',
      			                    y: SLAReachRateData3reslut,
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			            ]
      			        }],
      			    });
      	 });
      	 	$(function () {
      	 			   var SLAReachRateData4 = SLAReachRateData[4].SOCRE
      			   var SLAReachRateData4reslut = 100-SLAReachRateData4;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateQuarter4', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 40,
      			            style:{ "color": "#87a7f1", "fontSize": "12px" }
      			            
      			        },
      			        tooltip: {
      			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      			        },
      			        plotOptions: {
      			            pie: {
      			                dataLabels: {
      			                    enabled: true,
      			                    distance: 0,
      			                    style: {
      			                        fontWeight: 'bold',
      			                        borderColor: "red"
      			                    }
      			                },
      			                startAngle: -90,
      			                endAngle: 90,
      			                size: 120,
      			                center: ['50%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA季度达成率',
      			            innerSize: '50%',
      			            data: [
      			                {
      			                    name: SLAReachRateData[4].NAME,
      			                    y: parseFloat(SLAReachRateData[4].SOCRE),
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			                    {
      			                    name: '未完成',
      			                    y: SLAReachRateData4reslut,
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			            ]
      			        }],
      			    });
      	 });
			  	}
         	if(SLAReachRateData.length==6){
         		$('#SLAReachRateQuarterName6').css({'display':'none'})
         		 $('#SLAReachRateQuarterName7').css({'display':'none'})
         		 $('#SLAReachRateQuarterName8').css({'display':'none'})
         		 $('#SLAReachRateQuarterName9').css({'display':'none'})
          		 $('#SLAReachRateQuarter6').css({'display':'none'})
          		 $('#SLAReachRateQuarter7').css({'display':'none'})
          		 $('#SLAReachRateQuarter8').css({'display':'none'})
          		 $('#SLAReachRateQuarter9').css({'display':'none'})
          		$('#SLAReachRateQuarterName0').html(SLAReachRateData[0].NAME)
                 $('#SLAReachRateQuarterName1').html(SLAReachRateData[1].NAME)
                 $('#SLAReachRateQuarterName2').html(SLAReachRateData[2].NAME)
                 $('#SLAReachRateQuarterName3').html(SLAReachRateData[3].NAME)
                 $('#SLAReachRateQuarterName4').html(SLAReachRateData[4].NAME)
                 $('#SLAReachRateQuarterName5').html(SLAReachRateData[5].NAME)
            		$(function () {
         			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
         			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
         				Highcharts.setOptions({
         			        colors: ['#66c877','#87a7f1']
         			    });
         			    Highcharts.chart('SLAReachRateQuarter0', {
         			        chart: {
         			            plotBackgroundColor: null,
         			            plotBorderWidth: 0,
         			            plotShadow: false,
         			          
         			        },
         			        title: {
         			            text: '达成率',
         			            align: 'center',
         			            verticalAlign: 'middle',
         			            y: 40
         			        },
         			        tooltip: {
         			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
         			        },
         			        plotOptions: {
         			            pie: {
         			                dataLabels: {
         			                    enabled: true,
         			                    distance: 0,
         			                    style: {
         			                        fontWeight: 'bold',
         			                        borderColor: "red"
         			                    }
         			                },
         			                startAngle: -90,
         			                endAngle: 90,
         			                size: 120,
         			                center: ['50%', '75%']
         			            }
         			        },
         			        series: [{
         			            type: 'pie',
         			            name: 'SLA季度达成率',
         			            innerSize: '50%',
         			            data: [
         			                 {
         			                    name: SLAReachRateData[0].NAME,
         			                    y: parseFloat(SLAReachRateData[0].SOCRE),
         			                    dataLabels: {
         			                        enabled: false
         			                    }
         			                },
         			                    {
         			                    name: '未完成',
         			                    y: SLAReachRateData0reslut,
         			                    dataLabels: {
         			                        enabled: false
         			                    }
         			                },
         			            ]
         			        }],
         			    });
         	 });
         	 	$(function () {
         	 			   var SLAReachRateData1 = SLAReachRateData[1].SOCRE
         			   var SLAReachRateData1reslut = 100-SLAReachRateData1;
         	 		Highcharts.setOptions({
         			        colors: ['#66c877','#87a7f1']
         			    });
         			      Highcharts.chart('SLAReachRateQuarter1', {
         			        chart: {
         			            plotBackgroundColor: null,
         			            plotBorderWidth: 0,
         			            plotShadow: false,
         			          
         			        },
         			        title: {
         			            text: '达成率',
         			            align: 'center',
         			            verticalAlign: 'middle',
         			            y: 40,
         			            style:{ "color": "#87a7f1", "fontSize": "12px" }
         			            
         			        },
         			        tooltip: {
         			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
         			        },
         			        plotOptions: {
         			            pie: {
         			                dataLabels: {
         			                    enabled: true,
         			                    distance: 0,
         			                    style: {
         			                        fontWeight: 'bold',
         			                        borderColor: "red"
         			                    }
         			                },
         			                startAngle: -90,
         			                endAngle: 90,
         			                size: 120,
         			                center: ['50%', '75%']
         			            }
         			        },
         			        series: [{
         			            type: 'pie',
         			            name: 'SLA季度达成率',
         			            innerSize: '50%',
         			            data: [
         			                 {
         			                    name: SLAReachRateData[1].NAME,
         			                    y: parseFloat(SLAReachRateData[1].SOCRE),
         			                    dataLabels: {
         			                        enabled: false
         			                    }
         			                },
         			                    {
         			                    name: '未完成',
         			                    y: SLAReachRateData1reslut,
         			                    dataLabels: {
         			                        enabled: false
         			                    }
         			                },
         			            ]
         			        }],
         			    });
         	 });
         	 	$(function () {
         	 			   var SLAReachRateData2 = SLAReachRateData[2].SOCRE
         			   var SLAReachRateData2reslut = 100-SLAReachRateData2;
         	 		Highcharts.setOptions({
         			        colors: ['#66c877','#87a7f1']
         			    });
         			    Highcharts.chart('SLAReachRateQuarter2', {
         			        chart: {
         			            plotBackgroundColor: null,
         			            plotBorderWidth: 0,
         			            plotShadow: false,
         			          
         			        },
         			        title: {
         			            text: '达成率',
         			            align: 'center',
         			            verticalAlign: 'middle',
         			            y: 40,
         			            style:{ "color": "#87a7f1", "fontSize": "12px" }
         			            
         			        },
         			        tooltip: {
         			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
         			        },
         			        plotOptions: {
         			            pie: {
         			                dataLabels: {
         			                    enabled: true,
         			                    distance: 0,
         			                    style: {
         			                        fontWeight: 'bold',
         			                        borderColor: "red"
         			                    }
         			                },
         			                startAngle: -90,
         			                endAngle: 90,
         			                size: 120,
         			                center: ['50%', '75%']
         			            }
         			        },
         			        series: [{
         			            type: 'pie',
         			            name: 'SLA季度达成率',
         			            innerSize: '50%',
         			            data: [
         			                 {
         			                    name: SLAReachRateData[2].NAME,
         			                    y: parseFloat(SLAReachRateData[2].SOCRE),
         			                    dataLabels: {
         			                        enabled: false
         			                    }
         			                },
         			                    {
         			                    name: '未完成',
         			                    y: SLAReachRateData2reslut,
         			                    dataLabels: {
         			                        enabled: false
         			                    }
         			                },
         			            ]
         			        }],
         			    });
         	 });
         	 	$(function () {
         	 			   var SLAReachRateData3 = SLAReachRateData[3].SOCRE
         			   var SLAReachRateData3reslut = 100-SLAReachRateData3;
         	 		Highcharts.setOptions({
         			        colors: ['#66c877','#87a7f1']
         			    });
         			    Highcharts.chart('SLAReachRateQuarter3', {
         			        chart: {
         			            plotBackgroundColor: null,
         			            plotBorderWidth: 0,
         			            plotShadow: false,
         			          
         			        },
         			        title: {
         			            text: '达成率',
         			            align: 'center',
         			            verticalAlign: 'middle',
         			            y: 40,
         			            style:{ "color": "#87a7f1", "fontSize": "12px" }
         			            
         			        },
         			        tooltip: {
         			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
         			        },
         			        plotOptions: {
         			            pie: {
         			                dataLabels: {
         			                    enabled: true,
         			                    distance: 0,
         			                    style: {
         			                        fontWeight: 'bold',
         			                        borderColor: "red"
         			                    }
         			                },
         			                startAngle: -90,
         			                endAngle: 90,
         			                size: 120,
         			                center: ['50%', '75%']
         			            }
         			        },
         			        series: [{
         			            type: 'pie',
         			            name: 'SLA季度达成率',
         			            innerSize: '50%',
         			            data: [
         			               {
         			                    name: SLAReachRateData[3].NAME,
         			                    y: parseFloat(SLAReachRateData[3].SOCRE),
         			                    dataLabels: {
         			                        enabled: false
         			                    }
         			                },
         			                    {
         			                    name: '未完成',
         			                    y: SLAReachRateData3reslut,
         			                    dataLabels: {
         			                        enabled: false
         			                    }
         			                },
         			            ]
         			        }],
         			    });
         	 });
         	 	$(function () {
         	 			   var SLAReachRateData4 = SLAReachRateData[4].SOCRE
         			   var SLAReachRateData4reslut = 100-SLAReachRateData4;
         	 		Highcharts.setOptions({
         			        colors: ['#66c877','#87a7f1']
         			    });
         			    Highcharts.chart('SLAReachRateQuarter4', {
         			        chart: {
         			            plotBackgroundColor: null,
         			            plotBorderWidth: 0,
         			            plotShadow: false,
         			          
         			        },
         			        title: {
         			            text: '达成率',
         			            align: 'center',
         			            verticalAlign: 'middle',
         			            y: 40,
         			            style:{ "color": "#87a7f1", "fontSize": "12px" }
         			            
         			        },
         			        tooltip: {
         			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
         			        },
         			        plotOptions: {
         			            pie: {
         			                dataLabels: {
         			                    enabled: true,
         			                    distance: 0,
         			                    style: {
         			                        fontWeight: 'bold',
         			                        borderColor: "red"
         			                    }
         			                },
         			                startAngle: -90,
         			                endAngle: 90,
         			                size: 120,
         			                center: ['50%', '75%']
         			            }
         			        },
         			        series: [{
         			            type: 'pie',
         			            name: 'SLA季度达成率',
         			            innerSize: '50%',
         			            data: [
         			                {
         			                    name: SLAReachRateData[4].NAME,
         			                    y: parseFloat(SLAReachRateData[4].SOCRE),
         			                    dataLabels: {
         			                        enabled: false
         			                    }
         			                },
         			                    {
         			                    name: '未完成',
         			                    y: SLAReachRateData4reslut,
         			                    dataLabels: {
         			                        enabled: false
         			                    }
         			                },
         			            ]
         			        }],
         			    });
         	 });
         	 	 	$(function () {
         	 	 			   var SLAReachRateData5 = SLAReachRateData[5].SOCRE
         			   var SLAReachRateData5reslut = 100-SLAReachRateData5;
         	 		Highcharts.setOptions({
         			        colors: ['#66c877','#87a7f1']
         			    });
         			    Highcharts.chart('SLAReachRateQuarter5', {
         			        chart: {
         			            plotBackgroundColor: null,
         			            plotBorderWidth: 0,
         			            plotShadow: false,
         			          
         			        },
         			        title: {
         			            text: '达成率',
         			            align: 'center',
         			            verticalAlign: 'middle',
         			            y: 40,
         			            style:{ "color": "#87a7f1", "fontSize": "12px" }
         			            
         			        },
         			        tooltip: {
         			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
         			        },
         			        plotOptions: {
         			            pie: {
         			                dataLabels: {
         			                    enabled: true,
         			                    distance: 0,
         			                    style: {
         			                        fontWeight: 'bold',
         			                        borderColor: "red"
         			                    }
         			                },
         			                startAngle: -90,
         			                endAngle: 90,
         			                size: 120,
         			                center: ['50%', '75%']
         			            }
         			        },
         			        series: [{
         			            type: 'pie',
         			            name: 'SLA季度达成率',
         			            innerSize: '50%',
         			            data: [
         			               {
         			                    name: SLAReachRateData[5].NAME,
         			                    y: parseFloat(SLAReachRateData[5].SOCRE),
         			                    dataLabels: {
         			                        enabled: false
         			                    }
         			                },
         			                    {
         			                    name: '未完成',
         			                    y: SLAReachRateData5reslut,
         			                    dataLabels: {
         			                        enabled: false
         			                    }
         			                },
         			            ]
         			        }],
         			    });
         	 });
			  	}
			  	if(SLAReachRateData.length==7){
			  		 $('#SLAReachRateQuarterName7').css({'display':'none'})
	         		 $('#SLAReachRateQuarterName8').css({'display':'none'})
	         		 $('#SLAReachRateQuarterName9').css({'display':'none'})
           		 $('#SLAReachRateQuarter7').css({'display':'none'})
          		 $('#SLAReachRateQuarter8').css({'display':'none'})
          		 $('#SLAReachRateQuarter9').css({'display':'none'})
           		 $('#SLAReachRateQuarterName0').html(SLAReachRateData[0].NAME)
                 $('#SLAReachRateQuarterName1').html(SLAReachRateData[1].NAME)
                 $('#SLAReachRateQuarterName2').html(SLAReachRateData[2].NAME)
                 $('#SLAReachRateQuarterName3').html(SLAReachRateData[3].NAME)
                 $('#SLAReachRateQuarterName4').html(SLAReachRateData[4].NAME)
                 $('#SLAReachRateQuarterName5').html(SLAReachRateData[5].NAME)
                 $('#SLAReachRateQuarterName6').html(SLAReachRateData[6].NAME)
           		$(function () {
        			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
        			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
        				Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			    Highcharts.chart('SLAReachRateQuarter0', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 40
        			        },
        			        tooltip: {
        			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        			        },
        			        plotOptions: {
        			            pie: {
        			                dataLabels: {
        			                    enabled: true,
        			                    distance: 0,
        			                    style: {
        			                        fontWeight: 'bold',
        			                        borderColor: "red"
        			                    }
        			                },
        			                startAngle: -90,
        			                endAngle: 90,
        			                size: 120,
        			                center: ['50%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA季度达成率',
        			            innerSize: '50%',
        			            data: [
        			                 {
        			                    name: SLAReachRateData[0].NAME,
        			                    y: parseFloat(SLAReachRateData[0].SOCRE),
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			                    {
        			                    name: '未完成',
        			                    y: SLAReachRateData0reslut,
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			            ]
        			        }],
        			    });
        	 });
        	 	$(function () {
        	 			   var SLAReachRateData1 = SLAReachRateData[1].SOCRE
        			   var SLAReachRateData1reslut = 100-SLAReachRateData1;
        	 		Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			      Highcharts.chart('SLAReachRateQuarter1', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 40,
        			            style:{ "color": "#87a7f1", "fontSize": "12px" }
        			            
        			        },
        			        tooltip: {
        			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        			        },
        			        plotOptions: {
        			            pie: {
        			                dataLabels: {
        			                    enabled: true,
        			                    distance: 0,
        			                    style: {
        			                        fontWeight: 'bold',
        			                        borderColor: "red"
        			                    }
        			                },
        			                startAngle: -90,
        			                endAngle: 90,
        			                size: 120,
        			                center: ['50%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA季度达成率',
        			            innerSize: '50%',
        			            data: [
        			                 {
        			                    name: SLAReachRateData[1].NAME,
        			                    y: parseFloat(SLAReachRateData[1].SOCRE),
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			                    {
        			                    name: '未完成',
        			                    y: SLAReachRateData1reslut,
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			            ]
        			        }],
        			    });
        	 });
        	 	$(function () {
        	 			   var SLAReachRateData2 = SLAReachRateData[2].SOCRE
        			   var SLAReachRateData2reslut = 100-SLAReachRateData2;
        	 		Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			    Highcharts.chart('SLAReachRateQuarter2', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 40,
        			            style:{ "color": "#87a7f1", "fontSize": "12px" }
        			            
        			        },
        			        tooltip: {
        			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        			        },
        			        plotOptions: {
        			            pie: {
        			                dataLabels: {
        			                    enabled: true,
        			                    distance: 0,
        			                    style: {
        			                        fontWeight: 'bold',
        			                        borderColor: "red"
        			                    }
        			                },
        			                startAngle: -90,
        			                endAngle: 90,
        			                size: 120,
        			                center: ['50%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA季度达成率',
        			            innerSize: '50%',
        			            data: [
        			                 {
        			                    name: SLAReachRateData[2].NAME,
        			                    y: parseFloat(SLAReachRateData[2].SOCRE),
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			                    {
        			                    name: '未完成',
        			                    y: SLAReachRateData2reslut,
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			            ]
        			        }],
        			    });
        	 });
        	 	$(function () {
        	 			   var SLAReachRateData3 = SLAReachRateData[3].SOCRE
        			   var SLAReachRateData3reslut = 100-SLAReachRateData3;
        	 		Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			    Highcharts.chart('SLAReachRateQuarter3', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 40,
        			            style:{ "color": "#87a7f1", "fontSize": "12px" }
        			            
        			        },
        			        tooltip: {
        			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        			        },
        			        plotOptions: {
        			            pie: {
        			                dataLabels: {
        			                    enabled: true,
        			                    distance: 0,
        			                    style: {
        			                        fontWeight: 'bold',
        			                        borderColor: "red"
        			                    }
        			                },
        			                startAngle: -90,
        			                endAngle: 90,
        			                size: 120,
        			                center: ['50%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA季度达成率',
        			            innerSize: '50%',
        			            data: [
        			               {
        			                    name: SLAReachRateData[3].NAME,
        			                    y: parseFloat(SLAReachRateData[3].SOCRE),
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			                    {
        			                    name: '未完成',
        			                    y: SLAReachRateData3reslut,
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			            ]
        			        }],
        			    });
        	 });
        	 	$(function () {
        	 			   var SLAReachRateData4 = SLAReachRateData[4].SOCRE
        			   var SLAReachRateData4reslut = 100-SLAReachRateData4;
        	 		Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			    Highcharts.chart('SLAReachRateQuarter4', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 40,
        			            style:{ "color": "#87a7f1", "fontSize": "12px" }
        			            
        			        },
        			        tooltip: {
        			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        			        },
        			        plotOptions: {
        			            pie: {
        			                dataLabels: {
        			                    enabled: true,
        			                    distance: 0,
        			                    style: {
        			                        fontWeight: 'bold',
        			                        borderColor: "red"
        			                    }
        			                },
        			                startAngle: -90,
        			                endAngle: 90,
        			                size: 120,
        			                center: ['50%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA季度达成率',
        			            innerSize: '50%',
        			            data: [
        			                {
        			                    name: SLAReachRateData[4].NAME,
        			                    y: parseFloat(SLAReachRateData[4].SOCRE),
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			                    {
        			                    name: '未完成',
        			                    y: SLAReachRateData4reslut,
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			            ]
        			        }],
        			    });
        	 });
        	 	 	$(function () {
        	 	 			   var SLAReachRateData5 = SLAReachRateData[5].SOCRE
        			   var SLAReachRateData5reslut = 100-SLAReachRateData5;
        	 		Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			    Highcharts.chart('SLAReachRateQuarter5', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 40,
        			            style:{ "color": "#87a7f1", "fontSize": "12px" }
        			            
        			        },
        			        tooltip: {
        			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        			        },
        			        plotOptions: {
        			            pie: {
        			                dataLabels: {
        			                    enabled: true,
        			                    distance: 0,
        			                    style: {
        			                        fontWeight: 'bold',
        			                        borderColor: "red"
        			                    }
        			                },
        			                startAngle: -90,
        			                endAngle: 90,
        			                size: 120,
        			                center: ['50%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA季度达成率',
        			            innerSize: '50%',
        			            data: [
        			               {
        			                    name: SLAReachRateData[5].NAME,
        			                    y: parseFloat(SLAReachRateData[5].SOCRE),
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			                    {
        			                    name: '未完成',
        			                    y: SLAReachRateData5reslut,
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			            ]
        			        }],
        			    });
        	 });
        	 	 	$(function () {
        	 	 			   var SLAReachRateData6= SLAReachRateData[6].SOCRE
        			   var SLAReachRateData6reslut = 100-SLAReachRateData6;
        	 		Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			    Highcharts.chart('SLAReachRateQuarter6', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 40,
        			            style:{ "color": "#87a7f1", "fontSize": "12px" }
        			            
        			        },
        			        tooltip: {
        			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        			        },
        			        plotOptions: {
        			            pie: {
        			                dataLabels: {
        			                    enabled: true,
        			                    distance: 0,
        			                    style: {
        			                        fontWeight: 'bold',
        			                        borderColor: "red"
        			                    }
        			                },
        			                startAngle: -90,
        			                endAngle: 90,
        			                size: 120,
        			                center: ['50%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA季度达成率',
        			            innerSize: '50%',
        			            data: [
        			                {
        			                    name: SLAReachRateData[6].NAME,
        			                    y: parseFloat(SLAReachRateData[6].SOCRE),
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			                    {
        			                    name: '未完成',
        			                    y: SLAReachRateData6reslut,
        			                    dataLabels: {
        			                        enabled: false
        			                    }
        			                },
        			            ]
        			        }],
        			    });
        	 });
			  	}
			  	  	if(SLAReachRateData.length==8){
			  	  	 $('#SLAReachRateQuarterName8').css({'display':'none'})
	         		 $('#SLAReachRateQuarterName9').css({'display':'none'})
           		 $('#SLAReachRateQuarter8').css({'display':'none'})
          		 $('#SLAReachRateQuarter9').css({'display':'none'})
           		 $('#SLAReachRateQuarterName0').html(SLAReachRateData[0].NAME)
                 $('#SLAReachRateQuarterName1').html(SLAReachRateData[1].NAME)
                 $('#SLAReachRateQuarterName2').html(SLAReachRateData[2].NAME)
                 $('#SLAReachRateQuarterName3').html(SLAReachRateData[3].NAME)
                 $('#SLAReachRateQuarterName4').html(SLAReachRateData[4].NAME)
                 $('#SLAReachRateQuarterName5').html(SLAReachRateData[5].NAME)
                 $('#SLAReachRateQuarterName6').html(SLAReachRateData[6].NAME)
                 $('#SLAReachRateQuarterName7').html(SLAReachRateData[7].NAME)
           		$(function () {
       			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
       			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
       				Highcharts.setOptions({
       			        colors: ['#66c877','#87a7f1']
       			    });
       			    Highcharts.chart('SLAReachRateQuarter0', {
       			        chart: {
       			            plotBackgroundColor: null,
       			            plotBorderWidth: 0,
       			            plotShadow: false,
       			          
       			        },
       			        title: {
       			            text: '达成率',
       			            align: 'center',
       			            verticalAlign: 'middle',
       			            y: 40
       			        },
       			        tooltip: {
       			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       			        },
       			        plotOptions: {
       			            pie: {
       			                dataLabels: {
       			                    enabled: true,
       			                    distance: 0,
       			                    style: {
       			                        fontWeight: 'bold',
       			                        borderColor: "red"
       			                    }
       			                },
       			                startAngle: -90,
       			                endAngle: 90,
       			                size: 120,
       			                center: ['50%', '75%']
       			            }
       			        },
       			        series: [{
       			            type: 'pie',
       			            name: 'SLA季度达成率',
       			            innerSize: '50%',
       			            data: [
       			                 {
       			                    name: SLAReachRateData[0].NAME,
       			                    y: parseFloat(SLAReachRateData[0].SOCRE),
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			                    {
       			                    name: '未完成',
       			                    y: SLAReachRateData0reslut,
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			            ]
       			        }],
       			    });
       	 });
       	 	$(function () {
       	 			   var SLAReachRateData1 = SLAReachRateData[1].SOCRE
       			   var SLAReachRateData1reslut = 100-SLAReachRateData1;
       	 		Highcharts.setOptions({
       			        colors: ['#66c877','#87a7f1']
       			    });
       			      Highcharts.chart('SLAReachRateQuarter1', {
       			        chart: {
       			            plotBackgroundColor: null,
       			            plotBorderWidth: 0,
       			            plotShadow: false,
       			          
       			        },
       			        title: {
       			            text: '达成率',
       			            align: 'center',
       			            verticalAlign: 'middle',
       			            y: 40,
       			            style:{ "color": "#87a7f1", "fontSize": "12px" }
       			            
       			        },
       			        tooltip: {
       			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       			        },
       			        plotOptions: {
       			            pie: {
       			                dataLabels: {
       			                    enabled: true,
       			                    distance: 0,
       			                    style: {
       			                        fontWeight: 'bold',
       			                        borderColor: "red"
       			                    }
       			                },
       			                startAngle: -90,
       			                endAngle: 90,
       			                size: 120,
       			                center: ['50%', '75%']
       			            }
       			        },
       			        series: [{
       			            type: 'pie',
       			            name: 'SLA季度达成率',
       			            innerSize: '50%',
       			            data: [
       			                 {
       			                    name: SLAReachRateData[1].NAME,
       			                    y: parseFloat(SLAReachRateData[1].SOCRE),
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			                    {
       			                    name: '未完成',
       			                    y: SLAReachRateData1reslut,
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			            ]
       			        }],
       			    });
       	 });
       	 	$(function () {
       	 			   var SLAReachRateData2 = SLAReachRateData[2].SOCRE
       			   var SLAReachRateData2reslut = 100-SLAReachRateData2;
       	 		Highcharts.setOptions({
       			        colors: ['#66c877','#87a7f1']
       			    });
       			    Highcharts.chart('SLAReachRateQuarter2', {
       			        chart: {
       			            plotBackgroundColor: null,
       			            plotBorderWidth: 0,
       			            plotShadow: false,
       			          
       			        },
       			        title: {
       			            text: '达成率',
       			            align: 'center',
       			            verticalAlign: 'middle',
       			            y: 40,
       			            style:{ "color": "#87a7f1", "fontSize": "12px" }
       			            
       			        },
       			        tooltip: {
       			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       			        },
       			        plotOptions: {
       			            pie: {
       			                dataLabels: {
       			                    enabled: true,
       			                    distance: 0,
       			                    style: {
       			                        fontWeight: 'bold',
       			                        borderColor: "red"
       			                    }
       			                },
       			                startAngle: -90,
       			                endAngle: 90,
       			                size: 120,
       			                center: ['50%', '75%']
       			            }
       			        },
       			        series: [{
       			            type: 'pie',
       			            name: 'SLA季度达成率',
       			            innerSize: '50%',
       			            data: [
       			                 {
       			                    name: SLAReachRateData[2].NAME,
       			                    y: parseFloat(SLAReachRateData[2].SOCRE),
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			                    {
       			                    name: '未完成',
       			                    y: SLAReachRateData2reslut,
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			            ]
       			        }],
       			    });
       	 });
       	 	$(function () {
       	 			   var SLAReachRateData3 = SLAReachRateData[3].SOCRE
       			   var SLAReachRateData3reslut = 100-SLAReachRateData3;
       	 		Highcharts.setOptions({
       			        colors: ['#66c877','#87a7f1']
       			    });
       			    Highcharts.chart('SLAReachRateQuarter3', {
       			        chart: {
       			            plotBackgroundColor: null,
       			            plotBorderWidth: 0,
       			            plotShadow: false,
       			          
       			        },
       			        title: {
       			            text: '达成率',
       			            align: 'center',
       			            verticalAlign: 'middle',
       			            y: 40,
       			            style:{ "color": "#87a7f1", "fontSize": "12px" }
       			            
       			        },
       			        tooltip: {
       			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       			        },
       			        plotOptions: {
       			            pie: {
       			                dataLabels: {
       			                    enabled: true,
       			                    distance: 0,
       			                    style: {
       			                        fontWeight: 'bold',
       			                        borderColor: "red"
       			                    }
       			                },
       			                startAngle: -90,
       			                endAngle: 90,
       			                size: 120,
       			                center: ['50%', '75%']
       			            }
       			        },
       			        series: [{
       			            type: 'pie',
       			            name: 'SLA季度达成率',
       			            innerSize: '50%',
       			            data: [
       			               {
       			                    name: SLAReachRateData[3].NAME,
       			                    y: parseFloat(SLAReachRateData[3].SOCRE),
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			                    {
       			                    name: '未完成',
       			                    y: SLAReachRateData3reslut,
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			            ]
       			        }],
       			    });
       	 });
       	 	$(function () {
       	 			   var SLAReachRateData4 = SLAReachRateData[4].SOCRE
       			   var SLAReachRateData4reslut = 100-SLAReachRateData4;
       	 		Highcharts.setOptions({
       			        colors: ['#66c877','#87a7f1']
       			    });
       			    Highcharts.chart('SLAReachRateQuarter4', {
       			        chart: {
       			            plotBackgroundColor: null,
       			            plotBorderWidth: 0,
       			            plotShadow: false,
       			          
       			        },
       			        title: {
       			            text: '达成率',
       			            align: 'center',
       			            verticalAlign: 'middle',
       			            y: 40,
       			            style:{ "color": "#87a7f1", "fontSize": "12px" }
       			            
       			        },
       			        tooltip: {
       			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       			        },
       			        plotOptions: {
       			            pie: {
       			                dataLabels: {
       			                    enabled: true,
       			                    distance: 0,
       			                    style: {
       			                        fontWeight: 'bold',
       			                        borderColor: "red"
       			                    }
       			                },
       			                startAngle: -90,
       			                endAngle: 90,
       			                size: 120,
       			                center: ['50%', '75%']
       			            }
       			        },
       			        series: [{
       			            type: 'pie',
       			            name: 'SLA季度达成率',
       			            innerSize: '50%',
       			            data: [
       			                {
       			                    name: SLAReachRateData[4].NAME,
       			                    y: parseFloat(SLAReachRateData[4].SOCRE),
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			                    {
       			                    name: '未完成',
       			                    y: SLAReachRateData4reslut,
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			            ]
       			        }],
       			    });
       	 });
       	 	 	$(function () {
       	 	 			   var SLAReachRateData5 = SLAReachRateData[5].SOCRE
       			   var SLAReachRateData5reslut = 100-SLAReachRateData5;
       	 		Highcharts.setOptions({
       			        colors: ['#66c877','#87a7f1']
       			    });
       			    Highcharts.chart('SLAReachRateQuarter5', {
       			        chart: {
       			            plotBackgroundColor: null,
       			            plotBorderWidth: 0,
       			            plotShadow: false,
       			          
       			        },
       			        title: {
       			            text: '达成率',
       			            align: 'center',
       			            verticalAlign: 'middle',
       			            y: 40,
       			            style:{ "color": "#87a7f1", "fontSize": "12px" }
       			            
       			        },
       			        tooltip: {
       			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       			        },
       			        plotOptions: {
       			            pie: {
       			                dataLabels: {
       			                    enabled: true,
       			                    distance: 0,
       			                    style: {
       			                        fontWeight: 'bold',
       			                        borderColor: "red"
       			                    }
       			                },
       			                startAngle: -90,
       			                endAngle: 90,
       			                size: 120,
       			                center: ['50%', '75%']
       			            }
       			        },
       			        series: [{
       			            type: 'pie',
       			            name: 'SLA季度达成率',
       			            innerSize: '50%',
       			            data: [
       			               {
       			                    name: SLAReachRateData[5].NAME,
       			                    y: parseFloat(SLAReachRateData[5].SOCRE),
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			                    {
       			                    name: '未完成',
       			                    y: SLAReachRateData5reslut,
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			            ]
       			        }],
       			    });
       	 });
       	 	 	$(function () {
       	 	 			   var SLAReachRateData6= SLAReachRateData[6].SOCRE
       			   var SLAReachRateData6reslut = 100-SLAReachRateData6;
       	 		Highcharts.setOptions({
       			        colors: ['#66c877','#87a7f1']
       			    });
       			    Highcharts.chart('SLAReachRateQuarter6', {
       			        chart: {
       			            plotBackgroundColor: null,
       			            plotBorderWidth: 0,
       			            plotShadow: false,
       			          
       			        },
       			        title: {
       			            text: '达成率',
       			            align: 'center',
       			            verticalAlign: 'middle',
       			            y: 40,
       			            style:{ "color": "#87a7f1", "fontSize": "12px" }
       			            
       			        },
       			        tooltip: {
       			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       			        },
       			        plotOptions: {
       			            pie: {
       			                dataLabels: {
       			                    enabled: true,
       			                    distance: 0,
       			                    style: {
       			                        fontWeight: 'bold',
       			                        borderColor: "red"
       			                    }
       			                },
       			                startAngle: -90,
       			                endAngle: 90,
       			                size: 120,
       			                center: ['50%', '75%']
       			            }
       			        },
       			        series: [{
       			            type: 'pie',
       			            name: 'SLA季度达成率',
       			            innerSize: '50%',
       			            data: [
       			                {
       			                    name: SLAReachRateData[6].NAME,
       			                    y: parseFloat(SLAReachRateData[6].SOCRE),
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			                    {
       			                    name: '未完成',
       			                    y: SLAReachRateData6reslut,
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			            ]
       			        }],
       			    });
       	 });
       	 	 	$(function () {
       	 	 			   var SLAReachRateData7= SLAReachRateData[7].SOCRE
       			   var SLAReachRateData7reslut = 100-SLAReachRateData7;
       	 		Highcharts.setOptions({
       			        colors: ['#66c877','#87a7f1']
       			    });
       			    Highcharts.chart('SLAReachRateQuarter7', {
       			        chart: {
       			            plotBackgroundColor: null,
       			            plotBorderWidth: 0,
       			            plotShadow: false,
       			          
       			        },
       			        title: {
       			            text: '达成率',
       			            align: 'center',
       			            verticalAlign: 'middle',
       			            y: 40,
       			            style:{ "color": "#87a7f1", "fontSize": "12px" }
       			            
       			        },
       			        tooltip: {
       			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       			        },
       			        plotOptions: {
       			            pie: {
       			                dataLabels: {
       			                    enabled: true,
       			                    distance: 0,
       			                    style: {
       			                        fontWeight: 'bold',
       			                        borderColor: "red"
       			                    }
       			                },
       			                startAngle: -90,
       			                endAngle: 90,
       			                size: 120,
       			                center: ['50%', '75%']
       			            }
       			        },
       			        series: [{
       			            type: 'pie',
       			            name: 'SLA季度达成率',
       			            innerSize: '50%',
       			            data: [
       			                {
       			                    name: SLAReachRateData[7].NAME,
       			                    y: parseFloat(SLAReachRateData[7].SOCRE),
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			                    {
       			                    name: '未完成',
       			                    y: SLAReachRateData7reslut,
       			                    dataLabels: {
       			                        enabled: false
       			                    }
       			                },
       			            ]
       			        }],
       			    });
       	 });
           }
			  	  	if(SLAReachRateData.length==9){
			  	  	 $('#SLAReachRateQuarterName9').css({'display':'none'})
           		     $('#SLAReachRateQuarter9').css({'display':'none'})
           		 $('#SLAReachRateQuarterName0').html(SLAReachRateData[0].NAME)
                 $('#SLAReachRateQuarterName1').html(SLAReachRateData[1].NAME)
                 $('#SLAReachRateQuarterName2').html(SLAReachRateData[2].NAME)
                 $('#SLAReachRateQuarterName3').html(SLAReachRateData[3].NAME)
                 $('#SLAReachRateQuarterName4').html(SLAReachRateData[4].NAME)
                 $('#SLAReachRateQuarterName5').html(SLAReachRateData[5].NAME)
                 $('#SLAReachRateQuarterName6').html(SLAReachRateData[6].NAME)
                 $('#SLAReachRateQuarterName7').html(SLAReachRateData[7].NAME)
                 $('#SLAReachRateQuarterName8').html(SLAReachRateData[8].NAME)
                 
          		$(function () {
      			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
      			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
      				Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateQuarter0', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 40
      			        },
      			        tooltip: {
      			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      			        },
      			        plotOptions: {
      			            pie: {
      			                dataLabels: {
      			                    enabled: true,
      			                    distance: 0,
      			                    style: {
      			                        fontWeight: 'bold',
      			                        borderColor: "red"
      			                    }
      			                },
      			                startAngle: -90,
      			                endAngle: 90,
      			                size: 120,
      			                center: ['50%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA季度达成率',
      			            innerSize: '50%',
      			            data: [
      			                 {
      			                    name: SLAReachRateData[0].NAME,
      			                    y: parseFloat(SLAReachRateData[0].SOCRE),
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			                    {
      			                    name: '未完成',
      			                    y: SLAReachRateData0reslut,
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			            ]
      			        }],
      			    });
      	 });
      	 	$(function () {
      	 			   var SLAReachRateData1 = SLAReachRateData[1].SOCRE
      			   var SLAReachRateData1reslut = 100-SLAReachRateData1;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			      Highcharts.chart('SLAReachRateQuarter1', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 40,
      			            style:{ "color": "#87a7f1", "fontSize": "12px" }
      			            
      			        },
      			        tooltip: {
      			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      			        },
      			        plotOptions: {
      			            pie: {
      			                dataLabels: {
      			                    enabled: true,
      			                    distance: 0,
      			                    style: {
      			                        fontWeight: 'bold',
      			                        borderColor: "red"
      			                    }
      			                },
      			                startAngle: -90,
      			                endAngle: 90,
      			                size: 120,
      			                center: ['50%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA季度达成率',
      			            innerSize: '50%',
      			            data: [
      			                 {
      			                    name: SLAReachRateData[1].NAME,
      			                    y: parseFloat(SLAReachRateData[1].SOCRE),
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			                    {
      			                    name: '未完成',
      			                    y: SLAReachRateData1reslut,
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			            ]
      			        }],
      			    });
      	 });
      	 	$(function () {
      	 			   var SLAReachRateData2 = SLAReachRateData[2].SOCRE
      			   var SLAReachRateData2reslut = 100-SLAReachRateData2;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateQuarter2', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 40,
      			            style:{ "color": "#87a7f1", "fontSize": "12px" }
      			            
      			        },
      			        tooltip: {
      			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      			        },
      			        plotOptions: {
      			            pie: {
      			                dataLabels: {
      			                    enabled: true,
      			                    distance: 0,
      			                    style: {
      			                        fontWeight: 'bold',
      			                        borderColor: "red"
      			                    }
      			                },
      			                startAngle: -90,
      			                endAngle: 90,
      			                size: 120,
      			                center: ['50%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA季度达成率',
      			            innerSize: '50%',
      			            data: [
      			                 {
      			                    name: SLAReachRateData[2].NAME,
      			                    y: parseFloat(SLAReachRateData[2].SOCRE),
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			                    {
      			                    name: '未完成',
      			                    y: SLAReachRateData2reslut,
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			            ]
      			        }],
      			    });
      	 });
      	 	$(function () {
      	 			   var SLAReachRateData3 = SLAReachRateData[3].SOCRE
      			   var SLAReachRateData3reslut = 100-SLAReachRateData3;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateQuarter3', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 40,
      			            style:{ "color": "#87a7f1", "fontSize": "12px" }
      			            
      			        },
      			        tooltip: {
      			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      			        },
      			        plotOptions: {
      			            pie: {
      			                dataLabels: {
      			                    enabled: true,
      			                    distance: 0,
      			                    style: {
      			                        fontWeight: 'bold',
      			                        borderColor: "red"
      			                    }
      			                },
      			                startAngle: -90,
      			                endAngle: 90,
      			                size: 120,
      			                center: ['50%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA季度达成率',
      			            innerSize: '50%',
      			            data: [
      			               {
      			                    name: SLAReachRateData[3].NAME,
      			                    y: parseFloat(SLAReachRateData[3].SOCRE),
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			                    {
      			                    name: '未完成',
      			                    y: SLAReachRateData3reslut,
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			            ]
      			        }],
      			    });
      	 });
      	 	$(function () {
      	 			   var SLAReachRateData4 = SLAReachRateData[4].SOCRE
      			   var SLAReachRateData4reslut = 100-SLAReachRateData4;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateQuarter4', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 40,
      			            style:{ "color": "#87a7f1", "fontSize": "12px" }
      			            
      			        },
      			        tooltip: {
      			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      			        },
      			        plotOptions: {
      			            pie: {
      			                dataLabels: {
      			                    enabled: true,
      			                    distance: 0,
      			                    style: {
      			                        fontWeight: 'bold',
      			                        borderColor: "red"
      			                    }
      			                },
      			                startAngle: -90,
      			                endAngle: 90,
      			                size: 120,
      			                center: ['50%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA季度达成率',
      			            innerSize: '50%',
      			            data: [
      			                {
      			                    name: SLAReachRateData[4].NAME,
      			                    y: parseFloat(SLAReachRateData[4].SOCRE),
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			                    {
      			                    name: '未完成',
      			                    y: SLAReachRateData4reslut,
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			            ]
      			        }],
      			    });
      	 });
      	 	 	$(function () {
      	 	 			   var SLAReachRateData5 = SLAReachRateData[5].SOCRE
      			   var SLAReachRateData5reslut = 100-SLAReachRateData5;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateQuarter5', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 40,
      			            style:{ "color": "#87a7f1", "fontSize": "12px" }
      			            
      			        },
      			        tooltip: {
      			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      			        },
      			        plotOptions: {
      			            pie: {
      			                dataLabels: {
      			                    enabled: true,
      			                    distance: 0,
      			                    style: {
      			                        fontWeight: 'bold',
      			                        borderColor: "red"
      			                    }
      			                },
      			                startAngle: -90,
      			                endAngle: 90,
      			                size: 120,
      			                center: ['50%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA季度达成率',
      			            innerSize: '50%',
      			            data: [
      			               {
      			                    name: SLAReachRateData[5].NAME,
      			                    y: parseFloat(SLAReachRateData[5].SOCRE),
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			                    {
      			                    name: '未完成',
      			                    y: SLAReachRateData5reslut,
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			            ]
      			        }],
      			    });
      	 });
      	 	 	$(function () {
      	 	 			   var SLAReachRateData6= SLAReachRateData[6].SOCRE
      			   var SLAReachRateData6reslut = 100-SLAReachRateData6;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateQuarter6', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 40,
      			            style:{ "color": "#87a7f1", "fontSize": "12px" }
      			            
      			        },
      			        tooltip: {
      			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      			        },
      			        plotOptions: {
      			            pie: {
      			                dataLabels: {
      			                    enabled: true,
      			                    distance: 0,
      			                    style: {
      			                        fontWeight: 'bold',
      			                        borderColor: "red"
      			                    }
      			                },
      			                startAngle: -90,
      			                endAngle: 90,
      			                size: 120,
      			                center: ['50%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA季度达成率',
      			            innerSize: '50%',
      			            data: [
      			                {
      			                    name: SLAReachRateData[6].NAME,
      			                    y: parseFloat(SLAReachRateData[6].SOCRE),
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			                    {
      			                    name: '未完成',
      			                    y: SLAReachRateData6reslut,
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			            ]
      			        }],
      			    });
      	 });
      	 	 	$(function () {
      	 	 			   var SLAReachRateData7= SLAReachRateData[7].SOCRE
      			   var SLAReachRateData7reslut = 100-SLAReachRateData7;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateQuarter7', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 40,
      			            style:{ "color": "#87a7f1", "fontSize": "12px" }
      			            
      			        },
      			        tooltip: {
      			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      			        },
      			        plotOptions: {
      			            pie: {
      			                dataLabels: {
      			                    enabled: true,
      			                    distance: 0,
      			                    style: {
      			                        fontWeight: 'bold',
      			                        borderColor: "red"
      			                    }
      			                },
      			                startAngle: -90,
      			                endAngle: 90,
      			                size: 120,
      			                center: ['50%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA季度达成率',
      			            innerSize: '50%',
      			            data: [
      			                {
      			                    name: SLAReachRateData[7].NAME,
      			                    y: parseFloat(SLAReachRateData[7].SOCRE),
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			                    {
      			                    name: '未完成',
      			                    y: SLAReachRateData7reslut,
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			            ]
      			        }],
      			    });
      	 });
      	 	 	$(function () {
      		   var SLAReachRateData8= SLAReachRateData[8].SOCRE
      			   var SLAReachRateData8reslut = 100-SLAReachRateData8;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateQuarter8', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 40,
      			            style:{ "color": "#87a7f1", "fontSize": "12px" }
      			            
      			        },
      			        tooltip: {
      			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      			        },
      			        plotOptions: {
      			            pie: {
      			                dataLabels: {
      			                    enabled: true,
      			                    distance: 0,
      			                    style: {
      			                        fontWeight: 'bold',
      			                        borderColor: "red"
      			                    }
      			                },
      			                startAngle: -90,
      			                endAngle: 90,
                                   size: 120,
      			                center: ['50%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA季度达成率',
      			            innerSize: '50%',
      			            data: [
      			               {
      			                    name: SLAReachRateData[8].NAME,
      			                    y: parseFloat(SLAReachRateData[8].SOCRE),
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			                    {
      			                    name: '未完成',
      			                    y: SLAReachRateData8reslut,
      			                    dataLabels: {
      			                        enabled: false
      			                    }
      			                },
      			            ]
      			        }],
      			    });
      	 });
           }
			  if(SLAReachRateData.length==10||SLAReachRateData.length>10){
           		 $('#SLAReachRateQuarterName0').html(SLAReachRateData[0].NAME)
                 $('#SLAReachRateQuarterName1').html(SLAReachRateData[1].NAME)
                 $('#SLAReachRateQuarterName2').html(SLAReachRateData[2].NAME)
                 $('#SLAReachRateQuarterName3').html(SLAReachRateData[3].NAME)
                 $('#SLAReachRateQuarterName4').html(SLAReachRateData[4].NAME)
                 $('#SLAReachRateQuarterName5').html(SLAReachRateData[5].NAME)
                 $('#SLAReachRateQuarterName6').html(SLAReachRateData[6].NAME)
                 $('#SLAReachRateQuarterName7').html(SLAReachRateData[7].NAME)
                 $('#SLAReachRateQuarterName8').html(SLAReachRateData[8].NAME)
                 $('#SLAReachRateQuarterName9').html(SLAReachRateData[9].NAME)	
         		$(function () {
     			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
     			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
     				Highcharts.setOptions({
     			        colors: ['#66c877','#87a7f1']
     			    });
     			    Highcharts.chart('SLAReachRateQuarter0', {
     			        chart: {
     			            plotBackgroundColor: null,
     			            plotBorderWidth: 0,
     			            plotShadow: false,
     			          
     			        },
     			        title: {
     			            text: '达成率',
     			            align: 'center',
     			            verticalAlign: 'middle',
     			            y: 40
     			        },
     			        tooltip: {
     			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     			        },
     			        plotOptions: {
     			            pie: {
     			                dataLabels: {
     			                    enabled: true,
     			                    distance: 0,
     			                    style: {
     			                        fontWeight: 'bold',
     			                        borderColor: "red"
     			                    }
     			                },
     			                startAngle: -90,
     			                endAngle: 90,
     			                size: 120,
     			                center: ['50%', '75%']
     			            }
     			        },
     			        series: [{
     			            type: 'pie',
     			            name: 'SLA季度达成率',
     			            innerSize: '50%',
     			            data: [
     			                 {
     			                    name: SLAReachRateData[0].NAME,
     			                    y: parseFloat(SLAReachRateData[0].SOCRE),
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			                    {
     			                    name: '未完成',
     			                    y: SLAReachRateData0reslut,
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			            ]
     			        }],
     			    });
     	 });
     	 	$(function () {
     	 			   var SLAReachRateData1 = SLAReachRateData[1].SOCRE
     			   var SLAReachRateData1reslut = 100-SLAReachRateData1;
     	 		Highcharts.setOptions({
     			        colors: ['#66c877','#87a7f1']
     			    });
     			      Highcharts.chart('SLAReachRateQuarter1', {
     			        chart: {
     			            plotBackgroundColor: null,
     			            plotBorderWidth: 0,
     			            plotShadow: false,
     			          
     			        },
     			        title: {
     			            text: '达成率',
     			            align: 'center',
     			            verticalAlign: 'middle',
     			            y: 40,
     			            style:{ "color": "#87a7f1", "fontSize": "12px" }
     			            
     			        },
     			        tooltip: {
     			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     			        },
     			        plotOptions: {
     			            pie: {
     			                dataLabels: {
     			                    enabled: true,
     			                    distance: 0,
     			                    style: {
     			                        fontWeight: 'bold',
     			                        borderColor: "red"
     			                    }
     			                },
     			                startAngle: -90,
     			                endAngle: 90,
     			                size: 120,
     			                center: ['50%', '75%']
     			            }
     			        },
     			        series: [{
     			            type: 'pie',
     			            name: 'SLA季度达成率',
     			            innerSize: '50%',
     			            data: [
     			                 {
     			                    name: SLAReachRateData[1].NAME,
     			                    y: parseFloat(SLAReachRateData[1].SOCRE),
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			                    {
     			                    name: '未完成',
     			                    y: SLAReachRateData1reslut,
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			            ]
     			        }],
     			    });
     	 });
     	 	$(function () {
     	 			   var SLAReachRateData2 = SLAReachRateData[2].SOCRE
     			   var SLAReachRateData2reslut = 100-SLAReachRateData2;
     	 		Highcharts.setOptions({
     			        colors: ['#66c877','#87a7f1']
     			    });
     			    Highcharts.chart('SLAReachRateQuarter2', {
     			        chart: {
     			            plotBackgroundColor: null,
     			            plotBorderWidth: 0,
     			            plotShadow: false,
     			          
     			        },
     			        title: {
     			            text: '达成率',
     			            align: 'center',
     			            verticalAlign: 'middle',
     			            y: 40,
     			            style:{ "color": "#87a7f1", "fontSize": "12px" }
     			            
     			        },
     			        tooltip: {
     			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     			        },
     			        plotOptions: {
     			            pie: {
     			                dataLabels: {
     			                    enabled: true,
     			                    distance: 0,
     			                    style: {
     			                        fontWeight: 'bold',
     			                        borderColor: "red"
     			                    }
     			                },
     			                startAngle: -90,
     			                endAngle: 90,
     			                size: 120,
     			                center: ['50%', '75%']
     			            }
     			        },
     			        series: [{
     			            type: 'pie',
     			            name: 'SLA季度达成率',
     			            innerSize: '50%',
     			            data: [
     			                 {
     			                    name: SLAReachRateData[2].NAME,
     			                    y: parseFloat(SLAReachRateData[2].SOCRE),
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			                    {
     			                    name: '未完成',
     			                    y: SLAReachRateData2reslut,
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			            ]
     			        }],
     			    });
     	 });
     	 	$(function () {
     	 			   var SLAReachRateData3 = SLAReachRateData[3].SOCRE
     			   var SLAReachRateData3reslut = 100-SLAReachRateData3;
     	 		Highcharts.setOptions({
     			        colors: ['#66c877','#87a7f1']
     			    });
     			    Highcharts.chart('SLAReachRateQuarter3', {
     			        chart: {
     			            plotBackgroundColor: null,
     			            plotBorderWidth: 0,
     			            plotShadow: false,
     			          
     			        },
     			        title: {
     			            text: '达成率',
     			            align: 'center',
     			            verticalAlign: 'middle',
     			            y: 40,
     			            style:{ "color": "#87a7f1", "fontSize": "12px" }
     			            
     			        },
     			        tooltip: {
     			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     			        },
     			        plotOptions: {
     			            pie: {
     			                dataLabels: {
     			                    enabled: true,
     			                    distance: 0,
     			                    style: {
     			                        fontWeight: 'bold',
     			                        borderColor: "red"
     			                    }
     			                },
     			                startAngle: -90,
     			                endAngle: 90,
     			                size: 120,
     			                center: ['50%', '75%']
     			            }
     			        },
     			        series: [{
     			            type: 'pie',
     			            name: 'SLA季度达成率',
     			            innerSize: '50%',
     			            data: [
     			               {
     			                    name: SLAReachRateData[3].NAME,
     			                    y: parseFloat(SLAReachRateData[3].SOCRE),
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			                    {
     			                    name: '未完成',
     			                    y: SLAReachRateData3reslut,
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			            ]
     			        }],
     			    });
     	 });
     	 	$(function () {
     	 			   var SLAReachRateData4 = SLAReachRateData[4].SOCRE
     			   var SLAReachRateData4reslut = 100-SLAReachRateData4;
     	 		Highcharts.setOptions({
     			        colors: ['#66c877','#87a7f1']
     			    });
     			    Highcharts.chart('SLAReachRateQuarter4', {
     			        chart: {
     			            plotBackgroundColor: null,
     			            plotBorderWidth: 0,
     			            plotShadow: false,
     			          
     			        },
     			        title: {
     			            text: '达成率',
     			            align: 'center',
     			            verticalAlign: 'middle',
     			            y: 40,
     			            style:{ "color": "#87a7f1", "fontSize": "12px" }
     			            
     			        },
     			        tooltip: {
     			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     			        },
     			        plotOptions: {
     			            pie: {
     			                dataLabels: {
     			                    enabled: true,
     			                    distance: 0,
     			                    style: {
     			                        fontWeight: 'bold',
     			                        borderColor: "red"
     			                    }
     			                },
     			                startAngle: -90,
     			                endAngle: 90,
     			                size: 120,
     			                center: ['50%', '75%']
     			            }
     			        },
     			        series: [{
     			            type: 'pie',
     			            name: 'SLA季度达成率',
     			            innerSize: '50%',
     			            data: [
     			                {
     			                    name: SLAReachRateData[4].NAME,
     			                    y: parseFloat(SLAReachRateData[4].SOCRE),
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			                    {
     			                    name: '未完成',
     			                    y: SLAReachRateData4reslut,
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			            ]
     			        }],
     			    });
     	 });
     	 	 	$(function () {
     	 	 			   var SLAReachRateData5 = SLAReachRateData[5].SOCRE
     			   var SLAReachRateData5reslut = 100-SLAReachRateData5;
     	 		Highcharts.setOptions({
     			        colors: ['#66c877','#87a7f1']
     			    });
     			    Highcharts.chart('SLAReachRateQuarter5', {
     			        chart: {
     			            plotBackgroundColor: null,
     			            plotBorderWidth: 0,
     			            plotShadow: false,
     			          
     			        },
     			        title: {
     			            text: '达成率',
     			            align: 'center',
     			            verticalAlign: 'middle',
     			            y: 40,
     			            style:{ "color": "#87a7f1", "fontSize": "12px" }
     			            
     			        },
     			        tooltip: {
     			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     			        },
     			        plotOptions: {
     			            pie: {
     			                dataLabels: {
     			                    enabled: true,
     			                    distance: 0,
     			                    style: {
     			                        fontWeight: 'bold',
     			                        borderColor: "red"
     			                    }
     			                },
     			                startAngle: -90,
     			                endAngle: 90,
     			                size: 120,
     			                center: ['50%', '75%']
     			            }
     			        },
     			        series: [{
     			            type: 'pie',
     			            name: 'SLA季度达成率',
     			            innerSize: '50%',
     			            data: [
     			               {
     			                    name: SLAReachRateData[5].NAME,
     			                    y: parseFloat(SLAReachRateData[5].SOCRE),
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			                    {
     			                    name: '未完成',
     			                    y: SLAReachRateData5reslut,
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			            ]
     			        }],
     			    });
     	 });
     	 	 	$(function () {
     	 	 			   var SLAReachRateData6= SLAReachRateData[6].SOCRE
     			   var SLAReachRateData6reslut = 100-SLAReachRateData6;
     	 		Highcharts.setOptions({
     			        colors: ['#66c877','#87a7f1']
     			    });
     			    Highcharts.chart('SLAReachRateQuarter6', {
     			        chart: {
     			            plotBackgroundColor: null,
     			            plotBorderWidth: 0,
     			            plotShadow: false,
     			          
     			        },
     			        title: {
     			            text: '达成率',
     			            align: 'center',
     			            verticalAlign: 'middle',
     			            y: 40,
     			            style:{ "color": "#87a7f1", "fontSize": "12px" }
     			            
     			        },
     			        tooltip: {
     			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     			        },
     			        plotOptions: {
     			            pie: {
     			                dataLabels: {
     			                    enabled: true,
     			                    distance: 0,
     			                    style: {
     			                        fontWeight: 'bold',
     			                        borderColor: "red"
     			                    }
     			                },
     			                startAngle: -90,
     			                endAngle: 90,
     			                size: 120,
     			                center: ['50%', '75%']
     			            }
     			        },
     			        series: [{
     			            type: 'pie',
     			            name: 'SLA季度达成率',
     			            innerSize: '50%',
     			            data: [
     			                {
     			                    name: SLAReachRateData[6].NAME,
     			                    y: parseFloat(SLAReachRateData[6].SOCRE),
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			                    {
     			                    name: '未完成',
     			                    y: SLAReachRateData6reslut,
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			            ]
     			        }],
     			    });
     	 });
     	 	 	$(function () {
     	 	 			   var SLAReachRateData7= SLAReachRateData[7].SOCRE
     			   var SLAReachRateData7reslut = 100-SLAReachRateData7;
     	 		Highcharts.setOptions({
     			        colors: ['#66c877','#87a7f1']
     			    });
     			    Highcharts.chart('SLAReachRateQuarter7', {
     			        chart: {
     			            plotBackgroundColor: null,
     			            plotBorderWidth: 0,
     			            plotShadow: false,
     			          
     			        },
     			        title: {
     			            text: '达成率',
     			            align: 'center',
     			            verticalAlign: 'middle',
     			            y: 40,
     			            style:{ "color": "#87a7f1", "fontSize": "12px" }
     			            
     			        },
     			        tooltip: {
     			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     			        },
     			        plotOptions: {
     			            pie: {
     			                dataLabels: {
     			                    enabled: true,
     			                    distance: 0,
     			                    style: {
     			                        fontWeight: 'bold',
     			                        borderColor: "red"
     			                    }
     			                },
     			                startAngle: -90,
     			                endAngle: 90,
     			                size: 120,
     			                center: ['50%', '75%']
     			            }
     			        },
     			        series: [{
     			            type: 'pie',
     			            name: 'SLA季度达成率',
     			            innerSize: '50%',
     			            data: [
     			                {
     			                    name: SLAReachRateData[7].NAME,
     			                    y: parseFloat(SLAReachRateData[7].SOCRE),
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			                    {
     			                    name: '未完成',
     			                    y: SLAReachRateData7reslut,
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			            ]
     			        }],
     			    });
     	 });
     	 	 	$(function () {
     		   var SLAReachRateData8= SLAReachRateData[8].SOCRE
     			   var SLAReachRateData8reslut = 100-SLAReachRateData8;
     	 		Highcharts.setOptions({
     			        colors: ['#66c877','#87a7f1']
     			    });
     			    Highcharts.chart('SLAReachRateQuarter8', {
     			        chart: {
     			            plotBackgroundColor: null,
     			            plotBorderWidth: 0,
     			            plotShadow: false,
     			          
     			        },
     			        title: {
     			            text: '达成率',
     			            align: 'center',
     			            verticalAlign: 'middle',
     			            y: 40,
     			            style:{ "color": "#87a7f1", "fontSize": "12px" }
     			            
     			        },
     			        tooltip: {
     			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     			        },
     			        plotOptions: {
     			            pie: {
     			                dataLabels: {
     			                    enabled: true,
     			                    distance: 0,
     			                    style: {
     			                        fontWeight: 'bold',
     			                        borderColor: "red"
     			                    }
     			                },
     			                startAngle: -90,
     			                endAngle: 90,
                                  size: 120,
     			                center: ['50%', '75%']
     			            }
     			        },
     			        series: [{
     			            type: 'pie',
     			            name: 'SLA季度达成率',
     			            innerSize: '50%',
     			            data: [
     			               {
     			                    name: SLAReachRateData[8].NAME,
     			                    y: parseFloat(SLAReachRateData[8].SOCRE),
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			                    {
     			                    name: '未完成',
     			                    y: SLAReachRateData8reslut,
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			            ]
     			        }],
     			    });
     	 });
     	 	 	$(function () {
     		   var SLAReachRateData9 = SLAReachRateData[9].SOCRE
     			   var SLAReachRateData9reslut = 100-SLAReachRateData9;
     	 		Highcharts.setOptions({
     			        colors: ['#66c877','#87a7f1']
     			    });
     			    Highcharts.chart('SLAReachRateQuarter9', {
     			        chart: {
     			            plotBackgroundColor: null,
     			            plotBorderWidth: 0,
     			            plotShadow: false,
     			          
     			        },
     			        title: {
     			            text: '达成率',
     			            align: 'center',
                              size: 120,
     			            verticalAlign: 'middle',
     			            y: 40,
     			            style:{ "color": "#87a7f1", "fontSize": "12px" }
     			            
     			        },
     			        tooltip: {
     			            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     			        },
     			        plotOptions: {
     			            pie: {
     			                dataLabels: {
     			                    enabled: true,
     			                    distance: 0,
     			                    style: {
     			                        fontWeight: 'bold',
     			                        borderColor: "red"
     			                    }
     			                },
     			                startAngle: -90,
     			                endAngle: 90,
     			                center: ['50%', '75%']
     			            }
     			        },
     			        series: [{
     			            type: 'pie',
     			            name: 'SLA季度达成率',
     			            innerSize: '50%',
     			            data: [
     			                {
     			                    name: SLAReachRateData[9].NAME,
     			                    y: parseFloat(SLAReachRateData[9].SOCRE),
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			                    {
     			                    name: '未完成',
     			                    y: SLAReachRateData9reslut,
     			                    dataLabels: {
     			                        enabled: false
     			                    }
     			                },
     			            ]
     			        }],
     			    });
     	 });
           
			  }    

	  },
	  render:function() {
	    return (
	    		<div className='completionUnitTopToady'>
	    		
	    			<div className="completionUnitTopToadyUp">
		    			<div className="completionUnitTopToadyUpList">
	                        <div id="SLAReachRateQuarter0" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateQuarterName0"></div>
		    			</div>
		    			<div className="completionUnitTopToadyUpList">
	               <div id="SLAReachRateQuarter1" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateQuarterName1"></div>	
		    			</div>
		    			<div className="completionUnitTopToadyUpList">
	               <div id="SLAReachRateQuarter2" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateQuarterName2"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyUpList">
	               <div id="SLAReachRateQuarter3" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateQuarterName3"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyUpList">
	               <div id="SLAReachRateQuarter4" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateQuarterName4"></div>
		    			
		    			</div>
		    			
	    			
	    			
	    			</div>
	    			<div className="completionUnitTopToadyDown">
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateQuarter5" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateQuarterName5"></div>
									    					
		    			</div>
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateQuarter6" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateQuarterName6"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateQuarter7" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateQuarterName7"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateQuarter8" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateQuarterName8"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateQuarter9" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateQuarterName9"></div>
		    			
		    			</div>
	    			
	    			</div>

			    </div>				
	  )},
	});
export default SatisfactionScoreQuarter