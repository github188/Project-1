import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
//import Chart from 'chart.js'
//import * as OperationManage from "../../../../../../../actions/operation_action";
//import Store from '../../../../../../../server/store';
//import { connect } from 'react-redux';
var SatisfactionScoreWeek = React.createClass({
	componentDidUpdate:function(){
		var SLAReachRateData = this.props.SLAReachRateData;		  
              console.log("SLAReachRateData zhou")
             console.log(SLAReachRateData)
             var SLAReachRateData0 = SLAReachRateData[0].NAME
             console.log(SLAReachRateData0)
             if(SLAReachRateData.length==3){
            	 $('#SLAReachRateToadyName3').css({'display':'none'})
            	 $('#SLAReachRateToadyName4').css({'display':'none'})
            	 $('#SLAReachRateToadyName5').css({'display':'none'})
          		 $('#SLAReachRateToadyName6').css({'display':'none'})
          		 $('#SLAReachRateToadyName7').css({'display':'none'})
          		 $('#SLAReachRateToadyName8').css({'display':'none'})
          		 $('#SLAReachRateToadyName9').css({'display':'none'})
          		 $('#SLAReachRateWeek3').css({'display':'none'})
          		 $('#SLAReachRateWeek4').css({'display':'none'})
          		 $('#SLAReachRateWeek5').css({'display':'none'})
          		 $('#SLAReachRateWeek6').css({'display':'none'})
          		 $('#SLAReachRateWeek7').css({'display':'none'})
          		 $('#SLAReachRateWeek8').css({'display':'none'})
          		 $('#SLAReachRateWeek9').css({'display':'none'})
          		 	 $('#SLAReachRateToadyName0').html(SLAReachRateData[0].NAME)
		             $('#SLAReachRateToadyName1').html(SLAReachRateData[1].NAME)
		             $('#SLAReachRateToadyName2').html(SLAReachRateData[2].NAME)
		       $(function () {
			  var SLAReachRateData0 = SLAReachRateData[0].SOCRE
			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
				Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateWeek0', {
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
			      Highcharts.chart('SLAReachRateWeek1', {
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
			    Highcharts.chart('SLAReachRateWeek2', {
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
			  		$('#SLAReachRateToadyName4').css({'display':'none'})
            	 $('#SLAReachRateToadyName5').css({'display':'none'})
          		 $('#SLAReachRateToadyName6').css({'display':'none'})
          		 $('#SLAReachRateToadyName7').css({'display':'none'})
          		 $('#SLAReachRateToadyName8').css({'display':'none'})
          		 $('#SLAReachRateToadyName9').css({'display':'none'})
	          		$('#SLAReachRateWeek4').css({'display':'none'})
          		 $('#SLAReachRateWeek5').css({'display':'none'})
          		 $('#SLAReachRateWeek6').css({'display':'none'})
          		 $('#SLAReachRateWeek7').css({'display':'none'})
          		 $('#SLAReachRateWeek8').css({'display':'none'})
          		 $('#SLAReachRateWeek9').css({'display':'none'})
	          	 $('#SLAReachRateToadyName0').html(SLAReachRateData[0].NAME)
		             $('#SLAReachRateToadyName1').html(SLAReachRateData[1].NAME)
		             $('#SLAReachRateToadyName2').html(SLAReachRateData[2].NAME)
		             $('#SLAReachRateToadyName3').html(SLAReachRateData[3].NAME)
	           		             		      			$(function () {
			  var SLAReachRateData0 = SLAReachRateData[0].SOCRE
			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
				Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateWeek0', {
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
			      Highcharts.chart('SLAReachRateWeek1', {
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
			    Highcharts.chart('SLAReachRateWeek2', {
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
			    Highcharts.chart('SLAReachRateWeek3', {
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
            	 $('#SLAReachRateToadyName5').css({'display':'none'})
          		 $('#SLAReachRateToadyName6').css({'display':'none'})
          		 $('#SLAReachRateToadyName7').css({'display':'none'})
          		 $('#SLAReachRateToadyName8').css({'display':'none'})
          		 $('#SLAReachRateToadyName9').css({'display':'none'})
          		 $('#SLAReachRateWeek5').css({'display':'none'})
          		 $('#SLAReachRateWeek6').css({'display':'none'})
          		 $('#SLAReachRateWeek7').css({'display':'none'})
          		 $('#SLAReachRateWeek8').css({'display':'none'})
          		 $('#SLAReachRateWeek9').css({'display':'none'})
          		 $('#SLAReachRateToadyName0').html(SLAReachRateData[0].NAME)
		             $('#SLAReachRateToadyName1').html(SLAReachRateData[1].NAME)
		             $('#SLAReachRateToadyName2').html(SLAReachRateData[2].NAME)
		             $('#SLAReachRateToadyName3').html(SLAReachRateData[3].NAME)
		             $('#SLAReachRateToadyName4').html(SLAReachRateData[4].NAME)
		             		      			$(function () {
			  var SLAReachRateData0 = SLAReachRateData[0].SOCRE
			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
				Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateWeek0', {
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
			      Highcharts.chart('SLAReachRateWeek1', {
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
			    Highcharts.chart('SLAReachRateWeek2', {
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
			    Highcharts.chart('SLAReachRateWeek3', {
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
			    Highcharts.chart('SLAReachRateWeek4', {
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
         		 $('#SLAReachRateToadyName6').css({'display':'none'})
          		 $('#SLAReachRateToadyName7').css({'display':'none'})
          		 $('#SLAReachRateToadyName8').css({'display':'none'})
          		 $('#SLAReachRateToadyName9').css({'display':'none'})
          		  $('#SLAReachRateWeek6').css({'display':'none'})
          		 $('#SLAReachRateWeek7').css({'display':'none'})
          		 $('#SLAReachRateWeek8').css({'display':'none'})
          		 $('#SLAReachRateWeek9').css({'display':'none'})
          		$('#SLAReachRateToadyName0').html(SLAReachRateData[0].NAME)
		             $('#SLAReachRateToadyName1').html(SLAReachRateData[1].NAME)
		             $('#SLAReachRateToadyName2').html(SLAReachRateData[2].NAME)
		             $('#SLAReachRateToadyName3').html(SLAReachRateData[3].NAME)
		             $('#SLAReachRateToadyName4').html(SLAReachRateData[4].NAME)
		             $('#SLAReachRateToadyName5').html(SLAReachRateData[5].NAME)
		      			$(function () {
			  var SLAReachRateData0 = SLAReachRateData[0].SOCRE
			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
				Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateWeek0', {
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
			      Highcharts.chart('SLAReachRateWeek1', {
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
			    Highcharts.chart('SLAReachRateWeek2', {
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
			    Highcharts.chart('SLAReachRateWeek3', {
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
			    Highcharts.chart('SLAReachRateWeek4', {
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
			    Highcharts.chart('SLAReachRateWeek5', {
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
			     $('#SLAReachRateToadyName7').css({'display':'none'})
          		 $('#SLAReachRateToadyName8').css({'display':'none'})
          		 $('#SLAReachRateToadyName9').css({'display':'none'})
           		 $('#SLAReachRateWeek7').css({'display':'none'})
          		 $('#SLAReachRateWeek8').css({'display':'none'})
          		 $('#SLAReachRateWeek9').css({'display':'none'})
           		 $('#SLAReachRateToadyName0').html(SLAReachRateData[0].NAME)
		             $('#SLAReachRateToadyName1').html(SLAReachRateData[1].NAME)
		             $('#SLAReachRateToadyName2').html(SLAReachRateData[2].NAME)
		             $('#SLAReachRateToadyName3').html(SLAReachRateData[3].NAME)
		             $('#SLAReachRateToadyName4').html(SLAReachRateData[4].NAME)
		             $('#SLAReachRateToadyName5').html(SLAReachRateData[5].NAME)
		             $('#SLAReachRateToadyName6').html(SLAReachRateData[6].NAME)
			$(function () {
			  var SLAReachRateData0 = SLAReachRateData[0].SOCRE
			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
				Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateWeek0', {
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
			      Highcharts.chart('SLAReachRateWeek1', {
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
			    Highcharts.chart('SLAReachRateWeek2', {
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
			    Highcharts.chart('SLAReachRateWeek3', {
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
			    Highcharts.chart('SLAReachRateWeek4', {
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
			    Highcharts.chart('SLAReachRateWeek5', {
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
	 	 		var SLAReachRateData6 = SLAReachRateData[6].SOCRE
			   var SLAReachRateData6reslut = 100-SLAReachRateData6;

	 		Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateWeek6', {
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
			  	 $('#SLAReachRateToadyName8').css({'display':'none'})
          		 $('#SLAReachRateToadyName9').css({'display':'none'})
           		 $('#SLAReachRateWeek8').css({'display':'none'})
          		 $('#SLAReachRateWeek9').css({'display':'none'})
           		 	 $('#SLAReachRateToadyName0').html(SLAReachRateData[0].NAME)
		             $('#SLAReachRateToadyName1').html(SLAReachRateData[1].NAME)
		             $('#SLAReachRateToadyName2').html(SLAReachRateData[2].NAME)
		             $('#SLAReachRateToadyName3').html(SLAReachRateData[3].NAME)
		             $('#SLAReachRateToadyName4').html(SLAReachRateData[4].NAME)
		             $('#SLAReachRateToadyName5').html(SLAReachRateData[5].NAME)
		             $('#SLAReachRateToadyName6').html(SLAReachRateData[6].NAME)
		             $('#SLAReachRateToadyName7').html(SLAReachRateData[7].NAME)
		             		      		    		$(function () {
			  var SLAReachRateData0 = SLAReachRateData[0].SOCRE
			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
				Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateWeek0', {
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
			      Highcharts.chart('SLAReachRateWeek1', {
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
			    Highcharts.chart('SLAReachRateWeek2', {
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
			    Highcharts.chart('SLAReachRateWeek3', {
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
			    Highcharts.chart('SLAReachRateWeek4', {
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
			    Highcharts.chart('SLAReachRateWeek5', {
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
	 	 			 	 				   var SLAReachRateData6 = SLAReachRateData[6].SOCRE
			   var SLAReachRateData6reslut = 100-SLAReachRateData6;

	 		Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateWeek6', {
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
	 	 			 	 				   var SLAReachRateData7 = SLAReachRateData[7].SOCRE
			   var SLAReachRateData7reslut = 100-SLAReachRateData7;
	
	 		Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateWeek7', {
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
			  	  	 $('#SLAReachRateToadyName9').css({'display':'none'})
           		     $('#SLAReachRateWeek9').css({'display':'none'})
           		     $('#SLAReachRateToadyName0').html(SLAReachRateData[0].NAME)
		             $('#SLAReachRateToadyName1').html(SLAReachRateData[1].NAME)
		             $('#SLAReachRateToadyName2').html(SLAReachRateData[2].NAME)
		             $('#SLAReachRateToadyName3').html(SLAReachRateData[3].NAME)
		             $('#SLAReachRateToadyName4').html(SLAReachRateData[4].NAME)
		             $('#SLAReachRateToadyName5').html(SLAReachRateData[5].NAME)
		             $('#SLAReachRateToadyName6').html(SLAReachRateData[6].NAME)
		             $('#SLAReachRateToadyName7').html(SLAReachRateData[7].NAME)
		             $('#SLAReachRateToadyName8').html(SLAReachRateData[8].NAME)
		      		    		$(function () {
			  var SLAReachRateData0 = SLAReachRateData[0].SOCRE
			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
				Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateWeek0', {
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
			      Highcharts.chart('SLAReachRateWeek1', {
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
			    Highcharts.chart('SLAReachRateWeek2', {
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
			    Highcharts.chart('SLAReachRateWeek3', {
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
			    Highcharts.chart('SLAReachRateWeek4', {
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
			    Highcharts.chart('SLAReachRateWeek5', {
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
	 	 			 	 				   var SLAReachRateData6 = SLAReachRateData[6].SOCRE
			   var SLAReachRateData6reslut = 100-SLAReachRateData6;

	 		Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateWeek6', {
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
	 	 			 	 				   var SLAReachRateData7 = SLAReachRateData[7].SOCRE
			   var SLAReachRateData7reslut = 100-SLAReachRateData7;
	
	 		Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateWeek7', {
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
			   var SLAReachRateData8 = SLAReachRateData[8].SOCRE
			   var SLAReachRateData8reslut = 100-SLAReachRateData8;
	 		Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateWeek8', {
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
			                center: ['50%', '75%']
			            }
			        },
			        series: [{
			            type: 'pie',
			            name: 'SLA季度达成率',
			            innerSize: '50%',
size: 120,
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
				     $('#SLAReachRateToadyName0').html(SLAReachRateData[0].NAME)
		             $('#SLAReachRateToadyName1').html(SLAReachRateData[1].NAME)
		             $('#SLAReachRateToadyName2').html(SLAReachRateData[2].NAME)
		             $('#SLAReachRateToadyName3').html(SLAReachRateData[3].NAME)
		             $('#SLAReachRateToadyName4').html(SLAReachRateData[4].NAME)
		             $('#SLAReachRateToadyName5').html(SLAReachRateData[5].NAME)
		             $('#SLAReachRateToadyName6').html(SLAReachRateData[6].NAME)
		             $('#SLAReachRateToadyName7').html(SLAReachRateData[7].NAME)
		             $('#SLAReachRateToadyName8').html(SLAReachRateData[8].NAME)
		             $('#SLAReachRateToadyName9').html(SLAReachRateData[9].NAME)
		    		$(function () {
			  var SLAReachRateData0 = SLAReachRateData[0].SOCRE
			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
				Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateWeek0', {
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
			      Highcharts.chart('SLAReachRateWeek1', {
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
			    Highcharts.chart('SLAReachRateWeek2', {
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
			    Highcharts.chart('SLAReachRateWeek3', {
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
			    Highcharts.chart('SLAReachRateWeek4', {
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
			    Highcharts.chart('SLAReachRateWeek5', {
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
	 	 			 	 				   var SLAReachRateData6 = SLAReachRateData[6].SOCRE
			   var SLAReachRateData6reslut = 100-SLAReachRateData6;

	 		Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateWeek6', {
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
	 	 			 	 				   var SLAReachRateData7 = SLAReachRateData[7].SOCRE
			   var SLAReachRateData7reslut = 100-SLAReachRateData7;
	
	 		Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateWeek7', {
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
			   var SLAReachRateData8 = SLAReachRateData[8].SOCRE
			   var SLAReachRateData8reslut = 100-SLAReachRateData8;
	 		Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateWeek8', {
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
			                center: ['50%', '75%']
			            }
			        },
			        series: [{
			            type: 'pie',
			            name: 'SLA季度达成率',
			            innerSize: '50%',
size: 120,
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
			    Highcharts.chart('SLAReachRateWeek9', {
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
	                        <div id="SLAReachRateWeek0" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateToadyName0"></div>
		    			</div>
		    			<div className="completionUnitTopToadyUpList">
	               <div id="SLAReachRateWeek1" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateToadyName1"></div>	
		    			</div>
		    			<div className="completionUnitTopToadyUpList">
	               <div id="SLAReachRateWeek2" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateToadyName2"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyUpList">
	               <div id="SLAReachRateWeek3" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateToadyName3"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyUpList">
	               <div id="SLAReachRateWeek4" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateToadyName4"></div>
		    			
		    			</div>
	    			</div>
	    			<div className="completionUnitTopToadyDown">
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateWeek5" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateToadyName5"></div>
									    					
		    			</div>
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateWeek6" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateToadyName6"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateWeek7" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateToadyName7"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateWeek8" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateToadyName8"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateWeek9" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateToadyName9"></div>
		    			
		    			</div>
	    			
	    			</div>

			    </div>				
	  )},
	});
export default SatisfactionScoreWeek

//function mapStateToProps(state) {
//	  const {SLAReachRateData} = state.operationReducer;
//		  return {
//			SLAReachRateData:SLAReachRateData
//		  }
//		}
//export default connect(mapStateToProps)(SatisfactionScoreWeek)