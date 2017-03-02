import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import Store from '../../../../../../server/store';
import * as OperationManage from "../../../../../../actions/operation_action";
import { connect } from 'react-redux';
//import actionCallReport from  './reportManagement'		
var _this;
var refreshBtnObj, deleteBtnObj, addBtnObj, titleBoxObj;
		
const ReportMangmentFrom = React.createClass({
			sureFilterSLADataReport:function(){
					$('#filterSLADataReport').modal("hide");
					var startTimeSLADataReport = $("#startTimeSLADataReport").val()
					var endTimeSLADataReport = $("#endTimeSLADataReport").val()
					var allTimeSLADataReport = [startTimeSLADataReport,endTimeSLADataReport]
					   console.log(allTimeSLADataReport)
					 const { dispatch } = this.props;
                     dispatch(OperationManage.get_filterSLAReachRateData(allTimeSLADataReport));
                    var filterSLAReachRateData = this.props.filterSLAReachRateData
                       console.log("filterSLAReachRateData 点击确定值")
                       console.log(filterSLAReachRateData)
                    var filterSLAReachRateData = this.filterSLAReachRateData
                     console.log("filterSLAReachRateData 没有props 点击确定值")
                     console.log(filterSLAReachRateData)
				},
			  componentDidUpdate:function(){   	
			       var bdata = this.props.filterSLAReachRateData;
			       $("#reportSLAReachRateData").bootstrapTable("load",bdata);
			       $("#reportSLAReachRateData thead>tr").css({"background": "#f3f2f2"});
					console.log('fromfilter')
					console.log(bdata)
			    },   
				componentDidMount:function(){ 			
			  		   $("#reportSLAReachRateData").bootstrapTable({
			            columns: [
			                       {
						            title: '单位名称',
						            field: 'NAME',
						            halign: 'left',
						            align: 'left',
						            sortable: true
						          },{
						            title: '总故障量',
						            field: 'COUNTALL',
						            halign: 'left',
						            align: 'left',
						            sortable: true
						          },{
						            title: '超时故障量',
						             field: 'COUNT',
						            halign: 'left',
						            align: 'left'
						          },{
						            title: 'SLA达成率',
						             field: 'SOCRE',
						            halign: 'left',
						            align: 'left'
			          }
			            ],
			            data: [],
			            onDblClickRow: this.onDblClickRow,
			            exportDataType: "all"
			        });
        titleBoxObj =document.createElement("div");
        titleBoxObj.innerHTML = "报表管理";
        // console.log(titleBoxObj.appendChild(titleBoxObjA));
        titleBoxObj.setAttribute("class","topLeftNewFault");
        refreshBtnObj = document.createElement('button');
        refreshBtnObj.setAttribute('class', 'btn btn-refresh');
        refreshBtnObj.setAttribute('type', 'button');
        refreshBtnObj.setAttribute('name', 'refresh');
        refreshBtnObj.setAttribute('title', '筛选');
        refreshBtnObj.innerHTML = "筛选";
        refreshBtnObj.onclick = function () {
           $('#filterSLADataReport').modal("show");
        };
        addBtnObj = document.createElement('button');
        addBtnObj.setAttribute('class', 'btn btn-success');
        addBtnObj.setAttribute('type', 'button');
        addBtnObj.setAttribute('name', 'add');
        addBtnObj.setAttribute('title', '打印');
        addBtnObj.innerHTML = "打印";
        addBtnObj.onclick = function () {   
        	  $("#reportSLAReachRateData").jqprint();
        };
         var btnGroupLeft = document.getElementsByClassName('fixed-table-toolbar')[0];
        btnGroupLeft.appendChild(titleBoxObj)
        console.log(btnGroupLeft)
        var btnGroup = document.getElementsByClassName('columns-right')[0];
        btnGroup.appendChild(refreshBtnObj);
        btnGroup.appendChild(addBtnObj);
        console.log(btnGroup)
        $(".btn-success").css({"marginLeft": "20px", "borderRadius": "2px"});
        
        $(".btn-refresh").css({"marginLeft": "20px", "borderRadius": "2px"})
        
        $("#reportSLAReachRateData thead>tr").css({"background": "#d8e1e5"});
				},
			render:function(){
				return(
					<div className='ReportMangmentFromBj' style={{'width':'100%','height':'800px','background':'#eef5f8'}}>
					  	<div  className="ReportMangmentFrom">
							<div className='ReportMangmentFromMid' id="ReportMangmentFromMidCss">
					    	   <div className="col-md-12" style={{'height':"600px","marginTop":'20'}}>
				                    <table id="reportSLAReachRateData"
				                           data-toggle='table'
				                           data-search='false'
				                           data-classes='table table-no-bordered table-hover'
				                           data-show-export="true"
				                           data-show-refresh='false'
				                           data-show-toggle='false'
				                           data-show-columns='false'
				                           data-pagination='true'
				                           data-page-size='10'
				                           data-resizable='true'>
				                    </table>
				                </div>
					  </div>
					</div>
					  {/*筛选slarepor------------------------------------模态弹窗*/}
		                <div className="modal fade" id="filterSLADataReport" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		                    <div className="modal-dialog">
		                        <div className="modal-content" style={{"width":"500px","margin":"auto"}}>
		                            <div className="modal-header" style={{"background":"#64c4dd"}}>
		                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
		                                <h4 className="modal-title" id="myModalLabel">筛选</h4>
		                            </div>
		                            <div className="modal-body">
		                                <div>
		                                    <form className="form-horizontal" role="form">
		                                        <div className="form-group">
		                                            <label for="editPosNameInput" className="col-sm-5 control-label" style={{"textAlign":"left"}}>开始时间</label>
		                                            <b style={{"color":"red","display":"inline-block","margin-left":"-250px","margin-top":"10px"}}>*</b>
		                                            <div className="col-sm-6">
															<input type="datetime-local" id='startTimeSLADataReport' className="form-control" name="user_date" />
		                                            </div>
		                                        </div>
		                                         <div className="form-group">
		                                            <label for="editPosNameInput" className="col-sm-5 control-label" style={{"textAlign":"left"}}>结束时间</label>
		                                            <b style={{"color":"red","display":"inline-block","margin-left":"-250px","margin-top":"10px"}}>*</b>
		                                            <div className="col-sm-6">
															<input type="datetime-local" className="form-control"  id='endTimeSLADataReport' name="user_date" />
		                                            </div>
		                                        </div>
		                                    </form>
		                                </div>
		                            </div>
		                            <div className="modal-footer">
		                                <button type="button" className="btn btn-success" onClick={this.sureFilterSLADataReport}>确定</button>
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
export default connect(mapStateToProps)(ReportMangmentFrom)