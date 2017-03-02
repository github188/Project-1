import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
var ProjectSLA = React.createClass({
  	componentDidUpdate:function(){
          var bdata = this.props.SLAReachRateData;
          console.log("SLARDataMonthProject")
          console.log(bdata)
      $("#SLARDataMonthProject").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {
    	 $("#SLARDataMonthProject thead>tr").css({"background": "#daf1f8"});
        $("#SLARDataMonthProject").bootstrapTable({
            columns: [
	                  {
			            title: '项目名称',
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
            // onClickRow: this._onClickRow,
            exportDataType: "all"
        });
       },
  render: function() {

    return (
    		<div className = ''>				  
				     {/*单位管理排名*/}
                <div className="col-md-12">
                    <table id="SLARDataMonthProject"
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
  )}
});
export default ProjectSLA