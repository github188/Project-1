import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import Store from '../../../../../../server/store';
import * as OperationManage from "../../../../../../actions/operation_action";
import { connect } from 'react-redux';
	const ReportMangmentPie = React.createClass({
                reportPriintPie:function(){
				     $("#reportSLAReachRateDataPie").jqprint();
				},
	           filterSLADataReport2:function(){
					$('#filterSLADataReport2').modal("show");
				},
				sureFilterSLADataReport2:function(){
					var startTimeSLADataReport = $("#startTimeSLADataReport2").val()
					var endTimeSLADataReport = $("#endTimeSLADataReport2").val()
					var allTimeSLADataReport = [startTimeSLADataReport,endTimeSLADataReport]
					console.log(allTimeSLADataReport)
					 const { dispatch } = this.props;
                     dispatch(OperationManage.get_filterSLAReachRateData(allTimeSLADataReport));
                       var filterSLAReachRateData = this.props.filterSLAReachRateData
                    console.log(filterSLAReachRateData)
                       var filterSLAReachRateData = this.filterSLAReachRateData
                    console.log("filterSLAReachRateData  没有props的 ")
                      console.log(filterSLAReachRateData)
                    
                    $('#filterSLADataReport2').modal("hide");
         
				},
			  componentDidUpdate:function(){   	
	  				var filterSLAReachRateData = this.props.filterSLAReachRateData;
					console.log('filterSLAReachRateData 刷新的值')
	  				console.log(filterSLAReachRateData)
	  				   $(function () {
							Highcharts.setOptions({
						        colors: ['#87a7f1']
						    });
					    	$('#reportSLAReachRateDataPie').highcharts({
						        chart: {
						            type: 'bar'
						        },
					        xAxis: {
					        	categories: [
		                       filterSLAReachRateData[0].NAME,
		                       filterSLAReachRateData[1].NAME,
		                       filterSLAReachRateData[2].NAME, 
		                       filterSLAReachRateData[3].NAME, 
		                       filterSLAReachRateData[4].NAME,
		                       filterSLAReachRateData[5].NAME,
		                       filterSLAReachRateData[6].NAME,
		                       filterSLAReachRateData[7].NAME
		                       ],
					        },
					        yAxis: {
					            min: 0,
					            labels: {
					                overflow: 'false'
					            }
					        },
					        tooltip: {
					            valueSuffix: '满意度评分为'
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
		                         data: [
							             parseFloat(filterSLAReachRateData[0].SOCRE),
							             parseFloat(filterSLAReachRateData[1].SOCRE),
							             parseFloat(filterSLAReachRateData[2].SOCRE), 
							             parseFloat(filterSLAReachRateData[3].SOCRE),
							             parseFloat(filterSLAReachRateData[4].SOCRE), 
							             parseFloat(filterSLAReachRateData[5].SOCRE),
							             parseFloat(filterSLAReachRateData[6].SOCRE),
							             parseFloat(filterSLAReachRateData[7].SOCRE)
							             ]			 
					        }]
							    });
					});
	  				
			    },   
			render:function(){
				return(
					<div className='ReportMangmentFromBj' style={{'width':'100%','height':'800px','background':'#eef5f8'}}>
					  	<div  className="ReportMangmentFrom">
							<div className='ReportMangmentFromMid'>
							<header className=''>
			   		            <div className='topLeftNewFault'>
			   		                 满意度评分图表
								         
								</div>
								 <ul className='topRightNewFault'>
									 <li>
									   <button  type="button" className='printNewFault' onClick={this.reportPriintPie}>打印</button>
									</li>
									 {/*<li>
									   <button type="button" className='sureNewFault' onClick={this.filterSLADataReport2}>返回</button>
									 </li>*/}
									  <li>
									   <button type="button" className='fliterReport'  onClick={this.filterSLADataReport2}>筛选</button>
									 </li>
								 </ul>
		   		       		 </header>
                          <div  id="reportSLAReachRateDataPie" style={{"width": "100%", "height": "600px","margin":"0 auto"}}></div>
					    
					  </div>
					</div>
					  {/*筛选slarepor------------------------------------模态弹窗*/}
					     <div className="modal fade" id="filterSLADataReport2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		                    <div className="modal-dialog">
		                        <div className="modal-content" style={{"width":"500px","margin":"auto"}}>
		                            <div className="modal-header" style={{"background":"#64c4dd"}}>
		                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
		                                <h4 className="modal-title" id="myModalLabel2">筛选</h4>
		                            </div>
		                            <div className="modal-body">
		                                <div>
		                                    <form className="form-horizontal" role="form">
		                                        <div className="form-group">
		                                            <label for="editPosNameInput" className="col-sm-5 control-label" style={{"textAlign":"left"}}>开始时间</label>
		                                            <b style={{"color":"red","display":"inline-block","margin-left":"-250px","margin-top":"10px"}}>*</b>
		                                            <div className="col-sm-6">
															<input type="datetime-local" id='startTimeSLADataReport2' className="form-control" name="user_date" />
		                                            </div>
		                                        </div>
		                                         <div className="form-group">
		                                            <label for="editPosNameInput" className="col-sm-5 control-label" style={{"textAlign":"left"}}>结束时间</label>
		                                            <b style={{"color":"red","display":"inline-block","margin-left":"-250px","margin-top":"10px"}}>*</b>
		                                            <div className="col-sm-6">
															<input type="datetime-local" className="form-control"  id='endTimeSLADataReport2' name="user_date" />
		                                            </div>
		                                        </div>
		                                    </form>
		                                </div>
		                            </div>
		                            <div className="modal-footer">
		                                <button type="button" className="btn btn-success" onClick={this.sureFilterSLADataReport2}>确定</button>
		                                <button type="button" className="btn btn-default" data-dismiss="modal">取消</button>
		                            </div>
		                        </div>
		                    </div>
		                </div>
					
					
					</div>
					)
			}
		})
//export default ReportMangmentFrom	
 function mapStateToProps(state) {
	  const {filterSLAReachRateData} = state.operationReducer
		  return {
		    filterSLAReachRateData:filterSLAReachRateData
		  }
		}
export default connect(mapStateToProps)(ReportMangmentPie)