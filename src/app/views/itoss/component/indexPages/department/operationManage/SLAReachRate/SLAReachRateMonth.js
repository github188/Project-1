import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
//import * as OperationManage from "../../../../../../../actions/operation_action";
//import Store from '../../../../../../../server/store';
//import { connect } from 'react-redux';
var SLAReachRateMonth = React.createClass({


	componentDidUpdate:function(){ 
			 var SLAReachRateData = this.props.SLAReachRateData;		  
			 console.log('SLA月满意度');
             console.log(SLAReachRateData);
//           var SLAReachRateData0 = SLAReachRateData[0].SOCRE;
//            console.log(SLAReachRateData0);
 
             if(SLAReachRateData.length==3){
            	 $('#SLAReachRateMonthName3').css({'display':'none'})
            	 $('#SLAReachRateMonthName4').css({'display':'none'})
            	 $('#SLAReachRateMonthName5').css({'display':'none'})
          		 $('#SLAReachRateMonthName6').css({'display':'none'})
          		 $('#SLAReachRateMonthName7').css({'display':'none'})
          		 $('#SLAReachRateMonthName8').css({'display':'none'})
          		 $('#SLAReachRateMonthName9').css({'display':'none'})
          		 $('#SLAReachRateMonth3').css({'display':'none'})
          		 $('#SLAReachRateMonth4').css({'display':'none'})
          		 $('#SLAReachRateMonth5').css({'display':'none'})
          		 $('#SLAReachRateMonth6').css({'display':'none'})
          		 $('#SLAReachRateMonth7').css({'display':'none'})
          		 $('#SLAReachRateMonth8').css({'display':'none'})
          		 $('#SLAReachRateMonth9').css({'display':'none'})
          		 $('#SLAReachRateMonthName0').html(SLAReachRateData[0].NAME)
                $('#SLAReachRateMonthName1').html(SLAReachRateData[1].NAME)
                $('#SLAReachRateMonthName2').html(SLAReachRateData[2].NAME)
                $(function () {
	       			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
	       			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
	       			   console.log("SLAReachRateData0reslut")
	       			    console.log(SLAReachRateData0reslut)
	       			    console.log('SLAReachRateData0')
	       			    console.log(SLAReachRateData0)
	       				Highcharts.setOptions({
	       			        colors: ['#66c877','#87a7f1']
	       			    });
	       			    Highcharts.chart('SLAReachRateMonth0', {
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
	       			                center: ['40%', '75%'],
	       			                size: 120,
	       			            }
	       			        },
	       			        series: [{
	       			            type: 'pie',
	       			            name: 'SLA月达成率',
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
	       	 		   var SLAReachRateData1= SLAReachRateData[1].SOCRE
	       			   var SLAReachRateData1reslut = 100-SLAReachRateData1;
	       	 		Highcharts.setOptions({
	       			        colors: ['#66c877','#87a7f1']
	       			    });
	       			      Highcharts.chart('SLAReachRateMonth1', {
	       			        chart: {
	       			            plotBackgroundColor: null,
	       			            plotBorderWidth: 0,
	       			            plotShadow: false,
	       			          
	       			        },
	       			        title: {
	       			            text: '达成率',
	       			            align: 'center',
	       			            verticalAlign: 'middle',
	       			            y: 50,
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
	       			                center: ['40%', '75%']
	       			                
	       			            }
	       			        },
	       			        series: [{
	       			            type: 'pie',
	       			            name: 'SLA月达成率',
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
	       	 				   var SLAReachRateData2= SLAReachRateData[2].SOCRE
	       			   var SLAReachRateData2reslut = 100-SLAReachRateData2;
	       	 		Highcharts.setOptions({
	       			        colors: ['#66c877','#87a7f1']
	       			    });
	       			    Highcharts.chart('SLAReachRateMonth2', {
	       			        chart: {
	       			            plotBackgroundColor: null,
	       			            plotBorderWidth: 0,
	       			            plotShadow: false,
	       			          
	       			        },
	       			        title: {
	       			            text: '达成率',
	       			            align: 'center',
	       			            verticalAlign: 'middle',
	       			            y: 50,
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
	       			                center: ['40%', '75%']
	       			            }
	       			        },
	       			        series: [{
	       			            type: 'pie',
	       			            name: 'SLA月达成率',
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
	            	 $('#SLAReachRateMonthName4').css({'display':'none'})
	            	 $('#SLAReachRateMonthName5').css({'display':'none'})
	          		 $('#SLAReachRateMonthName6').css({'display':'none'})
	          		 $('#SLAReachRateMonthName7').css({'display':'none'})
	          		 $('#SLAReachRateMonthName8').css({'display':'none'})
	          		 $('#SLAReachRateMonthName9').css({'display':'none'})
	          		 $('#SLAReachRateMonth4').css({'display':'none'})
	          		 $('#SLAReachRateMonth5').css({'display':'none'})
	          		 $('#SLAReachRateMonth6').css({'display':'none'})
	          		 $('#SLAReachRateMonth7').css({'display':'none'})
	          		 $('#SLAReachRateMonth8').css({'display':'none'})
	          		 $('#SLAReachRateMonth9').css({'display':'none'})
	          		 $('#SLAReachRateMonthName0').html(SLAReachRateData[0].NAME)
	                $('#SLAReachRateMonthName1').html(SLAReachRateData[1].NAME)
	                $('#SLAReachRateMonthName2').html(SLAReachRateData[2].NAME)
	                $('#SLAReachRateMonthName3').html(SLAReachRateData[3].NAME)
	           
	                $(function () {
	       			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
	       			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
	       			   console.log("SLAReachRateData0reslut")
	       			    console.log(SLAReachRateData0reslut)
	       			    console.log('SLAReachRateData0')
	       			    console.log(SLAReachRateData0)
	       				Highcharts.setOptions({
	       			        colors: ['#66c877','#87a7f1']
	       			    });
	       			    Highcharts.chart('SLAReachRateMonth0', {
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
	       			                center: ['40%', '75%'],
	       			                size: 120,
	       			            }
	       			        },
	       			        series: [{
	       			            type: 'pie',
	       			            name: 'SLA月达成率',
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
	       	 		   var SLAReachRateData1= SLAReachRateData[1].SOCRE
	       			   var SLAReachRateData1reslut = 100-SLAReachRateData1;
	       	 		Highcharts.setOptions({
	       			        colors: ['#66c877','#87a7f1']
	       			    });
	       			      Highcharts.chart('SLAReachRateMonth1', {
	       			        chart: {
	       			            plotBackgroundColor: null,
	       			            plotBorderWidth: 0,
	       			            plotShadow: false,
	       			          
	       			        },
	       			        title: {
	       			            text: '达成率',
	       			            align: 'center',
	       			            verticalAlign: 'middle',
	       			            y: 50,
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
	       			                center: ['40%', '75%']
	       			                
	       			            }
	       			        },
	       			        series: [{
	       			            type: 'pie',
	       			            name: 'SLA月达成率',
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
	       	 				   var SLAReachRateData2= SLAReachRateData[2].SOCRE
	       			   var SLAReachRateData2reslut = 100-SLAReachRateData2;
	       	 		Highcharts.setOptions({
	       			        colors: ['#66c877','#87a7f1']
	       			    });
	       			    Highcharts.chart('SLAReachRateMonth2', {
	       			        chart: {
	       			            plotBackgroundColor: null,
	       			            plotBorderWidth: 0,
	       			            plotShadow: false,
	       			          
	       			        },
	       			        title: {
	       			            text: '达成率',
	       			            align: 'center',
	       			            verticalAlign: 'middle',
	       			            y: 50,
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
	       			                center: ['40%', '75%']
	       			            }
	       			        },
	       			        series: [{
	       			            type: 'pie',
	       			            name: 'SLA月达成率',
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
	       	 			 				   var SLAReachRateData3= SLAReachRateData[3].SOCRE
	       			   var SLAReachRateData3reslut = 100-SLAReachRateData3;
	       	 		Highcharts.setOptions({
	       			        colors: ['#66c877','#87a7f1']
	       			    });
	       			    Highcharts.chart('SLAReachRateMonth3', {
	       			        chart: {
	       			            plotBackgroundColor: null,
	       			            plotBorderWidth: 0,
	       			            plotShadow: false,
	       			          
	       			        },
	       			        title: {
	       			            text: '达成率',
	       			            align: 'center',
	       			            verticalAlign: 'middle',
	       			            y: 50,
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
	       			                center: ['40%', '75%']
	       			            }
	       			        },
	       			        series: [{
	       			            type: 'pie',
	       			            name: 'SLA月达成率',
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
            	 $('#SLAReachRateMonthName5').css({'display':'none'})
          		 $('#SLAReachRateMonthName6').css({'display':'none'})
          		 $('#SLAReachRateMonthName7').css({'display':'none'})
          		 $('#SLAReachRateMonthName8').css({'display':'none'})
          		 $('#SLAReachRateMonthName9').css({'display':'none'})
          		 $('#SLAReachRateMonth5').css({'display':'none'})
          		 $('#SLAReachRateMonth6').css({'display':'none'})
          		 $('#SLAReachRateMonth7').css({'display':'none'})
          		 $('#SLAReachRateMonth8').css({'display':'none'})
          		 $('#SLAReachRateMonth9').css({'display':'none'})
          		 $('#SLAReachRateMonthName0').html(SLAReachRateData[0].NAME)
                $('#SLAReachRateMonthName1').html(SLAReachRateData[1].NAME)
                $('#SLAReachRateMonthName2').html(SLAReachRateData[2].NAME)
                $('#SLAReachRateMonthName3').html(SLAReachRateData[3].NAME)
                $('#SLAReachRateMonthName4').html(SLAReachRateData[4].NAME)
                $(function () {
      			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
      			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
      			   console.log("SLAReachRateData0reslut")
      			    console.log(SLAReachRateData0reslut)
      			    console.log('SLAReachRateData0')
      			    console.log(SLAReachRateData0)
      				Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateMonth0', {
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
      			                center: ['40%', '75%'],
      			                size: 120,
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      	 		   var SLAReachRateData1= SLAReachRateData[1].SOCRE
      			   var SLAReachRateData1reslut = 100-SLAReachRateData1;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			      Highcharts.chart('SLAReachRateMonth1', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 50,
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
      			                center: ['40%', '75%']
      			                
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      	 				   var SLAReachRateData2= SLAReachRateData[2].SOCRE
      			   var SLAReachRateData2reslut = 100-SLAReachRateData2;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateMonth2', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 50,
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
      			                center: ['40%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      	 			 				   var SLAReachRateData3= SLAReachRateData[3].SOCRE
      			   var SLAReachRateData3reslut = 100-SLAReachRateData3;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateMonth3', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 50,
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
      			                center: ['40%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      	 	 			 			 				   var SLAReachRateData4= SLAReachRateData[4].SOCRE
      			   var SLAReachRateData4reslut = 100-SLAReachRateData4;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateMonth4', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 50,
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
      			                center: ['40%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
          		 $('#SLAReachRateMonthName6').css({'display':'none'})
          		 $('#SLAReachRateMonthName7').css({'display':'none'})
          		 $('#SLAReachRateMonthName8').css({'display':'none'})
          		 $('#SLAReachRateMonthName9').css({'display':'none'})
          		 $('#SLAReachRateMonth6').css({'display':'none'})
          		 $('#SLAReachRateMonth7').css({'display':'none'})
          		 $('#SLAReachRateMonth8').css({'display':'none'})
          		 $('#SLAReachRateMonth9').css({'display':'none'})
          		 $('#SLAReachRateMonthName0').html(SLAReachRateData[0].NAME)
                $('#SLAReachRateMonthName1').html(SLAReachRateData[1].NAME)
                $('#SLAReachRateMonthName2').html(SLAReachRateData[2].NAME)
                $('#SLAReachRateMonthName3').html(SLAReachRateData[3].NAME)
                $('#SLAReachRateMonthName4').html(SLAReachRateData[4].NAME)
                $('#SLAReachRateMonthName5').html(SLAReachRateData[5].NAME)
                $(function () {
     			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
     			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
     			   console.log("SLAReachRateData0reslut")
     			    console.log(SLAReachRateData0reslut)
     			    console.log('SLAReachRateData0')
     			    console.log(SLAReachRateData0)
     				Highcharts.setOptions({
     			        colors: ['#66c877','#87a7f1']
     			    });
     			    Highcharts.chart('SLAReachRateMonth0', {
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
     			                center: ['40%', '75%'],
     			                size: 120,
     			            }
     			        },
     			        series: [{
     			            type: 'pie',
     			            name: 'SLA月达成率',
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
     	 		   var SLAReachRateData1= SLAReachRateData[1].SOCRE
     			   var SLAReachRateData1reslut = 100-SLAReachRateData1;
     	 		Highcharts.setOptions({
     			        colors: ['#66c877','#87a7f1']
     			    });
     			      Highcharts.chart('SLAReachRateMonth1', {
     			        chart: {
     			            plotBackgroundColor: null,
     			            plotBorderWidth: 0,
     			            plotShadow: false,
     			          
     			        },
     			        title: {
     			            text: '达成率',
     			            align: 'center',
     			            verticalAlign: 'middle',
     			            y: 50,
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
     			                center: ['40%', '75%']
     			                
     			            }
     			        },
     			        series: [{
     			            type: 'pie',
     			            name: 'SLA月达成率',
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
     	 				   var SLAReachRateData2= SLAReachRateData[2].SOCRE
     			   var SLAReachRateData2reslut = 100-SLAReachRateData2;
     	 		Highcharts.setOptions({
     			        colors: ['#66c877','#87a7f1']
     			    });
     			    Highcharts.chart('SLAReachRateMonth2', {
     			        chart: {
     			            plotBackgroundColor: null,
     			            plotBorderWidth: 0,
     			            plotShadow: false,
     			          
     			        },
     			        title: {
     			            text: '达成率',
     			            align: 'center',
     			            verticalAlign: 'middle',
     			            y: 50,
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
     			                center: ['40%', '75%']
     			            }
     			        },
     			        series: [{
     			            type: 'pie',
     			            name: 'SLA月达成率',
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
     	 			 				   var SLAReachRateData3= SLAReachRateData[3].SOCRE
     			   var SLAReachRateData3reslut = 100-SLAReachRateData3;
     	 		Highcharts.setOptions({
     			        colors: ['#66c877','#87a7f1']
     			    });
     			    Highcharts.chart('SLAReachRateMonth3', {
     			        chart: {
     			            plotBackgroundColor: null,
     			            plotBorderWidth: 0,
     			            plotShadow: false,
     			          
     			        },
     			        title: {
     			            text: '达成率',
     			            align: 'center',
     			            verticalAlign: 'middle',
     			            y: 50,
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
     			                center: ['40%', '75%']
     			            }
     			        },
     			        series: [{
     			            type: 'pie',
     			            name: 'SLA月达成率',
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
     	 	 			 			 				   var SLAReachRateData4= SLAReachRateData[4].SOCRE
     			   var SLAReachRateData4reslut = 100-SLAReachRateData4;
     	 		Highcharts.setOptions({
     			        colors: ['#66c877','#87a7f1']
     			    });
     			    Highcharts.chart('SLAReachRateMonth4', {
     			        chart: {
     			            plotBackgroundColor: null,
     			            plotBorderWidth: 0,
     			            plotShadow: false,
     			          
     			        },
     			        title: {
     			            text: '达成率',
     			            align: 'center',
     			            verticalAlign: 'middle',
     			            y: 50,
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
     			                center: ['40%', '75%']
     			            }
     			        },
     			        series: [{
     			            type: 'pie',
     			            name: 'SLA月达成率',
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
     	 	 			 	 	  var SLAReachRateData5= SLAReachRateData[5].SOCRE
     			   var SLAReachRateData5reslut = 100-SLAReachRateData5;
     	 		Highcharts.setOptions({
     			        colors: ['#66c877','#87a7f1']
     			    });
     			    Highcharts.chart('SLAReachRateMonth5', {
     			        chart: {
     			            plotBackgroundColor: null,
     			            plotBorderWidth: 0,
     			            plotShadow: false,
     			          
     			        },
     			        title: {
     			            text: '达成率',
     			            align: 'center',
     			            verticalAlign: 'middle',
     			            y: 50,
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
     			                center: ['40%', '75%']
     			            }
     			        },
     			        series: [{
     			            type: 'pie',
     			            name: 'SLA月达成率',
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
           		 $('#SLAReachRateMonthName7').css({'display':'none'})
           		 $('#SLAReachRateMonthName8').css({'display':'none'})
           		 $('#SLAReachRateMonthName9').css({'display':'none'})
           		 $('#SLAReachRateMonth7').css({'display':'none'})
           		 $('#SLAReachRateMonth8').css({'display':'none'})
           		 $('#SLAReachRateMonth9').css({'display':'none'})
           		 $('#SLAReachRateMonthName0').html(SLAReachRateData[0].NAME)
                 $('#SLAReachRateMonthName1').html(SLAReachRateData[1].NAME)
                 $('#SLAReachRateMonthName2').html(SLAReachRateData[2].NAME)
                 $('#SLAReachRateMonthName3').html(SLAReachRateData[3].NAME)
                 $('#SLAReachRateMonthName4').html(SLAReachRateData[4].NAME)
                 $('#SLAReachRateMonthName5').html(SLAReachRateData[5].NAME)
                 $(function () {
        			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
        			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
        			   console.log("SLAReachRateData0reslut")
        			    console.log(SLAReachRateData0reslut)
        			    console.log('SLAReachRateData0')
        			    console.log(SLAReachRateData0)
        				Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			    Highcharts.chart('SLAReachRateMonth0', {
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
        			                center: ['40%', '75%'],
        			                size: 120,
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA月达成率',
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
        	 		   var SLAReachRateData1= SLAReachRateData[1].SOCRE
        			   var SLAReachRateData1reslut = 100-SLAReachRateData1;
        	 		Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			      Highcharts.chart('SLAReachRateMonth1', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 50,
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
        			                center: ['40%', '75%']
        			                
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA月达成率',
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
        	 				   var SLAReachRateData2= SLAReachRateData[2].SOCRE
        			   var SLAReachRateData2reslut = 100-SLAReachRateData2;
        	 		Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			    Highcharts.chart('SLAReachRateMonth2', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 50,
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
        			                center: ['40%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA月达成率',
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
        	 			 				   var SLAReachRateData3= SLAReachRateData[3].SOCRE
        			   var SLAReachRateData3reslut = 100-SLAReachRateData3;
        	 		Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			    Highcharts.chart('SLAReachRateMonth3', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 50,
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
        			                center: ['40%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA月达成率',
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
        	 	 			 			 				   var SLAReachRateData4= SLAReachRateData[4].SOCRE
        			   var SLAReachRateData4reslut = 100-SLAReachRateData4;
        	 		Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			    Highcharts.chart('SLAReachRateMonth4', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 50,
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
        			                center: ['40%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA月达成率',
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
        	 	 			 	 	  var SLAReachRateData5= SLAReachRateData[5].SOCRE
        			   var SLAReachRateData5reslut = 100-SLAReachRateData5;
        	 		Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			    Highcharts.chart('SLAReachRateMonth5', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 50,
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
        			                center: ['40%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA月达成率',
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
        			    Highcharts.chart('SLAReachRateMonth6', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 50,
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
        			                center: ['40%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA月达成率',
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
           		 $('#SLAReachRateMonthName8').css({'display':'none'})
           		 $('#SLAReachRateMonthName9').css({'display':'none'})
           		 $('#SLAReachRateMonth8').css({'display':'none'})
           		 $('#SLAReachRateMonth9').css({'display':'none'})
           		  $('#SLAReachRateMonthName0').html(SLAReachRateData[0].NAME)
                 $('#SLAReachRateMonthName1').html(SLAReachRateData[1].NAME)
                 $('#SLAReachRateMonthName2').html(SLAReachRateData[2].NAME)
                 $('#SLAReachRateMonthName3').html(SLAReachRateData[3].NAME)
                 $('#SLAReachRateMonthName4').html(SLAReachRateData[4].NAME)
                 $('#SLAReachRateMonthName5').html(SLAReachRateData[5].NAME)
                 $('#SLAReachRateMonthName6').html(SLAReachRateData[6].NAME)
                 $('#SLAReachRateMonthName7').html(SLAReachRateData[7].NAME)
                 $(function () {
      			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
      			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
      			   console.log("SLAReachRateData0reslut")
      			    console.log(SLAReachRateData0reslut)
      			    console.log('SLAReachRateData0')
      			    console.log(SLAReachRateData0)
      				Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateMonth0', {
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
      			                center: ['40%', '75%'],
      			                size: 120,
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      	 		   var SLAReachRateData1= SLAReachRateData[1].SOCRE
      			   var SLAReachRateData1reslut = 100-SLAReachRateData1;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			      Highcharts.chart('SLAReachRateMonth1', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 50,
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
      			                center: ['40%', '75%']
      			                
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      	 				   var SLAReachRateData2= SLAReachRateData[2].SOCRE
      			   var SLAReachRateData2reslut = 100-SLAReachRateData2;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateMonth2', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 50,
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
      			                center: ['40%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      	 			 				   var SLAReachRateData3= SLAReachRateData[3].SOCRE
      			   var SLAReachRateData3reslut = 100-SLAReachRateData3;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateMonth3', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 50,
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
      			                center: ['40%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      	 	 			 			 				   var SLAReachRateData4= SLAReachRateData[4].SOCRE
      			   var SLAReachRateData4reslut = 100-SLAReachRateData4;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateMonth4', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 50,
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
      			                center: ['40%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      	 	 			 	 	  var SLAReachRateData5= SLAReachRateData[5].SOCRE
      			   var SLAReachRateData5reslut = 100-SLAReachRateData5;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateMonth5', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 50,
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
      			                center: ['40%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      			    Highcharts.chart('SLAReachRateMonth6', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 50,
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
      			                center: ['40%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      			    Highcharts.chart('SLAReachRateMonth7', {
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
      			                center: ['40%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
           		 $('#SLAReachRateMonthName9').css({'display':'none'})
           		 $('#SLAReachRateMonth9').css({'display':'none'})
           		  $('#SLAReachRateMonthName0').html(SLAReachRateData[0].NAME)
                 $('#SLAReachRateMonthName1').html(SLAReachRateData[1].NAME)
                 $('#SLAReachRateMonthName2').html(SLAReachRateData[2].NAME)
                 $('#SLAReachRateMonthName3').html(SLAReachRateData[3].NAME)
                 $('#SLAReachRateMonthName4').html(SLAReachRateData[4].NAME)
                 $('#SLAReachRateMonthName5').html(SLAReachRateData[5].NAME)
                 $('#SLAReachRateMonthName6').html(SLAReachRateData[6].NAME)
                 $('#SLAReachRateMonthName7').html(SLAReachRateData[7].NAME)
                 $('#SLAReachRateMonthName8').html(SLAReachRateData[8].NAME)
                 $(function () {
        			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
        			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
        			   console.log("SLAReachRateData0reslut")
        			    console.log(SLAReachRateData0reslut)
        			    console.log('SLAReachRateData0')
        			    console.log(SLAReachRateData0)
        				Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			    Highcharts.chart('SLAReachRateMonth0', {
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
        			                center: ['40%', '75%'],
        			                size: 120,
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA月达成率',
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
        	 		   var SLAReachRateData1= SLAReachRateData[1].SOCRE
        			   var SLAReachRateData1reslut = 100-SLAReachRateData1;
        	 		Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			      Highcharts.chart('SLAReachRateMonth1', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 50,
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
        			                center: ['40%', '75%']
        			                
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA月达成率',
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
        	 				   var SLAReachRateData2= SLAReachRateData[2].SOCRE
        			   var SLAReachRateData2reslut = 100-SLAReachRateData2;
        	 		Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			    Highcharts.chart('SLAReachRateMonth2', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 50,
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
        			                center: ['40%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA月达成率',
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
        	 			 				   var SLAReachRateData3= SLAReachRateData[3].SOCRE
        			   var SLAReachRateData3reslut = 100-SLAReachRateData3;
        	 		Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			    Highcharts.chart('SLAReachRateMonth3', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 50,
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
        			                center: ['40%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA月达成率',
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
        	 	 			 			 				   var SLAReachRateData4= SLAReachRateData[4].SOCRE
        			   var SLAReachRateData4reslut = 100-SLAReachRateData4;
        	 		Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			    Highcharts.chart('SLAReachRateMonth4', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 50,
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
        			                center: ['40%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA月达成率',
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
        	 	 			 	 	  var SLAReachRateData5= SLAReachRateData[5].SOCRE
        			   var SLAReachRateData5reslut = 100-SLAReachRateData5;
        	 		Highcharts.setOptions({
        			        colors: ['#66c877','#87a7f1']
        			    });
        			    Highcharts.chart('SLAReachRateMonth5', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 50,
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
        			                center: ['40%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA月达成率',
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
        			    Highcharts.chart('SLAReachRateMonth6', {
        			        chart: {
        			            plotBackgroundColor: null,
        			            plotBorderWidth: 0,
        			            plotShadow: false,
        			          
        			        },
        			        title: {
        			            text: '达成率',
        			            align: 'center',
        			            verticalAlign: 'middle',
        			            y: 50,
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
        			                center: ['40%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA月达成率',
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
        			    Highcharts.chart('SLAReachRateMonth7', {
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
        			                center: ['40%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA月达成率',
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
        			    Highcharts.chart('SLAReachRateMonth8', {
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
        			                center: ['40%', '75%']
        			            }
        			        },
        			        series: [{
        			            type: 'pie',
        			            name: 'SLA月达成率',
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
           		 $('#SLAReachRateMonthName0').html(SLAReachRateData[0].NAME)
                 $('#SLAReachRateMonthName1').html(SLAReachRateData[1].NAME)
                 $('#SLAReachRateMonthName2').html(SLAReachRateData[2].NAME)
                 $('#SLAReachRateMonthName3').html(SLAReachRateData[3].NAME)
                 $('#SLAReachRateMonthName4').html(SLAReachRateData[4].NAME)
                 $('#SLAReachRateMonthName5').html(SLAReachRateData[5].NAME)
                 $('#SLAReachRateMonthName6').html(SLAReachRateData[6].NAME)
                 $('#SLAReachRateMonthName7').html(SLAReachRateData[7].NAME)
                 $('#SLAReachRateMonthName8').html(SLAReachRateData[8].NAME)
                 $('#SLAReachRateMonthName9').html(SLAReachRateData[9].NAME)	
                 $(function () {
      			   var SLAReachRateData0 = SLAReachRateData[0].SOCRE
      			   var SLAReachRateData0reslut = 100-SLAReachRateData0;
      			   console.log("SLAReachRateData0reslut")
      			    console.log(SLAReachRateData0reslut)
      			    console.log('SLAReachRateData0')
      			    console.log(SLAReachRateData0)
      				Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateMonth0', {
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
      			                center: ['40%', '75%'],
      			                size: 120,
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      	 		   var SLAReachRateData1= SLAReachRateData[1].SOCRE
      			   var SLAReachRateData1reslut = 100-SLAReachRateData1;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			      Highcharts.chart('SLAReachRateMonth1', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 50,
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
      			                center: ['40%', '75%']
      			                
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      	 				   var SLAReachRateData2= SLAReachRateData[2].SOCRE
      			   var SLAReachRateData2reslut = 100-SLAReachRateData2;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateMonth2', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 50,
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
      			                center: ['40%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      	 			 				   var SLAReachRateData3= SLAReachRateData[3].SOCRE
      			   var SLAReachRateData3reslut = 100-SLAReachRateData3;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateMonth3', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 50,
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
      			                center: ['40%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      	 	 			 			 				   var SLAReachRateData4= SLAReachRateData[4].SOCRE
      			   var SLAReachRateData4reslut = 100-SLAReachRateData4;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateMonth4', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 50,
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
      			                center: ['40%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      	 	 			 	 	  var SLAReachRateData5= SLAReachRateData[5].SOCRE
      			   var SLAReachRateData5reslut = 100-SLAReachRateData5;
      	 		Highcharts.setOptions({
      			        colors: ['#66c877','#87a7f1']
      			    });
      			    Highcharts.chart('SLAReachRateMonth5', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 50,
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
      			                center: ['40%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      			    Highcharts.chart('SLAReachRateMonth6', {
      			        chart: {
      			            plotBackgroundColor: null,
      			            plotBorderWidth: 0,
      			            plotShadow: false,
      			          
      			        },
      			        title: {
      			            text: '达成率',
      			            align: 'center',
      			            verticalAlign: 'middle',
      			            y: 50,
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
      			                center: ['40%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      			    Highcharts.chart('SLAReachRateMonth7', {
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
      			                center: ['40%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
      			    Highcharts.chart('SLAReachRateMonth8', {
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
      			                center: ['40%', '75%']
      			            }
      			        },
      			        series: [{
      			            type: 'pie',
      			            name: 'SLA月达成率',
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
	  	 			  var SLAReachRateData9= SLAReachRateData[9].SOCRE
			   var SLAReachRateData9reslut = 100-SLAReachRateData9;	
	 		Highcharts.setOptions({
			        colors: ['#66c877','#87a7f1']
			    });
			    Highcharts.chart('SLAReachRateMonth9', {
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
			                center: ['40%', '75%']
			            }
			        },
			        series: [{
			            type: 'pie',
			            name: 'SLA月达成率',
			            innerSize: '50%',
						size: 120,
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
	                        <div id="SLAReachRateMonth0" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateMonthName0"></div>
		    			</div>
		    			<div className="completionUnitTopToadyUpList">
	               <div id="SLAReachRateMonth1" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateMonthName1"></div>	
		    			</div>
		    			<div className="completionUnitTopToadyUpList">
	               <div id="SLAReachRateMonth2" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateMonthName2"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyUpList">
	               <div id="SLAReachRateMonth3" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateMonthName3"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyUpList">
	               <div id="SLAReachRateMonth4" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateMonthName4"></div>
		    			
		    			</div>
		    			
	    			</div>
	    			<div className="completionUnitTopToadyDown">
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateMonth5" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateMonthName5"></div>
									    					
		    			</div>
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateMonth6" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateMonthName6"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateMonth7" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateMonthName7"></div>
		    			
		    			</div>
		    				<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateMonth8" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateMonthName8"></div>
		    			
		    			</div>
		    			<div className="completionUnitTopToadyDownList">
	                          <div id="SLAReachRateMonth9" style={{"width":"100%","height":"120px","margin":"0 auto"}}></div>
		    				<div className="SLAReachRateToadyNametxt" id="SLAReachRateMonthName9"></div>
		    			
		    			</div>
	    			
	    			</div>

			    </div>				
	  )},
	});
// function mapStateToProps(state) {
//	  const {SLAReachRateData} = state.operationReducer;	
//		  return {
//		  SLAReachRateData:SLAReachRateData
//		  }
//		}
//export default connect(mapStateToProps)(SLAReachRateMonth)
export default SLAReachRateMonth