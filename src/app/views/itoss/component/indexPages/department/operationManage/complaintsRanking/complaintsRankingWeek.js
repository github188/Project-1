import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
//import * as OperationManage from "../../../../../../../actions/operation_action";
//import Store from '../../../../../../../server/store';
//import { connect } from 'react-redux';
var ComplaintsRankingWeek = React.createClass({

			componentDidUpdate:function(){
            
			var customerComplaintsData = this.props.customerComplaintsData;
			 console.log('周投诉');
             console.log(customerComplaintsData);
             for (var i = 0; i < customerComplaintsData.length; i++) {}
			     $(function () {
			     		Highcharts.setOptions({
					        colors: ['#87a7f1']
					    });
					    $('#completionUnitTopWeek').highcharts({
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
					            name: 'Population',
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
					                format: '{point.y:.1f}', // one decimal
					                y: 10, // 10 pixels down from the top
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
    return (
					<div className = 'completionUnitTopToady'>
					
					<div id="completionUnitTopWeek"  style={{"width":"100%","height":"310px"}}></div>
			   
		    			
		    </div>	
  )},
});
// function mapStateToProps(state) {
//	  const {customerComplaintsData} = state.operationReducer;	
//		  return {
//		    customerComplaintsData:customerComplaintsData
//		  }
//		}
//export default connect(mapStateToProps)(ComplaintsRankingWeek)
export default ComplaintsRankingWeek