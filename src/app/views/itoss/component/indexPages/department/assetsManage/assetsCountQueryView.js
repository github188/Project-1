import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
var AssetsCountQueryView = React.createClass({

					AssetsCountManageMentWeek:function(){
							        this.props.AssetsCountManageMentWeek();
							    },
					AssetsCountManageMentMonth:function(){
							        this.props.AssetsCountManageMentMonth();
							    },
					AssetsCountManageMentQuarter:function(){
							        this.props.AssetsCountManageMentQuarter();
							    },
				 AssetsCountManageMentYear:function(){
							        this.props.AssetsCountManageMentYear();
							    },
							    
//			toggleScore:function(pageScore){
//			  this.setState({pageScore:pageScore})
//	      const { dispatch } = this.props;
//				switch(pageScore){
//				  				case "TaskMagerWeek":
//				  				 
//                   break;	
//                case "TaskMagerMonth":
//				  				alert('TaskMagerMonth')
//                
//                   break;	
//                case "TaskMagerQuarter":
//				  				alert('TaskMagerQuarter')
//                
//                   break;	
//                case "TaskMagerYear":
//				  				alert('TaskMagerYear')
//                
//                   break;	               
//				             };
//		      },	
		   componentDidUpdate:function(){ 
		      var hardOrSoftWareStatisticsData = this.props.hardOrSoftWareStatisticsData
		      var softWareStatisticsData = this.props.softWareStatisticsData
		      var sparePartsData = this.props.sparePartsData
		      var hardWareOverdueAssetsData = this.props.hardWareOverdueAssetsData
		      var softWareOverdueAssetsData = this.props.softWareOverdueAssetsData
		      var hardWareFaultRateData = this.props.hardWareFaultRateData

      
			$('#totalHardwareAssets').html(hardOrSoftWareStatisticsData[0].COUNT)
			$('#borrow').html(hardOrSoftWareStatisticsData[0].STATUSA)
			$('#stock').html(hardOrSoftWareStatisticsData[0].STATUSB)
			$('#repair').html(hardOrSoftWareStatisticsData[0].STATUSC)
			$('#scrap').html(hardOrSoftWareStatisticsData[0].STATUSD)
			
			$('#totalSoftwareAssets').html(softWareStatisticsData[0].COUNT)
			$('#borrowSoft').html(softWareStatisticsData[0].STATUSA)
			$('#stockSoft').html(softWareStatisticsData[0].STATUSB)
			$('#repairSoft').html(softWareStatisticsData[0].STATUSC)
			$('#scrapSoft').html(softWareStatisticsData[0].STATUSD)
			
			if(sparePartsData[0].COUNT==''||null){
					$('#library').html(0)
					$('#storage').html(0)
			}else{
					$('#library').html(sparePartsData[0].COUNT)
					$('#storage').html(sparePartsData[1].COUNT)
			}
//			sparePartsData[0].CHANGETYPE
//			sparePartsData[1].CHANGETYPE
			$('#hardEXPIRED').html(hardWareOverdueAssetsData[0].EXPIRED)
			$('#hardWILLEXPIREA').html(hardWareOverdueAssetsData[0].WILLEXPIREA)
			$('#hardWILLEXPIREB').html(hardWareOverdueAssetsData[0].WILLEXPIREB)
			$('#hardWILLEXPIREC').html(hardWareOverdueAssetsData[0].WILLEXPIREC)
			
			$('#softEXPIRED').html(softWareOverdueAssetsData[0].EXPIRED)
			$('#softWILLEXPIREA').html(softWareOverdueAssetsData[0].WILLEXPIREA)
			$('#softWILLEXPIREB').html(softWareOverdueAssetsData[0].WILLEXPIREB)
			$('#softWILLEXPIREC').html(softWareOverdueAssetsData[0].WILLEXPIREC)
			
						var StringHardWareFaultRateData0 = hardWareFaultRateData[0].INFO
						var StringHardWareFaultRateData1 = hardWareFaultRateData[1].INFO
						var StringHardWareFaultRateData2 = hardWareFaultRateData[2].INFO
						var StringHardWareFaultRateData3 = hardWareFaultRateData[3].INFO
						var StringHardWareFaultRateData4 = hardWareFaultRateData[4].INFO
						var StringHardWareFaultRateData5 = hardWareFaultRateData[5].INFO
						var ArryHardWareFaultRateData0 = eval(StringHardWareFaultRateData0)
						var ArryHardWareFaultRateData1 = eval(StringHardWareFaultRateData1)
						var ArryHardWareFaultRateData2 = eval(StringHardWareFaultRateData2)
						var ArryHardWareFaultRateData3 = eval(StringHardWareFaultRateData3)
						var ArryHardWareFaultRateData4 = eval(StringHardWareFaultRateData4)
						var ArryHardWareFaultRateData5 = eval(StringHardWareFaultRateData5)


						
			  var myChart = echarts.init(document.getElementById('container'));
    		var dataAxis =  [hardWareFaultRateData[0].FNAME,hardWareFaultRateData[1].FNAME,hardWareFaultRateData[2].FNAME,hardWareFaultRateData[3].FNAME,hardWareFaultRateData[4].FNAME,hardWareFaultRateData[5].FNAME]
        var barData = [hardWareFaultRateData[0].TOTALCOUNT, hardWareFaultRateData[1].TOTALCOUNT, hardWareFaultRateData[2].TOTALCOUNT,hardWareFaultRateData[3].TOTALCOUNT,hardWareFaultRateData[4].TOTALCOUNT,hardWareFaultRateData[5].TOTALCOUNT];
        var lineData = [hardWareFaultRateData[0].TOTALFAULTRATE, hardWareFaultRateData[1].TOTALFAULTRATE, hardWareFaultRateData[2].TOTALFAULTRATE,hardWareFaultRateData[3].TOTALFAULTRATE,hardWareFaultRateData[4].TOTALFAULTRATE,hardWareFaultRateData[5].TOTALFAULTRATE];
 				
 				var option = {color: ['#3398DB'],
 				
            tooltip : {
                trigger: 'axis',
                axisPointer : {            
                    type : 'shadow'        
                }
            },
            legend: {
                data:['设备数量（台）','设备故障率（%）'],
            },
            grid: {
                left: '2%',
                right: '2%',
                bottom: '3%',
                containLabel: true
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : dataAxis,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type: 'value',
                    name: '设备数量（台）',
                    nameTextStyle:{
                    	color:'#82aee5'
                    },
                    position: 'left',
                       axisLabel: {
                         formatter: '{value}'
                            },
                },
                {
                    type: 'value',
                    name: '设备故障率（%）',
                      nameTextStyle:{
                    	color:'#ef8b64'
                    },
                    position: 'right',
                    axisLabel: {
                        formatter: '{value}%'
                    }
                },
            ],
            series : [
                {
                    name:'设备数量（台）',
                    type:'bar',
                    barWidth:20,
                    yAxis: 1, 
                    itemStyle: {
						            normal: {
						                barBorderRadius:[5, 5, 0, 0],
						                color: "#82aee5"
						            }
						        },
                    data:barData
                },
                {
                     name:'设备故障率（%）',
                     type:'line',
                     min:0,
                     max:100,
                     yAxisIndex: 1,
                     itemStyle: {
						            normal: {
						                color: '#ef8b64'
						            }
					        },
                     data:lineData
                }
                
            ]
        };
  myChart.setOption(option);
  $('#hardWareFaultRateDataFNAME0').html(hardWareFaultRateData[0].FNAME)
  $('#hardWareFaultRateDataFNAME1').html(hardWareFaultRateData[1].FNAME)
  $('#hardWareFaultRateDataFNAME2').html(hardWareFaultRateData[2].FNAME)
  $('#hardWareFaultRateDataFNAME3').html(hardWareFaultRateData[3].FNAME)
  $('#hardWareFaultRateDataFNAME4').html(hardWareFaultRateData[4].FNAME)
  $('#hardWareFaultRateDataFNAME5').html(hardWareFaultRateData[5].FNAME)
  if(ArryHardWareFaultRateData0.length==1){
  	  $('#hardWareFaultRateData0INFOSNAME0').html(ArryHardWareFaultRateData0[0].SNAME)
      $('#hardWareFaultRateData0INFOCOUNT0').html("("+ArryHardWareFaultRateData0[0].COUNT+")")
      var barArryHardWareFaultRateData0 = eval(ArryHardWareFaultRateData0[0].BANDINFO)
  }else if(ArryHardWareFaultRateData0.length==2){
  		$('#hardWareFaultRateData0INFOSNAME0').html(ArryHardWareFaultRateData0[0].SNAME)
      $('#hardWareFaultRateData0INFOCOUNT0').html("("+ArryHardWareFaultRateData0[0].COUNT+")")
  	 $('#hardWareFaultRateData0INFOSNAME1').html(ArryHardWareFaultRateData0[1].SNAME)
 		 $('#hardWareFaultRateData0INFOCOUNT1').html("("+ArryHardWareFaultRateData0[1].COUNT+")")
 		 				var barArryHardWareFaultRateData0 = eval(ArryHardWareFaultRateData0[0].BANDINFO)
						var barArryHardWareFaultRateData0_1 = eval(ArryHardWareFaultRateData0[1].BANDINFO)
  }else if(ArryHardWareFaultRateData0.length>2){
  	$('#hardWareFaultRateData0INFOSNAME0').html(ArryHardWareFaultRateData0[0].SNAME)
    $('#hardWareFaultRateData0INFOCOUNT0').html("("+ArryHardWareFaultRateData0[0].COUNT+")")
  	$('#hardWareFaultRateData0INFOSNAME1').html(ArryHardWareFaultRateData0[1].SNAME)
 		$('#hardWareFaultRateData0INFOCOUNT1').html("("+ArryHardWareFaultRateData0[1].COUNT+")")
  	$('#hardWareFaultRateData0INFOSNAME2').html(ArryHardWareFaultRateData0[2].SNAME)
  	$('#hardWareFaultRateData0INFOCOUNT2').html("("+ArryHardWareFaultRateData0[2].COUNT+")")
  					var barArryHardWareFaultRateData0 = eval(ArryHardWareFaultRateData0[0].BANDINFO)
						var barArryHardWareFaultRateData0_1 = eval(ArryHardWareFaultRateData0[1].BANDINFO)
						var barArryHardWareFaultRateData0_2 = eval(ArryHardWareFaultRateData0[2].BANDINFO)
  }
  
  
  if(ArryHardWareFaultRateData1.length==1){
  $('#hardWareFaultRateData1INFOSNAME0').html(ArryHardWareFaultRateData1[0].SNAME)
  $('#hardWareFaultRateData1INFOCOUNT0').html("("+ArryHardWareFaultRateData1[0].COUNT+")")
  var barArryHardWareFaultRateData1_0 = eval(ArryHardWareFaultRateData1[0].BANDINFO)
  }else if(ArryHardWareFaultRateData1.length==2){
  $('#hardWareFaultRateData1INFOSNAME0').html(ArryHardWareFaultRateData1[0].SNAME)
  $('#hardWareFaultRateData1INFOCOUNT0').html("("+ArryHardWareFaultRateData1[0].COUNT+")")
  $('#hardWareFaultRateData1INFOSNAME1').html(ArryHardWareFaultRateData1[1].SNAME)
  $('#hardWareFaultRateData1INFOCOUNT1').html("("+ArryHardWareFaultRateData1[1].COUNT+")")
  var barArryHardWareFaultRateData1_0 = eval(ArryHardWareFaultRateData1[0].BANDINFO)
	var barArryHardWareFaultRateData1_1 = eval(ArryHardWareFaultRateData1[1].BANDINFO)
  }else if(ArryHardWareFaultRateData1.length>2){
  $('#hardWareFaultRateData1INFOSNAME0').html(ArryHardWareFaultRateData1[0].SNAME)
  $('#hardWareFaultRateData1INFOCOUNT0').html("("+ArryHardWareFaultRateData1[0].COUNT+")")
  $('#hardWareFaultRateData1INFOSNAME1').html(ArryHardWareFaultRateData1[1].SNAME)
  $('#hardWareFaultRateData1INFOCOUNT1').html("("+ArryHardWareFaultRateData1[1].COUNT+")")
  $('#hardWareFaultRateData1INFOSNAME2').html(ArryHardWareFaultRateData1[2].SNAME)
  $('#hardWareFaultRateData1INFOCOUNT2').html("("+ArryHardWareFaultRateData1[2].COUNT+")")
  	        var barArryHardWareFaultRateData1_0 = eval(ArryHardWareFaultRateData1[0].BANDINFO)
						var barArryHardWareFaultRateData1_1 = eval(ArryHardWareFaultRateData1[1].BANDINFO)
						var barArryHardWareFaultRateData1_2 = eval(ArryHardWareFaultRateData1[2].BANDINFO)
  }


  if(ArryHardWareFaultRateData2.length==1){
   $('#hardWareFaultRateData2INFOSNAME0').html(ArryHardWareFaultRateData2[0].SNAME)
  $('#hardWareFaultRateData2INFOCOUNT0').html("("+ArryHardWareFaultRateData2[0].COUNT+")")
						var barArryHardWareFaultRateData2_0 = eval(ArryHardWareFaultRateData2[0].BANDINFO)
  
  }else if(ArryHardWareFaultRateData2.length==2){
  $('#hardWareFaultRateData2INFOSNAME0').html(ArryHardWareFaultRateData2[0].SNAME)
  $('#hardWareFaultRateData2INFOCOUNT0').html("("+ArryHardWareFaultRateData2[0].COUNT+")")
  $('#hardWareFaultRateData2INFOSNAME1').html(ArryHardWareFaultRateData2[1].SNAME)
  $('#hardWareFaultRateData2INFOCOUNT1').html("("+ArryHardWareFaultRateData2[1].COUNT+")")
 						  var barArryHardWareFaultRateData2_0 = eval(ArryHardWareFaultRateData2[0].BANDINFO)
						  var barArryHardWareFaultRateData2_1 = eval(ArryHardWareFaultRateData2[1].BANDINFO)
  }else if(ArryHardWareFaultRateData2.length>2){
  					  var barArryHardWareFaultRateData2_2 = eval(ArryHardWareFaultRateData2[2].BANDINFO)
  $('#hardWareFaultRateData2INFOSNAME0').html(ArryHardWareFaultRateData2[0].SNAME)
  $('#hardWareFaultRateData2INFOCOUNT0').html("("+ArryHardWareFaultRateData2[0].COUNT+")")
  $('#hardWareFaultRateData2INFOSNAME1').html(ArryHardWareFaultRateData2[1].SNAME)
  $('#hardWareFaultRateData2INFOCOUNT1').html("("+ArryHardWareFaultRateData2[1].COUNT+")")
  $('#hardWareFaultRateData2INFOSNAME2').html(ArryHardWareFaultRateData2[2].SNAME)
  $('#hardWareFaultRateData2INFOCOUNT2').html("("+ArryHardWareFaultRateData2[2].COUNT+")")
  					  var barArryHardWareFaultRateData2_0 = eval(ArryHardWareFaultRateData2[0].BANDINFO)
					  	var barArryHardWareFaultRateData2_1 = eval(ArryHardWareFaultRateData2[1].BANDINFO)
						  var barArryHardWareFaultRateData2_2 = eval(ArryHardWareFaultRateData2[2].BANDINFO)
						 
						 console.log("barArryHardWareFaultRateData2_0")
						 console.log(barArryHardWareFaultRateData2_0)
						 console.log(barArryHardWareFaultRateData2_1)
						 console.log(barArryHardWareFaultRateData2_2)
  }

  if(ArryHardWareFaultRateData3.length==1){
  $('#hardWareFaultRateData3INFOSNAME0').html(ArryHardWareFaultRateData3[0].SNAME)
  $('#hardWareFaultRateData3INFOCOUNT0').html("("+ArryHardWareFaultRateData3[0].COUNT+")")
						  var barArryHardWareFaultRateData3_0 = eval(ArryHardWareFaultRateData3[0].BANDINFO)
  
  }else if(ArryHardWareFaultRateData3.length==2){
  $('#hardWareFaultRateData3INFOSNAME0').html(ArryHardWareFaultRateData3[0].SNAME)
  $('#hardWareFaultRateData3INFOCOUNT0').html("("+ArryHardWareFaultRateData3[0].COUNT+")")
  $('#hardWareFaultRateData3INFOSNAME1').html(ArryHardWareFaultRateData3[1].SNAME)
  $('#hardWareFaultRateData3INFOCOUNT1').html("("+ArryHardWareFaultRateData3[1].COUNT+")")
  					  var barArryHardWareFaultRateData3_0 = eval(ArryHardWareFaultRateData3[0].BANDINFO)
						  var barArryHardWareFaultRateData3_1 = eval(ArryHardWareFaultRateData3[1].BANDINFO)
  }else if(ArryHardWareFaultRateData3.length>2){
  $('#hardWareFaultRateData3INFOSNAME0').html(ArryHardWareFaultRateData3[0].SNAME)
  $('#hardWareFaultRateData3INFOCOUNT0').html("("+ArryHardWareFaultRateData3[0].COUNT+")")
  $('#hardWareFaultRateData3INFOSNAME1').html(ArryHardWareFaultRateData3[1].SNAME)
  $('#hardWareFaultRateData3INFOCOUNT1').html("("+ArryHardWareFaultRateData3[1].COUNT+")")
  $('#hardWareFaultRateData3INFOSNAME2').html(ArryHardWareFaultRateData3[2].SNAME)
  $('#hardWareFaultRateData3INFOCOUNT2').html("("+ArryHardWareFaultRateData3[2].COUNT+")")
 					    var barArryHardWareFaultRateData3_0 = eval(ArryHardWareFaultRateData3[0].BANDINFO)
						  var barArryHardWareFaultRateData3_1 = eval(ArryHardWareFaultRateData3[1].BANDINFO)
						  var barArryHardWareFaultRateData3_2 = eval(ArryHardWareFaultRateData3[2].BANDINFO)
						 console.log("barArryHardWareFaultRateData3_0")
						console.log(barArryHardWareFaultRateData3_0)
						console.log(barArryHardWareFaultRateData3_1)
						console.log(barArryHardWareFaultRateData3_2)
  }
 
  if(ArryHardWareFaultRateData4.length==1){
   $('#hardWareFaultRateData4INFOSNAME0').html(ArryHardWareFaultRateData4[0].SNAME)
  $('#hardWareFaultRateData4INFOCOUNT0').html("("+ArryHardWareFaultRateData4[0].COUNT+")")
  var barArryHardWareFaultRateData4_0 = eval(ArryHardWareFaultRateData4[0].BANDINFO)
  }else if(ArryHardWareFaultRateData4.length==2){
  $('#hardWareFaultRateData4INFOSNAME0').html(ArryHardWareFaultRateData4[0].SNAME)
  $('#hardWareFaultRateData4INFOCOUNT0').html("("+ArryHardWareFaultRateData4[0].COUNT+")")
  $('#hardWareFaultRateData4INFOSNAME1').html(ArryHardWareFaultRateData4[1].SNAME)
  $('#hardWareFaultRateData4INFOCOUNT1').html("("+ArryHardWareFaultRateData4[1].COUNT+")")
  					  var barArryHardWareFaultRateData4_0 = eval(ArryHardWareFaultRateData4[0].BANDINFO)
						  var barArryHardWareFaultRateData4_1 = eval(ArryHardWareFaultRateData4[1].BANDINFO)
  }else if(ArryHardWareFaultRateData4.length>2){
  	  $('#hardWareFaultRateData4INFOSNAME0').html(ArryHardWareFaultRateData4[0].SNAME)
  $('#hardWareFaultRateData4INFOCOUNT0').html("("+ArryHardWareFaultRateData4[0].COUNT+")")
  $('#hardWareFaultRateData4INFOSNAME1').html(ArryHardWareFaultRateData4[1].SNAME)
  $('#hardWareFaultRateData4INFOCOUNT1').html("("+ArryHardWareFaultRateData4[1].COUNT+")")
  $('#hardWareFaultRateData4INFOSNAME2').html(ArryHardWareFaultRateData4[2].SNAME)
  $('#hardWareFaultRateData4INFOCOUNT2').html("("+ArryHardWareFaultRateData4[2].COUNT+")")
  					  var barArryHardWareFaultRateData4_0 = eval(ArryHardWareFaultRateData4[0].BANDINFO)
						  var barArryHardWareFaultRateData4_1 = eval(ArryHardWareFaultRateData4[1].BANDINFO)
						  var barArryHardWareFaultRateData4_2 = eval(ArryHardWareFaultRateData4[2].BANDINFO)
						  
						 console.log('barArryHardWareFaultRateData4_0')
						console.log(barArryHardWareFaultRateData4_0)
						console.log(barArryHardWareFaultRateData4_1)
						console.log(barArryHardWareFaultRateData4_2)
  }
  
 if(ArryHardWareFaultRateData5.length==1){
  $('#hardWareFaultRateData5INFOSNAME0').html(ArryHardWareFaultRateData5[0].SNAME)
  $('#hardWareFaultRateData5INFOCOUNT0').html("("+ArryHardWareFaultRateData5[0].COUNT+")")
  					var barArryHardWareFaultRateData5_0 = eval(ArryHardWareFaultRateData5[0].BANDINFO)
  }else if(ArryHardWareFaultRateData5.length==2){
  $('#hardWareFaultRateData5INFOSNAME0').html(ArryHardWareFaultRateData5[0].SNAME)
  $('#hardWareFaultRateData5INFOCOUNT0').html("("+ArryHardWareFaultRateData5[0].COUNT+")")
  $('#hardWareFaultRateData5INFOSNAME1').html(ArryHardWareFaultRateData5[1].SNAME)
  $('#hardWareFaultRateData5INFOCOUNT1').html("("+ArryHardWareFaultRateData5[1].COUNT+")")
 						 var barArryHardWareFaultRateData5_0 = eval(ArryHardWareFaultRateData5[0].BANDINFO)
						 var barArryHardWareFaultRateData5_1 = eval(ArryHardWareFaultRateData5[1].BANDINFO)
  }else if(ArryHardWareFaultRateData5.length>2){
  $('#hardWareFaultRateData5INFOSNAME0').html(ArryHardWareFaultRateData5[0].SNAME)
  $('#hardWareFaultRateData5INFOCOUNT0').html("("+ArryHardWareFaultRateData5[0].COUNT+")")
  $('#hardWareFaultRateData5INFOSNAME1').html(ArryHardWareFaultRateData5[1].SNAME)
  $('#hardWareFaultRateData5INFOCOUNT1').html("("+ArryHardWareFaultRateData5[1].COUNT+")")
  $('#hardWareFaultRateData5INFOSNAME2').html(ArryHardWareFaultRateData5[2].SNAME)
  $('#hardWareFaultRateData5INFOCOUNT2').html("("+ArryHardWareFaultRateData5[2].COUNT+")")
            var barArryHardWareFaultRateData5_0 = eval(ArryHardWareFaultRateData5[0].BANDINFO)
						var barArryHardWareFaultRateData5_1 = eval(ArryHardWareFaultRateData5[1].BANDINFO)
						var barArryHardWareFaultRateData5_2 = eval(ArryHardWareFaultRateData5[2].BANDINFO)
  }
  

//						//已经转换成数组 ArryHardWareFaultRateData0   就是第一个INFO{有好多对想}
//						判断ArryHardWareFaultRateData0 de 长度是否有 5个  【0】——【4】

						//装换的是 info   5个 info 
						//每个ifo 下边有 1-5个BAND---INFO
						//要判断有几个 band ifo  通过什么去判断
						//要 将 band ifo 转换成 数组
//						console.log("ArryHardWareFaultRateData0")
//						console.log(ArryHardWareFaultRateData0)
//						console.log("ArryHardWareFaultRateData0.length")
//						console.log(ArryHardWareFaultRateData0.length)
//						console.log(ArryHardWareFaultRateData0[0].BANDINFO)
//						console.log(ArryHardWareFaultRateData0[1].BANDINFO)
						//这是 第一组 的第一个ifo 里边有多少个进度条呢？
//						var barArryHardWareFaultRateData0 = eval(ArryHardWareFaultRateData0[0].BANDINFO)
//						var barArryHardWareFaultRateData0_1 = eval(ArryHardWareFaultRateData0[1].BANDINFO)
//						var barArryHardWareFaultRateData0_2 = eval(ArryHardWareFaultRateData0[2].BANDINFO)
//						console.log('barArryHardWareFaultRateData0_2')
//						console.log(barArryHardWareFaultRateData0_2)
//						console.log('转换了吗')
						//第二组 的 进度条长度
      
      //
      //判断是否 鼠标滑过显示隐藏进度条 一级菜单第一个
       //   判断一级设备第一个 --的 下边二级设备的 第一个个的----- 进度条数 
      if(barArryHardWareFaultRateData0!==undefined||null||''){
      	if(barArryHardWareFaultRateData0.length!==0){
//    		alert('00')
	        
      		 $('#hardWareFaultRateData0INFOSNAME0').hover(function(){
      		 	$('#StatisticsDetailListBarRight0').show()
						$('#StatisticsDetailListBarRight0').parent('.StatisticsDetailListBar').siblings('.StatisticsDetailListBar').children('div').hide()
      		 })
      	}
      					if(barArryHardWareFaultRateData0.length==1){
      $('#barArryHardWareFaultRateData0_BANDNAME').html(barArryHardWareFaultRateData0[0].BANDNAME)
      $('#barArryHardWareFaultRateData0_BCOUNT').html("("+barArryHardWareFaultRateData0[0].BCOUNT+")")
      $('#barOutBarRight01').css({'display':"none"})
      $('#barOutBarRight02').css({'display':"none"})
      $('#barOutBarRight03').css({'display':"none"})
      $('#barOutBarRight04').css({'display':"none"})
      
      		$('#barlistFistFCOUNT00').html(barArryHardWareFaultRateData0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00").css({'width': barArryHardWareFaultRateData0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000').html(barArryHardWareFaultRateData0[0].FAULTRATE+"%")
      }
							if(barArryHardWareFaultRateData0.length==2){
      	$('#barArryHardWareFaultRateData0_BANDNAME').html(barArryHardWareFaultRateData0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData0_BCOUNT').html("("+barArryHardWareFaultRateData0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData0_1_BANDNAME').html(barArryHardWareFaultRateData0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData0_1_BCOUNT').html("("+barArryHardWareFaultRateData0[1].BCOUNT+")")
      	$('#barOutBarRight02').css({'display':"none"})
     		$('#barOutBarRight03').css({'display':"none"})
     	  $('#barOutBarRight04').css({'display':"none"})
     	  	$('#barlistFistFCOUNT00').html(barArryHardWareFaultRateData0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00").css({'width': barArryHardWareFaultRateData0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000').html(barArryHardWareFaultRateData0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01').html(barArryHardWareFaultRateData0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01").css({'width': barArryHardWareFaultRateData0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010').html(barArryHardWareFaultRateData0[1].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData0.length==3){
      	$('#barArryHardWareFaultRateData0_BANDNAME').html(barArryHardWareFaultRateData0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData0_BCOUNT').html("("+barArryHardWareFaultRateData0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData0_1_BANDNAME').html(barArryHardWareFaultRateData0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData0_1_BCOUNT').html("("+barArryHardWareFaultRateData0[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData0_2_BANDNAME').html(barArryHardWareFaultRateData0[2].BANDNAME)
        $('#barArryHardWareFaultRateData0_2_BCOUNT').html("("+barArryHardWareFaultRateData0[2].BCOUNT+")")
         $('#barOutBarRight03').css({'display':"none"})
        $('#barOutBarRight04').css({'display':"none"})
        
        	$('#barlistFistFCOUNT00').html(barArryHardWareFaultRateData0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00").css({'width': barArryHardWareFaultRateData0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000').html(barArryHardWareFaultRateData0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01').html(barArryHardWareFaultRateData0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01").css({'width': barArryHardWareFaultRateData0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010').html(barArryHardWareFaultRateData0[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02').html(barArryHardWareFaultRateData0[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02").css({'width': barArryHardWareFaultRateData0[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020').html(barArryHardWareFaultRateData0[2].FAULTRATE+"%")
					
      }
			if(barArryHardWareFaultRateData0.length==4){
      	$('#barArryHardWareFaultRateData0_BANDNAME').html(barArryHardWareFaultRateData0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData0_BCOUNT').html("("+barArryHardWareFaultRateData0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData0_1_BANDNAME').html(barArryHardWareFaultRateData0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData0_1_BCOUNT').html("("+barArryHardWareFaultRateData0[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData0_2_BANDNAME').html(barArryHardWareFaultRateData0[2].BANDNAME)
        $('#barArryHardWareFaultRateData0_2_BCOUNT').html("("+barArryHardWareFaultRateData0[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData0_3_BANDNAME').html(barArryHardWareFaultRateData0[3].BANDNAME)
        $('#barArryHardWareFaultRateData0_3_BCOUNT').html("("+barArryHardWareFaultRateData0[3].BCOUNT+")")
     	  $('#barOutBarRight04').css({'display':"none"})
     	  
     	  		$('#barlistFistFCOUNT00').html(barArryHardWareFaultRateData0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00").css({'width': barArryHardWareFaultRateData0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000').html(barArryHardWareFaultRateData0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01').html(barArryHardWareFaultRateData0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01").css({'width': barArryHardWareFaultRateData0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010').html(barArryHardWareFaultRateData0[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02').html(barArryHardWareFaultRateData0[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02").css({'width': barArryHardWareFaultRateData0[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020').html(barArryHardWareFaultRateData0[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03').html(barArryHardWareFaultRateData0[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03").css({'width': barArryHardWareFaultRateData0[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030').html(barArryHardWareFaultRateData0[3].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData0.length==5){
      	$('#barArryHardWareFaultRateData0_BANDNAME').html(barArryHardWareFaultRateData0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData0_FCOUNT').html("("+barArryHardWareFaultRateData0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData0_1_BANDNAME').html(barArryHardWareFaultRateData0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData0_1_BCOUNT').html("("+barArryHardWareFaultRateData0[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData0_2_BANDNAME').html(barArryHardWareFaultRateData0[2].BANDNAME)
        $('#barArryHardWareFaultRateData0_2_BCOUNT').html("("+barArryHardWareFaultRateData0[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData0_3_BANDNAME').html(barArryHardWareFaultRateData0[3].BANDNAME)
        $('#barArryHardWareFaultRateData0_3_BCOUNT').html("("+barArryHardWareFaultRateData0[3].BCOUNT+")")
        $('#barArryHardWareFaultRateData0_4_BANDNAME').html(barArryHardWareFaultRateData0[4].BANDNAME)
        $('#barArryHardWareFaultRateData0_4_BCOUNT').html("("+barArryHardWareFaultRateData0[4].BCOUNT+")")
        
        	$('#barlistFistFCOUNT00').html(barArryHardWareFaultRateData0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00").css({'width': barArryHardWareFaultRateData0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000').html(barArryHardWareFaultRateData0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01').html(barArryHardWareFaultRateData0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01").css({'width': barArryHardWareFaultRateData0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010').html(barArryHardWareFaultRateData0[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02').html(barArryHardWareFaultRateData0[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02").css({'width': barArryHardWareFaultRateData0[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020').html(barArryHardWareFaultRateData0[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03').html(barArryHardWareFaultRateData0[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03").css({'width': barArryHardWareFaultRateData0[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030').html(barArryHardWareFaultRateData0[3].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT04').html(barArryHardWareFaultRateData0[4].FCOUNT)
		  		$("#barlistFistFAULTRATE04").css({'width': barArryHardWareFaultRateData0[4].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE040').html(barArryHardWareFaultRateData0[4].FAULTRATE+"%")
      }
      	
      	
      }
      
      	if(barArryHardWareFaultRateData0_1!==undefined||null||''){
      		if(barArryHardWareFaultRateData0_1.length!==0){
//					alert('01')
      		 $('#hardWareFaultRateData0INFOSNAME1').hover(function(){
      		 	$('#StatisticsDetailListBarRight1').show()
						$('#StatisticsDetailListBarRight1').parent('.StatisticsDetailListBar').siblings('.StatisticsDetailListBar').children('div').hide()
      		 })
      	}
      		//   判断一级设备第一个 --的 下边二级设备的 第二个的----- 进度条数 
			if(barArryHardWareFaultRateData0_1.length==1){
      $('#barArryHardWareFaultRateData10_BANDNAME').html(barArryHardWareFaultRateData0_1[0].BANDNAME)
      $('#barArryHardWareFaultRateData10_BCOUNT').html("("+barArryHardWareFaultRateData0_1[0].BCOUNT+")")
      $('#barOutBarRight11').css({'display':"none"})
      $('#barOutBarRight12').css({'display':"none"})
      $('#barOutBarRight13').css({'display':"none"})
      $('#barOutBarRight14').css({'display':"none"})
      
      		$('#barlistFistFCOUNT10').html(barArryHardWareFaultRateData0_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE10").css({'width': barArryHardWareFaultRateData0_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE100').html(barArryHardWareFaultRateData0_1[0].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData0_1.length==2){
      	$('#barArryHardWareFaultRateData10_BANDNAME').html(barArryHardWareFaultRateData0_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData10_BCOUNT').html("("+barArryHardWareFaultRateData0_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData10_1_BANDNAME').html(barArryHardWareFaultRateData0_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData10_1_BCOUNT').html("("+barArryHardWareFaultRateData0_1[1].BCOUNT+")")
      	$('#barOutBarRight12').css({'display':"none"})
     		$('#barOutBarRight13').css({'display':"none"})
     	  $('#barOutBarRight14').css({'display':"none"})
     	  
     	  	$('#barlistFistFCOUNT10').html(barArryHardWareFaultRateData0_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE10").css({'width': barArryHardWareFaultRateData0_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE100').html(barArryHardWareFaultRateData0_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT11').html(barArryHardWareFaultRateData0_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE11").css({'width': barArryHardWareFaultRateData0_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE110').html(barArryHardWareFaultRateData0_1[1].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData0_1.length==3){
      	$('#barArryHardWareFaultRateData10_BANDNAME').html(barArryHardWareFaultRateData0_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData10_BCOUNT').html("("+barArryHardWareFaultRateData0_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData10_1_BANDNAME').html(barArryHardWareFaultRateData0_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData10_1_BCOUNT').html("("+barArryHardWareFaultRateData0_1[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData10_2_BANDNAME').html(barArryHardWareFaultRateData0_1[2].BANDNAME)
        $('#barArryHardWareFaultRateData10_2_BCOUNT').html("("+barArryHardWareFaultRateData0_1[2].BCOUNT+")")
         $('#barOutBarRight13').css({'display':"none"})
        $('#barOutBarRight14').css({'display':"none"})
        
        	$('#barlistFistFCOUNT10').html(barArryHardWareFaultRateData0_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE10").css({'width': barArryHardWareFaultRateData0_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE100').html(barArryHardWareFaultRateData0_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT11').html(barArryHardWareFaultRateData0_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE11").css({'width': barArryHardWareFaultRateData0_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE110').html(barArryHardWareFaultRateData0_1[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT12').html(barArryHardWareFaultRateData0_1[2].FCOUNT)
		  		$("#barlistFistFAULTRATE12").css({'width': barArryHardWareFaultRateData0_1[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE120').html(barArryHardWareFaultRateData0_1[2].FAULTRATE+"%")
					
      }
			if(barArryHardWareFaultRateData0_1.length==4){
      	$('#barArryHardWareFaultRateData10_BANDNAME').html(barArryHardWareFaultRateData0_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData10_BCOUNT').html("("+barArryHardWareFaultRateData0_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData10_1_BANDNAME').html(barArryHardWareFaultRateData0_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData10_1_BCOUNT').html("("+barArryHardWareFaultRateData0_1[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData10_2_BANDNAME').html(barArryHardWareFaultRateData0_1[2].BANDNAME)
        $('#barArryHardWareFaultRateData10_2_BCOUNT').html("("+barArryHardWareFaultRateData0_1[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData10_3_BANDNAME').html(barArryHardWareFaultRateData0_1[3].BANDNAME)
        $('#barArryHardWareFaultRateData10_3_BCOUNT').html("("+barArryHardWareFaultRateData0_1[3].BCOUNT+")")
     	  $('#barOutBarRight14').css({'display':"none"})
     	  
     	  	$('#barlistFistFCOUNT10').html(barArryHardWareFaultRateData0_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE10").css({'width': barArryHardWareFaultRateData0_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE100').html(barArryHardWareFaultRateData0_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT11').html(barArryHardWareFaultRateData0_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE11").css({'width': barArryHardWareFaultRateData0_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE110').html(barArryHardWareFaultRateData0_1[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT12').html(barArryHardWareFaultRateData0_1[2].FCOUNT)
		  		$("#barlistFistFAULTRATE12").css({'width': barArryHardWareFaultRateData0_1[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE120').html(barArryHardWareFaultRateData0_1[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT13').html(barArryHardWareFaultRateData0_1[3].FCOUNT)
		  		$("#barlistFistFAULTRATE13").css({'width': barArryHardWareFaultRateData0_1[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE130').html(barArryHardWareFaultRateData0_1[3].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData0_1.length==5){
      	$('#barArryHardWareFaultRateData10_BANDNAME').html(barArryHardWareFaultRateData0_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData10_FCOUNT').html("("+barArryHardWareFaultRateData0_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData10_1_BANDNAME').html(barArryHardWareFaultRateData0_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData10_1_BCOUNT').html("("+barArryHardWareFaultRateData0_1[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData10_2_BANDNAME').html(barArryHardWareFaultRateData0_1[2].BANDNAME)
        $('#barArryHardWareFaultRateData10_2_BCOUNT').html("("+barArryHardWareFaultRateData0_1[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData10_3_BANDNAME').html(barArryHardWareFaultRateData0_1[3].BANDNAME)
        $('#barArryHardWareFaultRateData10_3_BCOUNT').html("("+barArryHardWareFaultRateData0_1[3].BCOUNT+")")
        $('#barArryHardWareFaultRateData10_4_BANDNAME').html(barArryHardWareFaultRateData0_1[4].BANDNAME)
        $('#barArryHardWareFaultRateData10_4_BCOUNT').html("("+barArryHardWareFaultRateData0_1[4].BCOUNT+")")
        
        	$('#barlistFistFCOUNT10').html(barArryHardWareFaultRateData0_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE10").css({'width': barArryHardWareFaultRateData0_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE100').html(barArryHardWareFaultRateData0_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT11').html(barArryHardWareFaultRateData0_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE11").css({'width': barArryHardWareFaultRateData0_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE110').html(barArryHardWareFaultRateData0_1[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT12').html(barArryHardWareFaultRateData0_1[2].FCOUNT)
		  		$("#barlistFistFAULTRATE12").css({'width': barArryHardWareFaultRateData0_1[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE120').html(barArryHardWareFaultRateData0_1[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT13').html(barArryHardWareFaultRateData0_1[3].FCOUNT)
		  		$("#barlistFistFAULTRATE13").css({'width': barArryHardWareFaultRateData0_1[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE130').html(barArryHardWareFaultRateData0_1[3].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT14').html(barArryHardWareFaultRateData0_1[4].FCOUNT)
		  		$("#barlistFistFAULTRATE14").css({'width': barArryHardWareFaultRateData0_1[4].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE140').html(barArryHardWareFaultRateData0_1[4].FAULTRATE+"%")
      }
      	}
      	if(barArryHardWareFaultRateData0_2!==undefined||null||''){
      			if(barArryHardWareFaultRateData0_2.length!==0){
//					alert('03')
      		 $('#hardWareFaultRateData0INFOSNAME2').hover(function(){
      		 	$('#StatisticsDetailListBarRight2').show()
						$('#StatisticsDetailListBarRight2').parent('.StatisticsDetailListBar').siblings('.StatisticsDetailListBar').children('div').hide()
      		 })
      		}
      		 //   判断一级设备第一个 --的 下边二级设备的 第三个的----- 进度条数 
			if(barArryHardWareFaultRateData0_2.length==1){
      $('#barArryHardWareFaultRateData20_BANDNAME').html(barArryHardWareFaultRateData0_2[0].BANDNAME)
      $('#barArryHardWareFaultRateData20_BCOUNT').html("("+barArryHardWareFaultRateData0_2[0].BCOUNT+")")
      $('#barOutBarRight21').css({'display':"none"})
      $('#barOutBarRight22').css({'display':"none"})
      $('#barOutBarRight23').css({'display':"none"})
      $('#barOutBarRight24').css({'display':"none"})
      
      		$('#barlistFistFCOUNT20').html(barArryHardWareFaultRateData0_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE20").css({'width': barArryHardWareFaultRateData0_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE200').html(barArryHardWareFaultRateData0_2[0].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData0_2.length==2){
      	$('#barArryHardWareFaultRateData20_BANDNAME').html(barArryHardWareFaultRateData0_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData20_BCOUNT').html("("+barArryHardWareFaultRateData0_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData20_1_BANDNAME').html(barArryHardWareFaultRateData0_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData20_1_BCOUNT').html("("+barArryHardWareFaultRateData0_2[1].BCOUNT+")")
      	$('#barOutBarRight22').css({'display':"none"})
     		$('#barOutBarRight23').css({'display':"none"})
     	  $('#barOutBarRight24').css({'display':"none"})
     	  	$('#barlistFistFCOUNT20').html(barArryHardWareFaultRateData0_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE20").css({'width': barArryHardWareFaultRateData0_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE200').html(barArryHardWareFaultRateData0_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT21').html(barArryHardWareFaultRateData0_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE21").css({'width': barArryHardWareFaultRateData0_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE210').html(barArryHardWareFaultRateData0_2[1].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData0_2.length==3){
      	$('#barArryHardWareFaultRateData20_BANDNAME').html(barArryHardWareFaultRateData0_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData20_BCOUNT').html("("+barArryHardWareFaultRateData0_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData20_1_BANDNAME').html(barArryHardWareFaultRateData0_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData20_1_BCOUNT').html("("+barArryHardWareFaultRateData0_2[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData20_2_BANDNAME').html(barArryHardWareFaultRateData0_2[2].BANDNAME)
        $('#barArryHardWareFaultRateData20_2_BCOUNT').html("("+barArryHardWareFaultRateData0_2[2].BCOUNT+")")
         $('#barOutBarRight23').css({'display':"none"})
        $('#barOutBarRight24').css({'display':"none"})
        
        	$('#barlistFistFCOUNT20').html(barArryHardWareFaultRateData0_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE20").css({'width': barArryHardWareFaultRateData0_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE200').html(barArryHardWareFaultRateData0_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT21').html(barArryHardWareFaultRateData0_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE21").css({'width': barArryHardWareFaultRateData0_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE210').html(barArryHardWareFaultRateData0_2[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT22').html(barArryHardWareFaultRateData0_2[2].FCOUNT)
		  		$("#barlistFistFAULTRATE22").css({'width': barArryHardWareFaultRateData0_2[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE220').html(barArryHardWareFaultRateData0_2[2].FAULTRATE+"%")
					
      }
			if(barArryHardWareFaultRateData0_2.length==4){
      	$('#barArryHardWareFaultRateData20_BANDNAME').html(barArryHardWareFaultRateData0_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData20_BCOUNT').html("("+barArryHardWareFaultRateData0_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData20_1_BANDNAME').html(barArryHardWareFaultRateData0_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData20_1_BCOUNT').html("("+barArryHardWareFaultRateData0_2[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData20_2_BANDNAME').html(barArryHardWareFaultRateData0_2[2].BANDNAME)
        $('#barArryHardWareFaultRateData20_2_BCOUNT').html("("+barArryHardWareFaultRateData0_2[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData20_3_BANDNAME').html(barArryHardWareFaultRateData0_2[3].BANDNAME)
        $('#barArryHardWareFaultRateData20_3_BCOUNT').html("("+barArryHardWareFaultRateData0_2[3].BCOUNT+")")
     	  $('#barOutBarRight24').css({'display':"none"})
     	  
     	  	$('#barlistFistFCOUNT20').html(barArryHardWareFaultRateData0_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE20").css({'width': barArryHardWareFaultRateData0_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE200').html(barArryHardWareFaultRateData0_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT21').html(barArryHardWareFaultRateData0_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE21").css({'width': barArryHardWareFaultRateData0_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE210').html(barArryHardWareFaultRateData0_2[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT22').html(barArryHardWareFaultRateData0_2[2].FCOUNT)
		  		$("#barlistFistFAULTRATE22").css({'width': barArryHardWareFaultRateData0_2[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE220').html(barArryHardWareFaultRateData0_2[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT23').html(barArryHardWareFaultRateData0_2[3].FCOUNT)
		  		$("#barlistFistFAULTRATE23").css({'width': barArryHardWareFaultRateData0_2[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE230').html(barArryHardWareFaultRateData0_2[3].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData0_2.length==5){
      	$('#barArryHardWareFaultRateData20_BANDNAME').html(barArryHardWareFaultRateData0_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData20_FCOUNT').html("("+barArryHardWareFaultRateData0_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData20_1_BANDNAME').html(barArryHardWareFaultRateData0_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData20_1_BCOUNT').html("("+barArryHardWareFaultRateData0_2[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData20_2_BANDNAME').html(barArryHardWareFaultRateData0_2[2].BANDNAME)
        $('#barArryHardWareFaultRateData20_2_BCOUNT').html("("+barArryHardWareFaultRateData0_2[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData20_3_BANDNAME').html(barArryHardWareFaultRateData0_2[3].BANDNAME)
        $('#barArryHardWareFaultRateData20_3_BCOUNT').html("("+barArryHardWareFaultRateData0_2[3].BCOUNT+")")
        $('#barArryHardWareFaultRateData20_4_BANDNAME').html(barArryHardWareFaultRateData0_2[4].BANDNAME)
        $('#barArryHardWareFaultRateData20_4_BCOUNT').html("("+barArryHardWareFaultRateData0_2[4].BCOUNT+")")
        
        	$('#barlistFistFCOUNT20').html(barArryHardWareFaultRateData0_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE20").css({'width': barArryHardWareFaultRateData0_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE200').html(barArryHardWareFaultRateData0_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT21').html(barArryHardWareFaultRateData0_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE21").css({'width': barArryHardWareFaultRateData0_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE210').html(barArryHardWareFaultRateData0_2[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT22').html(barArryHardWareFaultRateData0_2[2].FCOUNT)
		  		$("#barlistFistFAULTRATE22").css({'width': barArryHardWareFaultRateData0_2[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE220').html(barArryHardWareFaultRateData0_2[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT23').html(barArryHardWareFaultRateData0_2[3].FCOUNT)
		  		$("#barlistFistFAULTRATE23").css({'width': barArryHardWareFaultRateData0_2[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE230').html(barArryHardWareFaultRateData0_2[3].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT24').html(barArryHardWareFaultRateData0_2[4].FCOUNT)
		  		$("#barlistFistFAULTRATE24").css({'width': barArryHardWareFaultRateData0_2[4].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE240').html(barArryHardWareFaultRateData0_2[4].FAULTRATE+"%")
      }	
      			
      	}
      	
     //判断是否 鼠标滑过显示隐藏进度条 一级菜单第二个
      	if(barArryHardWareFaultRateData1_0!==undefined||null||''){
      			if(barArryHardWareFaultRateData1_0.length!==0){
//    		alert('10')
      		 $('#hardWareFaultRateData1INFOSNAME0').hover(function(){
      		 	$('#StatisticsDetailListBarRight3').show()
						$('#StatisticsDetailListBarRight3').parent('.StatisticsDetailListBar').siblings('.StatisticsDetailListBar').children('div').hide()
      		 })
      	}
      		//   判断一级设备第二个 --的 下边二级设备的 第一个的----- 进度条数 
			if(barArryHardWareFaultRateData1_0.length==1){
      $('#barArryHardWareFaultRateData1_0_0_BANDNAME').html(barArryHardWareFaultRateData1_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData1_0_0_BCOUNT').html("("+barArryHardWareFaultRateData1_0[0].BCOUNT+")")
      $('#barOutBarRight31').css({'display':"none"})
      $('#barOutBarRight32').css({'display':"none"})
      $('#barOutBarRight33').css({'display':"none"})
      $('#barOutBarRight34').css({'display':"none"})
      
      		$('#barlistFistFCOUNT00_2').html(barArryHardWareFaultRateData1_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_2").css({'width': barArryHardWareFaultRateData1_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_2').html(barArryHardWareFaultRateData1_0[0].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData1_0.length==2){
      	$('#barArryHardWareFaultRateData1_0_0_BANDNAME').html(barArryHardWareFaultRateData1_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData1_0_0_BCOUNT').html("("+barArryHardWareFaultRateData1_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_0_1_BANDNAME').html(barArryHardWareFaultRateData1_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData1_0_1_BCOUNT').html("("+barArryHardWareFaultRateData1_0[1].BCOUNT+")")
      	$('#barOutBarRight32').css({'display':"none"})
      	$('#barOutBarRight33').css({'display':"none"})
      	$('#barOutBarRight34').css({'display':"none"})
     	  	$('#barlistFistFCOUNT00_2').html(barArryHardWareFaultRateData1_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_2").css({'width': barArryHardWareFaultRateData1_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_2').html(barArryHardWareFaultRateData1_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_2').html(barArryHardWareFaultRateData1_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_2").css({'width': barArryHardWareFaultRateData1_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_2').html(barArryHardWareFaultRateData1_0[1].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData1_0.length==3){
      	$('#barArryHardWareFaultRateData1_0_0_BANDNAME').html(barArryHardWareFaultRateData1_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData1_0_0_BCOUNT').html("("+barArryHardWareFaultRateData1_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_0_1_BANDNAME').html(barArryHardWareFaultRateData1_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData1_0_1_BCOUNT').html("("+barArryHardWareFaultRateData1_0[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_0_2_BANDNAME').html(barArryHardWareFaultRateData1_0[2].BANDNAME)
        $('#barArryHardWareFaultRateData1_0_2_BCOUNT').html("("+barArryHardWareFaultRateData1_0[2].BCOUNT+")")
        $('#barOutBarRight33').css({'display':"none"})
      	$('#barOutBarRight34').css({'display':"none"})
        
        	$('#barlistFistFCOUNT00_2').html(barArryHardWareFaultRateData1_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_2").css({'width': barArryHardWareFaultRateData1_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_2').html(barArryHardWareFaultRateData1_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_2').html(barArryHardWareFaultRateData1_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_2").css({'width': barArryHardWareFaultRateData1_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_2').html(barArryHardWareFaultRateData1_0[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_2').html(barArryHardWareFaultRateData1_0[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_2").css({'width': barArryHardWareFaultRateData1_0[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_2').html(barArryHardWareFaultRateData1_0[2].FAULTRATE+"%")
					
      }
			if(barArryHardWareFaultRateData1_0.length==4){
      	$('#barArryHardWareFaultRateData1_0_0_BANDNAME').html(barArryHardWareFaultRateData1_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData1_0_0_BCOUNT').html("("+barArryHardWareFaultRateData1_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_0_1_BANDNAME').html(barArryHardWareFaultRateData1_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData1_0_1_BCOUNT').html("("+barArryHardWareFaultRateData1_0[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_0_2_BANDNAME').html(barArryHardWareFaultRateData1_0[2].BANDNAME)
        $('#barArryHardWareFaultRateData1_0_2_BCOUNT').html("("+barArryHardWareFaultRateData1_0[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData1_0_3_BANDNAME').html(barArryHardWareFaultRateData1_0[3].BANDNAME)
        $('#barArryHardWareFaultRateData1_0_3_BCOUNT').html("("+barArryHardWareFaultRateData1_0[3].BCOUNT+")")
     	  $('#barOutBarRight34').css({'display':"none"})
     	  
     	  	$('#barlistFistFCOUNT00_2').html(barArryHardWareFaultRateData1_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_2").css({'width': barArryHardWareFaultRateData1_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_2').html(barArryHardWareFaultRateData1_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_2').html(barArryHardWareFaultRateData1_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_2").css({'width': barArryHardWareFaultRateData1_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_2').html(barArryHardWareFaultRateData1_0[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_2').html(barArryHardWareFaultRateData1_0[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_2").css({'width': barArryHardWareFaultRateData1_0[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_2').html(barArryHardWareFaultRateData1_0[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_2').html(barArryHardWareFaultRateData1_0[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_2").css({'width': barArryHardWareFaultRateData1_0[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_2').html(barArryHardWareFaultRateData1_0[3].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData1_0.length==5){
      	$('#barArryHardWareFaultRateData1_0_0_BANDNAME').html(barArryHardWareFaultRateData1_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData1_0_0_BCOUNT').html("("+barArryHardWareFaultRateData1_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_0_1_BANDNAME').html(barArryHardWareFaultRateData1_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData1_0_1_BCOUNT').html("("+barArryHardWareFaultRateData1_0[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_0_2_BANDNAME').html(barArryHardWareFaultRateData1_0[2].BANDNAME)
        $('#barArryHardWareFaultRateData1_0_2_BCOUNT').html("("+barArryHardWareFaultRateData1_0[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData1_0_3_BANDNAME').html(barArryHardWareFaultRateData1_0[3].BANDNAME)
        $('#barArryHardWareFaultRateData1_0_3_BCOUNT').html("("+barArryHardWareFaultRateData1_0[3].BCOUNT+")")
        $('#barArryHardWareFaultRateData1_0_4_BANDNAME').html(barArryHardWareFaultRateData1_0[4].BANDNAME)
        $('#barArryHardWareFaultRateData1_0_4_BCOUNT').html("("+barArryHardWareFaultRateData1_0[4].BCOUNT+")")
        
        	$('#barlistFistFCOUNT00_2').html(barArryHardWareFaultRateData1_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_2").css({'width': barArryHardWareFaultRateData1_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_2').html(barArryHardWareFaultRateData1_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_2').html(barArryHardWareFaultRateData1_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_2").css({'width': barArryHardWareFaultRateData1_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_2').html(barArryHardWareFaultRateData1_0[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_2').html(barArryHardWareFaultRateData1_0[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_2").css({'width': barArryHardWareFaultRateData1_0[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_2').html(barArryHardWareFaultRateData1_0[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_2').html(barArryHardWareFaultRateData1_0[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_2").css({'width': barArryHardWareFaultRateData1_0[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_2').html(barArryHardWareFaultRateData1_0[3].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT04_2').html(barArryHardWareFaultRateData1_0[4].FCOUNT)
		  		$("#barlistFistFAULTRATE04_2").css({'width': barArryHardWareFaultRateData1_0[4].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE040_2').html(barArryHardWareFaultRateData1_0[4].FAULTRATE+"%")
      }
      
      		
      	}
      	if(barArryHardWareFaultRateData1_1!==undefined||null||''){
      		if(barArryHardWareFaultRateData1_1.length!==0){
//					alert('11')
      		 $('#hardWareFaultRateData1INFOSNAME1').hover(function(){
      		 	$('#StatisticsDetailListBarRight4').show()
						$('#StatisticsDetailListBarRight4').parent('.StatisticsDetailListBar').siblings('.StatisticsDetailListBar').children('div').hide()
      		 })
      	}
      		 //   判断一级设备第二个 --的 下边二级设备的 第2个的----- 进度条数 
			if(barArryHardWareFaultRateData1_1.length==1){
      	$('#barArryHardWareFaultRateData1_1_0_BANDNAME').html(barArryHardWareFaultRateData1_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData1_1_0_BCOUNT').html("("+barArryHardWareFaultRateData1_1[0].BCOUNT+")")
      $('#barOutBarRight41').css({'display':"none"})
      $('#barOutBarRight42').css({'display':"none"})
      $('#barOutBarRight43').css({'display':"none"})
      $('#barOutBarRight44').css({'display':"none"})
      
      		$('#barlistFistFCOUNT00_3').html(barArryHardWareFaultRateData1_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_3").css({'width': barArryHardWareFaultRateData1_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_3').html(barArryHardWareFaultRateData1_1[0].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData1_1.length==2){
      	$('#barArryHardWareFaultRateData1_1_0_BANDNAME').html(barArryHardWareFaultRateData1_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData1_1_0_BCOUNT').html("("+barArryHardWareFaultRateData1_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_1_1_BANDNAME').html(barArryHardWareFaultRateData1_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData1_1_1_BCOUNT').html("("+barArryHardWareFaultRateData1_1[1].BCOUNT+")")
      	$('#barOutBarRight42').css({'display':"none"})
      $('#barOutBarRight43').css({'display':"none"})
      $('#barOutBarRight44').css({'display':"none"})
     	  	$('#barlistFistFCOUNT00_3').html(barArryHardWareFaultRateData1_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_3").css({'width': barArryHardWareFaultRateData1_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_3').html(barArryHardWareFaultRateData1_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_3').html(barArryHardWareFaultRateData1_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_3").css({'width': barArryHardWareFaultRateData1_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_3').html(barArryHardWareFaultRateData1_1[1].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData1_1.length==3){
      	$('#barArryHardWareFaultRateData1_1_0_BANDNAME').html(barArryHardWareFaultRateData1_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData1_1_0_BCOUNT').html("("+barArryHardWareFaultRateData1_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_1_1_BANDNAME').html(barArryHardWareFaultRateData1_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData1_1_1_BCOUNT').html("("+barArryHardWareFaultRateData1_1[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_1_2_BANDNAME').html(barArryHardWareFaultRateData1_1[2].BANDNAME)
        $('#barArryHardWareFaultRateData1_1_2_BCOUNT').html("("+barArryHardWareFaultRateData1_1[2].BCOUNT+")")
         $('#barOutBarRight43').css({'display':"none"})
      $('#barOutBarRight44').css({'display':"none"})
        
        	$('#barlistFistFCOUNT00_3').html(barArryHardWareFaultRateData1_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_3").css({'width': barArryHardWareFaultRateData1_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_3').html(barArryHardWareFaultRateData1_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_3').html(barArryHardWareFaultRateData1_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_3").css({'width': barArryHardWareFaultRateData1_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_3').html(barArryHardWareFaultRateData1_1[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_3').html(barArryHardWareFaultRateData1_1[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_3").css({'width': barArryHardWareFaultRateData1_1[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_3').html(barArryHardWareFaultRateData1_1[2].FAULTRATE+"%")
					
      }
			if(barArryHardWareFaultRateData1_1.length==4){
      	$('#barArryHardWareFaultRateData1_1_0_BANDNAME').html(barArryHardWareFaultRateData1_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData1_1_0_BCOUNT').html("("+barArryHardWareFaultRateData1_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_1_1_BANDNAME').html(barArryHardWareFaultRateData1_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData1_1_1_BCOUNT').html("("+barArryHardWareFaultRateData1_1[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_1_2_BANDNAME').html(barArryHardWareFaultRateData1_1[2].BANDNAME)
        $('#barArryHardWareFaultRateData1_1_2_BCOUNT').html("("+barArryHardWareFaultRateData1_1[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData1_1_3_BANDNAME').html(barArryHardWareFaultRateData1_1[3].BANDNAME)
        $('#barArryHardWareFaultRateData1_1_3_BCOUNT').html("("+barArryHardWareFaultRateData1_1[3].BCOUNT+")")
     	  $('#barOutBarRight44').css({'display':"none"})
     	  
     	  	$('#barlistFistFCOUNT00_3').html(barArryHardWareFaultRateData1_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_3").css({'width': barArryHardWareFaultRateData1_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_3').html(barArryHardWareFaultRateData1_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_3').html(barArryHardWareFaultRateData1_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_3").css({'width': barArryHardWareFaultRateData1_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_3').html(barArryHardWareFaultRateData1_1[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_3').html(barArryHardWareFaultRateData1_1[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_3").css({'width': barArryHardWareFaultRateData1_1[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_3').html(barArryHardWareFaultRateData1_1[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_3').html(barArryHardWareFaultRateData1_1[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_3").css({'width': barArryHardWareFaultRateData1_1[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_3').html(barArryHardWareFaultRateData1_1[3].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData1_1.length==5){
      	$('#barArryHardWareFaultRateData1_1_0_BANDNAME').html(barArryHardWareFaultRateData1_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData1_1_0_BCOUNT').html("("+barArryHardWareFaultRateData1_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_1_1_BANDNAME').html(barArryHardWareFaultRateData1_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData1_1_1_BCOUNT').html("("+barArryHardWareFaultRateData1_1[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_1_2_BANDNAME').html(barArryHardWareFaultRateData1_1[2].BANDNAME)
        $('#barArryHardWareFaultRateData1_1_2_BCOUNT').html("("+barArryHardWareFaultRateData1_1[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData1_1_3_BANDNAME').html(barArryHardWareFaultRateData1_1[3].BANDNAME)
        $('#barArryHardWareFaultRateData1_1_3_BCOUNT').html("("+barArryHardWareFaultRateData1_1[3].BCOUNT+")")
        $('#barArryHardWareFaultRateData1_1_4_BANDNAME').html(barArryHardWareFaultRateData1_1[4].BANDNAME)
        $('#barArryHardWareFaultRateData1_1_4_BCOUNT').html("("+barArryHardWareFaultRateData1_1[4].BCOUNT+")")
        
        	$('#barlistFistFCOUNT00_3').html(barArryHardWareFaultRateData1_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_3").css({'width': barArryHardWareFaultRateData1_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_3').html(barArryHardWareFaultRateData1_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_3').html(barArryHardWareFaultRateData1_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_3").css({'width': barArryHardWareFaultRateData1_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_3').html(barArryHardWareFaultRateData1_1[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_3').html(barArryHardWareFaultRateData1_1[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_3").css({'width': barArryHardWareFaultRateData1_1[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_3').html(barArryHardWareFaultRateData1_1[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_3').html(barArryHardWareFaultRateData1_1[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_3").css({'width': barArryHardWareFaultRateData1_1[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_3').html(barArryHardWareFaultRateData1_1[3].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT04_3').html(barArryHardWareFaultRateData1_1[4].FCOUNT)
		  		$("#barlistFistFAULTRATE04_3").css({'width': barArryHardWareFaultRateData1_1[4].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE040_3').html(barArryHardWareFaultRateData1_1[4].FAULTRATE+"%")
      }
      	}
      	if(barArryHardWareFaultRateData1_2!==undefined||null||''){
      			if(barArryHardWareFaultRateData1_2.length!==0){
//					alert('12')
      		 $('#hardWareFaultRateData1INFOSNAME2').hover(function(){
      		 	$('#StatisticsDetailListBarRight5').show()
						$('#StatisticsDetailListBarRight5').parent('.StatisticsDetailListBar').siblings('.StatisticsDetailListBar').children('div').hide()
      		 })
      		}
      			  //   判断一级设备第二个 --的 下边二级设备的 第3个的----- 进度条数 
			if(barArryHardWareFaultRateData1_2.length==1){
      	$('#barArryHardWareFaultRateData1_2_0_BANDNAME').html(barArryHardWareFaultRateData1_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData1_2_0_BCOUNT').html("("+barArryHardWareFaultRateData1_2[0].BCOUNT+")")
      $('#barOutBarRight51').css({'display':"none"})
      $('#barOutBarRight52').css({'display':"none"})
      $('#barOutBarRight53').css({'display':"none"})
      $('#barOutBarRight54').css({'display':"none"})
      
      		$('#barlistFistFCOUNT00_4').html(barArryHardWareFaultRateData1_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_4").css({'width': barArryHardWareFaultRateData1_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_4').html(barArryHardWareFaultRateData1_2[0].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData1_2.length==2){
      	$('#barArryHardWareFaultRateData1_2_0_BANDNAME').html(barArryHardWareFaultRateData1_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData1_2_0_BCOUNT').html("("+barArryHardWareFaultRateData1_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_2_1_BANDNAME').html(barArryHardWareFaultRateData1_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData1_2_1_BCOUNT').html("("+barArryHardWareFaultRateData1_2[1].BCOUNT+")")
      	$('#barOutBarRight52').css({'display':"none"})
      $('#barOutBarRight53').css({'display':"none"})
      $('#barOutBarRight54').css({'display':"none"})
     	  	$('#barlistFistFCOUNT00_4').html(barArryHardWareFaultRateData1_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_4").css({'width': barArryHardWareFaultRateData1_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_4').html(barArryHardWareFaultRateData1_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_4').html(barArryHardWareFaultRateData1_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_4").css({'width': barArryHardWareFaultRateData1_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_4').html(barArryHardWareFaultRateData1_2[1].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData1_2.length==3){
      	$('#barArryHardWareFaultRateData1_2_0_BANDNAME').html(barArryHardWareFaultRateData1_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData1_2_0_BCOUNT').html("("+barArryHardWareFaultRateData1_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_2_1_BANDNAME').html(barArryHardWareFaultRateData1_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData1_2_1_BCOUNT').html("("+barArryHardWareFaultRateData1_2[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_2_2_BANDNAME').html(barArryHardWareFaultRateData1_2[2].BANDNAME)
        $('#barArryHardWareFaultRateData1_2_2_BCOUNT').html("("+barArryHardWareFaultRateData1_2[2].BCOUNT+")")
        $('#barOutBarRight53').css({'display':"none"})
      $('#barOutBarRight54').css({'display':"none"})
        
        	$('#barlistFistFCOUNT00_4').html(barArryHardWareFaultRateData1_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_4").css({'width': barArryHardWareFaultRateData1_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_4').html(barArryHardWareFaultRateData1_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_4').html(barArryHardWareFaultRateData1_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_4").css({'width': barArryHardWareFaultRateData1_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_4').html(barArryHardWareFaultRateData1_2[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_4').html(barArryHardWareFaultRateData1_2[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_4").css({'width': barArryHardWareFaultRateData1_2[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_4').html(barArryHardWareFaultRateData1_2[2].FAULTRATE+"%")
					
      }
			if(barArryHardWareFaultRateData1_2.length==4){
      	$('#barArryHardWareFaultRateData1_2_0_BANDNAME').html(barArryHardWareFaultRateData1_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData1_2_0_BCOUNT').html("("+barArryHardWareFaultRateData1_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_2_1_BANDNAME').html(barArryHardWareFaultRateData1_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData1_2_1_BCOUNT').html("("+barArryHardWareFaultRateData1_2[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_2_2_BANDNAME').html(barArryHardWareFaultRateData1_2[2].BANDNAME)
        $('#barArryHardWareFaultRateData1_2_2_BCOUNT').html("("+barArryHardWareFaultRateData1_2[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData1_2_3_BANDNAME').html(barArryHardWareFaultRateData1_2[3].BANDNAME)
        $('#barArryHardWareFaultRateData1_2_3_BCOUNT').html("("+barArryHardWareFaultRateData1_2[3].BCOUNT+")")
     	  $('#barOutBarRight54').css({'display':"none"})
     	  
     	  	$('#barlistFistFCOUNT00_4').html(barArryHardWareFaultRateData1_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_4").css({'width': barArryHardWareFaultRateData1_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_4').html(barArryHardWareFaultRateData1_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_4').html(barArryHardWareFaultRateData1_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_4").css({'width': barArryHardWareFaultRateData1_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_4').html(barArryHardWareFaultRateData1_2[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_4').html(barArryHardWareFaultRateData1_2[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_4").css({'width': barArryHardWareFaultRateData1_2[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_4').html(barArryHardWareFaultRateData1_2[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_4').html(barArryHardWareFaultRateData1_2[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_4").css({'width': barArryHardWareFaultRateData1_2[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_4').html(barArryHardWareFaultRateData1_2[3].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData1_2.length==5){
      	$('#barArryHardWareFaultRateData1_2_0_BANDNAME').html(barArryHardWareFaultRateData1_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData1_2_0_BCOUNT').html("("+barArryHardWareFaultRateData1_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_2_1_BANDNAME').html(barArryHardWareFaultRateData1_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData1_2_1_BCOUNT').html("("+barArryHardWareFaultRateData1_2[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData1_2_2_BANDNAME').html(barArryHardWareFaultRateData1_2[2].BANDNAME)
        $('#barArryHardWareFaultRateData1_2_2_BCOUNT').html("("+barArryHardWareFaultRateData1_2[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData1_2_3_BANDNAME').html(barArryHardWareFaultRateData1_2[3].BANDNAME)
        $('#barArryHardWareFaultRateData1_2_3_BCOUNT').html("("+barArryHardWareFaultRateData1_2[3].BCOUNT+")")
        $('#barArryHardWareFaultRateData1_2_4_BANDNAME').html(barArryHardWareFaultRateData1_2[4].BANDNAME)
        $('#barArryHardWareFaultRateData1_2_4_BCOUNT').html("("+barArryHardWareFaultRateData1_2[4].BCOUNT+")")
        
        	$('#barlistFistFCOUNT00_4').html(barArryHardWareFaultRateData1_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_4").css({'width': barArryHardWareFaultRateData1_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_4').html(barArryHardWareFaultRateData1_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_4').html(barArryHardWareFaultRateData1_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_4").css({'width': barArryHardWareFaultRateData1_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_4').html(barArryHardWareFaultRateData1_2[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_4').html(barArryHardWareFaultRateData1_2[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_4").css({'width': barArryHardWareFaultRateData1_2[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_4').html(barArryHardWareFaultRateData1_2[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_4').html(barArryHardWareFaultRateData1_2[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_4").css({'width': barArryHardWareFaultRateData1_2[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_4').html(barArryHardWareFaultRateData1_2[3].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT04_4').html(barArryHardWareFaultRateData1_2[4].FCOUNT)
		  		$("#barlistFistFAULTRATE04_4").css({'width': barArryHardWareFaultRateData1_2[4].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE040_4').html(barArryHardWareFaultRateData1_2[4].FAULTRATE+"%")
      }
      
      	}
      	//判断是否 鼠标滑过显示隐藏进度条 一级菜单第3个
      	if(barArryHardWareFaultRateData2_0!==undefined||null||''){
      			if(barArryHardWareFaultRateData2_0.length!==0){
//					alert('20')
				
      		 $('#hardWareFaultRateData2INFOSNAME0').hover(function(){
      		 	$('#StatisticsDetailListBarRight6').show()
						$('#StatisticsDetailListBarRight6').parent('.StatisticsDetailListBar').siblings('.StatisticsDetailListBar').children('div').hide()
      		 })
      	}
      		   //   判断一级设备第三个 --的 下边二级设备的 第1个的----- 进度条数 
			if(barArryHardWareFaultRateData2_0.length==1){
      	$('#barArryHardWareFaultRateData2_0_0_BANDNAME').html(barArryHardWareFaultRateData2_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData2_0_0_BCOUNT').html("("+barArryHardWareFaultRateData2_0[0].BCOUNT+")")
       $('#barOutBarRight61').css({'display':"none"})
      $('#barOutBarRight62').css({'display':"none"})
      $('#barOutBarRight63').css({'display':"none"})
      $('#barOutBarRight64').css({'display':"none"})
      
      		$('#barlistFistFCOUNT00_5').html(barArryHardWareFaultRateData2_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_5").css({'width': barArryHardWareFaultRateData2_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_5').html(barArryHardWareFaultRateData2_0[0].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData2_0.length==2){
      	$('#barArryHardWareFaultRateData2_0_0_BANDNAME').html(barArryHardWareFaultRateData2_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData2_0_0_BCOUNT').html("("+barArryHardWareFaultRateData2_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_0_1_BANDNAME').html(barArryHardWareFaultRateData2_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData2_0_1_BCOUNT').html("("+barArryHardWareFaultRateData2_0[1].BCOUNT+")")
      	$('#barOutBarRight62').css({'display':"none"})
      $('#barOutBarRight63').css({'display':"none"})
      $('#barOutBarRight64').css({'display':"none"})
     	  	$('#barlistFistFCOUNT00_5').html(barArryHardWareFaultRateData2_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_5").css({'width': barArryHardWareFaultRateData2_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_5').html(barArryHardWareFaultRateData2_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_5').html(barArryHardWareFaultRateData2_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_5").css({'width': barArryHardWareFaultRateData2_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_5').html(barArryHardWareFaultRateData2_0[1].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData2_0.length==3){
      	$('#barArryHardWareFaultRateData2_0_0_BANDNAME').html(barArryHardWareFaultRateData2_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData2_0_0_BCOUNT').html("("+barArryHardWareFaultRateData2_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_0_1_BANDNAME').html(barArryHardWareFaultRateData2_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData2_0_1_BCOUNT').html("("+barArryHardWareFaultRateData2_0[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_0_2_BANDNAME').html(barArryHardWareFaultRateData2_0[2].BANDNAME)
        $('#barArryHardWareFaultRateData2_0_2_BCOUNT').html("("+barArryHardWareFaultRateData2_0[2].BCOUNT+")")
        $('#barOutBarRight64').css({'display':"none"})
      $('#barOutBarRight63').css({'display':"none"})
        
        	$('#barlistFistFCOUNT00_5').html(barArryHardWareFaultRateData2_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_5").css({'width': barArryHardWareFaultRateData2_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_5').html(barArryHardWareFaultRateData2_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_5').html(barArryHardWareFaultRateData2_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_5").css({'width': barArryHardWareFaultRateData2_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_5').html(barArryHardWareFaultRateData2_0[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_5').html(barArryHardWareFaultRateData2_0[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_5").css({'width': barArryHardWareFaultRateData2_0[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_5').html(barArryHardWareFaultRateData2_0[2].FAULTRATE+"%")
					
      }
			if(barArryHardWareFaultRateData2_0.length==4){
      	$('#barArryHardWareFaultRateData2_0_0_BANDNAME').html(barArryHardWareFaultRateData2_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData2_0_0_BCOUNT').html("("+barArryHardWareFaultRateData2_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_0_1_BANDNAME').html(barArryHardWareFaultRateData2_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData2_0_1_BCOUNT').html("("+barArryHardWareFaultRateData2_0[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_0_2_BANDNAME').html(barArryHardWareFaultRateData2_0[2].BANDNAME)
        $('#barArryHardWareFaultRateData2_0_2_BCOUNT').html("("+barArryHardWareFaultRateData2_0[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData2_0_3_BANDNAME').html(barArryHardWareFaultRateData2_0[3].BANDNAME)
        $('#barArryHardWareFaultRateData2_0_3_BCOUNT').html("("+barArryHardWareFaultRateData2_0[3].BCOUNT+")")
     	  $('#barOutBarRight64').css({'display':"none"})
     	  
     	  	$('#barlistFistFCOUNT00_5').html(barArryHardWareFaultRateData2_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_5").css({'width': barArryHardWareFaultRateData2_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_5').html(barArryHardWareFaultRateData2_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_5').html(barArryHardWareFaultRateData2_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_5").css({'width': barArryHardWareFaultRateData2_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_5').html(barArryHardWareFaultRateData2_0[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_5').html(barArryHardWareFaultRateData2_0[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_5").css({'width': barArryHardWareFaultRateData2_0[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_5').html(barArryHardWareFaultRateData2_0[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_5').html(barArryHardWareFaultRateData2_0[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_5").css({'width': barArryHardWareFaultRateData2_0[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_5').html(barArryHardWareFaultRateData2_0[3].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData2_0.length==5){
      	$('#barArryHardWareFaultRateData2_0_0_BANDNAME').html(barArryHardWareFaultRateData2_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData2_0_0_BCOUNT').html("("+barArryHardWareFaultRateData2_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_0_1_BANDNAME').html(barArryHardWareFaultRateData2_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData2_0_1_BCOUNT').html("("+barArryHardWareFaultRateData2_0[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_0_2_BANDNAME').html(barArryHardWareFaultRateData2_0[2].BANDNAME)
        $('#barArryHardWareFaultRateData2_0_2_BCOUNT').html("("+barArryHardWareFaultRateData2_0[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData2_0_3_BANDNAME').html(barArryHardWareFaultRateData2_0[3].BANDNAME)
        $('#barArryHardWareFaultRateData2_0_3_BCOUNT').html("("+barArryHardWareFaultRateData2_0[3].BCOUNT+")")
        $('#barArryHardWareFaultRateData2_0_4_BANDNAME').html(barArryHardWareFaultRateData2_0[4].BANDNAME)
        $('#barArryHardWareFaultRateData2_0_4_BCOUNT').html("("+barArryHardWareFaultRateData2_0[4].BCOUNT+")")
        
        	$('#barlistFistFCOUNT00_5').html(barArryHardWareFaultRateData2_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_5").css({'width': barArryHardWareFaultRateData2_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_5').html(barArryHardWareFaultRateData2_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_5').html(barArryHardWareFaultRateData2_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_5").css({'width': barArryHardWareFaultRateData2_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_5').html(barArryHardWareFaultRateData2_0[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_5').html(barArryHardWareFaultRateData2_0[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_5").css({'width': barArryHardWareFaultRateData2_0[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_5').html(barArryHardWareFaultRateData2_0[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_5').html(barArryHardWareFaultRateData2_0[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_5").css({'width': barArryHardWareFaultRateData2_0[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_5').html(barArryHardWareFaultRateData2_0[3].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT04_5').html(barArryHardWareFaultRateData2_0[4].FCOUNT)
		  		$("#barlistFistFAULTRATE04_5").css({'width': barArryHardWareFaultRateData2_0[4].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE040_5').html(barArryHardWareFaultRateData2_0[4].FAULTRATE+"%")
      }
      	}
      	if(barArryHardWareFaultRateData2_1!==undefined||null||''){
      		if(barArryHardWareFaultRateData2_1.length!==0){
//					alert('21')
					
      		 $('#hardWareFaultRateData2INFOSNAME1').hover(function(){
      		 	$('#StatisticsDetailListBarRight7').show()
						$('#StatisticsDetailListBarRight7').parent('.StatisticsDetailListBar').siblings('.StatisticsDetailListBar').children('div').hide()
      		 })
      	}
      		
                  //   判断一级设备第三个 --的 下边二级设备的 第2个的----- 进度条数 
			if(barArryHardWareFaultRateData2_1.length==1){
      	$('#barArryHardWareFaultRateData2_1_0_BANDNAME').html(barArryHardWareFaultRateData2_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData2_1_0_BCOUNT').html("("+barArryHardWareFaultRateData2_1[0].BCOUNT+")")
       $('#barOutBarRight74').css({'display':"none"})
      $('#barOutBarRight71').css({'display':"none"})
      $('#barOutBarRight72').css({'display':"none"})
      $('#barOutBarRight73').css({'display':"none"})
      
      		$('#barlistFistFCOUNT00_6').html(barArryHardWareFaultRateData2_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_6").css({'width': barArryHardWareFaultRateData2_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_6').html(barArryHardWareFaultRateData2_1[0].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData2_1.length==2){
      	$('#barArryHardWareFaultRateData2_1_0_BANDNAME').html(barArryHardWareFaultRateData2_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData2_1_0_BCOUNT').html("("+barArryHardWareFaultRateData2_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_1_1_BANDNAME').html(barArryHardWareFaultRateData2_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData2_1_1_BCOUNT').html("("+barArryHardWareFaultRateData2_1[1].BCOUNT+")")
      	$('#barOutBarRight74').css({'display':"none"})
      $('#barOutBarRight72').css({'display':"none"})
      $('#barOutBarRight73').css({'display':"none"})
     	  	$('#barlistFistFCOUNT00_6').html(barArryHardWareFaultRateData2_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_6").css({'width': barArryHardWareFaultRateData2_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_6').html(barArryHardWareFaultRateData2_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_6').html(barArryHardWareFaultRateData2_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_6").css({'width': barArryHardWareFaultRateData2_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_6').html(barArryHardWareFaultRateData2_1[1].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData2_1.length==3){
      	$('#barArryHardWareFaultRateData2_1_0_BANDNAME').html(barArryHardWareFaultRateData2_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData2_1_0_BCOUNT').html("("+barArryHardWareFaultRateData2_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_1_1_BANDNAME').html(barArryHardWareFaultRateData2_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData2_1_1_BCOUNT').html("("+barArryHardWareFaultRateData2_1[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_1_2_BANDNAME').html(barArryHardWareFaultRateData2_1[2].BANDNAME)
        $('#barArryHardWareFaultRateData2_1_2_BCOUNT').html("("+barArryHardWareFaultRateData2_1[2].BCOUNT+")")
        $('#barOutBarRight74').css({'display':"none"})
      $('#barOutBarRight73').css({'display':"none"})
        
        	$('#barlistFistFCOUNT00_6').html(barArryHardWareFaultRateData2_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_6").css({'width': barArryHardWareFaultRateData2_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_6').html(barArryHardWareFaultRateData2_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_6').html(barArryHardWareFaultRateData2_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_6").css({'width': barArryHardWareFaultRateData2_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_6').html(barArryHardWareFaultRateData2_1[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_6').html(barArryHardWareFaultRateData2_1[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_6").css({'width': barArryHardWareFaultRateData2_1[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_6').html(barArryHardWareFaultRateData2_1[2].FAULTRATE+"%")
					
      }
			if(barArryHardWareFaultRateData2_1.length==4){
      	$('#barArryHardWareFaultRateData2_1_0_BANDNAME').html(barArryHardWareFaultRateData2_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData2_1_0_BCOUNT').html("("+barArryHardWareFaultRateData2_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_1_1_BANDNAME').html(barArryHardWareFaultRateData2_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData2_1_1_BCOUNT').html("("+barArryHardWareFaultRateData2_1[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_1_2_BANDNAME').html(barArryHardWareFaultRateData2_1[2].BANDNAME)
        $('#barArryHardWareFaultRateData2_1_2_BCOUNT').html("("+barArryHardWareFaultRateData2_1[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData2_1_3_BANDNAME').html(barArryHardWareFaultRateData2_1[3].BANDNAME)
        $('#barArryHardWareFaultRateData2_1_3_BCOUNT').html("("+barArryHardWareFaultRateData2_1[3].BCOUNT+")")
     	 $('#barOutBarRight74').css({'display':"none"})
     	  
     	  	$('#barlistFistFCOUNT00_6').html(barArryHardWareFaultRateData2_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_6").css({'width': barArryHardWareFaultRateData2_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_6').html(barArryHardWareFaultRateData2_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_6').html(barArryHardWareFaultRateData2_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_6").css({'width': barArryHardWareFaultRateData2_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_6').html(barArryHardWareFaultRateData2_1[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_6').html(barArryHardWareFaultRateData2_1[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_6").css({'width': barArryHardWareFaultRateData2_1[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_6').html(barArryHardWareFaultRateData2_1[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_6').html(barArryHardWareFaultRateData2_1[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_6").css({'width': barArryHardWareFaultRateData2_1[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_6').html(barArryHardWareFaultRateData2_1[3].FAULTRATE+"%")
      }
      if(barArryHardWareFaultRateData2_1.length==5){
      	$('#barArryHardWareFaultRateData2_1_0_BANDNAME').html(barArryHardWareFaultRateData2_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData2_1_0_BCOUNT').html("("+barArryHardWareFaultRateData2_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_1_1_BANDNAME').html(barArryHardWareFaultRateData2_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData2_1_1_BCOUNT').html("("+barArryHardWareFaultRateData2_1[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_1_2_BANDNAME').html(barArryHardWareFaultRateData2_1[2].BANDNAME)
        $('#barArryHardWareFaultRateData2_1_2_BCOUNT').html("("+barArryHardWareFaultRateData2_1[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData2_1_3_BANDNAME').html(barArryHardWareFaultRateData2_1[3].BANDNAME)
        $('#barArryHardWareFaultRateData2_1_3_BCOUNT').html("("+barArryHardWareFaultRateData2_1[3].BCOUNT+")")
        $('#barArryHardWareFaultRateData2_1_4_BANDNAME').html(barArryHardWareFaultRateData2_1[4].BANDNAME)
        $('#barArryHardWareFaultRateData2_1_4_BCOUNT').html("("+barArryHardWareFaultRateData2_1[4].BCOUNT+")")
        
        	$('#barlistFistFCOUNT00_6').html(barArryHardWareFaultRateData2_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_6").css({'width': barArryHardWareFaultRateData2_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_6').html(barArryHardWareFaultRateData2_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_6').html(barArryHardWareFaultRateData2_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_6").css({'width': barArryHardWareFaultRateData2_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_6').html(barArryHardWareFaultRateData2_1[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_6').html(barArryHardWareFaultRateData2_1[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_6").css({'width': barArryHardWareFaultRateData2_1[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_6').html(barArryHardWareFaultRateData2_1[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_6').html(barArryHardWareFaultRateData2_1[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_6").css({'width': barArryHardWareFaultRateData2_1[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_6').html(barArryHardWareFaultRateData2_1[3].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT04_6').html(barArryHardWareFaultRateData2_1[4].FCOUNT)
		  		$("#barlistFistFAULTRATE04_6").css({'width': barArryHardWareFaultRateData2_1[4].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE040_6').html(barArryHardWareFaultRateData2_1[4].FAULTRATE+"%")
      }
      	}
      	if(barArryHardWareFaultRateData2_2!==undefined||null||''){
      		if(barArryHardWareFaultRateData2_2.length!==0){
//					alert('22')
					
      		 $('#hardWareFaultRateData2INFOSNAME2').hover(function(){
      		 	$('#StatisticsDetailListBarRight8').show()
						$('#StatisticsDetailListBarRight8').parent('.StatisticsDetailListBar').siblings('.StatisticsDetailListBar').children('div').hide()
      		 })
      		}
      		 //   判断一级设备第三个 --的 下边二级设备的 第3个的----- 进度条数 
			if(barArryHardWareFaultRateData2_2.length==1){
      	$('#barArryHardWareFaultRateData2_2_0_BANDNAME').html(barArryHardWareFaultRateData2_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData2_2_0_BCOUNT').html("("+barArryHardWareFaultRateData2_2[0].BCOUNT+")")
      $('#barOutBarRight84').css({'display':"none"})
      $('#barOutBarRight81').css({'display':"none"})
      $('#barOutBarRight82').css({'display':"none"})
      $('#barOutBarRight83').css({'display':"none"})
      
      		$('#barlistFistFCOUNT00_7').html(barArryHardWareFaultRateData2_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_7").css({'width': barArryHardWareFaultRateData2_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_7').html(barArryHardWareFaultRateData2_2[0].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData2_2.length==2){
      	$('#barArryHardWareFaultRateData2_2_0_BANDNAME').html(barArryHardWareFaultRateData2_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData2_2_0_BCOUNT').html("("+barArryHardWareFaultRateData2_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_2_1_BANDNAME').html(barArryHardWareFaultRateData2_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData2_2_1_BCOUNT').html("("+barArryHardWareFaultRateData2_2[1].BCOUNT+")")
      	$('#barOutBarRight81').css({'display':"none"})
      $('#barOutBarRight84').css({'display':"none"})
      $('#barOutBarRight83').css({'display':"none"})
     	  	$('#barlistFistFCOUNT00_7').html(barArryHardWareFaultRateData2_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_7").css({'width': barArryHardWareFaultRateData2_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_7').html(barArryHardWareFaultRateData2_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_7').html(barArryHardWareFaultRateData2_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_7").css({'width': barArryHardWareFaultRateData2_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_7').html(barArryHardWareFaultRateData2_2[1].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData2_2.length==3){
      	
      	
      	$('#barArryHardWareFaultRateData2_2_0_BANDNAME').html(barArryHardWareFaultRateData2_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData2_2_0_BCOUNT').html("("+barArryHardWareFaultRateData2_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_2_1_BANDNAME').html(barArryHardWareFaultRateData2_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData2_2_1_BCOUNT').html("("+barArryHardWareFaultRateData2_2[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_2_2_BANDNAME').html(barArryHardWareFaultRateData2_2[2].BANDNAME)
        $('#barArryHardWareFaultRateData2_2_2_BCOUNT').html("("+barArryHardWareFaultRateData2_2[2].BCOUNT+")")
        $('#barOutBarRight84').css({'display':"none"})
      $('#barOutBarRight83').css({'display':"none"})
        
        	$('#barlistFistFCOUNT00_7').html(barArryHardWareFaultRateData2_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_7").css({'width': barArryHardWareFaultRateData2_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_7').html(barArryHardWareFaultRateData2_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_7').html(barArryHardWareFaultRateData2_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_7").css({'width': barArryHardWareFaultRateData2_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_7').html(barArryHardWareFaultRateData2_2[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_7').html(barArryHardWareFaultRateData2_2[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_7").css({'width': barArryHardWareFaultRateData2_2[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_7').html(barArryHardWareFaultRateData2_2[2].FAULTRATE+"%")
					
      }
			if(barArryHardWareFaultRateData2_2.length==4){
      	$('#barArryHardWareFaultRateData2_2_0_BANDNAME').html(barArryHardWareFaultRateData2_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData2_2_0_BCOUNT').html("("+barArryHardWareFaultRateData2_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_2_1_BANDNAME').html(barArryHardWareFaultRateData2_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData2_2_1_BCOUNT').html("("+barArryHardWareFaultRateData2_2[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_2_2_BANDNAME').html(barArryHardWareFaultRateData2_2[2].BANDNAME)
        $('#barArryHardWareFaultRateData2_2_2_BCOUNT').html("("+barArryHardWareFaultRateData2_2[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData2_2_3_BANDNAME').html(barArryHardWareFaultRateData2_2[3].BANDNAME)
        $('#barArryHardWareFaultRateData2_2_3_BCOUNT').html("("+barArryHardWareFaultRateData2_2[3].BCOUNT+")")
     	  $('#barOutBarRight84').css({'display':"none"})
     	  
     	  	$('#barlistFistFCOUNT00_7').html(barArryHardWareFaultRateData2_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_7").css({'width': barArryHardWareFaultRateData2_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_7').html(barArryHardWareFaultRateData2_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_7').html(barArryHardWareFaultRateData2_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_7").css({'width': barArryHardWareFaultRateData2_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_7').html(barArryHardWareFaultRateData2_2[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_7').html(barArryHardWareFaultRateData2_2[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_7").css({'width': barArryHardWareFaultRateData2_2[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_7').html(barArryHardWareFaultRateData2_2[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_7').html(barArryHardWareFaultRateData2_2[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_7").css({'width': barArryHardWareFaultRateData2_2[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_7').html(barArryHardWareFaultRateData2_2[3].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData2_2.length==5){
      	$('#barArryHardWareFaultRateData2_2_0_BANDNAME').html(barArryHardWareFaultRateData2_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData2_2_0_BCOUNT').html("("+barArryHardWareFaultRateData2_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_2_1_BANDNAME').html(barArryHardWareFaultRateData2_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData2_2_1_BCOUNT').html("("+barArryHardWareFaultRateData2_2[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData2_2_2_BANDNAME').html(barArryHardWareFaultRateData2_2[2].BANDNAME)
        $('#barArryHardWareFaultRateData2_2_2_BCOUNT').html("("+barArryHardWareFaultRateData2_2[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData2_2_3_BANDNAME').html(barArryHardWareFaultRateData2_2[3].BANDNAME)
        $('#barArryHardWareFaultRateData2_2_3_BCOUNT').html("("+barArryHardWareFaultRateData2_2[3].BCOUNT+")")
        $('#barArryHardWareFaultRateData2_2_4_BANDNAME').html(barArryHardWareFaultRateData2_2[4].BANDNAME)
        $('#barArryHardWareFaultRateData2_2_4_BCOUNT').html("("+barArryHardWareFaultRateData2_2[4].BCOUNT+")")
        
        	$('#barlistFistFCOUNT00_7').html(barArryHardWareFaultRateData2_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_7").css({'width': barArryHardWareFaultRateData2_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_7').html(barArryHardWareFaultRateData2_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_7').html(barArryHardWareFaultRateData2_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_7").css({'width': barArryHardWareFaultRateData2_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_7').html(barArryHardWareFaultRateData2_2[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_7').html(barArryHardWareFaultRateData2_2[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_7").css({'width': barArryHardWareFaultRateData2_2[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_7').html(barArryHardWareFaultRateData2_2[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_7').html(barArryHardWareFaultRateData2_2[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_7").css({'width': barArryHardWareFaultRateData2_2[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_7').html(barArryHardWareFaultRateData2_2[3].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT04_7').html(barArryHardWareFaultRateData2_2[4].FCOUNT)
		  		$("#barlistFistFAULTRATE04_7").css({'width': barArryHardWareFaultRateData2_2[4].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE040_7').html(barArryHardWareFaultRateData2_2[4].FAULTRATE+"%")
      }
      	}
      	//判断是否 鼠标滑过显示隐藏进度条 一级菜单第4个
      	if(barArryHardWareFaultRateData3_0!==undefined||null||''){
      		if(barArryHardWareFaultRateData3_0.length!==0){
//					alert('30')
      		 $('#hardWareFaultRateData3INFOSNAME0').hover(function(){
      		 	$('#StatisticsDetailListBarRight9').show()
						$('#StatisticsDetailListBarRight9').parent('.StatisticsDetailListBar').siblings('.StatisticsDetailListBar').children('div').hide()
      		 })
      	}
      		//   判断一级设备第四个 --的 下边二级设备的 第1个的----- 进度条数 
			if(barArryHardWareFaultRateData3_0.length==1){
      	$('#barArryHardWareFaultRateData3_0_0_BANDNAME').html(barArryHardWareFaultRateData3_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData3_0_0_BCOUNT').html("("+barArryHardWareFaultRateData3_0[0].BCOUNT+")")
       $('#barOutBarRight91').css({'display':"none"})
      $('#barOutBarRight92').css({'display':"none"})
      $('#barOutBarRight93').css({'display':"none"})
      $('#barOutBarRight94').css({'display':"none"})
      
      		$('#barlistFistFCOUNT00_8').html(barArryHardWareFaultRateData3_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_8").css({'width': barArryHardWareFaultRateData3_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_8').html(barArryHardWareFaultRateData3_0[0].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData3_0.length==2){
      	$('#barArryHardWareFaultRateData3_0_0_BANDNAME').html(barArryHardWareFaultRateData3_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData3_0_0_BCOUNT').html("("+barArryHardWareFaultRateData3_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_0_1_BANDNAME').html(barArryHardWareFaultRateData3_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData3_0_1_BCOUNT').html("("+barArryHardWareFaultRateData3_0[1].BCOUNT+")")
      	$('#barOutBarRight92').css({'display':"none"})
      $('#barOutBarRight93').css({'display':"none"})
      $('#barOutBarRight94').css({'display':"none"})
     	  	$('#barlistFistFCOUNT00_8').html(barArryHardWareFaultRateData3_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_8").css({'width': barArryHardWareFaultRateData3_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_8').html(barArryHardWareFaultRateData3_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_8').html(barArryHardWareFaultRateData3_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_8").css({'width': barArryHardWareFaultRateData3_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_8').html(barArryHardWareFaultRateData3_0[1].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData3_0.length==3){
      	$('#barArryHardWareFaultRateData3_0_0_BANDNAME').html(barArryHardWareFaultRateData3_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData3_0_0_BCOUNT').html("("+barArryHardWareFaultRateData3_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_0_1_BANDNAME').html(barArryHardWareFaultRateData3_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData3_0_1_BCOUNT').html("("+barArryHardWareFaultRateData3_0[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_0_2_BANDNAME').html(barArryHardWareFaultRateData3_0[2].BANDNAME)
        $('#barArryHardWareFaultRateData3_0_2_BCOUNT').html("("+barArryHardWareFaultRateData3_0[2].BCOUNT+")")
        $('#barOutBarRight94').css({'display':"none"})
      $('#barOutBarRight93').css({'display':"none"})
        
        	$('#barlistFistFCOUNT00_8').html(barArryHardWareFaultRateData3_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_8").css({'width': barArryHardWareFaultRateData3_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_8').html(barArryHardWareFaultRateData3_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_8').html(barArryHardWareFaultRateData3_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_8").css({'width': barArryHardWareFaultRateData3_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_8').html(barArryHardWareFaultRateData3_0[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_8').html(barArryHardWareFaultRateData3_0[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_8").css({'width': barArryHardWareFaultRateData3_0[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_8').html(barArryHardWareFaultRateData3_0[2].FAULTRATE+"%")
					
      }
			if(barArryHardWareFaultRateData3_0.length==4){
      	$('#barArryHardWareFaultRateData3_0_0_BANDNAME').html(barArryHardWareFaultRateData3_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData3_0_0_BCOUNT').html("("+barArryHardWareFaultRateData3_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_0_1_BANDNAME').html(barArryHardWareFaultRateData3_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData3_0_1_BCOUNT').html("("+barArryHardWareFaultRateData3_0[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_0_2_BANDNAME').html(barArryHardWareFaultRateData3_0[2].BANDNAME)
        $('#barArryHardWareFaultRateData3_0_2_BCOUNT').html("("+barArryHardWareFaultRateData3_0[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData3_0_3_BANDNAME').html(barArryHardWareFaultRateData3_0[3].BANDNAME)
        $('#barArryHardWareFaultRateData3_0_3_BCOUNT').html("("+barArryHardWareFaultRateData3_0[3].BCOUNT+")")
     	  $('#barOutBarRight94').css({'display':"none"})
     	  
     	  	$('#barlistFistFCOUNT00_8').html(barArryHardWareFaultRateData3_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_8").css({'width': barArryHardWareFaultRateData3_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_8').html(barArryHardWareFaultRateData3_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_8').html(barArryHardWareFaultRateData3_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_8").css({'width': barArryHardWareFaultRateData3_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_8').html(barArryHardWareFaultRateData3_0[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_8').html(barArryHardWareFaultRateData3_0[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_8").css({'width': barArryHardWareFaultRateData3_0[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_8').html(barArryHardWareFaultRateData3_0[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_8').html(barArryHardWareFaultRateData3_0[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_8").css({'width': barArryHardWareFaultRateData3_0[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_8').html(barArryHardWareFaultRateData3_0[3].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData3_0.length==5){
      	$('#barArryHardWareFaultRateData3_0_0_BANDNAME').html(barArryHardWareFaultRateData3_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData3_0_0_BCOUNT').html("("+barArryHardWareFaultRateData3_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_0_1_BANDNAME').html(barArryHardWareFaultRateData3_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData3_0_1_BCOUNT').html("("+barArryHardWareFaultRateData3_0[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_0_2_BANDNAME').html(barArryHardWareFaultRateData3_0[2].BANDNAME)
        $('#barArryHardWareFaultRateData3_0_2_BCOUNT').html("("+barArryHardWareFaultRateData3_0[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData3_0_3_BANDNAME').html(barArryHardWareFaultRateData3_0[3].BANDNAME)
        $('#barArryHardWareFaultRateData3_0_3_BCOUNT').html("("+barArryHardWareFaultRateData3_0[3].BCOUNT+")")
        $('#barArryHardWareFaultRateData3_0_4_BANDNAME').html(barArryHardWareFaultRateData3_0[4].BANDNAME)
        $('#barArryHardWareFaultRateData3_0_4_BCOUNT').html("("+barArryHardWareFaultRateData3_0[4].BCOUNT+")")
        
        	$('#barlistFistFCOUNT00_8').html(barArryHardWareFaultRateData3_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_8").css({'width': barArryHardWareFaultRateData3_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_8').html(barArryHardWareFaultRateData3_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_8').html(barArryHardWareFaultRateData3_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_8").css({'width': barArryHardWareFaultRateData3_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_8').html(barArryHardWareFaultRateData3_0[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_8').html(barArryHardWareFaultRateData3_0[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_8").css({'width': barArryHardWareFaultRateData3_0[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_8').html(barArryHardWareFaultRateData3_0[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_8').html(barArryHardWareFaultRateData3_0[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_8").css({'width': barArryHardWareFaultRateData3_0[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_8').html(barArryHardWareFaultRateData3_0[3].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT04_8').html(barArryHardWareFaultRateData3_0[4].FCOUNT)
		  		$("#barlistFistFAULTRATE04_8").css({'width': barArryHardWareFaultRateData3_0[4].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE040_8').html(barArryHardWareFaultRateData3_0[4].FAULTRATE+"%")
      }
      		
      	}
      	if(barArryHardWareFaultRateData3_1!==undefined||null||''){
      		if(barArryHardWareFaultRateData3_1.length!==0){
//					alert('31')
      		 $('#hardWareFaultRateData3INFOSNAME1').hover(function(){
      		 	$('#StatisticsDetailListBarRight10').show()
						$('#StatisticsDetailListBarRight10').parent('.StatisticsDetailListBar').siblings('.StatisticsDetailListBar').children('div').hide()
      		 })
      	}
      		      		//   判断一级设备第四个 --的 下边二级设备的 第2个的----- 进度条数 
			if(barArryHardWareFaultRateData3_1.length==1){
      	$('#barArryHardWareFaultRateData3_1_0_BANDNAME').html(barArryHardWareFaultRateData3_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData3_1_0_BCOUNT').html("("+barArryHardWareFaultRateData3_1[0].BCOUNT+")")
       $('#barOutBarRight101').css({'display':"none"})
      $('#barOutBarRight102').css({'display':"none"})
      $('#barOutBarRight103').css({'display':"none"})
      $('#barOutBarRight104').css({'display':"none"})
      
      		$('#barlistFistFCOUNT00_9').html(barArryHardWareFaultRateData3_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_9").css({'width': barArryHardWareFaultRateData3_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_9').html(barArryHardWareFaultRateData3_1[0].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData3_1.length==2){
      	$('#barArryHardWareFaultRateData3_1_0_BANDNAME').html(barArryHardWareFaultRateData3_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData3_1_0_BCOUNT').html("("+barArryHardWareFaultRateData3_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_1_1_BANDNAME').html(barArryHardWareFaultRateData3_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData3_1_1_BCOUNT').html("("+barArryHardWareFaultRateData3_1[1].BCOUNT+")")
      	$('#barOutBarRight102').css({'display':"none"})
      $('#barOutBarRight103').css({'display':"none"})
      $('#barOutBarRight104').css({'display':"none"})
     	  	$('#barlistFistFCOUNT00_9').html(barArryHardWareFaultRateData3_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_9").css({'width': barArryHardWareFaultRateData3_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_9').html(barArryHardWareFaultRateData3_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_9').html(barArryHardWareFaultRateData3_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_9").css({'width': barArryHardWareFaultRateData3_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_9').html(barArryHardWareFaultRateData3_1[1].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData3_1.length==3){
      	$('#barArryHardWareFaultRateData3_1_0_BANDNAME').html(barArryHardWareFaultRateData3_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData3_1_0_BCOUNT').html("("+barArryHardWareFaultRateData3_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_1_1_BANDNAME').html(barArryHardWareFaultRateData3_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData3_1_1_BCOUNT').html("("+barArryHardWareFaultRateData3_1[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_1_2_BANDNAME').html(barArryHardWareFaultRateData3_1[2].BANDNAME)
        $('#barArryHardWareFaultRateData3_1_2_BCOUNT').html("("+barArryHardWareFaultRateData3_1[2].BCOUNT+")")
        $('#barOutBarRight104').css({'display':"none"})
      $('#barOutBarRight103').css({'display':"none"})
        
        	$('#barlistFistFCOUNT00_9').html(barArryHardWareFaultRateData3_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_9").css({'width': barArryHardWareFaultRateData3_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_9').html(barArryHardWareFaultRateData3_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_9').html(barArryHardWareFaultRateData3_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_9").css({'width': barArryHardWareFaultRateData3_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_9').html(barArryHardWareFaultRateData3_1[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_9').html(barArryHardWareFaultRateData3_1[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_9").css({'width': barArryHardWareFaultRateData3_1[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_9').html(barArryHardWareFaultRateData3_1[2].FAULTRATE+"%")
					
      }
			if(barArryHardWareFaultRateData3_1.length==4){
      	$('#barArryHardWareFaultRateData3_1_0_BANDNAME').html(barArryHardWareFaultRateData3_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData3_1_0_BCOUNT').html("("+barArryHardWareFaultRateData3_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_1_1_BANDNAME').html(barArryHardWareFaultRateData3_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData3_1_1_BCOUNT').html("("+barArryHardWareFaultRateData3_1[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_1_2_BANDNAME').html(barArryHardWareFaultRateData3_1[2].BANDNAME)
        $('#barArryHardWareFaultRateData3_1_2_BCOUNT').html("("+barArryHardWareFaultRateData3_1[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData3_1_3_BANDNAME').html(barArryHardWareFaultRateData3_1[3].BANDNAME)
        $('#barArryHardWareFaultRateData3_1_3_BCOUNT').html("("+barArryHardWareFaultRateData3_1[3].BCOUNT+")")
     	  $('#barOutBarRight104').css({'display':"none"})
     	  
     	  	$('#barlistFistFCOUNT00_9').html(barArryHardWareFaultRateData3_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_9").css({'width': barArryHardWareFaultRateData3_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_9').html(barArryHardWareFaultRateData3_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_9').html(barArryHardWareFaultRateData3_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_9").css({'width': barArryHardWareFaultRateData3_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_9').html(barArryHardWareFaultRateData3_1[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_9').html(barArryHardWareFaultRateData3_1[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_9").css({'width': barArryHardWareFaultRateData3_1[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_9').html(barArryHardWareFaultRateData3_1[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_9').html(barArryHardWareFaultRateData3_1[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_9").css({'width': barArryHardWareFaultRateData3_1[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_9').html(barArryHardWareFaultRateData3_1[3].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData3_1.length==5){
      	$('#barArryHardWareFaultRateData3_1_0_BANDNAME').html(barArryHardWareFaultRateData3_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData3_1_0_BCOUNT').html("("+barArryHardWareFaultRateData3_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_1_1_BANDNAME').html(barArryHardWareFaultRateData3_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData3_1_1_BCOUNT').html("("+barArryHardWareFaultRateData3_1[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_1_2_BANDNAME').html(barArryHardWareFaultRateData3_1[2].BANDNAME)
        $('#barArryHardWareFaultRateData3_1_2_BCOUNT').html("("+barArryHardWareFaultRateData3_1[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData3_1_3_BANDNAME').html(barArryHardWareFaultRateData3_1[3].BANDNAME)
        $('#barArryHardWareFaultRateData3_1_3_BCOUNT').html("("+barArryHardWareFaultRateData3_1[3].BCOUNT+")")
        $('#barArryHardWareFaultRateData3_1_4_BANDNAME').html(barArryHardWareFaultRateData3_1[4].BANDNAME)
        $('#barArryHardWareFaultRateData3_1_4_BCOUNT').html("("+barArryHardWareFaultRateData3_1[4].BCOUNT+")")
        
        	$('#barlistFistFCOUNT00_9').html(barArryHardWareFaultRateData3_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_9").css({'width': barArryHardWareFaultRateData3_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_9').html(barArryHardWareFaultRateData3_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_9').html(barArryHardWareFaultRateData3_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_9").css({'width': barArryHardWareFaultRateData3_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_9').html(barArryHardWareFaultRateData3_1[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_9').html(barArryHardWareFaultRateData3_1[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_9").css({'width': barArryHardWareFaultRateData3_1[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_9').html(barArryHardWareFaultRateData3_1[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_9').html(barArryHardWareFaultRateData3_1[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_9").css({'width': barArryHardWareFaultRateData3_1[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_9').html(barArryHardWareFaultRateData3_1[3].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT04_9').html(barArryHardWareFaultRateData3_1[4].FCOUNT)
		  		$("#barlistFistFAULTRATE04_9").css({'width': barArryHardWareFaultRateData3_1[4].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE040_9').html(barArryHardWareFaultRateData3_1[4].FAULTRATE+"%")
      }
      		
      	}
      	if(barArryHardWareFaultRateData3_2!==undefined||null||''){
      		if(barArryHardWareFaultRateData3_2.length!==0){
//					alert('32')
      		 $('#hardWareFaultRateData3INFOSNAME2').hover(function(){
      		 	$('#StatisticsDetailListBarRight11').show()
						$('#StatisticsDetailListBarRight11').parent('.StatisticsDetailListBar').siblings('.StatisticsDetailListBar').children('div').hide()
      		 })
      		}
      		  //   判断一级设备第四个 --的 下边二级设备的 第3个的----- 进度条数 
			if(barArryHardWareFaultRateData3_2.length==1){
      	$('#barArryHardWareFaultRateData3_2_0_BANDNAME').html(barArryHardWareFaultRateData3_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData3_2_0_BCOUNT').html("("+barArryHardWareFaultRateData3_2[0].BCOUNT+")")
       $('#barOutBarRight111').css({'display':"none"})
      $('#barOutBarRight112').css({'display':"none"})
      $('#barOutBarRight113').css({'display':"none"})
      $('#barOutBarRight114').css({'display':"none"})
      
      	$('#barlistFistFCOUNT00_10').html(barArryHardWareFaultRateData3_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_10").css({'width': barArryHardWareFaultRateData3_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_10').html(barArryHardWareFaultRateData3_2[0].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData3_2.length==2){
      	$('#barArryHardWareFaultRateData3_2_0_BANDNAME').html(barArryHardWareFaultRateData3_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData3_2_0_BCOUNT').html("("+barArryHardWareFaultRateData3_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_2_1_BANDNAME').html(barArryHardWareFaultRateData3_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData3_2_1_BCOUNT').html("("+barArryHardWareFaultRateData3_2[1].BCOUNT+")")
      	$('#barOutBarRight102').css({'display':"none"})
      $('#barOutBarRight113').css({'display':"none"})
      $('#barOutBarRight114').css({'display':"none"})
     	  	$('#barlistFistFCOUNT00_10').html(barArryHardWareFaultRateData3_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_10").css({'width': barArryHardWareFaultRateData3_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_10').html(barArryHardWareFaultRateData3_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_10').html(barArryHardWareFaultRateData3_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_10").css({'width': barArryHardWareFaultRateData3_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_10').html(barArryHardWareFaultRateData3_2[1].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData3_2.length==3){
      	$('#barArryHardWareFaultRateData3_2_0_BANDNAME').html(barArryHardWareFaultRateData3_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData3_2_0_BCOUNT').html("("+barArryHardWareFaultRateData3_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_2_1_BANDNAME').html(barArryHardWareFaultRateData3_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData3_2_1_BCOUNT').html("("+barArryHardWareFaultRateData3_2[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_2_2_BANDNAME').html(barArryHardWareFaultRateData3_2[2].BANDNAME)
        $('#barArryHardWareFaultRateData3_2_2_BCOUNT').html("("+barArryHardWareFaultRateData3_2[2].BCOUNT+")")
        $('#barOutBarRight114').css({'display':"none"})
      $('#barOutBarRight113').css({'display':"none"})
        
        	$('#barlistFistFCOUNT00_10').html(barArryHardWareFaultRateData3_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_10").css({'width': barArryHardWareFaultRateData3_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_10').html(barArryHardWareFaultRateData3_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_10').html(barArryHardWareFaultRateData3_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_10").css({'width': barArryHardWareFaultRateData3_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_10').html(barArryHardWareFaultRateData3_2[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_10').html(barArryHardWareFaultRateData3_2[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_10").css({'width': barArryHardWareFaultRateData3_2[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_10').html(barArryHardWareFaultRateData3_2[2].FAULTRATE+"%")
					
      }
			if(barArryHardWareFaultRateData3_2.length==4){
      	$('#barArryHardWareFaultRateData3_2_0_BANDNAME').html(barArryHardWareFaultRateData3_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData3_2_0_BCOUNT').html("("+barArryHardWareFaultRateData3_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_2_1_BANDNAME').html(barArryHardWareFaultRateData3_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData3_2_1_BCOUNT').html("("+barArryHardWareFaultRateData3_2[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_2_2_BANDNAME').html(barArryHardWareFaultRateData3_2[2].BANDNAME)
        $('#barArryHardWareFaultRateData3_2_2_BCOUNT').html("("+barArryHardWareFaultRateData3_2[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData3_2_3_BANDNAME').html(barArryHardWareFaultRateData3_2[3].BANDNAME)
        $('#barArryHardWareFaultRateData3_2_3_BCOUNT').html("("+barArryHardWareFaultRateData3_2[3].BCOUNT+")")
     	  $('#barOutBarRight114').css({'display':"none"})
     	  
     	  	$('#barlistFistFCOUNT00_10').html(barArryHardWareFaultRateData3_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_10").css({'width': barArryHardWareFaultRateData3_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_10').html(barArryHardWareFaultRateData3_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_10').html(barArryHardWareFaultRateData3_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_10").css({'width': barArryHardWareFaultRateData3_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_10').html(barArryHardWareFaultRateData3_2[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_10').html(barArryHardWareFaultRateData3_2[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_10").css({'width': barArryHardWareFaultRateData3_2[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_10').html(barArryHardWareFaultRateData3_2[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_10').html(barArryHardWareFaultRateData3_2[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_10").css({'width': barArryHardWareFaultRateData3_2[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_10').html(barArryHardWareFaultRateData3_2[3].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData3_2.length==5){
      	$('#barArryHardWareFaultRateData3_2_0_BANDNAME').html(barArryHardWareFaultRateData3_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData3_2_0_BCOUNT').html("("+barArryHardWareFaultRateData3_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_2_1_BANDNAME').html(barArryHardWareFaultRateData3_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData3_2_1_BCOUNT').html("("+barArryHardWareFaultRateData3_2[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData3_2_2_BANDNAME').html(barArryHardWareFaultRateData3_2[2].BANDNAME)
        $('#barArryHardWareFaultRateData3_2_2_BCOUNT').html("("+barArryHardWareFaultRateData3_2[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData3_2_3_BANDNAME').html(barArryHardWareFaultRateData3_2[3].BANDNAME)
        $('#barArryHardWareFaultRateData3_2_3_BCOUNT').html("("+barArryHardWareFaultRateData3_2[3].BCOUNT+")")
        $('#barArryHardWareFaultRateData3_2_4_BANDNAME').html(barArryHardWareFaultRateData3_2[4].BANDNAME)
        $('#barArryHardWareFaultRateData3_2_4_BCOUNT').html("("+barArryHardWareFaultRateData3_2[4].BCOUNT+")")
        
        	$('#barlistFistFCOUNT00_10').html(barArryHardWareFaultRateData3_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_10").css({'width': barArryHardWareFaultRateData3_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_10').html(barArryHardWareFaultRateData3_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_10').html(barArryHardWareFaultRateData3_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_10").css({'width': barArryHardWareFaultRateData3_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_10').html(barArryHardWareFaultRateData3_2[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_10').html(barArryHardWareFaultRateData3_2[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_10").css({'width': barArryHardWareFaultRateData3_2[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_10').html(barArryHardWareFaultRateData3_2[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_10').html(barArryHardWareFaultRateData3_2[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_10").css({'width': barArryHardWareFaultRateData3_2[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_10').html(barArryHardWareFaultRateData3_2[3].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT04_10').html(barArryHardWareFaultRateData3_2[4].FCOUNT)
		  		$("#barlistFistFAULTRATE04_10").css({'width': barArryHardWareFaultRateData3_2[4].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE040_10').html(barArryHardWareFaultRateData3_2[4].FAULTRATE+"%")
      }
      		
      	}
      			//判断是否 鼠标滑过显示隐藏进度条 一级菜单第5个
      	if(barArryHardWareFaultRateData4_0!==undefined||null||''){
      		if(barArryHardWareFaultRateData4_0.length!==0){
//					alert('40')
      		 $('#hardWareFaultRateData4INFOSNAME0').hover(function(){
      		 	$('#StatisticsDetailListBarRight12').show()
						$('#StatisticsDetailListBarRight12').parent('.StatisticsDetailListBar').siblings('.StatisticsDetailListBar').children('div').hide()
      		 })
      	}
      		 		//   判断一级设备第五个 --的 下边二级设备的 第1个的----- 进度条数 
			if(barArryHardWareFaultRateData4_0.length==1){
      	$('#barArryHardWareFaultRateData4_0_0_BANDNAME').html(barArryHardWareFaultRateData4_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData4_0_0_BCOUNT').html("("+barArryHardWareFaultRateData4_0[0].BCOUNT+")")
       $('#barOutBarRight121').css({'display':"none"})
      $('#barOutBarRight122').css({'display':"none"})
      $('#barOutBarRight123').css({'display':"none"})
      $('#barOutBarRight124').css({'display':"none"})
      
      		$('#barlistFistFCOUNT00_11').html(barArryHardWareFaultRateData4_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_11").css({'width': barArryHardWareFaultRateData4_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_11').html(barArryHardWareFaultRateData4_0[0].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData4_0.length==2){
      	$('#barArryHardWareFaultRateData4_0_0_BANDNAME').html(barArryHardWareFaultRateData4_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData4_0_0_BCOUNT').html("("+barArryHardWareFaultRateData4_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_0_1_BANDNAME').html(barArryHardWareFaultRateData4_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData4_0_1_BCOUNT').html("("+barArryHardWareFaultRateData4_0[1].BCOUNT+")")
      	$('#barOutBarRight122').css({'display':"none"})
      $('#barOutBarRight123').css({'display':"none"})
      $('#barOutBarRight124').css({'display':"none"})
     	  	$('#barlistFistFCOUNT00_11').html(barArryHardWareFaultRateData4_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_11").css({'width': barArryHardWareFaultRateData4_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_11').html(barArryHardWareFaultRateData4_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_11').html(barArryHardWareFaultRateData4_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_11").css({'width': barArryHardWareFaultRateData4_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_11').html(barArryHardWareFaultRateData4_0[1].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData4_0.length==3){
      	$('#barArryHardWareFaultRateData4_0_0_BANDNAME').html(barArryHardWareFaultRateData4_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData4_0_0_BCOUNT').html("("+barArryHardWareFaultRateData4_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_0_1_BANDNAME').html(barArryHardWareFaultRateData4_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData4_0_1_BCOUNT').html("("+barArryHardWareFaultRateData4_0[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_0_2_BANDNAME').html(barArryHardWareFaultRateData4_0[2].BANDNAME)
        $('#barArryHardWareFaultRateData4_0_2_BCOUNT').html("("+barArryHardWareFaultRateData4_0[2].BCOUNT+")")
        $('#barOutBarRight124').css({'display':"none"})
      $('#barOutBarRight123').css({'display':"none"})
        
        	$('#barlistFistFCOUNT00_11').html(barArryHardWareFaultRateData4_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_11").css({'width': barArryHardWareFaultRateData4_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_11').html(barArryHardWareFaultRateData4_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_11').html(barArryHardWareFaultRateData4_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_11").css({'width': barArryHardWareFaultRateData4_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_11').html(barArryHardWareFaultRateData4_0[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_11').html(barArryHardWareFaultRateData4_0[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_11").css({'width': barArryHardWareFaultRateData4_0[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_11').html(barArryHardWareFaultRateData4_0[2].FAULTRATE+"%")
					
      }
			if(barArryHardWareFaultRateData4_0.length==4){
      	$('#barArryHardWareFaultRateData4_0_0_BANDNAME').html(barArryHardWareFaultRateData4_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData4_0_0_BCOUNT').html("("+barArryHardWareFaultRateData4_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_0_1_BANDNAME').html(barArryHardWareFaultRateData4_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData4_0_1_BCOUNT').html("("+barArryHardWareFaultRateData4_0[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_0_2_BANDNAME').html(barArryHardWareFaultRateData4_0[2].BANDNAME)
        $('#barArryHardWareFaultRateData4_0_2_BCOUNT').html("("+barArryHardWareFaultRateData4_0[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData4_0_3_BANDNAME').html(barArryHardWareFaultRateData4_0[3].BANDNAME)
        $('#barArryHardWareFaultRateData4_0_3_BCOUNT').html("("+barArryHardWareFaultRateData4_0[3].BCOUNT+")")
     	  $('#barOutBarRight124').css({'display':"none"})
     	  
     	  	$('#barlistFistFCOUNT00_11').html(barArryHardWareFaultRateData4_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_11").css({'width': barArryHardWareFaultRateData4_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_11').html(barArryHardWareFaultRateData4_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_11').html(barArryHardWareFaultRateData4_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_11").css({'width': barArryHardWareFaultRateData4_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_11').html(barArryHardWareFaultRateData4_0[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_11').html(barArryHardWareFaultRateData4_0[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_11").css({'width': barArryHardWareFaultRateData4_0[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_11').html(barArryHardWareFaultRateData4_0[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_11').html(barArryHardWareFaultRateData4_0[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_11").css({'width': barArryHardWareFaultRateData4_0[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_11').html(barArryHardWareFaultRateData4_0[3].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData4_0.length==5){
      	$('#barArryHardWareFaultRateData4_0_0_BANDNAME').html(barArryHardWareFaultRateData4_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData4_0_0_BCOUNT').html("("+barArryHardWareFaultRateData4_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_0_1_BANDNAME').html(barArryHardWareFaultRateData4_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData4_0_1_BCOUNT').html("("+barArryHardWareFaultRateData4_0[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_0_2_BANDNAME').html(barArryHardWareFaultRateData4_0[2].BANDNAME)
        $('#barArryHardWareFaultRateData4_0_2_BCOUNT').html("("+barArryHardWareFaultRateData4_0[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData4_0_3_BANDNAME').html(barArryHardWareFaultRateData4_0[3].BANDNAME)
        $('#barArryHardWareFaultRateData4_0_3_BCOUNT').html("("+barArryHardWareFaultRateData4_0[3].BCOUNT+")")
        $('#barArryHardWareFaultRateData4_0_4_BANDNAME').html(barArryHardWareFaultRateData4_0[4].BANDNAME)
        $('#barArryHardWareFaultRateData4_0_4_BCOUNT').html("("+barArryHardWareFaultRateData4_0[4].BCOUNT+")")
        
        	$('#barlistFistFCOUNT00_11').html(barArryHardWareFaultRateData4_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_11").css({'width': barArryHardWareFaultRateData4_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_11').html(barArryHardWareFaultRateData4_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_11').html(barArryHardWareFaultRateData4_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_11").css({'width': barArryHardWareFaultRateData4_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_11').html(barArryHardWareFaultRateData4_0[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_11').html(barArryHardWareFaultRateData4_0[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_11").css({'width': barArryHardWareFaultRateData4_0[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_11').html(barArryHardWareFaultRateData4_0[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_11').html(barArryHardWareFaultRateData4_0[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_11").css({'width': barArryHardWareFaultRateData4_0[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_11').html(barArryHardWareFaultRateData4_0[3].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT04_11').html(barArryHardWareFaultRateData4_0[4].FCOUNT)
		  		$("#barlistFistFAULTRATE04_11").css({'width': barArryHardWareFaultRateData4_0[4].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE040_11').html(barArryHardWareFaultRateData4_0[4].FAULTRATE+"%")
      }
      		
      	}
      	if(barArryHardWareFaultRateData4_1!==undefined||null||''){
      		if(barArryHardWareFaultRateData4_1.length!==0){
//					alert('41')
      		 $('#hardWareFaultRateData4INFOSNAME1').hover(function(){
      		 	$('#StatisticsDetailListBarRight13').show()
						$('#StatisticsDetailListBarRight13').parent('.StatisticsDetailListBar').siblings('.StatisticsDetailListBar').children('div').hide()
      		 })
      	}
      				//   判断一级设备第五个 --的 下边二级设备的 第2个的----- 进度条数 
			if(barArryHardWareFaultRateData4_1.length==1){
      	$('#barArryHardWareFaultRateData4_1_0_BANDNAME').html(barArryHardWareFaultRateData4_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData4_1_0_BCOUNT').html("("+barArryHardWareFaultRateData4_1[0].BCOUNT+")")
       $('#barOutBarRight131').css({'display':"none"})
      $('#barOutBarRight132').css({'display':"none"})
      $('#barOutBarRight133').css({'display':"none"})
      $('#barOutBarRight134').css({'display':"none"})
      
      		$('#barlistFistFCOUNT00_12').html(barArryHardWareFaultRateData4_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_12").css({'width': barArryHardWareFaultRateData4_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_12').html(barArryHardWareFaultRateData4_1[0].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData4_1.length==2){
      	$('#barArryHardWareFaultRateData4_1_0_BANDNAME').html(barArryHardWareFaultRateData4_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData4_1_0_BCOUNT').html("("+barArryHardWareFaultRateData4_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_1_1_BANDNAME').html(barArryHardWareFaultRateData4_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData4_1_1_BCOUNT').html("("+barArryHardWareFaultRateData4_1[1].BCOUNT+")")
      	$('#barOutBarRight132').css({'display':"none"})
      $('#barOutBarRight133').css({'display':"none"})
      $('#barOutBarRight134').css({'display':"none"})
     	  	$('#barlistFistFCOUNT00_12').html(barArryHardWareFaultRateData4_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_12").css({'width': barArryHardWareFaultRateData4_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_12').html(barArryHardWareFaultRateData4_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_12').html(barArryHardWareFaultRateData4_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_12").css({'width': barArryHardWareFaultRateData4_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_12').html(barArryHardWareFaultRateData4_1[1].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData4_1.length==3){
      	$('#barArryHardWareFaultRateData4_1_0_BANDNAME').html(barArryHardWareFaultRateData4_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData4_1_0_BCOUNT').html("("+barArryHardWareFaultRateData4_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_1_1_BANDNAME').html(barArryHardWareFaultRateData4_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData4_1_1_BCOUNT').html("("+barArryHardWareFaultRateData4_1[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_1_2_BANDNAME').html(barArryHardWareFaultRateData4_1[2].BANDNAME)
        $('#barArryHardWareFaultRateData4_1_2_BCOUNT').html("("+barArryHardWareFaultRateData4_1[2].BCOUNT+")")
        $('#barOutBarRight134').css({'display':"none"})
      $('#barOutBarRight133').css({'display':"none"})
        
        	$('#barlistFistFCOUNT00_12').html(barArryHardWareFaultRateData4_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_12").css({'width': barArryHardWareFaultRateData4_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_12').html(barArryHardWareFaultRateData4_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_12').html(barArryHardWareFaultRateData4_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_12").css({'width': barArryHardWareFaultRateData4_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_12').html(barArryHardWareFaultRateData4_1[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_12').html(barArryHardWareFaultRateData4_1[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_12").css({'width': barArryHardWareFaultRateData4_1[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_12').html(barArryHardWareFaultRateData4_1[2].FAULTRATE+"%")
					
      }
			if(barArryHardWareFaultRateData4_1.length==4){
      	$('#barArryHardWareFaultRateData4_1_0_BANDNAME').html(barArryHardWareFaultRateData4_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData4_1_0_BCOUNT').html("("+barArryHardWareFaultRateData4_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_1_1_BANDNAME').html(barArryHardWareFaultRateData4_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData4_1_1_BCOUNT').html("("+barArryHardWareFaultRateData4_1[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_1_2_BANDNAME').html(barArryHardWareFaultRateData4_1[2].BANDNAME)
        $('#barArryHardWareFaultRateData4_1_2_BCOUNT').html("("+barArryHardWareFaultRateData4_1[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData4_1_3_BANDNAME').html(barArryHardWareFaultRateData4_1[3].BANDNAME)
        $('#barArryHardWareFaultRateData4_1_3_BCOUNT').html("("+barArryHardWareFaultRateData4_1[3].BCOUNT+")")
     	  $('#barOutBarRight134').css({'display':"none"})
     	  
     	  	$('#barlistFistFCOUNT00_12').html(barArryHardWareFaultRateData4_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_12").css({'width': barArryHardWareFaultRateData4_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_12').html(barArryHardWareFaultRateData4_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_12').html(barArryHardWareFaultRateData4_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_12").css({'width': barArryHardWareFaultRateData4_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_12').html(barArryHardWareFaultRateData4_1[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_12').html(barArryHardWareFaultRateData4_1[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_12").css({'width': barArryHardWareFaultRateData4_1[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_12').html(barArryHardWareFaultRateData4_1[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_12').html(barArryHardWareFaultRateData4_1[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_12").css({'width': barArryHardWareFaultRateData4_1[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_12').html(barArryHardWareFaultRateData4_1[3].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData4_1.length==5){
      	$('#barArryHardWareFaultRateData4_1_0_BANDNAME').html(barArryHardWareFaultRateData4_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData4_1_0_BCOUNT').html("("+barArryHardWareFaultRateData4_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_1_1_BANDNAME').html(barArryHardWareFaultRateData4_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData4_1_1_BCOUNT').html("("+barArryHardWareFaultRateData4_1[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_1_2_BANDNAME').html(barArryHardWareFaultRateData4_1[2].BANDNAME)
        $('#barArryHardWareFaultRateData4_1_2_BCOUNT').html("("+barArryHardWareFaultRateData4_1[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData4_1_3_BANDNAME').html(barArryHardWareFaultRateData4_1[3].BANDNAME)
        $('#barArryHardWareFaultRateData4_1_3_BCOUNT').html("("+barArryHardWareFaultRateData4_1[3].BCOUNT+")")
        $('#barArryHardWareFaultRateData4_1_4_BANDNAME').html(barArryHardWareFaultRateData4_1[4].BANDNAME)
        $('#barArryHardWareFaultRateData4_1_4_BCOUNT').html("("+barArryHardWareFaultRateData4_1[4].BCOUNT+")")
        
        	$('#barlistFistFCOUNT00_12').html(barArryHardWareFaultRateData4_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_12").css({'width': barArryHardWareFaultRateData4_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_12').html(barArryHardWareFaultRateData4_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_12').html(barArryHardWareFaultRateData4_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_12").css({'width': barArryHardWareFaultRateData4_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_12').html(barArryHardWareFaultRateData4_1[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_12').html(barArryHardWareFaultRateData4_1[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_12").css({'width': barArryHardWareFaultRateData4_1[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_12').html(barArryHardWareFaultRateData4_1[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_12').html(barArryHardWareFaultRateData4_1[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_12").css({'width': barArryHardWareFaultRateData4_1[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_12').html(barArryHardWareFaultRateData4_1[3].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT04_12').html(barArryHardWareFaultRateData4_1[4].FCOUNT)
		  		$("#barlistFistFAULTRATE04_12").css({'width': barArryHardWareFaultRateData4_1[4].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE040_12').html(barArryHardWareFaultRateData4_1[4].FAULTRATE+"%")
      }
      	}
      	if(barArryHardWareFaultRateData4_2!==undefined||null||''){
      		if(barArryHardWareFaultRateData4_2.length!==0){
//					alert('42')
      		 $('#hardWareFaultRateData4INFOSNAME2').hover(function(){
      		 	$('#StatisticsDetailListBarRight14').show()
						$('#StatisticsDetailListBarRight14').parent('.StatisticsDetailListBar').siblings('.StatisticsDetailListBar').children('div').hide()
      		 })
      		}
      		   				//   判断一级设备第五个 --的 下边二级设备的 第3个的----- 进度条数 
			if(barArryHardWareFaultRateData4_2.length==1){
      	$('#barArryHardWareFaultRateData4_2_0_BANDNAME').html(barArryHardWareFaultRateData4_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData4_2_0_BCOUNT').html("("+barArryHardWareFaultRateData4_2[0].BCOUNT+")")
        $('#barOutBarRight141').css({'display':"none"})
        $('#barOutBarRight142').css({'display':"none"})
        $('#barOutBarRight143').css({'display':"none"})
        $('#barOutBarRight144').css({'display':"none"})
      
      		$('#barlistFistFCOUNT00_13').html(barArryHardWareFaultRateData4_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_13").css({'width': barArryHardWareFaultRateData4_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_13').html(barArryHardWareFaultRateData4_2[0].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData4_2.length==2){
      	$('#barArryHardWareFaultRateData4_2_0_BANDNAME').html(barArryHardWareFaultRateData4_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData4_2_0_BCOUNT').html("("+barArryHardWareFaultRateData4_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_2_1_BANDNAME').html(barArryHardWareFaultRateData4_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData4_2_1_BCOUNT').html("("+barArryHardWareFaultRateData4_2[1].BCOUNT+")")
      	$('#barOutBarRight142').css({'display':"none"})
      $('#barOutBarRight143').css({'display':"none"})
      $('#barOutBarRight144').css({'display':"none"})
     	  	$('#barlistFistFCOUNT00_13').html(barArryHardWareFaultRateData4_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_13").css({'width': barArryHardWareFaultRateData4_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_13').html(barArryHardWareFaultRateData4_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_13').html(barArryHardWareFaultRateData4_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_13").css({'width': barArryHardWareFaultRateData4_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_13').html(barArryHardWareFaultRateData4_2[1].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData4_2.length==3){
      	$('#barArryHardWareFaultRateData4_2_0_BANDNAME').html(barArryHardWareFaultRateData4_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData4_2_0_BCOUNT').html("("+barArryHardWareFaultRateData4_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_2_1_BANDNAME').html(barArryHardWareFaultRateData4_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData4_2_1_BCOUNT').html("("+barArryHardWareFaultRateData4_2[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_2_2_BANDNAME').html(barArryHardWareFaultRateData4_2[2].BANDNAME)
        $('#barArryHardWareFaultRateData4_2_2_BCOUNT').html("("+barArryHardWareFaultRateData4_2[2].BCOUNT+")")
        $('#barOutBarRight144').css({'display':"none"})
      $('#barOutBarRight143').css({'display':"none"})
        
        	$('#barlistFistFCOUNT00_13').html(barArryHardWareFaultRateData4_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_13").css({'width': barArryHardWareFaultRateData4_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_13').html(barArryHardWareFaultRateData4_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_13').html(barArryHardWareFaultRateData4_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_13").css({'width': barArryHardWareFaultRateData4_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_13').html(barArryHardWareFaultRateData4_2[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_13').html(barArryHardWareFaultRateData4_2[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_13").css({'width': barArryHardWareFaultRateData4_2[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_13').html(barArryHardWareFaultRateData4_2[2].FAULTRATE+"%")
					
      }
			if(barArryHardWareFaultRateData4_2.length==4){
      	$('#barArryHardWareFaultRateData4_2_0_BANDNAME').html(barArryHardWareFaultRateData4_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData4_2_0_BCOUNT').html("("+barArryHardWareFaultRateData4_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_2_1_BANDNAME').html(barArryHardWareFaultRateData4_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData4_2_1_BCOUNT').html("("+barArryHardWareFaultRateData4_2[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_2_2_BANDNAME').html(barArryHardWareFaultRateData4_2[2].BANDNAME)
        $('#barArryHardWareFaultRateData4_2_2_BCOUNT').html("("+barArryHardWareFaultRateData4_2[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData4_2_3_BANDNAME').html(barArryHardWareFaultRateData4_2[3].BANDNAME)
        $('#barArryHardWareFaultRateData4_2_3_BCOUNT').html("("+barArryHardWareFaultRateData4_2[3].BCOUNT+")")
     	  $('#barOutBarRight144').css({'display':"none"})
     	  
     	  	$('#barlistFistFCOUNT00_13').html(barArryHardWareFaultRateData4_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_13").css({'width': barArryHardWareFaultRateData4_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_13').html(barArryHardWareFaultRateData4_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_13').html(barArryHardWareFaultRateData4_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_13").css({'width': barArryHardWareFaultRateData4_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_13').html(barArryHardWareFaultRateData4_2[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_13').html(barArryHardWareFaultRateData4_2[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_13").css({'width': barArryHardWareFaultRateData4_2[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_13').html(barArryHardWareFaultRateData4_2[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_13').html(barArryHardWareFaultRateData4_2[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_13").css({'width': barArryHardWareFaultRateData4_2[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_13').html(barArryHardWareFaultRateData4_2[3].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData4_2.length==5){
      	$('#barArryHardWareFaultRateData4_2_0_BANDNAME').html(barArryHardWareFaultRateData4_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData4_2_0_BCOUNT').html("("+barArryHardWareFaultRateData4_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_2_1_BANDNAME').html(barArryHardWareFaultRateData4_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData4_2_1_BCOUNT').html("("+barArryHardWareFaultRateData4_2[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData4_2_2_BANDNAME').html(barArryHardWareFaultRateData4_2[2].BANDNAME)
        $('#barArryHardWareFaultRateData4_2_2_BCOUNT').html("("+barArryHardWareFaultRateData4_2[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData4_2_3_BANDNAME').html(barArryHardWareFaultRateData4_2[3].BANDNAME)
        $('#barArryHardWareFaultRateData4_2_3_BCOUNT').html("("+barArryHardWareFaultRateData4_2[3].BCOUNT+")")
        $('#barArryHardWareFaultRateData4_2_4_BANDNAME').html(barArryHardWareFaultRateData4_2[4].BANDNAME)
        $('#barArryHardWareFaultRateData4_2_4_BCOUNT').html("("+barArryHardWareFaultRateData4_2[4].BCOUNT+")")
        
        	$('#barlistFistFCOUNT00_13').html(barArryHardWareFaultRateData4_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_13").css({'width': barArryHardWareFaultRateData4_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_13').html(barArryHardWareFaultRateData4_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_13').html(barArryHardWareFaultRateData4_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_13").css({'width': barArryHardWareFaultRateData4_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_13').html(barArryHardWareFaultRateData4_2[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_13').html(barArryHardWareFaultRateData4_2[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_13").css({'width': barArryHardWareFaultRateData4_2[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_13').html(barArryHardWareFaultRateData4_2[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_13').html(barArryHardWareFaultRateData4_2[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_13").css({'width': barArryHardWareFaultRateData4_2[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_13').html(barArryHardWareFaultRateData4_2[3].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT04_13').html(barArryHardWareFaultRateData4_2[4].FCOUNT)
		  		$("#barlistFistFAULTRATE04_13").css({'width': barArryHardWareFaultRateData4_2[4].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE040_13').html(barArryHardWareFaultRateData4_2[4].FAULTRATE+"%")
      }
      	}
    		//判断是否 鼠标滑过显示隐藏进度条 一级菜单第6个 	
      	if(barArryHardWareFaultRateData5_0!==undefined||null||''){
      		if(barArryHardWareFaultRateData5_0.length!==0){
      		 $('#hardWareFaultRateData5INFOSNAME0').hover(function(){
      		 	$('#StatisticsDetailListBarRight15').show()
						$('#StatisticsDetailListBarRight15').parent('.StatisticsDetailListBar').siblings('.StatisticsDetailListBar').children('div').hide()
      		 })
      	}
      		
     	//   判断一级设备第六个 --的 下边二级设备的 第1个的----- 进度条数 
			if(barArryHardWareFaultRateData5_0.length==1){
      	$('#barArryHardWareFaultRateData5_0_0_BANDNAME').html(barArryHardWareFaultRateData5_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData5_0_0_BCOUNT').html("("+barArryHardWareFaultRateData5_0[0].BCOUNT+")")
       $('#barOutBarRight151').css({'display':"none"})
       $('#barOutBarRight152').css({'display':"none"})
       $('#barOutBarRight153').css({'display':"none"})
       $('#barOutBarRight154').css({'display':"none"})
      
      		$('#barlistFistFCOUNT00_14').html(barArryHardWareFaultRateData5_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_14").css({'width': barArryHardWareFaultRateData5_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_14').html(barArryHardWareFaultRateData5_0[0].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData5_0.length==2){
      	$('#barArryHardWareFaultRateData5_0_0_BANDNAME').html(barArryHardWareFaultRateData5_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData5_0_0_BCOUNT').html("("+barArryHardWareFaultRateData5_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_0_1_BANDNAME').html(barArryHardWareFaultRateData5_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData5_0_1_BCOUNT').html("("+barArryHardWareFaultRateData5_0[1].BCOUNT+")")
      	$('#barOutBarRight152').css({'display':"none"})
      $('#barOutBarRight153').css({'display':"none"})
      $('#barOutBarRight154').css({'display':"none"})
     	  	$('#barlistFistFCOUNT00_14').html(barArryHardWareFaultRateData5_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_14").css({'width': barArryHardWareFaultRateData5_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_14').html(barArryHardWareFaultRateData5_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_14').html(barArryHardWareFaultRateData5_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_14").css({'width': barArryHardWareFaultRateData5_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_14').html(barArryHardWareFaultRateData5_0[1].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData5_0.length==3){
      	$('#barArryHardWareFaultRateData5_0_0_BANDNAME').html(barArryHardWareFaultRateData5_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData5_0_0_BCOUNT').html("("+barArryHardWareFaultRateData5_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_0_1_BANDNAME').html(barArryHardWareFaultRateData5_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData5_0_1_BCOUNT').html("("+barArryHardWareFaultRateData5_0[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_0_2_BANDNAME').html(barArryHardWareFaultRateData5_0[2].BANDNAME)
        $('#barArryHardWareFaultRateData5_0_2_BCOUNT').html("("+barArryHardWareFaultRateData5_0[2].BCOUNT+")")
        $('#barOutBarRight154').css({'display':"none"})
      $('#barOutBarRight153').css({'display':"none"})
        
        	$('#barlistFistFCOUNT00_14').html(barArryHardWareFaultRateData5_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_14").css({'width': barArryHardWareFaultRateData5_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_14').html(barArryHardWareFaultRateData5_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_14').html(barArryHardWareFaultRateData5_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_14").css({'width': barArryHardWareFaultRateData5_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_14').html(barArryHardWareFaultRateData5_0[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_14').html(barArryHardWareFaultRateData5_0[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_14").css({'width': barArryHardWareFaultRateData5_0[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_14').html(barArryHardWareFaultRateData5_0[2].FAULTRATE+"%")
					
      }
			if(barArryHardWareFaultRateData5_0.length==4){
      	$('#barArryHardWareFaultRateData5_0_0_BANDNAME').html(barArryHardWareFaultRateData5_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData5_0_0_BCOUNT').html("("+barArryHardWareFaultRateData5_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_0_1_BANDNAME').html(barArryHardWareFaultRateData5_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData5_0_1_BCOUNT').html("("+barArryHardWareFaultRateData5_0[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_0_2_BANDNAME').html(barArryHardWareFaultRateData5_0[2].BANDNAME)
        $('#barArryHardWareFaultRateData5_0_2_BCOUNT').html("("+barArryHardWareFaultRateData5_0[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData5_0_3_BANDNAME').html(barArryHardWareFaultRateData5_0[3].BANDNAME)
        $('#barArryHardWareFaultRateData5_0_3_BCOUNT').html("("+barArryHardWareFaultRateData5_0[3].BCOUNT+")")
     	  $('#barOutBarRight154').css({'display':"none"})
     	  
     	  	$('#barlistFistFCOUNT00_14').html(barArryHardWareFaultRateData5_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_14").css({'width': barArryHardWareFaultRateData5_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_14').html(barArryHardWareFaultRateData5_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_14').html(barArryHardWareFaultRateData5_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_14").css({'width': barArryHardWareFaultRateData5_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_14').html(barArryHardWareFaultRateData5_0[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_14').html(barArryHardWareFaultRateData5_0[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_14").css({'width': barArryHardWareFaultRateData5_0[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_14').html(barArryHardWareFaultRateData5_0[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_14').html(barArryHardWareFaultRateData5_0[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_14").css({'width': barArryHardWareFaultRateData5_0[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_14').html(barArryHardWareFaultRateData5_0[3].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData5_0.length==5){
      	$('#barArryHardWareFaultRateData5_0_0_BANDNAME').html(barArryHardWareFaultRateData5_0[0].BANDNAME)
      	$('#barArryHardWareFaultRateData5_0_0_BCOUNT').html("("+barArryHardWareFaultRateData5_0[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_0_1_BANDNAME').html(barArryHardWareFaultRateData5_0[1].BANDNAME)
      	$('#barArryHardWareFaultRateData5_0_1_BCOUNT').html("("+barArryHardWareFaultRateData5_0[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_0_2_BANDNAME').html(barArryHardWareFaultRateData5_0[2].BANDNAME)
        $('#barArryHardWareFaultRateData5_0_2_BCOUNT').html("("+barArryHardWareFaultRateData5_0[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData5_0_3_BANDNAME').html(barArryHardWareFaultRateData5_0[3].BANDNAME)
        $('#barArryHardWareFaultRateData5_0_3_BCOUNT').html("("+barArryHardWareFaultRateData5_0[3].BCOUNT+")")
        $('#barArryHardWareFaultRateData5_0_4_BANDNAME').html(barArryHardWareFaultRateData5_0[4].BANDNAME)
        $('#barArryHardWareFaultRateData5_0_4_BCOUNT').html("("+barArryHardWareFaultRateData5_0[4].BCOUNT+")")
        
        	$('#barlistFistFCOUNT00_14').html(barArryHardWareFaultRateData5_0[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_14").css({'width': barArryHardWareFaultRateData5_0[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_14').html(barArryHardWareFaultRateData5_0[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_14').html(barArryHardWareFaultRateData5_0[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_14").css({'width': barArryHardWareFaultRateData5_0[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_14').html(barArryHardWareFaultRateData5_0[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_14').html(barArryHardWareFaultRateData5_0[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_14").css({'width': barArryHardWareFaultRateData5_0[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_14').html(barArryHardWareFaultRateData5_0[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_14').html(barArryHardWareFaultRateData5_0[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_14").css({'width': barArryHardWareFaultRateData5_0[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_14').html(barArryHardWareFaultRateData5_0[3].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT04_14').html(barArryHardWareFaultRateData5_0[4].FCOUNT)
		  		$("#barlistFistFAULTRATE04_14").css({'width': barArryHardWareFaultRateData5_0[4].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE040_14').html(barArryHardWareFaultRateData5_0[4].FAULTRATE+"%")
      }
      	}
      	if(barArryHardWareFaultRateData5_1!==undefined||null||''){
      		if(barArryHardWareFaultRateData5_1.length!==0){
      		 $('#hardWareFaultRateData5INFOSNAME1').hover(function(){
      		 	$('#StatisticsDetailListBarRight16').show()
						$('#StatisticsDetailListBarRight16').parent('.StatisticsDetailListBar').siblings('.StatisticsDetailListBar').children('div').hide()
      		 })
      	}
     	//   判断一级设备第六个 --的 下边二级设备的 第2个的----- 进度条数 
			if(barArryHardWareFaultRateData5_1.length==1){
      	$('#barArryHardWareFaultRateData5_1_0_BANDNAME').html(barArryHardWareFaultRateData5_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData5_1_0_BCOUNT').html("("+barArryHardWareFaultRateData5_1[0].BCOUNT+")")
       $('#barOutBarRight161').css({'display':"none"})
       $('#barOutBarRight162').css({'display':"none"})
       $('#barOutBarRight163').css({'display':"none"})
       $('#barOutBarRight164').css({'display':"none"})
      
      	  $('#barlistFistFCOUNT00_15').html(barArryHardWareFaultRateData5_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_15").css({'width': barArryHardWareFaultRateData5_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_15').html(barArryHardWareFaultRateData5_1[0].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData5_1.length==2){
      	$('#barArryHardWareFaultRateData5_1_0_BANDNAME').html(barArryHardWareFaultRateData5_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData5_1_0_BCOUNT').html("("+barArryHardWareFaultRateData5_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_1_1_BANDNAME').html(barArryHardWareFaultRateData5_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData5_1_1_BCOUNT').html("("+barArryHardWareFaultRateData5_1[1].BCOUNT+")")
      	$('#barOutBarRight162').css({'display':"none"})
      $('#barOutBarRight163').css({'display':"none"})
      $('#barOutBarRight164').css({'display':"none"})
     	  	$('#barlistFistFCOUNT00_15').html(barArryHardWareFaultRateData5_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_15").css({'width': barArryHardWareFaultRateData5_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_15').html(barArryHardWareFaultRateData5_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_15').html(barArryHardWareFaultRateData5_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_15").css({'width': barArryHardWareFaultRateData5_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_15').html(barArryHardWareFaultRateData5_1[1].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData5_1.length==3){
      	$('#barArryHardWareFaultRateData5_1_0_BANDNAME').html(barArryHardWareFaultRateData5_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData5_1_0_BCOUNT').html("("+barArryHardWareFaultRateData5_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_1_1_BANDNAME').html(barArryHardWareFaultRateData5_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData5_1_1_BCOUNT').html("("+barArryHardWareFaultRateData5_1[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_1_2_BANDNAME').html(barArryHardWareFaultRateData5_1[2].BANDNAME)
        $('#barArryHardWareFaultRateData5_1_2_BCOUNT').html("("+barArryHardWareFaultRateData5_1[2].BCOUNT+")")
        $('#barOutBarRight164').css({'display':"none"})
      $('#barOutBarRight163').css({'display':"none"})
        
        	$('#barlistFistFCOUNT00_15').html(barArryHardWareFaultRateData5_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_15").css({'width': barArryHardWareFaultRateData5_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_15').html(barArryHardWareFaultRateData5_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_15').html(barArryHardWareFaultRateData5_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_15").css({'width': barArryHardWareFaultRateData5_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_15').html(barArryHardWareFaultRateData5_1[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_15').html(barArryHardWareFaultRateData5_1[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_15").css({'width': barArryHardWareFaultRateData5_1[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_15').html(barArryHardWareFaultRateData5_1[2].FAULTRATE+"%")
					
      }
			if(barArryHardWareFaultRateData5_1.length==4){
      	$('#barArryHardWareFaultRateData5_1_0_BANDNAME').html(barArryHardWareFaultRateData5_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData5_1_0_BCOUNT').html("("+barArryHardWareFaultRateData5_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_1_1_BANDNAME').html(barArryHardWareFaultRateData5_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData5_1_1_BCOUNT').html("("+barArryHardWareFaultRateData5_1[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_1_2_BANDNAME').html(barArryHardWareFaultRateData5_1[2].BANDNAME)
        $('#barArryHardWareFaultRateData5_1_2_BCOUNT').html("("+barArryHardWareFaultRateData5_1[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData5_1_3_BANDNAME').html(barArryHardWareFaultRateData5_1[3].BANDNAME)
        $('#barArryHardWareFaultRateData5_1_3_BCOUNT').html("("+barArryHardWareFaultRateData5_1[3].BCOUNT+")")
     	  $('#barOutBarRight164').css({'display':"none"})
     	  
     	  	$('#barlistFistFCOUNT00_15').html(barArryHardWareFaultRateData5_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_15").css({'width': barArryHardWareFaultRateData5_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_15').html(barArryHardWareFaultRateData5_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_15').html(barArryHardWareFaultRateData5_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_15").css({'width': barArryHardWareFaultRateData5_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_15').html(barArryHardWareFaultRateData5_1[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_15').html(barArryHardWareFaultRateData5_1[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_15").css({'width': barArryHardWareFaultRateData5_1[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_15').html(barArryHardWareFaultRateData5_1[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_15').html(barArryHardWareFaultRateData5_1[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_15").css({'width': barArryHardWareFaultRateData5_1[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_15').html(barArryHardWareFaultRateData5_1[3].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData5_1.length==5){
      	$('#barArryHardWareFaultRateData5_1_0_BANDNAME').html(barArryHardWareFaultRateData5_1[0].BANDNAME)
      	$('#barArryHardWareFaultRateData5_1_0_BCOUNT').html("("+barArryHardWareFaultRateData5_1[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_1_1_BANDNAME').html(barArryHardWareFaultRateData5_1[1].BANDNAME)
      	$('#barArryHardWareFaultRateData5_1_1_BCOUNT').html("("+barArryHardWareFaultRateData5_1[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_1_2_BANDNAME').html(barArryHardWareFaultRateData5_1[2].BANDNAME)
        $('#barArryHardWareFaultRateData5_1_2_BCOUNT').html("("+barArryHardWareFaultRateData5_1[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData5_1_3_BANDNAME').html(barArryHardWareFaultRateData5_1[3].BANDNAME)
        $('#barArryHardWareFaultRateData5_1_3_BCOUNT').html("("+barArryHardWareFaultRateData5_1[3].BCOUNT+")")
        $('#barArryHardWareFaultRateData5_1_4_BANDNAME').html(barArryHardWareFaultRateData5_1[4].BANDNAME)
        $('#barArryHardWareFaultRateData5_1_4_BCOUNT').html("("+barArryHardWareFaultRateData5_1[4].BCOUNT+")")
        
        	$('#barlistFistFCOUNT00_15').html(barArryHardWareFaultRateData5_1[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_15").css({'width': barArryHardWareFaultRateData5_1[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_15').html(barArryHardWareFaultRateData5_1[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_15').html(barArryHardWareFaultRateData5_1[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_15").css({'width': barArryHardWareFaultRateData5_1[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_15').html(barArryHardWareFaultRateData5_1[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_15').html(barArryHardWareFaultRateData5_1[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_15").css({'width': barArryHardWareFaultRateData5_1[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_15').html(barArryHardWareFaultRateData5_1[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_15').html(barArryHardWareFaultRateData5_1[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_15").css({'width': barArryHardWareFaultRateData5_1[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_15').html(barArryHardWareFaultRateData5_1[3].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT04_15').html(barArryHardWareFaultRateData5_1[4].FCOUNT)
		  		$("#barlistFistFAULTRATE04_15").css({'width': barArryHardWareFaultRateData5_1[4].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE040_15').html(barArryHardWareFaultRateData5_1[4].FAULTRATE+"%")
      }
      	}
      	if(barArryHardWareFaultRateData5_2!==undefined||null||''){
      		if(barArryHardWareFaultRateData5_2.length!==0){
      		 $('#hardWareFaultRateData5INFOSNAME2').hover(function(){
      		 	$('#StatisticsDetailListBarRight17').show()
						$('#StatisticsDetailListBarRight17').parent('.StatisticsDetailListBar').siblings('.StatisticsDetailListBar').children('div').hide()
      		 })
      		}
      		     	//   判断一级设备第六个 --的 下边二级设备的 第3个的----- 进度条数 
			if(barArryHardWareFaultRateData5_2.length==1){
      	$('#barArryHardWareFaultRateData5_2_0_BANDNAME').html(barArryHardWareFaultRateData5_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData5_2_0_BCOUNT').html("("+barArryHardWareFaultRateData5_2[0].BCOUNT+")")
       $('#barOutBarRight171').css({'display':"none"})
       $('#barOutBarRight172').css({'display':"none"})
       $('#barOutBarRight173').css({'display':"none"})
       $('#barOutBarRight174').css({'display':"none"})
      
      	 $('#barlistFistFCOUNT00_16').html(barArryHardWareFaultRateData5_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_16").css({'width': barArryHardWareFaultRateData5_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_16').html(barArryHardWareFaultRateData5_2[0].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData5_2.length==2){
      	$('#barArryHardWareFaultRateData5_2_0_BANDNAME').html(barArryHardWareFaultRateData5_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData5_2_0_BCOUNT').html("("+barArryHardWareFaultRateData5_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_2_1_BANDNAME').html(barArryHardWareFaultRateData5_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData5_2_1_BCOUNT').html("("+barArryHardWareFaultRateData5_2[1].BCOUNT+")")
      	$('#barOutBarRight172').css({'display':"none"})
      $('#barOutBarRight173').css({'display':"none"})
      $('#barOutBarRight174').css({'display':"none"})
     	  	$('#barlistFistFCOUNT00_16').html(barArryHardWareFaultRateData5_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_16").css({'width': barArryHardWareFaultRateData5_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_16').html(barArryHardWareFaultRateData5_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_16').html(barArryHardWareFaultRateData5_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_16").css({'width': barArryHardWareFaultRateData5_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_16').html(barArryHardWareFaultRateData5_2[1].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData5_2.length==3){
      	$('#barArryHardWareFaultRateData5_2_0_BANDNAME').html(barArryHardWareFaultRateData5_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData5_2_0_BCOUNT').html("("+barArryHardWareFaultRateData5_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_2_1_BANDNAME').html(barArryHardWareFaultRateData5_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData5_2_1_BCOUNT').html("("+barArryHardWareFaultRateData5_2[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_2_2_BANDNAME').html(barArryHardWareFaultRateData5_2[2].BANDNAME)
        $('#barArryHardWareFaultRateData5_2_2_BCOUNT').html("("+barArryHardWareFaultRateData5_2[2].BCOUNT+")")
        $('#barOutBarRight174').css({'display':"none"})
      $('#barOutBarRight173').css({'display':"none"})
        
        	$('#barlistFistFCOUNT00_16').html(barArryHardWareFaultRateData5_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_16").css({'width': barArryHardWareFaultRateData5_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_16').html(barArryHardWareFaultRateData5_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_16').html(barArryHardWareFaultRateData5_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_16").css({'width': barArryHardWareFaultRateData5_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_16').html(barArryHardWareFaultRateData5_2[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_16').html(barArryHardWareFaultRateData5_2[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_16").css({'width': barArryHardWareFaultRateData5_2[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_16').html(barArryHardWareFaultRateData5_2[2].FAULTRATE+"%")
					
      }
			if(barArryHardWareFaultRateData5_2.length==4){
      	$('#barArryHardWareFaultRateData5_2_0_BANDNAME').html(barArryHardWareFaultRateData5_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData5_2_0_BCOUNT').html("("+barArryHardWareFaultRateData5_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_2_1_BANDNAME').html(barArryHardWareFaultRateData5_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData5_2_1_BCOUNT').html("("+barArryHardWareFaultRateData5_2[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_2_2_BANDNAME').html(barArryHardWareFaultRateData5_2[2].BANDNAME)
        $('#barArryHardWareFaultRateData5_2_2_BCOUNT').html("("+barArryHardWareFaultRateData5_2[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData5_2_3_BANDNAME').html(barArryHardWareFaultRateData5_2[3].BANDNAME)
        $('#barArryHardWareFaultRateData5_2_3_BCOUNT').html("("+barArryHardWareFaultRateData5_2[3].BCOUNT+")")
     	  $('#barOutBarRight174').css({'display':"none"})
     	  
     	  	$('#barlistFistFCOUNT00_16').html(barArryHardWareFaultRateData5_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_16").css({'width': barArryHardWareFaultRateData5_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_16').html(barArryHardWareFaultRateData5_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_16').html(barArryHardWareFaultRateData5_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_16").css({'width': barArryHardWareFaultRateData5_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_16').html(barArryHardWareFaultRateData5_2[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_16').html(barArryHardWareFaultRateData5_2[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_16").css({'width': barArryHardWareFaultRateData5_2[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_16').html(barArryHardWareFaultRateData5_2[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_16').html(barArryHardWareFaultRateData5_2[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_16").css({'width': barArryHardWareFaultRateData5_2[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_16').html(barArryHardWareFaultRateData5_2[3].FAULTRATE+"%")
      }
			if(barArryHardWareFaultRateData5_2.length==5){
      	$('#barArryHardWareFaultRateData5_2_0_BANDNAME').html(barArryHardWareFaultRateData5_2[0].BANDNAME)
      	$('#barArryHardWareFaultRateData5_2_0_BCOUNT').html("("+barArryHardWareFaultRateData5_2[0].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_2_1_BANDNAME').html(barArryHardWareFaultRateData5_2[1].BANDNAME)
      	$('#barArryHardWareFaultRateData5_2_1_BCOUNT').html("("+barArryHardWareFaultRateData5_2[1].BCOUNT+")")
      	$('#barArryHardWareFaultRateData5_2_2_BANDNAME').html(barArryHardWareFaultRateData5_2[2].BANDNAME)
        $('#barArryHardWareFaultRateData5_2_2_BCOUNT').html("("+barArryHardWareFaultRateData5_2[2].BCOUNT+")")
        $('#barArryHardWareFaultRateData5_2_3_BANDNAME').html(barArryHardWareFaultRateData5_2[3].BANDNAME)
        $('#barArryHardWareFaultRateData5_2_3_BCOUNT').html("("+barArryHardWareFaultRateData5_2[3].BCOUNT+")")
        $('#barArryHardWareFaultRateData5_2_4_BANDNAME').html(barArryHardWareFaultRateData5_2[4].BANDNAME)
        $('#barArryHardWareFaultRateData5_2_4_BCOUNT').html("("+barArryHardWareFaultRateData5_2[4].BCOUNT+")")
        
        	$('#barlistFistFCOUNT00_16').html(barArryHardWareFaultRateData5_2[0].FCOUNT)
		  		$("#barlistFistFAULTRATE00_16").css({'width': barArryHardWareFaultRateData5_2[0].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE000_16').html(barArryHardWareFaultRateData5_2[0].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT01_16').html(barArryHardWareFaultRateData5_2[1].FCOUNT)
		  		$("#barlistFistFAULTRATE01_16").css({'width': barArryHardWareFaultRateData5_2[1].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE010_16').html(barArryHardWareFaultRateData5_2[1].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT02_16').html(barArryHardWareFaultRateData5_2[2].FCOUNT)
		  		$("#barlistFistFAULTRATE02_16").css({'width': barArryHardWareFaultRateData5_2[2].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE020_16').html(barArryHardWareFaultRateData5_2[2].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT03_16').html(barArryHardWareFaultRateData5_2[3].FCOUNT)
		  		$("#barlistFistFAULTRATE03_16").css({'width': barArryHardWareFaultRateData5_2[3].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE030_16').html(barArryHardWareFaultRateData5_2[3].FAULTRATE+"%")
					
					$('#barlistFistFCOUNT04_16').html(barArryHardWareFaultRateData5_2[4].FCOUNT)
		  		$("#barlistFistFAULTRATE04_16").css({'width': barArryHardWareFaultRateData5_2[4].FAULTRATE+"%"})
					$('#barlistFistFAULTRATE040_16').html(barArryHardWareFaultRateData5_2[4].FAULTRATE+"%")
      }
      	}
    
			
				
    myChart.on('hover', function (barData) {
		    if(barData.name==hardWareFaultRateData[0].FNAME){
		    	console.log(barData.name);
				$('.failureRateStatisticsImgClick00').show()
		    	$('.failureRateStatisticsImg00').hide()
		    	$('.failureRateStatisticsLi0').siblings().children('img.failureRateStatisticsImg').show();
		    	$('.failureRateStatisticsLi0').siblings().children('img.failureRateStatisticsImgClick').hide();
		    	$('.StatisticsDetailList0').show()
				$('.StatisticsDetailList0').siblings('div').hide()
		    }else if(barData.name==hardWareFaultRateData[1].FNAME){
		    	console.log(barData.name);
				$('.failureRateStatisticsImgClick1').show()
		    	$('.failureRateStatisticsImg1').hide()
		    	$('.failureRateStatisticsLi1').siblings().children('img.failureRateStatisticsImg').show();
		    	$('.failureRateStatisticsLi1').siblings().children('img.failureRateStatisticsImgClick').hide();
		    	$('.StatisticsDetailList1').show()
				$('.StatisticsDetailList1').siblings('div').hide()
		    }else if(barData.name==hardWareFaultRateData[2].FNAME){
		    	console.log(barData.name);
		    	$('.failureRateStatisticsImgClick2').show()
		    	$('.failureRateStatisticsImg2').hide()
		    	$('.failureRateStatisticsLi2').siblings().children('img.failureRateStatisticsImg').show();
		    	$('.failureRateStatisticsLi2').siblings().children('img.failureRateStatisticsImgClick').hide();
		    	$('.StatisticsDetailList2').show()
				$('.StatisticsDetailList2').siblings('div').hide()
		    }else if(barData.name==hardWareFaultRateData[3].FNAME){
		    	console.log(barData.name);
				$('.failureRateStatisticsImgClick3').show()
		    	$('.failureRateStatisticsImg3').hide()
		    	$('.failureRateStatisticsLi3').siblings().children('img.failureRateStatisticsImg').show();
		    	$('.failureRateStatisticsLi3').siblings().children('img.failureRateStatisticsImgClick').hide();
		    	$('.StatisticsDetailList3').show()
				$('.StatisticsDetailList3').siblings('div').hide()
		    }else if(barData.name==hardWareFaultRateData[4].FNAME){
		    	console.log(barData.name);
				$('.failureRateStatisticsImgClick4').show()
		    	$('.failureRateStatisticsImg4').hide()
		    	$('.failureRateStatisticsLi4').siblings().children('img.failureRateStatisticsImg').show();
		    	$('.failureRateStatisticsLi4').siblings().children('img.failureRateStatisticsImgClick').hide();
		    	$('.StatisticsDetailList4').show()
				$('.StatisticsDetailList4').siblings('div').hide()
		    }else if(barData.name==hardWareFaultRateData[5].FNAME){
		    	console.log(barData.name);
				$('.failureRateStatisticsImgClick5').show()
		    	$('.failureRateStatisticsImg5').hide()
		    	$('.failureRateStatisticsLi5').siblings().children('img.failureRateStatisticsImg').show();
		    	$('.failureRateStatisticsLi5').siblings().children('img.failureRateStatisticsImgClick').hide();
				$('.StatisticsDetailList5').show()
				$('.StatisticsDetailList5').siblings('div').hide()
		    }
		});
		
		
		
		      },
		componentDidMount:function(){
//			 $(".StatisticsDetailListBarRightFirst").css({"display":'block'})
		 $(".StatisticsDetailListBarBackgroundFirst").css({"display":'block'})
		 
			$('.failureRateStatisticsTopTxtRight>li').hover(function(){
			$(this).each(function(){
			    $(this).css({'background':'white',"color":"black"}).siblings().css({"background":"#eaedf1"});
			})
			
			
			});

		$('.failureRateStatisticsLi0>b').click(function(){
			    $('.StatisticsDetailList0').show()
				$('.StatisticsDetailList0').siblings('div').hide()
				$('.failureRateStatisticsImgClick0').show()
		    	$('.failureRateStatisticsImg0').hide()
		    	$('.failureRateStatisticsLi0').siblings().children('img.failureRateStatisticsImg').show();
		    	$('.failureRateStatisticsLi0').siblings().children('img.failureRateStatisticsImgClick').hide();
		})
		$('.failureRateStatisticsLi1>b').click(function(){
			    $('.StatisticsDetailList1').show()
				$('.StatisticsDetailList1').siblings('div').hide()
				$('.failureRateStatisticsImgClick1').show()
		    	$('.failureRateStatisticsImg1').hide()
		    	$('.failureRateStatisticsLi1').siblings().children('img.failureRateStatisticsImg').show();
		    	$('.failureRateStatisticsLi1').siblings().children('img.failureRateStatisticsImgClick').hide();
		})
		$('.failureRateStatisticsLi2>b').click(function(){
			    $('.StatisticsDetailList2').show()
				$('.StatisticsDetailList2').siblings('div').hide()
				$('.failureRateStatisticsImgClick2').show()
		    	$('.failureRateStatisticsImg2').hide()
		    	$('.failureRateStatisticsLi2').siblings().children('img.failureRateStatisticsImg').show();
		    	$('.failureRateStatisticsLi2').siblings().children('img.failureRateStatisticsImgClick').hide();
		})
		$('.failureRateStatisticsLi3>b').click(function(){
			    $('.StatisticsDetailList3').show()
				$('.StatisticsDetailList3').siblings('div').hide()
				$('.failureRateStatisticsImgClick3').show()
		    	$('.failureRateStatisticsImg3').hide()
		    	$('.failureRateStatisticsLi3').siblings().children('img.failureRateStatisticsImg').show();
		    	$('.failureRateStatisticsLi3').siblings().children('img.failureRateStatisticsImgClick').hide();
		})
		$('.failureRateStatisticsLi4>b').click(function(){
			    $('.StatisticsDetailList4').show()
				$('.StatisticsDetailList4').siblings('div').hide()
				$('.failureRateStatisticsImgClick4').show()
		    	$('.failureRateStatisticsImg4').hide()
		    	$('.failureRateStatisticsLi4').siblings().children('img.failureRateStatisticsImg').show();
		    	$('.failureRateStatisticsLi4').siblings().children('img.failureRateStatisticsImgClick').hide();
		})
		$('.failureRateStatisticsLi5>b').click(function(){
			    $('.StatisticsDetailList5').show()
				$('.StatisticsDetailList5').siblings('div').hide()
				$('.failureRateStatisticsImgClick5').show()
		    	$('.failureRateStatisticsImg5').hide()
		    	$('.failureRateStatisticsLi5').siblings().children('img.failureRateStatisticsImg').show();
		    	$('.failureRateStatisticsLi5').siblings().children('img.failureRateStatisticsImgClick').hide();
		})

		$('#totalHardwareAssetsClick').click(function(){
			alert('跳转 页面  totalHardwareAssetsClick')
		})
		$('#totalSoftwareAssetsClick').click(function(){
			alert('跳转 页面  totalSoftwareAssetsClick')
		})
		$('#sparePartsClick').click(function(){
			alert('跳转 页面  sparePartsClick')
		})
		},
  render: function() {
    return (		   
		       	<div id='assetsCountQueryView'>
				       <aside className='asideFauleManger'></aside>
				       <section className='assetStatisticsCss'>
				    			 				<nav className="assetStatisticsCssTop">
																	  <div className="assetStatisticsCssTopChildren oneTaskMagerTopChildren">
																				<div className="taskMagerTopChildrentxt">
																					<div className="yingjianAllNum">
																							<a id='totalHardwareAssetsClick'>硬件资产总数&nbsp;&nbsp;&nbsp;
																							<span id='totalHardwareAssets'></span>
																							</a>
																					</div>
																					<div className="yingjianAllNum">
																							<span className='yingjianAllNumRight'>借用&nbsp;&nbsp;&nbsp;
																								<a id='borrow'></a>
																							</span>
																							<span>库存&nbsp;&nbsp;&nbsp;
																								<a id='stock'></a>
																							</span>
																					</div>
																						<div className="yingjianAllNum">
																							<span className='yingjianAllNumRight'>维修&nbsp;&nbsp;&nbsp;
																								<a id='repair'></a>
																							</span>
																							<span>报废&nbsp;&nbsp;&nbsp;
																								<a id='scrap'></a>
																							</span>
																						</div>
																				</div>
																		</div>  
																		<div className="assetStatisticsCssTopChildren twoTaskMagerTopChildren">
																			<div className="taskMagerTopChildrentxt">
																			 		<div className="yingjianAllNum">
																							<a id='totalSoftwareAssetsClick'>软件资产总数&nbsp;&nbsp;&nbsp;
																							<span id='totalSoftwareAssets'></span>
																							</a>
																					</div>
																					<div className="yingjianAllNum">
																							<span className='yingjianAllNumRight'>借用&nbsp;&nbsp;&nbsp;
																								<a id='borrowSoft'></a>
																							</span>
																							<span>库存&nbsp;&nbsp;&nbsp;
																								<a id='stockSoft'></a>
																							</span>
																					</div>
																						<div className="yingjianAllNum">
																							<span className='yingjianAllNumRight'>维修&nbsp;&nbsp;&nbsp;
																								<a id='repairSoft'></a>
																							</span>
																							<span>报废&nbsp;&nbsp;&nbsp;
																									<a id='scrapSoft'></a>	
																							</span>
																						</div>
																				</div>		
																		</div>  
																		<div className="assetStatisticsCssTopChildren threeTaskMagerTopChildren">
																			<div className="taskMagerTopChildrentxt">
																					<div className="yingjianAllNum">
																							<a id="sparePartsClick">备品配件&nbsp;&nbsp;&nbsp;本周</a>
																					</div>
																					<div className="yingjianAllNum">
																							<span className='yingjianAllNumRight'>出库&nbsp;&nbsp;&nbsp;
																								<a id='library'></a>	
																							</span>
																					</div>
																						<div className="yingjianAllNum">
																							<span className='yingjianAllNumRight'>入库&nbsp;&nbsp;&nbsp;
																								<a id='storage'></a>	
																							</span>
																						</div>
																					</div>			
																		</div>  
																
												   </nav>
				    			 				<div className='failureRateStatistics'>
											    			 		      <div className='failureRateStatisticsTop'>
															      		      <div className="failureRateStatisticsTopTxt">
															      		      		<a>硬件资产故障率统计</a>
															      		      </div>
																		         	<ul className="failureRateStatisticsTopTxtRight">
																		         		<li className=''  onMouseOver={this.AssetsCountManageMentWeek} style={{background:'white'}}>本周</li>
																		         		<li className='' 	onMouseOver={this.AssetsCountManageMentMonth}>本月</li>
																		         		<li className=''  onMouseOver={this.AssetsCountManageMentQuarter}>本季度</li>
																		         		<li className=''  onMouseOver={this.AssetsCountManageMentYear}>本年度</li>
																		         	</ul>
																		       </div>  
																	    		<div className = 'failureRateStatisticsPic'>
																					    <div className='failureRateStatisticsPicForm' id="container" style={{height:'100%',width:'100%'}}>
																					    </div>
																					    <div className='failureRateStatisticsPicTxt'>
																					    	<ul className='failureRateStatisticsPicList'>
																					    {/*------A-------*/}
																					    		<li className='failureRateStatisticsLi failureRateStatisticsLi0'>
																					    				    <img className='failureRateStatisticsImgClick  failureRateStatisticsImgClick00'  src='img/lefticon/Statistics06.png' />
										  																	<img className='failureRateStatisticsImg  failureRateStatisticsImg00'  src='img/lefticon/Statistics07.png' />
																											<b id='hardWareFaultRateDataFNAME0'></b>
																												
																					    		</li>
																					    			<div  className="StatisticsDetailList StatisticsDetailList0 StatisticsDetailListFirst">
																					    				<div className='StatisticsDetailListBar'>
																					    				    <p><b id='hardWareFaultRateData0INFOSNAME0'></b>
																					    				    <span id='hardWareFaultRateData0INFOCOUNT0'></span>
																					    				    </p>
																					    				   	 <div className='StatisticsDetailListBarBackground StatisticsDetailListBarBackgroundFirst' id="StatisticsDetailListBarRight0">
																										    				<ul className='StatisticsDetailListBarLeft'>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData0_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData0_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData0_1_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData0_1_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData0_2_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData0_2_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData0_3_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData0_3_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData0_4_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData0_4_BCOUNT'></span>
																										    					</li>
																										    				</ul>
																										    				<div className='StatisticsDetailListBarRight StatisticsDetailListBarRightFirst'>
																										    							<section className="barOut" id='barOutBarRight00'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT00'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE00'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE000'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight01'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT01'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE01'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE010'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight02'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT02'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE02'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE020'></li>
																																			</section>
																																			<section className="barOut"  id='barOutBarRight03'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT03'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE03'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE030'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight04'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT04'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE04'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE040'></li>
																																			</section>
																										    				  </div>
																						    					</div>
																					    				</div>
																					    				<div className='StatisticsDetailListBar'>
																					    				    <p><b id='hardWareFaultRateData0INFOSNAME1'></b>
																					    				    <span id='hardWareFaultRateData0INFOCOUNT1'></span>
																					    				    </p>
		 																													<div className='StatisticsDetailListBarBackground' id="StatisticsDetailListBarRight1">
																										    				<ul className='StatisticsDetailListBarLeft'>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData10_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData10_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData10_1_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData10_1_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData10_2_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData10_2_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData10_3_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData10_3_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData10_4_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData10_4_BCOUNT'></span>
																										    					</li>
																										    				</ul>
																										    				<div className='StatisticsDetailListBarRight' id="">
																										    						<section className="barOut" id='barOutBarRight10'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT10'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE10'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE100'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight11'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT11'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE11'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE110'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight12'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT12'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE12'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE120'></li>
																																			</section>
																																			<section className="barOut"  id='barOutBarRight13'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT13'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE13'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE130'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight14'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT14'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE14'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE140'></li>
																																			</section>
																										    				</div>
																						    					</div>
																					    				</div>	
																					    				<div className='StatisticsDetailListBar'>
																					    				    <p><b id='hardWareFaultRateData0INFOSNAME2'></b>
																					    				    <span id='hardWareFaultRateData0INFOCOUNT2'></span>
																					    				    </p>
		 																													<div className='StatisticsDetailListBarBackground' id="StatisticsDetailListBarRight2">
																										    				<ul className='StatisticsDetailListBarLeft'>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData20_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData20_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData20_1_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData20_1_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData20_2_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData20_2_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData20_3_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData20_3_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData20_4_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData20_4_BCOUNT'></span>
																										    					</li>
																										    				</ul>
																										    				<div className='StatisticsDetailListBarRight' id="">
																										    							<section className="barOut" id='barOutBarRight20'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT20'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE20'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE200'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight21'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT21'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE21'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE210'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight22'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT22'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE22'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE220'></li>
																																			</section>
																																			<section className="barOut"  id='barOutBarRight23'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT23'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE23'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE230'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight24'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT24'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE24'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE240'></li>
																																			</section>
																										    				</div>
																						    					</div>
																					    				</div>
																					    			</div>
																					    			{/*------B-------*/}
																					    		<li className='failureRateStatisticsLi failureRateStatisticsLi1'>
																					    					<img className='failureRateStatisticsImgClick failureRateStatisticsImgClick1' src='img/lefticon/Statistics06.png' />
										  																	<img className='failureRateStatisticsImg failureRateStatisticsImg1' src='img/lefticon/Statistics07.png' />
																												<b id='hardWareFaultRateDataFNAME1'></b>
																					    		</li>
																					    			<div  className="StatisticsDetailList StatisticsDetailList1">
																					    				<div className='StatisticsDetailListBar'>
																					    				    <p><b id='hardWareFaultRateData1INFOSNAME0'></b>
																					    				    <span id='hardWareFaultRateData1INFOCOUNT0'></span>
																					    				    </p>
		 																													<div className='StatisticsDetailListBarBackground' id="StatisticsDetailListBarRight3">
																										    				<ul className='StatisticsDetailListBarLeft'>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData1_0_0_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData1_0_0_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData1_0_1_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData1_0_1_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData1_0_2_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData1_0_2_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData1_0_3_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData1_0_3_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData1_0_4_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData1_0_4_BCOUNT'></span>
																										    					</li>
																										    				</ul>
																										    				<div className='StatisticsDetailListBarRight' id="">
																										    						 <section className="barOut" id='barOutBarRight30'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT00_2'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE00_2'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE000_2'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight31'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT01_2'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE01_2'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE010_2'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight32'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT02_2'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE02_2'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE020_2'></li>
																																			</section>
																																			<section className="barOut"  id='barOutBarRight33'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT03_2'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE03_2'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE030_2'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight34'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT04_2'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE04_2'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE040_2'></li>
																																			</section>
																										    				</div>
																						    					</div>
																					    				</div>
																					    				<div className='StatisticsDetailListBar'>
																					    				    <p><b id='hardWareFaultRateData1INFOSNAME1'></b>
																					    				    <span id='hardWareFaultRateData1INFOCOUNT1'></span>
																					    				    </p>
		 																													<div className='StatisticsDetailListBarBackground' id='StatisticsDetailListBarRight4'>
																										    				<ul className='StatisticsDetailListBarLeft'>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData1_1_0_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData1_1_0_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData1_1_1_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData1_1_1_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData1_1_2_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData1_1_2_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData1_1_3_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData1_1_3_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData1_1_4_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData1_1_4_BCOUNT'></span>
																										    					</li>
																										    				</ul>
																										    				<div className='StatisticsDetailListBarRight' id="">
																										    					<section className="barOut" id='barOutBarRight40'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT00_3'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE00_3'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE000_3'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight41'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT01_3'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE01_3'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE010_3'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight42'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT02_3'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE02_3'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE020_3'></li>
																																			</section>
																																			<section className="barOut"  id='barOutBarRight43'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT03_3'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE03_3'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE030_3'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight44'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT04_3'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE04_3'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE040_3'></li>
																																			</section>
																										    				</div>
																						    					</div>
																					    				</div>	
																					    				<div className='StatisticsDetailListBar'>
																					    				   <p><b id='hardWareFaultRateData1INFOSNAME2'></b>
																					    				    <span id='hardWareFaultRateData1INFOCOUNT2'></span>
																					    				    </p>
		 																													<div className='StatisticsDetailListBarBackground' id="StatisticsDetailListBarRight5">
																										    				<ul className='StatisticsDetailListBarLeft'>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData1_2_0_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData1_2_0_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData1_2_1_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData1_2_1_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData1_2_2_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData1_2_2_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData1_2_3_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData1_2_3_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData1_2_4_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData1_2_4_BCOUNT'></span>
																										    					</li>
																										    				</ul>
																										    				<div className='StatisticsDetailListBarRight' id="">
																										    					<section className="barOut" id='barOutBarRight50'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT00_4'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE00_4'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE000_4'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight51'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT01_4'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE01_4'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE010_4'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight52'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT02_4'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE02_4'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE020_4'></li>
																																			</section>
																																			<section className="barOut"  id='barOutBarRight53'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT03_4'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE03_4'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE030_4'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight54'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT04_4'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE04_4'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE040_4'></li>
																																			</section>
																										    				</div>
																						    					</div>
																					    				</div>
																					    			</div>
																					    			{/*------C-------*/}
																					    		<li className='failureRateStatisticsLi failureRateStatisticsLi2'>
																					    					<img className='failureRateStatisticsImgClick failureRateStatisticsImgClick2' src='img/lefticon/Statistics06.png' />
										  																	<img className='failureRateStatisticsImg failureRateStatisticsImg2' src='img/lefticon/Statistics07.png' />
																												<b id='hardWareFaultRateDataFNAME2'></b>
																					    		</li>
																					    			<div  className="StatisticsDetailList StatisticsDetailList2">
																					    				<div className='StatisticsDetailListBar'>
																					    				    <p><b id='hardWareFaultRateData2INFOSNAME0'></b>
																					    				    <span id='hardWareFaultRateData2INFOCOUNT0'></span>
																					    				    </p>
		 																													<div className='StatisticsDetailListBarBackground' id="StatisticsDetailListBarRight6">
																										    				<ul className='StatisticsDetailListBarLeft'>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData2_0_0_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData2_0_0_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData2_0_1_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData2_0_1_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData2_0_2_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData2_0_2_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData2_0_3_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData2_0_3_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData2_0_4_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData2_0_4_BCOUNT'></span>
																										    					</li>
																										    				</ul>
																										    				<div className='StatisticsDetailListBarRight' id="">
																										    					   <section className="barOut" id='barOutBarRight60'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT00_5'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE00_5'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE000_5'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight61'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT01_5'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE01_5'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE010_5'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight62'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT02_5'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE02_5'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE020_5'></li>
																																			</section>
																																			<section className="barOut"  id='barOutBarRight63'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT03_5'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE03_5'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE030_5'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight64'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT04_5'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE04_5'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE040_5'></li>
																																			</section>
																										    				</div>
																						    					</div>
																					    				</div>
																					    				<div className='StatisticsDetailListBar'>
																					    				    <p><b id='hardWareFaultRateData2INFOSNAME1'></b>
																					    				    <span id='hardWareFaultRateData2INFOCOUNT1'></span>
																					    				    </p>
		 																													<div className='StatisticsDetailListBarBackground' id="StatisticsDetailListBarRight7">
																										    				<ul className='StatisticsDetailListBarLeft'>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData2_1_0_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData2_1_0_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData2_1_1_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData2_1_1_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData2_1_2_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData2_1_2_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData2_1_3_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData2_1_3_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData2_1_4_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData2_1_4_BCOUNT'></span>
																										    					</li>
																										    				</ul>
																										    				<div className='StatisticsDetailListBarRight' id="">
																										    					<section className="barOut" id='barOutBarRight70'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT00_6'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE00_6'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE000_6'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight71'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT01_6'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE01_6'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE010_6'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight72'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT02_6'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE02_6'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE020_6'></li>
																																			</section>
																																			<section className="barOut"  id='barOutBarRight73'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT03_6'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE03_6'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE030_6'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight74'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT04_6'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE04_6'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE040_6'></li>
																																			</section>
																										    				</div>
																						    					</div>
																					    				</div>	
																					    				<div className='StatisticsDetailListBar'>
																					    				    <p><b id='hardWareFaultRateData2INFOSNAME2'></b>
																					    				    <span id='hardWareFaultRateData2INFOCOUNT2'></span>
																					    				    </p>
		 																													<div className='StatisticsDetailListBarBackground' id="StatisticsDetailListBarRight8">
																										    				<ul className='StatisticsDetailListBarLeft'>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData2_2_0_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData2_2_0_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData2_2_1_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData2_2_1_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData2_2_2_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData2_2_2_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData2_2_3_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData2_2_3_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData2_2_4_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData2_2_4_BCOUNT'></span>
																										    					</li>
																										    				</ul>
																										    				<div className='StatisticsDetailListBarRight' id="">
																										    					<section className="barOut" id='barOutBarRight80'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT00_7'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE00_7'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE000_7'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight81'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT01_7'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE01_7'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE010_7'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight82'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT02_7'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE02_7'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE020_7'></li>
																																			</section>
																																			<section className="barOut"  id='barOutBarRight83'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT03_7'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE03_7'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE030_7'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight84'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT04_7'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE04_7'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE040_7'></li>
																																			</section>
																										    				</div>
																						    					</div>
																					    				</div>
																					    			</div>
																					    			{/*------D-------*/}
																					    		    <li className='failureRateStatisticsLi failureRateStatisticsLi3'>
																					    					<img className='failureRateStatisticsImgClick failureRateStatisticsImgClick3' src='img/lefticon/Statistics06.png' />
										  																	<img className='failureRateStatisticsImg failureRateStatisticsImg3' src='img/lefticon/Statistics07.png' />
																												<b id='hardWareFaultRateDataFNAME3'></b>
																											</li>
																										<div  className="StatisticsDetailList StatisticsDetailList3">
																					    				<div className='StatisticsDetailListBar'>
																					    				    <p><b id='hardWareFaultRateData3INFOSNAME0'></b>
																					    				    <span id='hardWareFaultRateData3INFOCOUNT0'></span>
																					    				    </p>
		 																													<div className='StatisticsDetailListBarBackground' id="StatisticsDetailListBarRight9">
																										    				<ul className='StatisticsDetailListBarLeft'>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData3_0_0_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData3_0_0_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData3_0_1_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData3_0_1_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData3_0_2_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData3_0_2_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData3_0_3_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData3_0_3_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData3_0_4_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData3_0_4_BCOUNT'></span>
																										    					</li>
																										    				</ul>
																										    				<div className='StatisticsDetailListBarRight' id="">
																										    					<section className="barOut" id='barOutBarRight90'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT00_8'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE00_8'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE000_8'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight91'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT01_8'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE01_8'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE010_8'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight92'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT02_8'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE02_8'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE020_8'></li>
																																			</section>
																																			<section className="barOut"  id='barOutBarRight93'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT03_8'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE03_8'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE030_8'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight94'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT04_8'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE04_8'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE040_8'></li>
																																			</section>
																										    				</div>
																						    					</div>
																					    				</div>
																					    				<div className='StatisticsDetailListBar'>
																					    				    <p><b id='hardWareFaultRateData3INFOSNAME1'></b>
																					    				    <span id='hardWareFaultRateData3INFOCOUNT1'></span>
																					    				    </p>
		 																													<div className='StatisticsDetailListBarBackground' id="StatisticsDetailListBarRight10">
																										    				<ul className='StatisticsDetailListBarLeft'>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData3_1_0_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData3_1_0_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData3_1_1_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData3_1_1_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData3_1_2_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData3_1_2_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData3_1_3_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData3_1_3_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData3_1_4_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData3_1_4_BCOUNT'></span>
																										    					</li>
																										    				</ul>
																										    				<div className='StatisticsDetailListBarRight' id="">
																										    					<section className="barOut" id='barOutBarRight100'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT00_9'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE00_9'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE000_9'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight101'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT01_9'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE01_9'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE010_9'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight102'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT02_9'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE02_9'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE020_9'></li>
																																			</section>
																																			<section className="barOut"  id='barOutBarRight103'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT03_9'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE03_9'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE030_9'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight104'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT04_9'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE04_9'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE040_9'></li>
																																			</section>
																										    				</div>
																						    					</div>
																					    				</div>	
																					    				<div className='StatisticsDetailListBar'>
																					    				    <p><b id='hardWareFaultRateData3INFOSNAME2'></b>
																					    				    <span id='hardWareFaultRateData3INFOCOUNT2'></span>
																					    				    </p>
		 																													<div className='StatisticsDetailListBarBackground' id="StatisticsDetailListBarRight11">
																										    				<ul className='StatisticsDetailListBarLeft'>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData3_2_0_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData3_2_0_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData3_2_1_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData3_2_1_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData3_2_2_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData3_2_2_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData3_2_3_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData3_2_3_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData3_2_4_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData3_2_4_BCOUNT'></span>
																										    					</li>
																										    				</ul>
																										    				<div className='StatisticsDetailListBarRight' id="">
																										    					<section className="barOut" id='barOutBarRight110'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT00_10'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE00_10'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE000_10'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight111'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT01_10'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE01_10'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE010_10'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight112'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT02_10'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE02_10'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE020_10'></li>
																																			</section>
																																			<section className="barOut"  id='barOutBarRight113'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT03_10'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE03_10'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE030_10'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight114'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT04_10'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE04_10'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE040_10'></li>
																																			</section>
																										    				</div>
																						    					</div>
																					    				</div>
																					    			</div>
																					    			{/*------E-------*/}
																					    		    <li className='failureRateStatisticsLi failureRateStatisticsLi4'>
																					    					<img className='failureRateStatisticsImgClick failureRateStatisticsImgClick4' src='img/lefticon/Statistics06.png' />
										  																	<img className='failureRateStatisticsImg failureRateStatisticsImg4' src='img/lefticon/Statistics07.png' />
																												<b id='hardWareFaultRateDataFNAME4'></b>
																											</li>
																										<div  className="StatisticsDetailList StatisticsDetailList4">
																					    				<div className='StatisticsDetailListBar'>
																					    				    <p><b id='hardWareFaultRateData4INFOSNAME0'></b>
																					    				    <span id='hardWareFaultRateData4INFOCOUNT0'></span>
																					    				    </p>
		 																													<div className='StatisticsDetailListBarBackground' id="StatisticsDetailListBarRight12">
																										    				<ul className='StatisticsDetailListBarLeft'>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData4_0_0_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData4_0_0_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData4_0_1_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData4_0_1_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData4_0_2_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData4_0_2_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData4_0_3_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData4_0_3_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData4_0_4_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData4_0_4_BCOUNT'></span>
																										    					</li>
																										    				</ul>
																										    				<div className='StatisticsDetailListBarRight' id="">
																										    					<section className="barOut" id='barOutBarRight120'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT00_11'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE00_11'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE000_11'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight121'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT01_11'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE01_11'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE010_11'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight122'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT02_11'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE02_11'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE020_11'></li>
																																			</section>
																																			<section className="barOut"  id='barOutBarRight123'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT03_11'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE03_11'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE030_11'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight124'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT04_11'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE04_11'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE040_11'></li>
																																			</section>
																										    				</div>
																						    					</div>
																					    				</div>
																					    				<div className='StatisticsDetailListBar'>
																					    				    <p><b id='hardWareFaultRateData4INFOSNAME1'></b>
																					    				    <span id='hardWareFaultRateData4INFOCOUNT1'></span>
																					    				    </p>
		 																													<div className='StatisticsDetailListBarBackground' id="StatisticsDetailListBarRight13">
																										    				<ul className='StatisticsDetailListBarLeft'>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData4_1_0_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData4_1_0_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData4_1_1_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData4_1_1_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData4_1_2_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData4_1_2_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData4_1_3_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData4_1_3_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData4_1_4_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData4_1_4_BCOUNT'></span>
																										    					</li>
																										    				</ul>
																										    				<div className='StatisticsDetailListBarRight' id="">
																										    					<section className="barOut" id='barOutBarRight130'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT00_12'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE00_12'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE000_12'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight131'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT01_12'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE01_12'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE010_12'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight132'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT02_12'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE02_12'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE020_12'></li>
																																			</section>
																																			<section className="barOut"  id='barOutBarRight133'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT03_12'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE03_12'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE030_12'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight134'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT04_12'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE04_12'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE040_12'></li>
																																			</section>
																										    				</div>
																						    					</div>
																					    				</div>	
																					    				<div className='StatisticsDetailListBar'>
																					    				    <p><b id='hardWareFaultRateData4INFOSNAME2'></b>
																					    				    <span id='hardWareFaultRateData4INFOCOUNT2'></span>
																					    				    </p>
		 																													<div className='StatisticsDetailListBarBackground' id="StatisticsDetailListBarRight14">
																										    				<ul className='StatisticsDetailListBarLeft'>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData4_2_0_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData4_2_0_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData4_2_1_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData4_2_1_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData4_2_2_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData4_2_2_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData4_2_3_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData4_2_3_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData4_2_4_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData4_2_4_BCOUNT'></span>
																										    					</li>
																										    				</ul>
																										    				<div className='StatisticsDetailListBarRight' id="">
																										    					<section className="barOut" id='barOutBarRight140'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT00_13'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE00_13'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE000_13'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight141'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT01_13'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE01_13'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE010_13'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight142'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT02_13'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE02_13'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE020_13'></li>
																																			</section>
																																			<section className="barOut"  id='barOutBarRight143'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT03_13'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE03_13'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE030_13'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight144'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT04_13'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE04_13'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE040_13'></li>
																																			</section>
																										    				</div>
																						    					</div>
																					    				</div>
																					    			</div>
																					    			{/*------F-------*/}
																					    			<li className='failureRateStatisticsLi failureRateStatisticsLi5'>
																					    					<img className='failureRateStatisticsImgClick failureRateStatisticsImgClick5' src='img/lefticon/Statistics06.png' />
										  																	<img className='failureRateStatisticsImg failureRateStatisticsImg5' src='img/lefticon/Statistics07.png' />
																												<b id='hardWareFaultRateDataFNAME5'></b>
																										</li>
																									<div  className="StatisticsDetailList StatisticsDetailList5">
																					    				<div className='StatisticsDetailListBar'>
																					    				    <p><b id='hardWareFaultRateData5INFOSNAME0'></b>
																					    				    <span id='hardWareFaultRateData5INFOCOUNT0'></span>
																					    				    </p>
		 																													<div className='StatisticsDetailListBarBackground'  id="StatisticsDetailListBarRight15">
																										    				<ul className='StatisticsDetailListBarLeft'>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData5_0_0_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData5_0_0_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData5_0_1_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData5_0_1_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData5_0_2_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData5_0_2_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData5_0_3_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData5_0_3_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData5_0_4_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData5_0_4_BCOUNT'></span>
																										    					</li>
																										    				</ul>
																										    				<div className='StatisticsDetailListBarRight' id="">
																										    					<section className="barOut" id='barOutBarRight150'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT00_14'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE00_14'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE000_14'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight151'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT01_14'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE01_14'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE010_14'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight152'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT02_14'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE02_14'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE020_14'></li>
																																			</section>
																																			<section className="barOut"  id='barOutBarRight153'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT03_14'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE03_14'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE030_14'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight154'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT04_14'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE04_14'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE040_14'></li>
																																			</section>
																										    				</div>
																						    					</div>
																					    				</div>
																					    				<div className='StatisticsDetailListBar'>
																					    				    <p><b id='hardWareFaultRateData5INFOSNAME1'></b>
																					    				    <span id='hardWareFaultRateData5INFOCOUNT1'></span>
																					    				    </p>
		 																													<div className='StatisticsDetailListBarBackground' id="StatisticsDetailListBarRight16">
																										    				<ul className='StatisticsDetailListBarLeft'>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData5_1_0_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData5_1_0_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData5_1_1_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData5_1_1_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData5_1_2_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData5_1_2_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData5_1_3_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData5_1_3_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData5_1_4_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData5_1_4_BCOUNT'></span>
																										    					</li>
																										    				</ul>
																										    				<div className='StatisticsDetailListBarRight' id="">
																										    					<section className="barOut" id='barOutBarRight160'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT00_15'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE00_15'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE000_15'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight161'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT01_15'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE01_15'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE010_15'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight162'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT02_15'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE02_15'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE020_15'></li>
																																			</section>
																																			<section className="barOut"  id='barOutBarRight163'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT03_15'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE03_15'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE030_15'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight164'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT04_15'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE04_15'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE040_15'></li>
																																			</section>
																										    				</div>
																						    					</div>
																					    				</div>	
																					    				<div className='StatisticsDetailListBar'>
																					    				    <p><b id='hardWareFaultRateData5INFOSNAME2'></b>
																					    				    <span id='hardWareFaultRateData5INFOCOUNT2'></span>
																					    				    </p>
		 																													<div className='StatisticsDetailListBarBackground' id="StatisticsDetailListBarRight17">
																										    				<ul className='StatisticsDetailListBarLeft'>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData5_2_0_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData5_2_0_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData5_2_1_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData5_2_1_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData5_2_2_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData5_2_2_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData5_2_3_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData5_2_3_BCOUNT'></span>
																										    					</li>
																										    					<li>
																										    						<span id='barArryHardWareFaultRateData5_2_4_BANDNAME'></span>
																										    						<span id='barArryHardWareFaultRateData5_2_4_BCOUNT'></span>
																										    					</li>
																										    				</ul>
																										    				<div className='StatisticsDetailListBarRight' id="">
																										    					<section className="barOut" id='barOutBarRight170'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT00_16'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE00_16'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE000_16'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight171'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT01_16'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE01_16'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE010_16'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight172'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT02_16'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE02_16'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE020_16'></li>
																																			</section>
																																			<section className="barOut"  id='barOutBarRight173'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT03_16'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE03_16'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE030_16'></li>
																																			</section>
																																			<section className="barOut" id='barOutBarRight174'>
																																				<li className="barlistli barlistFist" id='barlistFistFCOUNT04_16'></li>
																																				<li className="barlistBody">
																																					<span className="barlistInner" id='barlistFistFAULTRATE04_16'></span>
																																				</li>
																																				<li className="barlistli barlistEnd" id='barlistFistFAULTRATE040_16'></li>
																																			</section>
																										    				</div>
																						    					</div>
																					    				</div>
																					    			</div>
																					    	</ul>
																					    
																					    
																					    </div>
																			    </div>	
				    			 				</div>
				    			 				
				    			 				<div className='AssetStatisticsBotm'>
				    			 						<div className="HardwareMaintenance">
				    			 							   <h3>
				    			 							      <a>硬件资产维护统计</a>
				    			 							   </h3>
				    			 							   <div className='excessAssetsList'>
						    			 							   <ul className='excessAssetsListLeft'>
						    			 							   		<li className='excessAssetsListLeftOne'>已经过保的资产</li>
						    			 							   		<li>7天后过保的资产</li>
						    			 							   		<li>30天后过保的资产</li>
						    			 							   		<li>90天后过保的资产</li>
						    			 							   </ul>
						    			 							    <ul className='excessAssetsListRight'>
						    			 							   		<li className='excessAssetsListRightOne' id='hardEXPIRED'>
						    			 							   		</li>
						    			 							   		<li id=''>
						    			 							   			<a id='hardWILLEXPIREA'></a>
						    			 							   		</li>
						    			 							   		<li id=''>
						    			 							   			<a id='hardWILLEXPIREB'></a>
						    			 							   		
						    			 							   		</li>
						    			 							   		<li id=''>
						    			 							   			<a id='hardWILLEXPIREC'></a>
						    			 							   		
						    			 							   		</li>
						    			 							   </ul>
				    			 							   </div>
				    			 						</div>
				    			 				    <div className='softwareMaintenance'>
				    			 							    <h3>
				    			 							   			<a>软件资产维护统计</a>
				    			 							   	</h3>
				    			 				         <div className='excessAssetsList'>
						    			 							   <ul className='excessAssetsListLeft'>
						    			 							   		<li className='excessAssetsListLeftOne'>已经过保的资产</li>
						    			 							   		<li>7天后过保的资产</li>
						    			 							   		<li>30天后过保的资产</li>
						    			 							   		<li>90天后过保的资产</li>
						    			 							   </ul>
						    			 							    <ul className='excessAssetsListRight'>
						    			 							   		<li className='excessAssetsListRightOne' id='softEXPIRED'>
						    			 							   		</li>
						    			 							   		<li id=''>
						    			 							   			<a id='softWILLEXPIREA'></a>	
						    			 							   		
						    			 							   		</li>
						    			 							   		<li id=''>
						    			 							   			<a id='softWILLEXPIREB'></a>	
						    			 							   		
						    			 							   		</li>
						    			 							   		<li id=''>
						    			 							   			<a id='softWILLEXPIREC'></a>	
						    			 							   		
						    			 							   		</li>
						    			 							   </ul>
				    			 							   </div>
				    			 				    </div>
				    			 				</div>
    			    	</section>   

		    </div>		
		   
  )},
});
export default AssetsCountQueryView