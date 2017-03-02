
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
var EngineerSatisfaction = React.createClass({
  	componentDidUpdate:function(){
          var bdata = this.props.customeSatisfactionScoreData;
          console.log("satisfactionDataQuerterEnginer")
          console.log(bdata)
    	 $("#satisfactionDataQuerterEnginer thead>tr").css({"background":"#daf1f8"});
      $("#satisfactionDataQuerterEnginer").bootstrapTable("load",bdata);
    },
    componentDidMount: function () {

        $("#satisfactionDataQuerterEnginer").bootstrapTable({
            columns: [
	                  {
			            title: '工程师名称',
			            field: 'NAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '用户名',
			            field: 'LOGINID',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '运维单位',
			            field: 'FDNAME',
			            halign: 'left',
			            align: 'left',
			            sortable: true
			          },{
			            title: '客户评分',
			             field: 'COUNT',
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
                    <table id="satisfactionDataQuerterEnginer"
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
export default EngineerSatisfaction