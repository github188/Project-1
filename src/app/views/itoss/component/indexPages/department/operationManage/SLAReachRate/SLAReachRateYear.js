import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
var SatisfactionScoreYear = React.createClass({
	componentDidUpdate:function(){
		var SLAReachRateData = this.props.SLAReachRateData;		  
			 console.log('SLA年满意度');
             console.log(SLAReachRateData);
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
			    Highcharts.chart('SLAReachRateYear0', {
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
			            name: 'SLA年度达成率',
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
			      Highcharts.chart('SLAReachRateYear1', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear2', {
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
			            name: 'SLA年度达成率',
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
                          }
                        if(SLAReachRateData.length==4){
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
             $('#SLAReachRateYearName0').html(SLAReachRateData[0].NAME)
             $('#SLAReachRateYearName1').html(SLAReachRateData[1].NAME)
             $('#SLAReachRateYearName2').html(SLAReachRateData[2].NAME)
             $('#SLAReachRateYearName3').html(SLAReachRateData[3].NAME)
		$(function () {
			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
				Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateYear0', {
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
			            name: 'SLA年度达成率',
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
			      Highcharts.chart('SLAReachRateYear1', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear2', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear3', {
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
			            name: 'SLA年度达成率',
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
              $('#SLAReachRateYearName0').html(SLAReachRateData[0].NAME)
             $('#SLAReachRateYearName1').html(SLAReachRateData[1].NAME)
             $('#SLAReachRateYearName2').html(SLAReachRateData[2].NAME)
             $('#SLAReachRateYearName3').html(SLAReachRateData[3].NAME)
             $('#SLAReachRateYearName4').html(SLAReachRateData[4].NAME)
		$(function () {
			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
				Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateYear0', {
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
			            name: 'SLA年度达成率',
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
			      Highcharts.chart('SLAReachRateYear1', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear2', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear3', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear4', {
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
			            name: 'SLA年度达成率',
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
             $('#SLAReachRateYearName0').html(SLAReachRateData[0].NAME)
             $('#SLAReachRateYearName1').html(SLAReachRateData[1].NAME)
             $('#SLAReachRateYearName2').html(SLAReachRateData[2].NAME)
             $('#SLAReachRateYearName3').html(SLAReachRateData[3].NAME)
             $('#SLAReachRateYearName4').html(SLAReachRateData[4].NAME)
             $('#SLAReachRateYearName5').html(SLAReachRateData[5].NAME)	
		$(function () {
			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
				Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateYear0', {
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
			            name: 'SLA年度达成率',
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
			      Highcharts.chart('SLAReachRateYear1', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear2', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear3', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear4', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear5', {
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
			            name: 'SLA年度达成率',
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
             $('#SLAReachRateYearName0').html(SLAReachRateData[0].NAME)
             $('#SLAReachRateYearName1').html(SLAReachRateData[1].NAME)
             $('#SLAReachRateYearName2').html(SLAReachRateData[2].NAME)
             $('#SLAReachRateYearName3').html(SLAReachRateData[3].NAME)
             $('#SLAReachRateYearName4').html(SLAReachRateData[4].NAME)
             $('#SLAReachRateYearName5').html(SLAReachRateData[5].NAME)
             $('#SLAReachRateYearName6').html(SLAReachRateData[6].NAME)	
		$(function () {
			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
				Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateYear0', {
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
			            name: 'SLA年度达成率',
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
			      Highcharts.chart('SLAReachRateYear1', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear2', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear3', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear4', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear5', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear6', {
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
			                size: 120,
			                endAngle: 90,
			                center: ['50%', '75%']
			            }
			        },
			        series: [{
			            type: 'pie',
			            name: 'SLA年度达成率',
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
              $('#SLAReachRateYearName0').html(SLAReachRateData[0].NAME)
             $('#SLAReachRateYearName1').html(SLAReachRateData[1].NAME)
             $('#SLAReachRateYearName2').html(SLAReachRateData[2].NAME)
             $('#SLAReachRateYearName3').html(SLAReachRateData[3].NAME)
             $('#SLAReachRateYearName4').html(SLAReachRateData[4].NAME)
             $('#SLAReachRateYearName5').html(SLAReachRateData[5].NAME)
             $('#SLAReachRateYearName6').html(SLAReachRateData[6].NAME)
             $('#SLAReachRateYearName7').html(SLAReachRateData[7].NAME)	
		$(function () {
			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
				Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateYear0', {
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
			            name: 'SLA年度达成率',
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
			      Highcharts.chart('SLAReachRateYear1', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear2', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear3', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear4', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear5', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear6', {
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
			                size: 120,
			                endAngle: 90,
			                center: ['50%', '75%']
			            }
			        },
			        series: [{
			            type: 'pie',
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear7', {
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
			            name: 'SLA年度达成率',
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
                    $('#SLAReachRateWeek9').css({'display':'none'})
                    $('#SLAReachRateToadyName9').css({'display':'none'}) 
             $('#SLAReachRateYearName0').html(SLAReachRateData[0].NAME)
             $('#SLAReachRateYearName1').html(SLAReachRateData[1].NAME)
             $('#SLAReachRateYearName2').html(SLAReachRateData[2].NAME)
             $('#SLAReachRateYearName3').html(SLAReachRateData[3].NAME)
             $('#SLAReachRateYearName4').html(SLAReachRateData[4].NAME)
             $('#SLAReachRateYearName5').html(SLAReachRateData[5].NAME)
             $('#SLAReachRateYearName6').html(SLAReachRateData[6].NAME)
             $('#SLAReachRateYearName7').html(SLAReachRateData[7].NAME)
             $('#SLAReachRateYearName8').html(SLAReachRateData[8].NAME)
		$(function () {
			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
				Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateYear0', {
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
			            name: 'SLA年度达成率',
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
			      Highcharts.chart('SLAReachRateYear1', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear2', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear3', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear4', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear5', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear6', {
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
			                size: 120,
			                endAngle: 90,
			                center: ['50%', '75%']
			            }
			        },
			        series: [{
			            type: 'pie',
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear7', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear8', {
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
			            name: 'SLA年度达成率',
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
          	 $('#SLAReachRateYearName0').html(SLAReachRateData[0].NAME)
             $('#SLAReachRateYearName1').html(SLAReachRateData[1].NAME)
             $('#SLAReachRateYearName2').html(SLAReachRateData[2].NAME)
             $('#SLAReachRateYearName3').html(SLAReachRateData[3].NAME)
             $('#SLAReachRateYearName4').html(SLAReachRateData[4].NAME)
             $('#SLAReachRateYearName5').html(SLAReachRateData[5].NAME)
             $('#SLAReachRateYearName6').html(SLAReachRateData[6].NAME)
             $('#SLAReachRateYearName7').html(SLAReachRateData[7].NAME)
             $('#SLAReachRateYearName8').html(SLAReachRateData[8].NAME)
             $('#SLAReachRateYearName9').html(SLAReachRateData[9].NAME)
		$(function () {
			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
				Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateYear0', {
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
			            name: 'SLA年度达成率',
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
			      Highcharts.chart('SLAReachRateYear1', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear2', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear3', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear4', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear5', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear6', {
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
			                size: 120,
			                endAngle: 90,
			                center: ['50%', '75%']
			            }
			        },
			        series: [{
			            type: 'pie',
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear7', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear8', {
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
			            name: 'SLA年度达成率',
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
			    Highcharts.chart('SLAReachRateYear9', {
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
			            name: 'SLA年度达成率',
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
	                        <div id="SLAReachRateYear0" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateYearName0"></div>
		    			</div>
		    			<div className="completionUnitTopToadyUpList">
	               <div id="SLAReachRateYear1" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateToadyName1"></div>	
		    			</div>
		    			<div className="completionUnitTopToadyUpList">
	               <div id="SLAReachRateYear2" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateYearName2"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyUpList">
	               <div id="SLAReachRateYear3" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateYearName3"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyUpList">
	               <div id="SLAReachRateYear4" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateYearName4"></div>
		    			
		    			</div>
		    			
	    			
	    			
	    			</div>
	    			<div className="completionUnitTopToadyDown">
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateYear5" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateYearName5"></div>
									    					
		    			</div>
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateYear6" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateYearName6"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateYear7" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateYearName7"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateYear8" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateYearName8"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateYear9" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateYearName9"></div>
		    			
		    			</div>
	    			
	    			</div>

			    </div>				
	  )},
	});
export default SatisfactionScoreYear