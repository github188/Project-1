import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import * as OperationManage from "../../../../../../../actions/operation_action";
import Store from '../../../../../../../server/store';
import { connect } from 'react-redux';
var ComplaintsRankingMonth = React.createClass({
	
//	componentWillMount:function(){
//					          const { dispatch } = this.props;
//				                     var unit = 'unit'
//			                    	  var week = 'week'
//			                    	  var month ='month'
//			                    	  var quarter ='quarter'
//			                    	  var year ='year'
//									  var paramWeek = [unit,week];
//									  var paramMonth = [unit,month];
//									  var paramQuarter = [unit,quarter];
//									  var paramYear = [unit,year];
//								dispatch(OperationManage.get_customerComplaintsData(paramMonth))	 		
//						      var customerComplaintsData=this.props.customerComplaintsData
//						 	  console.log('shouye222222componentWillMount，首页连接的页面最终 customeSatisfactionScoreData')
//						 	  console.log(customerComplaintsData)
//							},
		componentDidUpdate:function(){
		var customerComplaintsData = this.props.customerComplaintsData;
          console.log("鼠标滑过 customerComplaintsData 月")
          console.log(customerComplaintsData)
			     $(function () {
			     		Highcharts.setOptions({
					        colors: ['#87a7f1']
					    });
					    $('#complaintsRankingMonth').highcharts({
					        chart: {
					            type: 'column'
					        },
					         title: {
					            text: 'Wor',
					            style:{display:"none"}
					        },
					        subtitle: {
					            text: 'Sou',
					            style:{display:"none"}
					        },
					        xAxis: {
					            type: 'category',
					            labels: {
					                rotation: -45,
					                style: {
					                    fontSize: '13px',
					                    fontFamily: 'Verdana, sans-serif'
					                }
					            }
					        },
					        yAxis: {
					             min: 0,
					             title: {
					                text: 'Population (分)',
					                style:{display:"none"}
					            }
					        },
					        legend: {
					            enabled: false
					        },
					        credits:{
					        	enabled: false
					        },
					        tooltip: {
					            pointFormat: '投诉量为: <b>{point.y:.1f} 分</b>'
					        },
					        series: [{
					            data: [
					                [customerComplaintsData[0].FDNAME, parseFloat(customerComplaintsData[0].COUNT)],
					                [customerComplaintsData[1].FDNAME, parseFloat(customerComplaintsData[1].COUNT)],
					                [customerComplaintsData[2].FDNAME, parseFloat(customerComplaintsData[2].COUNT)],
					                [customerComplaintsData[3].FDNAME, parseFloat(customerComplaintsData[3].COUNT)],
					                [customerComplaintsData[4].FDNAME, parseFloat(customerComplaintsData[4].COUNT)],
					                [customerComplaintsData[5].FDNAME, parseFloat(customerComplaintsData[5].COUNT)],
					                [customerComplaintsData[6].FDNAME, parseFloat(customerComplaintsData[6].COUNT)],
					                [customerComplaintsData[7].FDNAME, parseFloat(customerComplaintsData[7].COUNT)]
					            ],
					            dataLabels: {
					                enabled: true,
					                rotation: -90,
					                color: '#FFFFFF',
					                align: 'right',
					                format: '{point.y:.1f}', 
					                y: 10, 
					                style: {
					                    fontSize: '13px',
					                    fontFamily: '微软雅黑'
					                }
					            }
					        }]
					    });
					});
			     
			     
	},
  render: function() {
  	  var customeSatisfactionScoreData=this.props.customeSatisfactionScoreData
				 var customerComplaintsData=this.props.customerComplaintsData
    return (
					<div className = 'completionUnitTopToady'>
				
				<div id="complaintsRankingMonth"  style={{"width":"100%","height":"310px"}}></div>
			  
		    			
		    </div>	
  )},
});
//export default ComplaintsRankingMonth
   function mapStateToProps(state) {
	  const {customeSatisfactionScoreData} = state.operationReducer;	
		  return {
		  customeSatisfactionScoreData:customeSatisfactionScoreData
		  }
		}
export default connect(mapStateToProps)(ComplaintsRankingMonth)