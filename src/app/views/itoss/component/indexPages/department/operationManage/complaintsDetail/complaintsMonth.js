import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
//import ProjectComplaints from './complaintsMonth/projectComplaints';
//import UnitComplaints from './complaintsMonth/unitComplaints';
//import EngineerComplaints from './complaintsMonth/engineerComplaints';
//import * as OperationManage from "../../../../../../../actions/operation_action";
//import Store from '../../../../../../../server/store';
//import { connect } from 'react-redux';
var ComplaintsMonthDetail = React.createClass({
  	componentDidUpdate:function(){
          var bdata = this.props.customerComplaintsData;
          console.log("customerComplaintsData 月")
          console.log(bdata)
      $("#complaintsDataUintMonth").bootstrapTable("load",bdata);
    	 $("#complaintsDataUintMonth thead>tr").css({"background":"#daf1f8"});
    },
    componentDidMount: function () {
	$(".unitSLAfaultClick").css({'color':'#349ef0','borderBottom':'4px solid #349ef0'})
        $("#complaintsDataUintMonth").bootstrapTable({
            columns: [
	                 {
			            title: '单位名称',
			            field: 'FDNAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '客户评分',
			            field: 'COUNT',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          }
            ],
            data: [],
            // onClickRow: this._onClickRow,
            exportDataType: "all"
        });
       },

  render: function() {
    return (
    		<div className = 'PerformanceManger'>
				       <aside className='asideFauleManger'></aside>
				       <section className='sectionFauleManger'>
				    			 	<nav className='navFauleManger'>
				    			 		              <div className='usermanagerNavLeft'>
					    			 		        	    <div className='fauleMangerline'><span></span></div>
						    							  	<div className='txtFauleMangerleft'>月投诉量</div>		   									   
					    							  </div>	 	
				    			 	</nav>
				    			 	<div className="headerLeftNewFault">
				    			 		  <ul className='topLeftNewFault'>
											 <li className='unitSLAfaultClick' >单位投诉量</li>
										  </ul>
										   <ul className='topRightNewFault'>
											{/* <li>
											   <button  type="button" className='printNewFault'>打印</button>
											 </li>
											 <li>
											   <button type="button" className='sureNewFault'>保存</button>
											</li>*/}
										   </ul>
					    			 		
				    			 	 </div>
				    			 	<div className=''> 
				    			 	    <div className="col-md-12">
							                    <table id="complaintsDataUintMonth"
							                           data-toggle='table'
							                           data-search='false'
							                           data-classes='table table-no-bordered table-hover'
							                           data-show-export="false"
							                           data-show-refresh='false'
							                           data-show-toggle='false'
							                           data-show-columns='false'
							                           data-pagination='true'
							                           data-page-size='10'
							                           data-resizable='false'>
							                    </table>
							                </div>
											    			 	
				    			 	
				    			 	</div>
    			    	</section>   	
		    </div>				
  )},
     });
//function mapStateToProps(state) {
//	  const {customerComplaintsData} = state.operationReducer;	
//		  return {
//		  customerComplaintsData:customerComplaintsData
//		  }
//		}
///export default connect(mapStateToProps)(ComplaintsMonthDetail)
export default ComplaintsMonthDetail